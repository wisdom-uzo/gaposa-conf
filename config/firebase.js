// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import "firebase/firestore";
import { getStorage } from "firebase/storage";




const firebaseConfig = {
  apiKey: "AIzaSyCu9gPFfd-PvRFC1avDUwYBjqLQgiI58UQ",
  authDomain: "best-project-46c88.firebaseapp.com",
  projectId: "best-project-46c88",
  storageBucket: "best-project-46c88.appspot.com",
  messagingSenderId: "785930164390",
  appId: "1:785930164390:web:b2b50ac32cbc199741bc67"
};



const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const store = getStorage(app)
//export default app