# Bienvenue chez Electronic&nbsp;Tales !

[electronictales.io](https://www.electronictales.io)

Grâce à la popularisation des bootcamps, les profils qui ne sont pas « nés pour être dev » sont de plus en plus nombreux à intégrer le monde de la programmation. Et c'est tant mieux 👏

Mais une fois en entreprise, ces personnes se confrontent souvent à un « mur de verre » de la part de leurs collègues issu·e·s de formations plus traditionnelles, bâti sur des références culturelles ou techniques qu'ils n'ont pas. Les conséquences ? Mal-être au travail, abandon de carrière... et syndrome de l'imposteur, problème répandu dans le milieu de la tech.

Dégommons le syndrome de l'imposteur ensemble !

Electronic&nbsp;Tales entend être un safe-space d'apprentissage pour et par les dévs juniors, axé sur la bienveillance et l'inclusion. Il vise à réduire le gap entre les bootcampeurs·euses/autodidactes et les ingénieur·e·s en parlant de tout ce que les formations courtes n'enseignent pas 💾 🔋 🕹️

Démarré en décembre 2019, notre projet est actuellement en cours de création. Il sera totalement gratuit et open-source. Le premier release est prévu pour la rentrée 2020.

_Le repo sur lequel vous êtes est le site de **présentation** du projet : Electronic&nbsp;Tales Presents_.

## Installation

Electronic&nbsp;Tales Presents est construit en React et Node.js. Pour faire tourner le site sur votre ordinateur, vous devez installer `node` et `npm` (https://phoenixnap.com/kb/install-node-js-npm-on-windows).

Un projet fait en React et/ou Node.js utilise un tas de dépendances propres à ces écosystèmes. Afin de ne pas alourdir les choses, nous n'avons pas mis les dépendances d'Electronic&nbsp;Tales dans notre repo. Il va donc falloir les télécharger sur votre machine. Suivez le guide&nbsp;!

1. Dans votre Terminal, mettez-vous dans le dossier où vous souhaitez qu'Electronic&nbsp;Tales vive (promis, il fait toujours son lit le matin et ne remet jamais les cartons de lait vides dans le frigo !). Clonez ensuite le repo sur votre ordinateur :

```bash
git clone https://github.com/OfficierAzarov/electronic-tales-presents.git
```

2. Vous avez maintenant un dossier `electronic-tales-presents` sur votre ordinateur. Entrez-y et faites une première fois&nbsp;:

```bash
npm install
```

Ceci aura pour effet d'installer toutes les dépendances nécessaires à la partie Node.js (back-end) du projet.

Ensuite, entrez dans le dossier `client` et tapez à nouveau&nbsp;:

```bash
npm install
```

Cette fois, ceci aura pour effet d'installer toutes les dépendances nécessaires à la partie React (front-end) du projet.

Fermez votre Terminal pour le laisser réfléchir une seconde au sens de l'existence et rouvrez-le.
Pour démarrer le back-end, allez dans le dossier `electronic-tales-presents` et écrivez&nbsp;:

```bash
npm start
```

Pour démarrer le front-end, allez dans le dossier `electronic-tales-presents/client` et écrivez&nbsp;:

```bash
npm start
```

Le site d'Electronic&nbsp;Tales s'ouvre dans votre navigateur&nbsp;!

## License

[MIT](https://choosealicense.com/licenses/mit/)
