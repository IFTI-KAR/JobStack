// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0bWPqNRUBTUel4sd3yi3FJgc-e6pCPFM",
  authDomain: "jobstack-ac268.firebaseapp.com",
  projectId: "jobstack-ac268",
  storageBucket: "jobstack-ac268.firebasestorage.app",
  messagingSenderId: "773865391277",
  appId: "1:773865391277:web:f7acfe84013e974fd8f224"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;