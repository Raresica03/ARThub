import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCfMgc9dUeFGUOqtLGN9de4Mfg6_w0mmNo",
  authDomain: "arthub-3da0e.firebaseapp.com",
  projectId: "arthub-3da0e",
  storageBucket: "arthub-3da0e.appspot.com",
  messagingSenderId: "848631400066",
  appId: "1:848631400066:web:92259f371f63296b2d569b",
  measurementId: "G-VDDSH2EZRT"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const database = getFirestore();

export const storage = getStorage(app);
