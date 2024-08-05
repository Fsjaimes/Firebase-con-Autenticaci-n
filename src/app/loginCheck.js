const loggedOutLinks = document.querySelectorAll(".logged-out");  //Selecciona todos los elementos del DOM que tienen la clase logged-out
const loggedInLinks = document.querySelectorAll(".logged-in");

export const loginCheck = (user) => {
  if (user) {
    loggedInLinks.forEach((link) => (link.style.display = "block"));  //Recorre los elementos y cambia a block o noen
    loggedOutLinks.forEach((link) => (link.style.display = "none"));  
  } else {
    loggedInLinks.forEach((link) => (link.style.display = "none"));
    loggedOutLinks.forEach((link) => (link.style.display = "block"));
  }
};