/**
 * Du nœud sélectionné vers l'identité du composant et ses propriétés.
 *
 * C'est la partie qui absorbe les irrégularités de l'API Figma :
 * sélection d'un enfant d'instance, composants distants dont le
 * `parent` n'est pas exposé, variantes contre jeux de variantes.
 */

import type { NodeProps } from './render';

export interface Resolved {
  /** Nœud effectivement interprété (peut différer de la sélection). */
  node: SceneNode;
  /** Clé du jeu de variantes si connue, sinon clé de la variante. */
  key?: string;
  /** Clé de la variante précise, si distincte. */
  variantKey?: string;
  /** Node-id du jeu de variantes ou du composant principal. */
  nodeId?: string;
  /** Nom le plus probable du composant, avant normalisation. */
  name?: string;
  props: NodeProps;
  /** Vrai si la sélection portait sur un enfant et qu'on est remonté. */
  climbed: boolean;
}

const CONTAINERS = new Set(['INSTANCE', 'COMPONENT', 'COMPONENT_SET']);

/** Remonte jusqu'au premier nœud qui porte une identité de composant. */
function climbToComponent(start: SceneNode): { node: SceneNode; climbed: boolean } | null {
  let n: BaseNode | null = start;
  let climbed = false;
  while (n && n.type !== 'PAGE' && n.type !== 'DOCUMENT') {
    if (CONTAINERS.has(n.type)) return { node: n as SceneNode, climbed };
    n = n.parent;
    climbed = true;
  }
  return null;
}

/** Figma écrit les node-ids `1:23` dans l'API et `1-23` dans les URL. */
export function normalizeNodeId(id: string): string {
  return String(id).replace(/-/g, ':');
}

/**
 * Retire le descripteur de variante qu'un composant-variante porte comme nom
 * (`Appearance=Default, Layout=Text only`) — ce n'est pas un nom de composant.
 */
function looksLikeVariantDescriptor(name: string): boolean {
  return /=/.test(name) && !/\s\|\s/.test(name);
}

function collectProps(
  componentProperties: Record<string, { type: string; value: string | boolean }> | undefined,
): NodeProps {
  const props: NodeProps = { values: {}, booleans: {} };
  for (const [name, def] of Object.entries(componentProperties ?? {})) {
    if (def.type === 'BOOLEAN') props.booleans[name] = Boolean(def.value);
    // Un INSTANCE_SWAP porte un identifiant de nœud, pas un libellé : il est
    // résolu séparément par `resolveIconName`, pas versé dans les valeurs.
    else if (def.type !== 'INSTANCE_SWAP') props.values[name] = String(def.value);
  }
  return props;
}

/**
 * Nom du composant d'icône réellement échangé sur cette instance.
 *
 * La valeur d'une propriété INSTANCE_SWAP est un identifiant de nœud. On tente
 * d'abord de le résoudre directement ; pour un composant distant, cet appel
 * peut échouer, d'où le repli par la première instance descendante dont le nom
 * ne ressemble pas à un descripteur de variante.
 */
async function resolveIconName(node: InstanceNode): Promise<string | undefined> {
  const entries = Object.entries(
    (node.componentProperties ?? {}) as Record<string, { type: string; value: string }>,
  ).filter(([, d]) => d.type === 'INSTANCE_SWAP');
  if (!entries.length) return undefined;

  const id = entries[0][1].value;
  try {
    const target = await figma.getNodeByIdAsync(String(id));
    if (target && (target.type === 'COMPONENT' || target.type === 'COMPONENT_SET')) {
      const name = target.type === 'COMPONENT' && target.parent?.type === 'COMPONENT_SET'
        ? (target.parent as ComponentSetNode).name
        : target.name;
      if (name && !looksLikeVariantDescriptor(name)) return name;
    }
  } catch {
    /* composant distant : on passe au repli */
  }

  try {
    const nested = node.findOne(
      (n) => n.type === 'INSTANCE' && n.id !== node.id,
    ) as InstanceNode | null;
    if (nested) {
      const main = await nested.getMainComponentAsync();
      const set = main?.parent?.type === 'COMPONENT_SET' ? (main.parent as ComponentSetNode) : null;
      const name = set?.name ?? main?.name ?? nested.name;
      if (name && !looksLikeVariantDescriptor(name)) return name;
    }
  } catch {
    /* pages non chargées ou nœud inaccessible */
  }
  return undefined;
}

function collectDefaults(
  defs: ComponentPropertyDefinitions | undefined,
  variantGroups: Record<string, { values: string[] }> | null | undefined,
): NodeProps {
  const props: NodeProps = { values: {}, booleans: {} };
  for (const [name, def] of Object.entries(defs ?? {})) {
    if (def.type === 'BOOLEAN') props.booleans[name] = Boolean(def.defaultValue);
    else if (def.defaultValue !== undefined) props.values[name] = String(def.defaultValue);
  }
  // Une propriété de variante sans valeur par défaut prend la première déclarée.
  for (const [name, group] of Object.entries(variantGroups ?? {})) {
    if (props.values[name] === undefined && group.values.length) {
      props.values[name] = group.values[0];
    }
  }
  return props;
}

export async function resolveSelection(selected: SceneNode): Promise<Resolved | null> {
  const found = climbToComponent(selected);
  if (!found) return null;
  const { node, climbed } = found;

  if (node.type === 'INSTANCE') {
    const main = await node.getMainComponentAsync();
    const iconName = await resolveIconName(node);
    const set =
      main && main.parent && main.parent.type === 'COMPONENT_SET'
        ? (main.parent as ComponentSetNode)
        : null;

    let name: string | undefined = set?.name ?? main?.name;
    // Composant distant : `parent` non exposé, le nom de la variante ne vaut rien.
    if ((!name || looksLikeVariantDescriptor(name)) && node.name) name = node.name;

    return {
      node,
      key: set?.key ?? main?.key,
      variantKey: main?.key,
      nodeId: set ? normalizeNodeId(set.id) : main ? normalizeNodeId(main.id) : undefined,
      name,
      props: { ...collectProps(node.componentProperties as never), ...(iconName ? { iconName } : {}) },
      climbed,
    };
  }

  if (node.type === 'COMPONENT') {
    const set = node.parent && node.parent.type === 'COMPONENT_SET' ? (node.parent as ComponentSetNode) : null;
    // Une variante seule : ses valeurs de variante + les défauts du jeu.
    const props = collectDefaults(
      set?.componentPropertyDefinitions,
      set?.variantGroupProperties as never,
    );
    for (const [k, v] of Object.entries(node.variantProperties ?? {})) {
      props.values[k] = String(v);
    }
    let name = set?.name ?? node.name;
    if (looksLikeVariantDescriptor(name) && set) name = set.name;
    return {
      node,
      key: set?.key ?? node.key,
      variantKey: node.key,
      nodeId: normalizeNodeId(set ? set.id : node.id),
      name,
      props,
      climbed,
    };
  }

  // COMPONENT_SET : on montre la variante par défaut.
  const set = node as ComponentSetNode;
  return {
    node: set,
    key: set.key,
    nodeId: normalizeNodeId(set.id),
    name: set.name,
    props: collectDefaults(set.componentPropertyDefinitions, set.variantGroupProperties as never),
    climbed,
  };
}
