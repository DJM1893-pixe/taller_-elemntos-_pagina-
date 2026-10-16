// Referencias
const myBtn = document.getElementById("myBtn");
const menu = document.getElementById("menu");

// Mostrar/ocultar botón y cambiar color del menú
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    myBtn.style.display = "block"; // aparece el botón
    menu.style.backgroundColor = "orange"; // cambia color del menú
  } else {
    myBtn.style.display = "none"; // desaparece el botón
    menu.style.backgroundColor = "black"; // vuelve al color original
  }
});

// Al hacer clic en el botón, subir suavemente al inicio
myBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});