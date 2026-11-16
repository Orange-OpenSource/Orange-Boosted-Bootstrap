# OUDS Code — plugin Figma

Sélectionnez un composant OUDS, obtenez le markup HTML officiel de **cette
variante précise**. Le panneau ne montre que ça : le code, et un bouton copier.

**24 composants · 3 314 variantes vérifiées** contre les `.figma.ts` de Code
Connect et contre les fichiers template (forme post-17/08/2026).

---

## Installer pour tester

Le dossier livré contient `dist/` déjà construit : aucun Node requis pour
essayer.

1. Décompressez vers un chemin **stable et court**, par exemple
   `C:\figma-plugins\ouds-figma-plugin`.
   Évitez OneDrive : le délestage « fichiers à la demande » retire `dist/code.js`
   au moment où Figma le lit, et produit une erreur `ENOENT` alors que le fichier
   est bien visible dans l'explorateur.
2. **Application de bureau** Figma → menu → Plugins → Development →
   *Import plugin from manifest…* → choisir `manifest.json`.
   Le navigateur ne sait pas importer un plugin local.
3. Sélectionner un composant, puis :
   - **mode Design** : clic droit → Plugins → Development → OUDS Code
   - **mode Dev** : panneau Inspect → menu des générateurs → OUDS Code

---

## Où vit le markup

```
src/
  main.ts                  fil principal : sélection, panneau, codegen
  ui.html                  le panneau
  core/                    rarement touché
    component.ts           le contrat d'un composant
    resolve.ts             nœud Figma → identité du composant
    render.ts              propriétés → arguments → render(), icône
  components/              touché à chaque vague OUDS
    index.ts               le registre — ajouter/retirer un composant
    button.ts … tag.ts     un fichier de code par composant
tools/                     la chaîne de build et de contrôle
  build.mjs                esbuild → dist/
  generate-components.mjs  mapping.yml → src/components/*.ts
  variants.mjs             figma-inventory.json → les 3 314 variantes
  verify.mjs               conformité au .figma.ts et au template
  release.mjs              tout, en une commande
```

La séparation est celle de la maintenance : **`core/` ne bouge presque jamais,
`components/` bouge à chaque version OUDS.**

### À quoi ressemble un composant

Le style est celui des stories CSF3 du dépôt : tables de correspondance en tête,
une branche `if` par variante, un littéral gabarit retourné.

```js
const statusClasses: Record<string, string> = {
  'Neutral': '',
  'Accent': 'tag-accent',
}

export const renderTag = ({ label, status, layout }: Args): string | null => {
  const classes = ['tag', statusClasses[status]].filter(Boolean).join(' ')

  if (layout === 'Text only') {
    return `<p class="${classes}">${label}</p>`
  }

  // Le mapping ne couvre pas cette combinaison.
  return null
}

export const component: OudsComponent = {
  id: 'tag',
  name: 'Tag',
  nodeIds: ['56994:29993'],        // repérage depuis Figma
  codeName: 'tag',
  codeVersion: '1.5.0',
  props: {                          // argument JS ↔ propriété Figma
    label:  { figma: '✏️ Label' },
    status: { figma: 'Status' },
    roundedCorner: { figma: 'Rounded corner', boolean: true },
  },
  render: renderTag,
}
```

Corriger une classe, c'est éditer une table. Corriger un markup, c'est éditer un
gabarit. Les écarts connus et les notes du composant sont en **commentaire
d'en-tête** du fichier.

---

## Maintenir

| Situation | Ce qu'on touche |
|---|---|
| Le markup change dans la doc | le littéral gabarit de la branche |
| Une classe CSS est renommée | la table `xxxClasses` en tête de fichier |
| Une variante gagne un markup propre | un `if` de plus, **avant** les branches plus générales |
| Un composant passe ✅ LIVE | le générer, puis l'ajouter à `components/index.ts` |
| Un composant régresse en ⚙️ DEV | le retirer de `components/index.ts` |
| Le node-id change | `nodeIds` du fichier |

Puis, toujours :

```bash
npm install                              # la première fois seulement
npm run release -- ../ouds-code-connect
```

