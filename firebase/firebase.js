// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCWVTEr_HpkoVXvzbihhhOkhSzeH0Z_I3M",
    authDomain: "saptaloka-web.firebaseapp.com",
    projectId: "saptaloka-web",
    storageBucket: "saptaloka-web.appspot.com",
    messagingSenderId: "477492485536",
    appId: "1:477492485536:web:f4fe94948ea56ca5c0d8c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);