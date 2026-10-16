// Cuando la página termina de cargar
window.addEventListener("load", function() {
  const loader = document.getElementById("loader");

  // Esperar 3 segundos y ocultar el loader
  setTimeout(function() {
    loader.style.display = "none";
  }, 3000);
});