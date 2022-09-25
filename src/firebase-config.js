import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBdwqzrEGpS47IA-TTtOTEI5oMJ3l0tKPA",
  authDomain: "order-here-ba677.firebaseapp.com",
  projectId: "order-here-ba677",
  storageBucket: "order-here-ba677.appspot.com",
  messagingSenderId: "515540655122",
  appId: "1:515540655122:web:754edf8c2fcca0ce980ccb",
  measurementId: "G-ZSBEJP5HCE"
};



const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);