// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC29Zs01PF3OW54tIqC_NFsnbJQyJt5LaM",
    authDomain: "auth-d02bd.firebaseapp.com",
    projectId: "auth-d02bd",
    storageBucket: "auth-d02bd.appspot.com",
    messagingSenderId: "419921406472",
    appId: "1:419921406472:web:aab565c2a7f4c2941effbd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const GoogleAuth = () => {
    let Provider = new GoogleAuthProvider()
    return signInWithPopup(auth, Provider)
}