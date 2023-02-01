# Kryzalid Test

Dans le cadre d'un éventuel recrutement voici le petit test qu'il sera demander de réaliser.
On veut surtout se faire une idée sur l'étendu de te compétences en terme d'intégration, dynamisation ainsi que ta rapidité d'exécution.

**Temps à prévoir : environ 2h** *On ne veut pas que tu passes ta journée dessus, simplement faire le **maximum** possible dans ce temps prévu.*

*On est conscient que 2h c'est peut être short pour tout faire, donc pas de pression si il manque des choses.*

*( Ne pas inclure le temps de préparation de ton espace de dev .)*

**Objectif:** Réaliser une page web de liste de nouvelles en suivant les recommandation de la maquette.Avec des données qui proviennent d'une API. 

- La liste doit être ordonné par date du plus récent au plus vieux. 
- Le page doit être responsive au mieux.
- La liste peut être filtré par **catégorie** pour ne laisser afficher que les nouvelles   correspondante.

**Choix de technologie:**
Aucune obligation, la page web peut être fait avec la techno que tu souhaites, simplement nous détailler les étapes pour faire tourner la page au final ( si nécessaire )


## Bon à savoir

Tu trouveras la maquette complète via le template figma ici présent: 
https://www.figma.com/file/QU93dmh7VexxXU8tZRrK0q/Untitled?node-id=1%3A220 ou alors en pdf dans les assets du site. 

Pour la font tu peux utiliser les Googles fonts suivant: 
**Aleo** : Pour le titre "Nouvelles"
**DM Sans** : Pour les items de nouvelles

    @import url('https://fonts.googleapis.com/css2?family=Aleo:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap');

    $primaryFont: 'Aleo', Arial, sans-serif;
    $secondaryFont: 'DM Sans', Arial, sans-serif;


## API à connecter

L'api est composé de 100 articles générer aléatoirement via le package [json-server](https://www.npmjs.com/package/json-server) 

Simplement installer le package `npm install -g json-server`

et runner la commande suivant pour lancer le serveur et la "db" à la racine du dossier fourni : 

    json-server db.js

Tu devrais avoir une API disponible avec le domaine **localhost:3000**
Bref je t'invite à regarder la doc pour t'aider. 
[json-server](https://www.npmjs.com/package/json-server) 

## Pour terminer
Simplement nous renvoyer ton projet avec toutes informations qui te semble utile pour nous afin qu'on puisse l'analyser et te revenir rapidement. 

### Have fun et bonne réalisation 🤘 !