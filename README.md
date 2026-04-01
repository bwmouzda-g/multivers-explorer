# Multivers Explorer

## Description

J’ai réalisé ce projet dans le cadre de ma formation en développement full-stack.

Multivers Explorer est une application web qui permet d’explorer des personnages via une API. Le but était de mettre en pratique React avec TypeScript, ainsi que la gestion des routes et des appels API.

Avec cette application, on peut :

* Voir une liste de personnages
* Naviguer entre plusieurs pages
* Accéder au détail d’un personnage
* écrire un avis sur un personnage dans un formulaire

---

## Technologies utilisées

* React
* TypeScript
* React Router
* Vite
* API REST

---

##  Structure du projet

```
src/
 ├── components/
 │   ├── CharacterCard.tsx
 │   ├── NavBar.tsx
 │   └── Pagination.tsx
 │
 ├── pages/
 │   ├── HomePage.tsx
 │   ├── CharacterDetailPage.tsx
 │   └── NotFoundPage.tsx
 │
 ├── services/
 │   └── characterApi.ts
 |
 |__types
 |   └── character.ts
 │
 ├── App.tsx
 └── main.tsx
```

---

## Installation

1. Cloner le projet :

```bash
git clone https://github.com/bwmouzda-g/multivers-explorer.git
```

2. Aller dans le dossier :

```bash
cd multivers-explorer
```

3. Installer les dépendances :

```bash
npm install
```

4. Lancer le projet :

```bash
npm run dev
```

---

##  Fonctionnalités

### Liste des personnages

J’ai mis en place un affichage dynamique des personnages grâce à une API.

### Détail d’un personnage

Chaque personnage a une page dédiée avec plus d’informations.

### Pagination

J’ai ajouté une pagination pour pouvoir naviguer facilement entre les pages.

### Page 404

Une page est prévue si l’utilisateur accède à une route inexistante.

---

## Ce que j’ai appris

Avec ce projet, j’ai pu :

* Comprendre comment structurer une application React
* Utiliser TypeScript dans un projet concret
* Gérer les routes avec React Router
* Faire des appels API et gérer les données
* Créer des composants réutilisables

---

## Améliorations possibles

* Ajouter une barre de recherche
* Ajouter des filtres
* Améliorer le design
* Ajouter un système de favoris

---

## Auteur

Projet réalisé par moi dans le cadre de ma formation en développement web.

---

## Licence

Projet à but pédagogique.
