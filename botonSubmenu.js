document.addEventListener("DOMContentLoaded", function() {
  const boton = document.querySelector(".dropbtn");
  const menu = document.getElementById("myDropdown");

  console.log(boton); // debe mostrar el botón
  console.log(menu);  // debe mostrar el menú

  boton.addEventListener("click", function() {
    menu.classList.toggle("show");
    console.log("Clase 'show' aplicada:", menu.classList.contains("show"));
  });
});