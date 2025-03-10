function tri(numbers, order) {
    if (order === "asc") {
        // Si l'ordre est "asc", on trie par ordre croissant
        return numbers.sort((a, b) => a - b);
    } else if (order === "desc") {
        // Si l'ordre est "desc", on trie par ordre décroissant
        return numbers.sort((a, b) => b - a);
    } else {
        // Si l'ordre n'est ni "asc" ni "desc", on retourne une erreur ou un tableau non trié
        console.log("Erreur: l'ordre doit être 'asc' ou 'desc'");
        return numbers;
    }
}

// Test de la fonction
console.log(tri([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5], "asc"));  
console.log(tri([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5], "desc")); 
console.log(tri([17, 14, 45, 1, 551, 59, 32, 66, 57, 38, 55], "asc")); 
