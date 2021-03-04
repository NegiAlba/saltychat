import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBTFq0pc4f7cSHW-pbENqkI4R-9QBe7xPw",
    authDomain: "saltychat.firebaseapp.com",
    projectId: "saltychat",
    storageBucket: "saltychat.appspot.com",
    messagingSenderId: "892961499363",
    appId: "1:892961499363:web:bb7f0247d5316a4d04bdd6"
  };

firebase.initializeApp(config);

export default firebase;
export const auth = firebase.auth;
export const db = firebase.firestore();