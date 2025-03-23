import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC_oXuXY0-8O8B290rsRSqb9EyG7ESFRwE",
  authDomain: "codebuddy-e755b.firebaseapp.com",
  projectId: "codebuddy-e755b",
  storageBucket: "codebuddy-e755b.firebasestorage.app",
  messagingSenderId: "483800260421",
  appId: "1:483800260421:web:fe5c0e60bd05ffa862a82c",
  measurementId: "G-B2SVMKK2BS"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app)
export const db = getFirestore(app)