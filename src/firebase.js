import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.React_APP_APi_KEY,
    authDomain: process.env.React_APP_AUTH_DOMAIN,
    projectId: process.env.React_APP_PROJECT_ID,
    storageBucket: process.env.React_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.React_APP_MESSAGING_SENDER_ID,
    appId: process.env.React_APP_APP_ID
}

export default firebase.initializeApp(firebaseConfig);