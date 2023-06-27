import { initializeApp } from "firebase/app";
import { getFirestore,collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACnNnyBVheMX03hbj_lD6FEpUn8NcBmXE",
  authDomain: "filmyverse-a06c1.firebaseapp.com",
  projectId: "filmyverse-a06c1",
  storageBucket: "filmyverse-a06c1.appspot.com",
  messagingSenderId: "906907148852",
  appId: "1:906907148852:web:3dc64b0d8ed873871b2061"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const moviesRef = collection(db,"movies");
export const reviewsRef = collection(db,"reviews");
export const usersRef = collection(db,"users");


export default app;