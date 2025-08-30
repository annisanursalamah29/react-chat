// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSl037uHiwmUHhvTlQ7v7cUKMaXpL_EuA",
  authDomain: "pesan-react.firebaseapp.com",
  projectId: "pesan-react",
  storageBucket: "pesan-react.firebasestorage.app",
  messagingSenderId: "428720871065",
  appId: "1:428720871065:web:6ee4cc5121923d52014a08"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

