
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-25bad.firebaseapp.com",
  projectId: "interviewiq-25bad",
  storageBucket: "interviewiq-25bad.firebasestorage.app",
  messagingSenderId: "866044664702",
  appId: "1:866044664702:web:138a9393f7462042c9b12f"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}
