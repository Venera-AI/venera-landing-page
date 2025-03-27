# Firebase Functions

## Get Started

1. Contact project owner for
   1. Access to Firebase project.
   2. Mailersend API Key and Template ID.
2. Set environment variables in `.env` file using `.env.example` as a template.

## Load environment variables

Reference: <https://firebase.google.com/docs/functions/config-env?gen=2nd#deploying_multiple_sets_of_environment_variables>.

```bash
firebase use dev # load .env and .env.dev
firebase use staging # load .env and .env.staging
firebase use production # load .env and .env.proudction
```

`dev`, `staging` and `production` match the project aliases in [.firebaserc](../.firebaserc).

By default, `.env` and `.env.dev` are loaded.

## Run functions locally

```bash
firebase emulators:start
```

This will start the Firebase emulators for Firestore and Functions.
