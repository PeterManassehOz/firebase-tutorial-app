// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCL-bl5J5LfVynI7UlGm9BQLeZ-DQluGSE",
  authDomain: "react-course-465b6.firebaseapp.com",
  projectId: "react-course-465b6",
  storageBucket: "react-course-465b6.appspot.com",
  messagingSenderId: "873303719731",
  appId: "1:873303719731:web:38062d974461e5e48f4846"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);