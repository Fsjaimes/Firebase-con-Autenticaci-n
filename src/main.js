import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import {auth} from "./app/firebase.js"
import {loginCheck} from "./app/loginCheck.js"

import "./app/signupForm.js"
import "./app/signinForm.js"
import "./app/googleLogin.js"
import "./app/githubLogin.js"
import "./app/logout.js"

onAuthStateChanged(auth, async (user) =>{       //Funcion para cambios de estado del usuario
    loginCheck(user)
})
