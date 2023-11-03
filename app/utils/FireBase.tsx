// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALbQ9yQQ5-St-gDO8USXDpiA1rQZhzi_I",
  authDomain: "tapp-de944.firebaseapp.com",
  projectId: "tapp-de944",
  storageBucket: "tapp-de944.appspot.com",
  messagingSenderId: "192784549277",
  appId: "1:192784549277:web:36ef1c7abbd0d4658b9b74",
  measurementId: "G-1EWRXNFDMS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

let userObj = auth.currentUser;

onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      userObj = user;
      console.log(`Got the user signed`);
      // ...
    } else {
      // User is signed out
      // ...
      userObj = null;
      console.log(`Signed out`);
    }
  });
  

export { auth, provider };
