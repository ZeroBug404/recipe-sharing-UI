// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLiEIVHeazjyGW0lwQsDnsFFXm-qebZkA",
  authDomain: "recipe-sharing-18221.firebaseapp.com",
  projectId: "recipe-sharing-18221",
  storageBucket: "recipe-sharing-18221.appspot.com",
  messagingSenderId: "1001174323132",
  appId: "1:1001174323132:web:fbfafb26ed26fd417de5b9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