Cette commande enchaîne build → types → génération des composants **absents** →
énumération des 3 314 variantes → vérification, et s'arrête à la première
anomalie. Elle n'écrase jamais un fichier de composant existant.

Il reste à **republier** : Plugins → Development → Publish.

> ⚠️ **L'ordre des branches n'est pas cosmétique.** La première qui matche gagne,
> exactement comme dans les fichiers template de Code Connect. Une branche
> spécifique placée après une branche plus générale devient du code mort, sans
> aucun message. De la plus contrainte à la moins contrainte, toujours.

### Ajouter un composant

```bash
npm run components -- ../ouds-code-connect/code-connect/mapping.yml \
  --inventory ../ouds-code-connect/code-connect/reference/figma-inventory.json
```

Ne génère que les composants **absents** : vos retouches ne risquent rien.
`--force` régénère tout depuis `mapping.yml` et **perd les retouches manuelles**.

### Ce qui périme tout seul

`figma-inventory.json` est un **relevé daté** de la bibliothèque. Les 3 314
variantes de la vérification et les noms de repli en dépendent. Il faut le
**refaire** à chaque vague, pas l'enrichir : un badge peut régresser (Alert
message est repassé ✅ LIVE → ⚙️ DEV entre le 16/07 et le 03/08), une propriété
gagner une valeur, un composant être recréé avec un nouveau node-id.

Si l'inventaire est périmé, `release` ne le dira pas — il vérifiera
consciencieusement contre une réalité dépassée. C'est le seul maillon qui ne
s'auto-contrôle pas.

---

## La vérification

`tools/verify.mjs` rejoue les 3 314 variantes et compare le rendu de
`src/components/` à deux implémentations indépendantes : les `.figma.ts` générés
par Code Connect, et les fichiers **template** (la forme publiée après le
17/08/2026, évaluée dans un bac à sable avec les vrais helpers `_fcc_*`).

```
source             src/components/ (24 fichiers de code)
variantes rendues  3314
comparées au .figma.ts généré  3314 / 3314
comparées au fichier template  3314 / 3314

TOUT CONFORME
```

Tant que rien n'est retouché, c'est un contrôle de non-régression. Dès qu'un
fichier est corrigé à la main, un écart apparaît : **ce n'est pas une erreur**,
c'est la mesure de la divergence avec Code Connect, et l'information dont vous
avez besoin pour décider si `mapping.yml` doit suivre.

---

## Publier dans l'organisation Figma

1. Plugins → Development → **Publish** sur le plugin importé.
2. Choisir **Only for members of \<organisation\>**. Requiert un plan
   Organization ou Enterprise et le droit de publier des ressources internes.
3. Icône 128×128, capture 1920×960, description, note de version.
4. Les membres l'installent depuis l'onglet **Organization**.

---

## Ce qu'il faut savoir

- **Le plugin ne télécharge rien.** `networkAccess` ne figure pas au manifeste.
  Le markup est dans le bundle : toute correction demande de rebuilder et de
  republier. C'est l'échange consenti contre du code lisible.
- **Deux sources, assumées.** `mapping.yml` reste la source de Code Connect et
  des stories CSF3 ; `src/components/` est celle du plugin. `npm run verify`
  mesure l'écart entre les deux.
- **Le panneau ne montre que le markup.** Notes, écarts, lien de documentation
  et propriétés lues ne sont plus affichés. Un `Button Size = Small` rend donc le
  markup de `Size = Default` sans le signaler — l'écart est documenté en tête de
  `src/components/button.ts`.
- **Collision `✏️ Label` / `⚠️ Label`.** Text input et Password input portent les
  deux. La comparaison des noms de propriétés **conserve les emojis** ; sans ça
  le libellé sortait à `true`.

## Droits nécessaires

| Pour | Il faut |
|---|---|
| Éditer `mapping.yml` | droit de PR sur `Orange-Boosted-Bootstrap`, branche `ouds/main` |
| Republier le plugin | publication de ressources internes dans l'organisation Figma |
| Publier Code Connect | jeton Figma `File content: read` + `Code Connect: write` |
