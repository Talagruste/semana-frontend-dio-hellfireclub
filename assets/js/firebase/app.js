// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB50ScqKEDvNCV79TSdFVQPROhxza30_FE",
    authDomain: "dnd-subscribers.firebaseapp.com",
    projectId: "dnd-subscribers",
    storageBucket: "dnd-subscribers.appspot.com",
    messagingSenderId: "799900880752",
    appId: "1:799900880752:web:58492407ac0555a88549b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export default app