//import {createUserWithEmailAndPassword} from "firebase/auth"
import {auth} from "./firebase.js"
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { showMessage } from "./showMessage.js"

const signupForm = document.querySelector('#signup-form')

signupForm.addEventListener('submit', async (e) =>{   //Le pasamos el evento y luego lo capturamos con e
    e.preventDefault()  //CAncela el comportamiento por defecto

    const email = signupForm['signup-email'].value    //con signupFrom se extrae el elemento signup-email y solo su valor
    const password = signupForm['signup-password'].value

    console.log(email, password)

    try{
        const user = await createUserWithEmailAndPassword(auth, email, password)    //Crear ususario
        console.log(user)
        const registrar = document.querySelector('#registrar')
        
        const modal = bootstrap.Modal.getInstance(registrar)    //Cerrar el modal
        modal.hide();   //Cierra modal

        showMessage("Bienvenido " + user.user.email)
    }
    catch(error){   //Validaciones en correo y contraseña
        if (error.code === 'auth/email-already-in-use') {
            showMessage("El correo está en uso...", "error")  //Toastify
          } else if (error.code === 'auth/invalid-email') {
            showMessage("Correo invalido", "error")
          } else if (error.code === 'auth/weak-password') {
            showMessage("Contraseña insegura", "error")
          } else if (error.code) {
            showMessage("Algo ocurrió mal...:C", "error")
          }
    }
})