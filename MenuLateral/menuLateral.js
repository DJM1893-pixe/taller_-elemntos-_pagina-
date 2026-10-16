document.addEventListener("DOMContentLoaded", function() {
  const sidebar = document.getElementById("mySidebar");
  const openBtn = document.getElementById("openBtn");
  const closeBtn = document.getElementById("closeBtn");

  openBtn.addEventListener("click", function() {
    sidebar.style.left = "0"; // mostrar menú lateral
  });

  closeBtn.addEventListener("click", function() {
    sidebar.style.left = "-200px"; // ocultar menú lateral
  });
});