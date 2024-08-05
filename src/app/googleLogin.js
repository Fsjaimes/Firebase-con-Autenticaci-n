import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const googleButton = document.querySelector("#googleLogin");

googleButton.addEventListener("click", async (e) => {
  e.preventDefault();

  const provider = new GoogleAuthProvider();  //configura un proveedor de autenticación para el inicio de sesión con Google
  try {
    const credentials = await signInWithPopup(auth, provider) //inicia el proceso de autenticación con Google utilizando un cuadro de diálogo emergente
    console.log(credentials);
    console.log("ingresó con google");
    
    // Cerrar el modal
    const modalInstance = bootstrap.Modal.getInstance(document.querySelector('#ingresar'))
    modalInstance.hide();

    // mensaje de bienvenida
    showMessage("Welcome " + credentials.user.displayName);
  } catch (error) {
    console.log(error);
  }
});