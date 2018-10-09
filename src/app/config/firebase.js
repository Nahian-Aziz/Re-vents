import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDCWvT52mHRUvq92aZC1-0y7a4g6Ofk8q0',
  authDomain: 're-vent.firebaseapp.com',
  databaseURL: 'https://re-vent.firebaseio.com',
  projectId: 're-vent',
  storageBucket: 're-vent.appspot.com',
  messagingSenderId: '380201963986'
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
};
firestore.settings(settings);
export default firebase;
