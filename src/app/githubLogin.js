  import { GithubAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js" 
  import { auth } from "./firebase.js";
  import { showMessage } from "./showMessage.js";

  const githubButton = document.querySelector("#githubLogin");

  githubButton.addEventListener("click", async (e) => {
    e.preventDefault();

    const provider = new GithubAuthProvider();  // configura el proveedor de autenticación para GitHub
    try {
      const credentials = await signInWithPopup(auth, provider) //inicia el proceso de autenticación con GitHub utilizando un cuadro de diálogo emergente
      console.log(credentials);
      console.log("google sign in");
      
      // Cerrar modal
      const modalInstance = bootstrap.Modal.getInstance(githubButton.closest('.modal'));
      modalInstance.hide();

      // Mensaje de bienvenida
      showMessage("Welcome " + credentials.user.displayName);
    } catch (error) {
      console.log(error);
    }
  });