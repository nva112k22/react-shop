import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDBl2pZPwyfeb_2csxBzyI31Lxw2whUX0A",
  authDomain: "shop-fc79b.firebaseapp.com",
  projectId: "shop-fc79b",
  storageBucket: "shop-fc79b.appspot.com",
  messagingSenderId: "412145969527",
  appId: "1:412145969527:web:9972e8a3c7bf0b23af1972"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
