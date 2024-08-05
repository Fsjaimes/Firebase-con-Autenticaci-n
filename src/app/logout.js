import { signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import {auth} from "./firebase.js"

const cerrar = document.querySelector('#cerrar')

cerrar.addEventListener('click', async () =>{
    await signOut(auth)
    console.log('User Salió')
}) 