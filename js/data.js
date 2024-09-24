// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    // Buscamos el elemento en la página que tiene el ID "data" y lo guarda en la variable 'dataDisplay'
    const dataDisplay = document.getElementById("data");
    //  Recuperamos el valor almacenado en localStorage
    const storedValue = localStorage.getItem("userInput");
    // Comprobamos si hay un valor almacenado en 'storedValue'
    if (storedValue) {
        dataDisplay.textContent = storedValue;
    } else {
        dataDisplay.textContent = "No hay datos disponibles.";
    }
});
