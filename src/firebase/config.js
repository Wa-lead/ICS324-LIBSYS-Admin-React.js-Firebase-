// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNR8a9jCbfdjI4BkHPw_NbD1ZdmATm8Rs",
  authDomain: "libsys-6a2a7.firebaseapp.com",
  projectId: "libsys-6a2a7",
  storageBucket: "libsys-6a2a7.appspot.com",
  messagingSenderId: "148782216634",
  appId: "1:148782216634:web:8adfb75bbb1f8a6d481983",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const projectStorage = getStorage(app);
const projectFirestore = getFirestore(app);

export { projectStorage, projectFirestore };