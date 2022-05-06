# 1. P7 OpenClassRooms - Créez un réseau social d’entreprise

Le projet consiste à construire un réseau social interne pour les employés de Groupomania.

Le projet est entièrement hosté en local.

# 2. Lancer le projet 

Commencez par cloner le projet :
```
git clone git@github.com:raniase/p7_groupamania.git
```

# 3. Base de données

Installez / lancez le serveur SQL adapté à votre système d'exploitation :
* MAMP (MacOS)
* LAMP (Linux)
* WAMP (Windows)


Créez une nouvelle base de données  : groupamania 
utiliser user et password: root/root 
ou changer ces données de connexions dans le fichier database.json

# 4. Migration

Réalisez une migration pour la génération des tables et le mapping avec les modèles avec:  
npx sequelize-cli db:migrate

# 5. Génération d'un jeu de données de tets
Lancez la commande suivante pour alimenter la base de données avec: 
npx sequelize-cli db:seed:all
Cette commande va  alimenter les tables users, posts, ... en se basant sur les fichiers demo-users, demo-posts... qu'on les trouves dans le dossier seedrers. 

NB: On peut également faire un rollbakc de la migration ou la génération des données avec les commandes: 

npx sequelize-cli db:migrate:undo:all
npx sequelize-cli db:seed:undo:all

# 6. Installer les dépendances du dossier back: 

utiliser la commande npm install 

# 7. Ajouter le fichier .env

Ajouter un fichier .env sous la racine du dossier backend 
et ajouter JWT_SECRET_TOKEN = 'zzzzz' : "zzzz" c'est la clé qu'on va utiliser pour la génération des tokens avec JWT

# 8. Lancement: 

On peut lancer le projet avec nodemon serve ou node server

# ----- FRONTEND

# 1. installation des dépendances: 

Dans le dossier Frontend, exécuter la commande suivante :

npm install

# 2. variable d'environnement: 

Le server frontend utilise les variables d'environnement :

A la racine du dossier Frontend, créez un fichier .env.

On ajoute l'URL de l"application backend 

VUE_APP_LOCALHOST_URL = "http://localhost:3000/api/"

npm run serve 

Le server est accessible à localhost:8080.
