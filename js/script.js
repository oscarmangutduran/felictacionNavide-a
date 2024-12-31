function showGreeting() {
    const nameInput = document.getElementById('nameInput').value;
    const greetingMessage = document.getElementById('greetingMessage');
    const villancico = document.getElementById('villancico');

    if (nameInput.trim() !== "") {
        greetingMessage.textContent = `¡Feliz Año 2025, ${nameInput}!`;
        villancico.play();
    } else {
        greetingMessage.textContent = "Por favor, ingresa tu nombre.";
    }
}
