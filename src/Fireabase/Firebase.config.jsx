// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_Jymet0FNharjoTY3uQxAA_pYvubq3mY",
  authDomain: "bistroa-client.firebaseapp.com",
  projectId: "bistroa-client",
  storageBucket: "bistroa-client.appspot.com",
  messagingSenderId: "261734490634",
  appId: "1:261734490634:web:adb3baf5bdb91e41a735f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;