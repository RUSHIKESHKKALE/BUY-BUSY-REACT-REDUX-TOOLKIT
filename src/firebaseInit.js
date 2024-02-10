// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALsSoVwFpEl9EgmMLHFFj-DY2Vd4rsqhs",
  authDomain: "blogging-app-3f804.firebaseapp.com",
  projectId: "blogging-app-3f804",
  storageBucket: "blogging-app-3f804.appspot.com",
  messagingSenderId: "207171722796",
  appId: "1:207171722796:web:6697c4635e88dbcc59bb89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
