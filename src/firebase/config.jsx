import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBliBXhhkC1sYLntPh_ItMSlreJG-Vroz8",
  authDomain: "countdown-board-app-d1330.firebaseapp.com",
  projectId: "countdown-board-app-d1330",
  storageBucket: "countdown-board-app-d1330.appspot.com",
  messagingSenderId: "925577278597",
  appId: "1:925577278597:web:70ade5c9b39cc0effa65ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);