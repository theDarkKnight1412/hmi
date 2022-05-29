import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyBe9fRKlnYlljyceRQEcuXn-CoiuFuojPQ",
  authDomain: "human-machine-interface-336e5.firebaseapp.com",
  databaseURL:
    "https://human-machine-interface-336e5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "human-machine-interface-336e5",
  storageBucket: "human-machine-interface-336e5.appspot.com",
  messagingSenderId: "912250249655",
  appId: "1:912250249655:web:a410e189f68b13f9e74832",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
