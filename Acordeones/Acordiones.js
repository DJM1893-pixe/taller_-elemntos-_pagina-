document.addEventListener("DOMContentLoaded", function() {
  // Selecciona todos los botones con clase "accordion"
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach(function(button) {
    button.addEventListener("click", function() {
      // El panel es el siguiente elemento hermano del botón
      const panel = this.nextElementSibling;

      // Si está visible, lo ocultamos; si está oculto, lo mostramos
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  });
});