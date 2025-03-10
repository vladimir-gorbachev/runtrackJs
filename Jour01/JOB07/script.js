function jourTravaille(date) { 
    // Liste des jours fériés en France pour 2024
    let joursFeries = [
        "2024-01-01", // Jour de l'An
        "2024-04-01", // Lundi de Pâques
        "2024-05-01", // Fête du Travail
        "2024-05-08", // Victoire 1945
        "2024-05-09", // Ascension
        "2024-05-20", // Lundi de Pentecôte
        "2024-07-14", // Fête Nationale
        "2024-08-15", // Assomption
        "2024-11-01", // Toussaint
        "2024-11-11", // Armistice 1918
        "2024-12-25"  // Noël
    ];

    // Extraction du jour, mois et année
    let jour = date.getDate();
    let mois = date.getMonth() + 1; // getMonth() commence à 0
    let annee = date.getFullYear();

    // Formatage de la date en "DD-MM-YYYY"
    let dateFormat = `${jour.toString().padStart(2, '0')}-${mois.toString().padStart(2, '0')}-${annee}`;

    // Vérifier si c'est un jour férié
    if (joursFeries.includes(dateFormat)) {
        console.log(`Le ${jour} ${mois} ${annee} est un jour férié.`);
        return;
    }

    // Vérifier si c'est un week-end (samedi ou dimanche)
    let jourSemaine = date.getDay(); // 0 = Dimanche, 6 = Samedi
    if (jourSemaine === 0 || jourSemaine === 6) {
        console.log(`Non, le ${jour} ${mois} ${annee} est un week-end.`);
        return;
    }

    // Sinon, c'est un jour travaillé
    console.log(`Oui, le ${jour} ${mois} ${annee} est un jour travaillé.`);
}

// 🔹 Exemples de test
jourTravaille(new Date(2024, 0, 1)); // Jour férié (1er janvier)
jourTravaille(new Date(2024, 4, 1)); // Jour férié (1er mai)
jourTravaille(new Date(2024, 6, 14)); // Jour férié (14 juillet)
jourTravaille(new Date(2024, 2, 15)); // Jour travaillé (15 mars)
jourTravaille(new Date(2024, 9, 12)); // Samedi (week-end)
jourTravaille(new Date(2024, 9, 13)); // Dimanche (week-end)
