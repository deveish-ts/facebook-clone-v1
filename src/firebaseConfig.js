// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDRLMZXZZ2vXXFitpj6Xv_JqC8J4wCexm4',
  authDomain: 'facebook-clone-v1-2bc12.firebaseapp.com',
  projectId: 'facebook-clone-v1-2bc12',
  storageBucket: 'facebook-clone-v1-2bc12.appspot.com',
  messagingSenderId: '884903819258',
  appId: '1:884903819258:web:04f6762cad4349bcb2d643',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
