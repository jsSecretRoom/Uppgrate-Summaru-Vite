// firebaseConfig2.js
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const API_KEY2 = import.meta.env.VITE_API_KEY2;
const AUTH_DOMAIN2 = import.meta.env.VITE_AUTH_DOMAIN2;
const PROJECT_ID2 = import.meta.env.VITE_PROJECT_ID2;
const STORAGE_BUCKET2 = import.meta.env.VITE_STORAGE_BUCKET2;
const MESSAGING_SENDER_ID2 = import.meta.env.VITE_MESSAGING_SENDER_ID2;
const APP_ID2 = import.meta.env.VITE_APP_ID2;
const MEASUREMENT_ID2 = import.meta.env.VITE_MEASUREMENT_ID2;

// Инициализируйте второй экземпляр Firebase с именем 'app2'
const firebaseConfig2 = {
  apiKey: API_KEY2,
  authDomain: AUTH_DOMAIN2,
  projectId: PROJECT_ID2,
  storageBucket: STORAGE_BUCKET2,
  messagingSenderId: MESSAGING_SENDER_ID2,
  appId: APP_ID2,
  measurementId: MEASUREMENT_ID2
};

export const app2 = initializeApp(firebaseConfig2, "app2");
export const db2 = getFirestore(app2);
