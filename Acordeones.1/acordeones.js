  // Declaramos las variables con getElementById
  const check = document.getElementById("myCheck");
  const text = document.getElementById("text");

  // Usamos el evento change
  check.addEventListener("change", () => {
    if (check.checked) {
      text.style.display = "block"; // mostrar
    } else {
      text.style.display = "none";  // ocultar
    }
  });