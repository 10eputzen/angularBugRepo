# AngularBugRepo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

##Firebase Test

You need to have your own firebase project with a firestore database.
Add an environment.ts with the following content:

`export const environment = {
    production: false,
    collectionName: 'test',
    firebaseConfig: {
        Your Firebase Config
    },
};`
