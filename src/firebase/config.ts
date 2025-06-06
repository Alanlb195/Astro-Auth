// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_GuPvGMpTjj6uQvL4m4bN4IfMwgbDhjc",
    authDomain: "astro-authentication-459002.firebaseapp.com",
    projectId: "astro-authentication-459002",
    storageBucket: "astro-authentication-459002.firebasestorage.app",
    messagingSenderId: "209968626504",
    appId: "1:209968626504:web:3d68f21d2cb7311f47d17d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
auth.languageCode = 'es';

export const firebase = {
    app,
    auth
};