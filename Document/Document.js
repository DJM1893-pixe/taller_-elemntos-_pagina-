        // Declaramos variables con getElementById
        const selectHelado = document.getElementById("nieve");
        const resultado = document.getElementById("resultado");

        // Verificamos que el elemento exista antes de usarlo
        if (selectHelado && resultado) {
            selectHelado.addEventListener("change", () => {
                if (selectHelado.value) {
                    resultado.textContent = "Has escogido: " + 
                        selectHelado.options[selectHelado.selectedIndex].text;
                } else {
                    resultado.textContent = ""; // vacío si no selecciona nada
                }
            });
        }