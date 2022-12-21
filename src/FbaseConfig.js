import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAVPUmVGSHBTBTxCJ-GYZzP-aH6YYfvqxY",
  authDomain: "exel-3c7ba.firebaseapp.com",
  projectId: "exel-3c7ba",
  storageBucket: "exel-3c7ba.appspot.com",
  messagingSenderId: "1019469620070",
  appId: "1:1019469620070:web:e037381d04b9a073ffdea7",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
