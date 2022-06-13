import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
	apiKey: "AIzaSyBIVqkYCjJ0-CfbhTOwkBTEW1UJLE73aqw",
	authDomain: "clone-b5553.firebaseapp.com",
	projectId: "clone-b5553",
	storageBucket: "clone-b5553.appspot.com",
	messagingSenderId: "334794908970",
	appId: "1:334794908970:web:cd9de8624fff248d2dea53",
	measurementId: "G-SZYQ3YZ1M5"
  };

const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();
const auth = firebase.auth();

export {db,auth};