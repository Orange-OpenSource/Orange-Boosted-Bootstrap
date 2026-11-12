/**
 * Le contrat d'un composant OUDS.
 *
 * Chaque composant vit dans `src/components/<id>.ts` : tables de correspondance
 * en tête, une branche `if` par variante, un littéral gabarit retourné. Pas
 * d'interpréteur, pas de JSON — le code EST le mapping.
 */

/**
 * Arguments passés à `render`.
 *
 * Volontairement peu typé : les valeurs viennent de Figma à l'exécution, et un
 * typage strict imposerait des `as string` dans chaque table de correspondance,
 * au détriment de la lisibilité — qui est précisément le but.
 */
export type Args = Record<string, any>;

export interface OudsComponent {
  id: string;
  /** Nom lisible, sans badge ni version. */
  name: string;
  /** Nom brut dans la bibliothèque — sert au repérage par nom. */
  figmaName?: string;
  /** Node-ids du jeu de variantes. Le repérage passe par là en priorité. */
  nodeIds: string[];
  /** Clés publiées, si relevées — repérage insensible au node-id. */
  keys?: string[];
  /** Affichés dans l'en-tête du panneau : « button v3.2.0 ». */
  codeName?: string;
  codeVersion?: string;
  /** Icône échangeable : identifiant de sprite figé, remplacé au rendu. */
  icon?: { prop: string; placeholder: string };
  /** Argument JS -> propriété Figma. `boolean` convertit 'True'/'False'. */
  props: Record<string, { figma: string; boolean?: true }>;
  /**
   * Rend le markup de la variante. `null` quand aucune branche ne couvre la
   * combinaison — Code Connect n'afficherait rien non plus.
   */
  render: (args: Args) => string | null;
}
