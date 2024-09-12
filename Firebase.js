import { initializeApp } from 'firebase';
import firebase from 'firebase/compat/app';

const firebaseConfig = {
    apiKey: "AIzaSyCslUf2zeLoBwlGhNDzysRDjeaG0R4Bfy8",
    authDomain: "e-commerce-3a230.firebaseapp.com",
    projectId: "e-commerce-3a230",
    storageBucket: "e-commerce-3a230.appspot.com",
    messagingSenderId: "203223655248",
    appId: "1:203223655248:web:9356c475e0339829aa8255",
    measurementId: "G-GNC6T6P376",
    databaseURL: "https://console.firebase.google.com/u/0/project/e-commerce-3a230/database/e-commerce-3a230-default-rtdb/data/~2F",
  };
export const app = initializeApp(firebaseConfig);  