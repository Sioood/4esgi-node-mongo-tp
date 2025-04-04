# Développement Backend d’un Réseau Social Minimal

## Description

Dans ce projet backend d’un réseau social minimal. L’objectif est de mettre en œuvre une API REST en Node.js avec
une base de données MongoDB, permettant la gestion d’utilisateurs, de publications, et d’interactions.

## Fonctionnalités

1. Authentification & Utilisateurs
• Inscription d’un utilisateur (avec vérification d’unicité de l’email ou du pseudo)
• Connexion d’un utilisateur (avec génération et vérification de token JWT)
• Middleware d’authentification pour protéger les routes

2. Gestion des publications (posts)
• Création d’un post contenant :
o un texte obligatoire
o une image optionnelle (stockée localement ou sur un service externe type
Cloudinary)
• Modification d’un post (texte et/ou image)
• Suppression d’un post (par son auteur uniquement)
• Récupération de tous les posts (pagination ou tri par date appréciés mais optionnels)

3. Interactions 
Chaque groupe devra choisir une seule des deux formes d’interaction suivantes :
• Commentaires :
o Ajouter un commentaire à un post
o Modifier un commentaire (par son auteur)
o Supprimer un commentaire (par son auteur)

## Récupérer le projet via git
```bash
git clone https://github.com/Sioood/4esgi-node-mongo-tp.git
```

## Lancer le projet
```bash
npm install
```

```bash
npm run dev
```

## Générer documentation API
```bash
npm run swagger
```

## Voir la documentation de l'API
Un fichier `swagger-output.json` est généré à la racine, après avoir exécuter `npm run swagger` celui-ci peut être vu et utilisé via `http://localhost:3000/doc`