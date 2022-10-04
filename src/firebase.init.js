// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNHe00TsIv8DnueP-giRjBB51x8qwXjzk",
  authDomain: "my-car-care-point.firebaseapp.com",
  projectId: "my-car-care-point",
  storageBucket: "my-car-care-point.appspot.com",
  messagingSenderId: "761737196295",
  appId: "1:761737196295:web:4f187d0e5d5bfbdc774ba2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;