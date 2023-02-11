// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB-dORjgmgf4K-Fr4wRu519tDBJbU-FM-s',
  authDomain: 'dream-house-c097b.firebaseapp.com',
  projectId: 'dream-house-c097b',
  storageBucket: 'dream-house-c097b.appspot.com',
  messagingSenderId: '122083123350',
  appId: '1:122083123350:web:c8c6168ac0a4611d4622b7',
  measurementId: 'G-M1F8ZHTMGC',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
const analytics = getAnalytics(app);
