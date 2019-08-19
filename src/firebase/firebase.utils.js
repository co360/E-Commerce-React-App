import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDcwOj-woQu1vv48Rn7Kdm2S7wy9c0QsHo',
  authDomain: 'react-project-ef14e.firebaseapp.com',
  databaseURL: 'https://react-project-ef14e.firebaseio.com',
  projectId: 'react-project-ef14e',
  storageBucket: '',
  messagingSenderId: '584148049958',
  appId: '1:584148049958:web:8c8affb2abb67218'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
