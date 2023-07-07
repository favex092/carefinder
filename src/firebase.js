// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRPQi-ySprVVIDolaCLJLgq7qZVal5RMo",
  authDomain: "carefinder-e8e44.firebaseapp.com",
  projectId: "carefinder-e8e44",
  storageBucket: "carefinder-e8e44.appspot.com",
  messagingSenderId: "1015097307183",
  appId: "1:1015097307183:web:ef30547de0618b92d996da",
  measurementId: "G-J15SMQPFV3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);

