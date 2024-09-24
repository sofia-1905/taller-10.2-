// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    // Selecciona el boton y el campo de entrada usando su ID
    const button = document.getElementById("buttonText");
    const inputText = document.getElementById("inputText");
    // Agragamos un evento al boton 
    button.addEventListener("click", () => {
        // Obtenemos el valor ingresado por el usuario 
        const value = inputText.value;
        // Almacenamos el valor en localStorage
        localStorage.setItem("userInput", value);

        inputText.value = "";
    });
});