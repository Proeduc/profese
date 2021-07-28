import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBGELKK_Ri7dbD3LB1D8oZ6Hd8jQSzeT98',
  authDomain: 'profese-cd951.firebaseapp.com',
  projectId: 'profese-cd951',
  storageBucket: 'profese-cd951.appspot.com',
  messagingSenderId: '804226707801',
  appId: '1:804226707801:web:bfe4256697215ef64a1c48',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider, firebase };
