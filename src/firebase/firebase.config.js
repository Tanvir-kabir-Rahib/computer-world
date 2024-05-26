// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsIRcaGeulqgaql8fioDfPQvkZ96gUmz4",
  authDomain: "computer-world-practicetask.firebaseapp.com",
  projectId: "computer-world-practicetask",
  storageBucket: "computer-world-practicetask.appspot.com",
  messagingSenderId: "326383754876",
  appId: "1:326383754876:web:96a28e98ad81b9ba81b3f9",
  measurementId: "G-3XNFMZSPST"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);