## Les grandes étapes : 
- Créer un serveur express très simple pour vérifier que la communication entre le navigateur et le serveur est fonctionnelle.

- Si des fichiers statiques sont nécessaires, mettre en place une route qui gère ces fichiers statiques.

- Si le serveur s'occupera de générer le HTML, créer les pages HTML.

- Si ce HTML est complexe et verbeux, passer par un moteur de template (ejs, par exemple) pour générer le contenu de manière programmatique.

- Penser à séparer les parties html récurrentes entre les fichiers dans des fichiers séparés (header / footer, par exemple) (dans un dossier 'partials' par exemple).app

- Si l'application contient beaucoup de routes, penser à isoler ces routes dans des fichiers distincts (pour plus de lisibilité et de facilité de maintenance) (Exemple : studentsRouter.js, promosRouter.js, etc). Ces sous-routeurs seront appelés par un router dit 'PRINCIPAL'

- Si l'application contient beaucoup de pages HTML, adopter une architecture MVC : SoC
    - (séparer la logique des routes dans des Controlleurs et laisser le soin à ces controlleurs de rendre les vues (`res.render()`).

- Dans un premier temps se forcer à coder un html statique qui n'est pas raccordé à une base de données.
Intégrer en dur les éléments qui seront plus tard générés automatiquement par le moteur de template choisi grace aux informations renvoyées par la future base de données adoptée.

- Penser l'architecture de la base de données avec des outils de modelisations (mcd, mld). Réfléchir également au SGBDR à utiliser (postgres, par exemple)

- Créer la base de données ainsi que les tables qu'elle va contenir.

- Mettre en place un pilote de base de données dans l'application pour pouvoir l'intérroger depuis nodejs (avec pg, par exemple).

- Si les requêtes à la base de données sont multiples (chercher toutes les données, chercher une seule donnée en fonction de son id, de son nom, d'autre chose, insérer un élément, supprimer un élément, le modifier, etc), il est intéressant de passer par une couche d'abstraction comme un datamapper, par exemple qui permet d'encapsuler la logique utilisée pour communiquer avec cette base de données. De plus ca évite de répéter toujours les mêmes requêtes SQL (DRY).