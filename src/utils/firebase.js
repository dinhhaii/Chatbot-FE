import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDGLJ-scsCJG4hQlzzAcd4rum4Mjjgh7O8',
  authDomain: 'cafocc.firebaseapp.com',
  databaseURL: 'https://cafocc.firebaseio.com',
  projectId: 'cafocc',
  storageBucket: 'cafocc.appspot.com',
  messagingSenderId: '225505233278',
  appId: '1:225505233278:web:73c95e143767571ca9cb2f',
  measurementId: 'G-Z1F67BYEZ5',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
