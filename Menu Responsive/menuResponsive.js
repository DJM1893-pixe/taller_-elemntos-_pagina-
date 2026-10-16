let boton = document.querySelector(".icon");
console.log(boton);
let menu = document.querySelector("#myNavbar");
    menu.classList.toggle("responsive");

    boton.addEventListener("click", function() {
  menu.classList.toggle("responsive");
});