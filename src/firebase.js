import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCyVQQ4LG23ddq3DSFpcrkHbTyN4yQ8Oyw",
  authDomain: "profese-c7694.firebaseapp.com",
  projectId: "profese-c7694",
  storageBucket: "profese-c7694.appspot.com",
  messagingSenderId: "809996714792",
  appId: "1:809996714792:web:9809ec13172f2bceddc61d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();
const providerFacebook = new firebase.auth.FacebookAuthProvider();

export { db, auth, storage, provider, providerFacebook, firebase };


