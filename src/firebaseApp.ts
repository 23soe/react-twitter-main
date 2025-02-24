import { initializeApp, FirebaseApp, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export let app: FirebaseApp;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs00yqvVmo3L8LdtvkfgRIedlcrj2SDd0",
  authDomain: "react-twitter-app-da482.firebaseapp.com",
  projectId: "react-twitter-app-da482",
  storageBucket: "react-twitter-app-da482.firebasestorage.app",
  messagingSenderId: "746132957417",
  appId: "1:746132957417:web:ba2ac4808e14657f096878"
};

try {
  app = getApp("app");
} catch (e) {
  app = initializeApp(firebaseConfig, "app");
}

const firebase = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const storage = getStorage(app);

export default firebase;
