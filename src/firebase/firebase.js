import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  appId: import.meta.env.VITE_API_APP_ID,
  projectId: import.meta.env.VITE_API_PROJECT_ID,
  authDomain: import.meta.env.VITE_API_AUTH_DOMAIN,
  storageBucket: import.meta.env.VITE_API_STORAGE_BUCKET,
  measurementId: import.meta.env.VITE_API_MEASUREMENT_ID,
  messagingSenderId: import.meta.env.VITE_API_MESSAGING_SENDER_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const fireDB = getFirestore(app);
const provider = new GoogleAuthProvider();

export { provider, auth, fireDB };
