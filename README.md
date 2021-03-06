# ProfGramme

Profgramme est un logiciel permettant de créer facilement sa progression depuis une liste d'éléments (par exemple tirée d'un programme officiel). Ce logiciel est une simple page web qui peut être téléchargé sur son ordinateur pour être exécuté hors ligne.

[Accéder à la version en ligne](https://degrangem.github.io/ProfGramme/)

[Télécharger pour une exécution hors ligne](https://github.com/DegrangeM/ProfGramme/releases) (cliquer sur `Source code (zip)`, [plus d'infos](https://github.com/DegrangeM/ProfGramme/wiki/Version-hors-ligne))

![profgramme2](https://user-images.githubusercontent.com/53106394/61581282-8f1d3200-ab1c-11e9-94da-4fe9101953ef.gif)

## Source

L'onglet Source contient non seulement la liste des éléments du programmes qui peuvent être glissé déposé dans la progression :
* `# Thème`
* `= Chapitre`
* `- Élément`
* `Texte`

mais également d'autres informations telles que :
* la date du début de l'année (`@ 02/09/2019`)
* les jours fériés (`% 01/05/2019`)
* les périodes de vacances (`% 2 % 22/12/2019` indique une période de 2 semaines de vacances débutant le 22 décembre)

Elle contient également votre progression en elle même (`{{5}}` placé à la fin d'un élément permet d'indiquer que cette élément est vu pendant la période débutant à la cinquième semaine).

Si vous souhaitez sauvegarder votre progression, il vous suffit de copier coller la source (vous pouvez également appuyer sur le bouton Télécharger pour obtenir un fichier). De même, si vous souhaitez charger une progression, il vous suffit de coller la source (vous pouvez également appuyer sur le bouton Ouvrir pour charger un fichier). La liste déroulante "Charger un modèle" vous permet de charger automatiquement certains programmes officiels.

Il est également possible d'activer la coloration des éléments (dans la zone de gauche) en ajoutant dans l'onglet Source la ligne `$ colorItemByTheme`.

## Autres

Vous pouvez faire `Ctrl+P` pour imprimer votre progression (en vrai ou au format pdf).

ProfGramme gère également l'[importation de référentiel sacoche](https://github.com/DegrangeM/ProfGramme/wiki/Importation-des-r%C3%A9f%C3%A9rentiels-sacoche).

L'application est compatible [Progressive Web App](https://github.com/DegrangeM/ProfGramme/wiki/Progressive-Web-App) ce qui permet de "l'installer" sur certains navigateurs.
