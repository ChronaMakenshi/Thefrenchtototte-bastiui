# Reproduction du site The French Tototte

Ce projet est une reproduction du site **The French Tototte**, développé à l'origine par Basti UI et Antoine Daniel. Le site utilise **Laravel** pour le framework backend et **Less** pour les styles.

## Prérequis

Avant de commencer, assurez-vous d'avoir les outils suivants installés sur votre machine :

- **PHP** (version 7.4 ou supérieure)
- **Composer** (gestionnaire de dépendances PHP)
- **Node.js** (version 14.x ou supérieure)
- **NPM** (gestionnaire de paquets Node.js)
- **MySQL** (ou tout autre système de gestion de base de données compatible)

## Installation

### Cloner le dépôt

Clonez le dépôt Git à l'aide de la commande suivante :

```
git clone https://github.com/yourusername/the-french-tototte.git
cd the-french-tototte
```

Installer les dépendances

Installez les dépendances PHP avec Composer :

```
composer install
```

Installez les dépendances Node.js avec NPM :

```
npm install
```

Configurer l'environnement

Copiez le fichier .env.example en .env et modifiez les paramètres selon vos besoins :

```
cp .env.example .env
```

Générez la clé d'application Laravel :

```
php artisan key:generate
```

Configurez votre base de données dans le fichier .env :

env

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=nom_de_votre_base_de_donnees
DB_USERNAME=nom_utilisateur
DB_PASSWORD=mot_de_passe
```

Exécuter les migrations

Exécutez les migrations pour créer les tables nécessaires dans la base de données :

```
php artisan migrate
```

Compiler les assets

Compilez les fichiers Less et autres assets :

```
npm run dev
```

Pour une compilation optimisée en production, utilisez :

```
npm run production
```

Démarrer le serveur

Démarrez le serveur Laravel avec la commande :

```
php artisan serve
```

Le site devrait maintenant être accessible à l'adresse http://localhost:8000.
