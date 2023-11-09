// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfh_8WMlPzLCPYY7bTJI8d9308_wZaUOA",
  authDomain: "fir-login-tutorial-aa708.firebaseapp.com",
  projectId: "fir-login-tutorial-aa708",
  storageBucket: "fir-login-tutorial-aa708.appspot.com",
  messagingSenderId: "583118759709",
  appId: "1:583118759709:web:c4ef9cafc62bbcf8e963f4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
