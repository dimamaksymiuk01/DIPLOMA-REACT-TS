// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"
import { APIKEY } from '../config.ts'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: "ukrmobilservicenotes.firebaseapp.com",
  projectId: "ukrmobilservicenotes",
  storageBucket: "ukrmobilservicenotes.appspot.com",
  messagingSenderId: "204192665518",
  appId: "1:204192665518:web:c779534b9b8252f197c23f",
  databaseURL: "https://ukrmobilservicenotes-default-rtdb.europe-west1.firebasedatabase.app"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const dataBase = getDatabase(app);