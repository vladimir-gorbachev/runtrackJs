function bisextile(année) {
    // Si l'année est divisible par 400, elle est bissextile
    if (année % 400 === 0) {
        return true;
    }
    // Si l'année est divisible par 100, elle n'est PAS bissextile
    if (année % 100 === 0) {
        return false;
    }
    // Si l'année est divisible par 4, elle est bissextile
    if (année % 4 === 0) {
        return true;
    }
    // Sinon, elle n'est pas bissextile
    return false;
}

// Tests de la fonction
console.log(bisextile(2024)); // true (bissextile)
console.log(bisextile(2023)); // false (non bissextile)
console.log(bisextile(2000)); // true (bissextile)
console.log(bisextile(1900)); // false (non bissextile)
