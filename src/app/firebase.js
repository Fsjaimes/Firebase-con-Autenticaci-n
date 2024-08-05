//import { initializeApp } from "firebase/app";
//import {getAuth} from "firebase/auth"
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyDA1x0EvH2B2y6gQlE4z-KzRL-senviX-w",
  authDomain: "fir-auth-dabe6.firebaseapp.com",
  projectId: "fir-auth-dabe6",
  storageBucket: "fir-auth-dabe6.appspot.com",
  messagingSenderId: "703259549775",
  appId: "1:703259549775:web:6132a6c493b1889d114a3a"
};

// Inicializacion de Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)  //Se activa la forma de autenticar

