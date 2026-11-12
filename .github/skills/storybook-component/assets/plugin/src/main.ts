/**
 * OUDS Code — fil principal.
 *
 * Deux modes, un seul code :
 *  - mode Design : panneau flottant, mis à jour à chaque sélection
 *  - mode Dev    : générateur de code dans l'onglet Inspect
 *
 * Le panneau ne montre QUE le markup. Un message n'apparaît que lorsqu'il n'y a
 * rien à afficher, sans quoi le panneau serait vide sans explication.
 */

import { components, findComponent, renderComponent } from './core/render';
import { resolveSelection } from './core/resolve';

const CATALOGUE = `${components.length} composants`;

export interface Payload {
  componentName?: string;
  version?: string;
  codeName?: string;
  code?: string;
  /** Affiché à la place du code quand il n'y en a pas. */
  message?: string;
  catalogue: string;
}

async function buildPayload(node: SceneNode | null): Promise<Payload> {
  if (!node) return { message: 'Sélectionnez un composant', catalogue: CATALOGUE };

  const resolved = await resolveSelection(node);
  if (!resolved) {
    return { message: "La sélection n'est pas un composant OUDS.", catalogue: CATALOGUE };
  }

  const component =
    findComponent({ key: resolved.key, nodeId: resolved.nodeId, name: resolved.name }) ??
    (resolved.variantKey ? findComponent({ key: resolved.variantKey }) : null);

  if (!component) {
    return {
      componentName: resolved.name,
      message: `« ${resolved.name ?? 'Composant'} » n'est pas au catalogue (périmètre web ✅ LIVE).`,
      catalogue: CATALOGUE,
    };
  }

  const { code, reason } = renderComponent(component, resolved.props);
  return {
    componentName: component.name,
    version: component.codeVersion,
    codeName: component.codeName,
    ...(code ? { code } : { message: reason }),
    catalogue: CATALOGUE,
  };
}

/* ------------------------------------------------------------------ */

if (figma.editorType === 'dev' && figma.mode === 'codegen') {
  figma.codegen.on('generate', async ({ node }) => {
    const p = await buildPayload(node);
    if (!p.code) return [];
    return [
      {
        title: `OUDS Web — ${p.componentName}${p.version ? ' v' + p.version : ''}`,
        language: 'HTML',
        code: p.code,
      },
    ];
  });
} else {
  figma.showUI(__html__, { width: 460, height: 620, themeColors: true });

  async function push() {
    const sel = figma.currentPage.selection;
    const payload =
      sel.length > 1
        ? { message: 'Sélectionnez un seul composant.', catalogue: CATALOGUE }
        : await buildPayload(sel.length === 1 ? sel[0] : null);
    figma.ui.postMessage({ type: 'payload', payload });
  }

  figma.on('selectionchange', () => void push());

  figma.ui.onmessage = async (msg: { type: string; [k: string]: unknown }) => {
    if (msg.type === 'ready') await push();
    else if (msg.type === 'notify') figma.notify(String(msg.message ?? ''));
    else if (msg.type === 'close') figma.closePlugin();
  };
}
