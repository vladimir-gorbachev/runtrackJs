function estPremier(nombre) {
    if (nombre <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(nombre); i++) {
        if (nombre % i === 0) {
            return false; 
        }
    }
    return true; }

function sommeNombresPremiers(nombre1, nombre2) {
    if (estPremier(nombre1) && estPremier(nombre2)) {
        return nombre1 + nombre2;
    }
    return false; 
}


console.log(sommeNombresPremiers(3, 5));  
console.log(sommeNombresPremiers(4, 5));  
console.log(sommeNombresPremiers(7, 13)); 
