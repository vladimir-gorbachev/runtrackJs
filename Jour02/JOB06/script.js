const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

let userInput = [];

document.addEventListener("keydown", ({ key }) => {
    userInput = [...userInput, key].slice(-konamiCode.length);

    if (userInput.length === konamiCode.length && userInput.every((val, i) => val === konamiCode[i])) {
        activateKonamiMode();
        userInput = []; // Reset après activation
    }
});

function activateKonamiMode() {
    document.body.classList.add("konami-active");

    const message = document.createElement("p");
    message.innerText = "🎉 Code Konami activé ! 🎮";
    message.style.cssText = "font-size: 2rem; margin-top: 20px;";
    document.body.appendChild(message);

    setTimeout(() => {
        document.body.classList.remove("konami-active");
        message.remove();
    }, 3000);
}
