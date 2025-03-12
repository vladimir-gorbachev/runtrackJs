let ticking = false;

document.addEventListener("scroll", function () {
    if (!ticking) {  // Vérifie si une animation est déjà en cours
        requestAnimationFrame(() => {
            let scrollTop = document.documentElement.scrollTop;
            let scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
            let scrollPercent = (scrollTop / scrollTotal) * 100;
            let red = Math.min(255, Math.floor((scrollPercent / 100) * 255));
            let blue = 255 - red;

            document.querySelector("footer").style.backgroundColor = `rgb(${red}, 0, ${blue})`;

            ticking = false; // Réinitialisation du flag pour autoriser un nouveau calcul
        });

        ticking = true; // Empêche d'ajouter d'autres appels à requestAnimationFrame trop rapidement
    }
});
