function addOne() {
    let compteur = document.getElementById("compteur");

    let valeurActuelle = parseInt(compteur.textContent);
    valeurActuelle++;

    compteur.textContent = valeurActuelle;
}

document.getElementById("button").addEventListener("click", addOne);
