# EventBot Web App

This is a web app written using [Vue](https://vuejs.org/) to help manage the data and events for my [Discord EventBot](https://github.com/NickAlldredge/discord-event-bot).

The bot tracks the birthdays of users in my discord server, and also facilitates our annual Secret Santa gift exchange, and there are some more planned features to come.

## Project Setup

This app uses [Firebase](https://firebase.google.com/) as the backend, so if you want to use this to manage your own bot you'll need to setup a few things

### Install Dependencies

```sh
npm install
```

### Configure Firebase

1. Add a new Firebase project from your Firebase console.
2. Add a web app to your new project. From the app settings, you'll need to grab your firebase config variables from the SDK Setup and Configuration panel.
    - Create an `.env.local` file in the root directory of your project and add your firebase config variables in there (these are used by the `firebase.js` file in the `firebase/` folder)
    - Make sure to prefix your environment variables with `VITE_` so they can be loaded using `import.meta.env.VITE_<your variable>`.
3. Add a Realtime Database to your Firebase project.
4. Add Authentication to your Firebase project and enable the Email/Password sign-in method. Feel free to add authorized users now from the Authentication console if you don't plan on allowing users to create new logons from your app.
5. Add Hosting to your Firebase project.

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Deploy to Firebase Hosting

First make sure you've installed the Firebase CLI:
```sh
npm install -g firebase-tools
```

Log into Firebase:
```sh
firebase login
```

Initialize the project:
```sh
firebase init
```

Deploy:
```sh
firebase deploy
```
or alternatively you can use
```sh
npm run deploy
```
which will run:
```sh
vite build && firebase deploy
```