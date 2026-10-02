/**
 * L'adaptateur entre un nœud Figma et la fonction de rendu d'un composant.
 *
 * Il ne produit aucun markup : il traduit les propriétés du nœud en arguments,
 * appelle `component.render(args)`, puis substitue l'icône. Tout le markup vit
 * dans `src/components/`.
 *
 * Ce fichier est aussi construit en ESM pour `tools/verify.mjs` : ce qui est
 * vérifié hors Figma est exactement ce qui tourne dans le plugin.
 */

import type { Args, OudsComponent } from './component';
import { components } from '../components/index';

export { components };

/* ------------------------------------------------------------------ */
/* Normalisation                                                       */
/* ------------------------------------------------------------------ */

/** Retire le suffixe `#123:4` que Figma ajoute aux propriétés de composant. */
function stripPropId(name: string): string {
  const i = String(name ?? '').lastIndexOf('#');
  return i === -1 ? String(name ?? '') : String(name).slice(0, i);
}

/** Minuscules-tirets, accents et emojis retirés. `Text + icon` → `text-icon`. */
export function normValue(v: string): string {
  return String(v ?? '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Forme de comparaison d'un nom de propriété : suffixe `#12:3` retiré, casse et
 * espaces normalisés, **emojis conservés**.
 *
 * Indispensable : Text input et Password input portent `✏️ Label` (TEXT) ET
 * `⚠️ Label` (BOOLEAN). Les confondre fait rendre `true` à la place du libellé.
 */
function normPropName(name: string): string {
  return stripPropId(name).replace(/️/g, '').replace(/\s+/g, ' ').trim().toLowerCase();
}

/**
 * Nom de composant sans badge ni version. Le nom Figma s'écrit
 * `Inline alert | ✅ LIVE v1.0 |` — le libellé n'est pas toujours au même bout,
 * on garde le segment le plus substantiel une fois badges et versions retirés.
 */
export function normComponentName(name: string): string {
  const segments = String(name ?? '')
    .split(/\s*\|\s*/)
    .map((s) =>
      s
        .replace(/[✅⚙🎨🚧🧪️]/gu, '')
        .replace(/\bv?\d+(\.\d+)*\b/g, '')
        .replace(/\b(LIVE|DEV|EA|WIP|DEPRECATED|TODO)\b/gi, '')
        .trim(),
    )
    .filter(Boolean);
  return normValue(segments.sort((a, b) => b.length - a.length)[0] ?? name);
}

/* ------------------------------------------------------------------ */
/* Repérage du composant                                               */
/* ------------------------------------------------------------------ */

export function findComponent(keys: {
  key?: string;
  nodeId?: string;
  name?: string;
}): OudsComponent | null {
  if (keys.key) {
    const hit = components.find((c) => c.keys?.includes(keys.key!));
    if (hit) return hit;
  }
  if (keys.nodeId) {
    const hit = components.find((c) => c.nodeIds.includes(keys.nodeId!));
    if (hit) return hit;
  }
  if (keys.name) {
    const n = normComponentName(keys.name);
    const hit = components.find(
      (c) => normComponentName(c.name) === n || normComponentName(c.figmaName ?? '') === n,
    );
    if (hit) return hit;
  }
  return null;
}

/* ------------------------------------------------------------------ */
/* Propriétés du nœud → arguments                                      */
/* ------------------------------------------------------------------ */

/** Propriétés lues sur le nœud sélectionné. */
export interface NodeProps {
  values: Record<string, string>;
  booleans: Record<string, boolean>;
  /** Nom du composant d'icône échangé, si le nœud en porte un. */
  iconName?: string;
}

/**
 * Index à deux niveaux : nom strict d'abord, repli sans emoji seulement pour
 * les noms qui restent uniques une fois l'emoji retiré. C'est ce qui empêche
 * `⚠️ Label` d'écraser `✏️ Label`.
 */
function indexProps(props: NodeProps) {
  const strict = new Map<string, string | boolean>();
  for (const [k, v] of Object.entries(props.values ?? {})) strict.set(normPropName(k), String(v));
  for (const [k, v] of Object.entries(props.booleans ?? {})) {
    const key = normPropName(k);
    if (!strict.has(key)) strict.set(key, Boolean(v));
  }

  const byLoose = new Map<string, string[]>();
  for (const k of strict.keys()) {
    const l = normValue(k);
    byLoose.set(l, [...(byLoose.get(l) ?? []), k]);
  }
  const loose = new Map<string, string>();
  for (const [l, names] of byLoose) if (names.length === 1 && l !== names[0]) loose.set(l, names[0]);

  return { strict, loose };
}

/** Traduit les propriétés Figma en arguments de la fonction de rendu. */
export function toArgs(component: OudsComponent, props: NodeProps): Args {
  const idx = indexProps(props);
  const args: Args = {};

  for (const [arg, spec] of Object.entries(component.props)) {
    let raw = idx.strict.get(normPropName(spec.figma));
    if (raw === undefined) {
      const viaLoose = idx.loose.get(normValue(spec.figma));
      if (viaLoose !== undefined) raw = idx.strict.get(viaLoose);
    }
    if (spec.boolean) {
      args[arg] = typeof raw === 'boolean' ? raw : normValue(String(raw ?? '')) === 'true';
    } else {
      args[arg] = raw === undefined ? undefined : String(raw);
    }
  }
  return args;
}

/* ------------------------------------------------------------------ */
/* Rendu                                                               */
/* ------------------------------------------------------------------ */

export interface RenderResult {
  /** `null` si aucune branche ne couvre la combinaison. */
  code: string | null;
  /** Renseigné seulement quand `code` est `null`. */
  reason?: string;
}

/**
 * Remplace l'identifiant de sprite figé par celui de l'icône échangée.
 *
 * Le markup fige un placeholder parce que Code Connect n'a aucune primitive qui
 * lise un INSTANCE_SWAP comme chaîne. Le plugin, lui, a accès au nœud.
 */
function substituteIcon(code: string, component: OudsComponent, iconName?: string): string {
  if (!component.icon || !iconName) return code;
  const id = normValue(iconName);
  if (!id || id === normValue(component.icon.placeholder)) return code;
  return code.split('#' + component.icon.placeholder).join('#' + id);
}

/** Blancs de fin, lignes vides en trop, attribut `class` recollé. */
function tidy(code: string): string {
  return code
    .replace(/\r\n/g, '\n')
    .replace(/[ \t]+$/gm, '')
    .replace(/\n{3,}/g, '\n\n')
    .replace(/class="\s*([^"]*?)\s*"/g, (_m, c: string) => `class="${c.replace(/\s+/g, ' ')}"`)
    .trim();
}

export function renderComponent(component: OudsComponent, props: NodeProps): RenderResult {
  let code: string | null;
  try {
    code = component.render(toArgs(component, props));
  } catch (e) {
    return { code: null, reason: `Rendu en erreur : ${e instanceof Error ? e.message : String(e)}` };
  }
  if (!code || !String(code).trim()) {
    return { code: null, reason: `Aucune branche ne couvre cette combinaison.` };
  }
  return { code: substituteIcon(tidy(String(code)), component, props.iconName) };
}
