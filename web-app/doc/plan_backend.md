# Plan d'Implémentation Backend : Prisma & PostgreSQL (Neon)

## Objectif
Mettre en place une base de données robuste pour gérer les utilisateurs, les rôles (Mentor/Mentee), et les futures fonctionnalités (Réservations, Blog).

**Stack Technique :**
- **ORM** : Prisma
- **Base de Données** : PostgreSQL (via Neon.tech)
- **Synchro** : Clerk Webhooks (pour créer les utilisateurs dans la DB lors de l'inscription)

---

## Étape 1 : Initialisation de la Base de Données
- [ ] Installer Prisma : `npm install prisma --save-dev` et `npm install @prisma/client`
- [ ] Initialiser Prisma : `npx prisma init`
- [ ] Configurer la variable d'environnement `DATABASE_URL` dans `.env` (nécessite le lien de connexion Neon).

## Étape 2 : Modélisation des Données (Schema)
Fichier : `prisma/schema.prisma`

Nous allons définir les modèles essentiels :

### Modèle `User`
- `id` (String, clé primaire, correspond à l'ID Clerk)
- `email` (String, unique)
- `firstName` / `lastName`
- `role` (Enum: ADMIN, MENTOR, USER)
- `imageUrl`
- `bio` (String, nullable)
- `createdAt` / `updatedAt`

### Modèle `MentorProfile` (Relation 1-1 avec User)
- `userId` (Foreign Key)
- `expertise` (String[])
- `hourlyRate` (Float)
- `availability` (Json)

## Étape 3 : Synchronisation Clerk -> Base de Données
Pour que notre base de données connaisse les utilisateurs inscrits via Clerk, nous devons utiliser les **Webhooks**.

1.  Créer une route API : `/api/webhooks/clerk`
2.  Configurer le Webhook dans le Dashboard Clerk.
3.  À chaque `user.created` côté Clerk -> Créer l'entrée correspondante dans notre table `User` Prisma.

## Étape 4 : Gestion des Rôles & Onboarding
- Créer un formulaire d'onboarding (`/onboarding`) pour que l'utilisateur choisisse s'il est Mentor ou Élève après son inscription.
- Mettre à jour le champ `role` dans la base de données.

---

## 🚀 Prochaine Action pour vous
Avez-vous déjà créé le projet sur **Neon.tech** ? Si oui, j'aurai besoin du lien de connexion (Connection String) pour le mettre dans le `.env`.
