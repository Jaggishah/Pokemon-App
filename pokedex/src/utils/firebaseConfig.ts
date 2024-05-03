// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { collection,getFirestore } from "firebase/firestore"
const firebaseConfig = {

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app)

export const usersRef = collection(firebaseDB, "users")
export const pokemonListRef = collection(firebaseDB,"pokemonList")