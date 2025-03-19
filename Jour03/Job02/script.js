$(function() {
    const correctOrder = ["arc1.png", "arc2.png", "arc3.png", "arc4.png", "arc5.png", "arc6.png"];
    let images = correctOrder.slice();  // Copie du bon ordre
    let selectedImages = [];  // Tableau pour suivre l'ordre de sélection
    let history = [];  // Historique des actions (déplacements des images)
    let redoHistory = [];  // Historique des actions annulées (pour Ctrl+Y)

    // Fonction pour afficher les images dans leur ordre actuel
    function renderImages() {
        $('#imageList').empty();  // Vide la liste avant de la remplir
        for (let i = 0; i < images.length; i++) {
            const imgElement = `<li><img src="${images[i]}" alt=""></li>`;
            $('#imageList').append(imgElement);
        }
    }

    // Afficher les images sélectionnées
    function renderSelectedImages() {
        $('#selectedImages').empty();  // Vide la liste avant de la remplir
        for (let i = 0; i < selectedImages.length; i++) {
            const imgElement = `<li><img src="${selectedImages[i]}" alt=""></li>`;
            $('#selectedImages').append(imgElement);
        }
        checkWinningCondition();
    }

    // Vérifier si l'arc-en-ciel est bien reconstitué
    function checkWinningCondition() {
        if (selectedImages.length === 6) {
            const isCorrect = selectedImages.every((image, index) => image === correctOrder[index]);
            $('#resultMessage').text(isCorrect ? "Vous avez gagné !" : "Vous avez perdu !")
                               .css('color', isCorrect ? 'green' : 'red');
        } else {
            $('#resultMessage').text('');
        }
    }

    // Mélanger les images
    $('#shuffle').on('click', function() {
        images.sort(() => Math.random() - 0.5);  // Mélange aléatoire
        renderImages();
    });

    // Ordonner les images
    $('#order').on('click', function() {
        images = correctOrder.slice();  // Restaurer l'ordre initial
        renderImages();
    });

    // Déplacer une image vers le conteneur "selectedImages"
    $('#imageList').on('click', 'img', function() {
        const imageSrc = $(this).attr('src');

        // Ajouter l'image dans le tableau "selectedImages" sans vérifier si elle est déjà présente
        selectedImages.push(imageSrc);

        // Si plus de 6 images dans selectedImages, supprimer la plus ancienne (le premier élément)
        if (selectedImages.length > 6) {
            selectedImages.shift();
        }

        renderSelectedImages();
        renderImages();

        // Ajouter l'action au tableau history (source, destination)
        history.push({ action: 'move', image: imageSrc });
        redoHistory = [];  // Effacer l'historique redo après une nouvelle action
    });

    // Fonction pour annuler l'action (Ctrl+Z)
    $(document).on('keydown', function(e) {
        if (e.ctrlKey && e.key === 'z') {  // Si Ctrl+Z est pressé
            const lastAction = history.pop();  // Récupère la dernière action
            if (lastAction) {
                if (lastAction.action === 'move') {
                    // Si c'était une image déplacée, on la retire de #selectedImages
                    const imageSrc = lastAction.image;
                    selectedImages = selectedImages.filter((image, index) => index !== selectedImages.lastIndexOf(imageSrc));
                    renderSelectedImages();
                    renderImages();

                    // Ajouter l'action à redoHistory pour pouvoir la rétablir
                    redoHistory.push(lastAction);
                }
            }
        }

        // Fonction pour rétablir l'action (Ctrl+Y)
        if (e.ctrlKey && e.key === 'y') {  // Si Ctrl+Y est pressé
            const lastUndoAction = redoHistory.pop();  // Récupère la dernière action annulée
            if (lastUndoAction) {
                if (lastUndoAction.action === 'move') {
                    // Si c'était une image déplacée, on la remet dans #selectedImages
                    const imageSrc = lastUndoAction.image;
                    selectedImages.push(imageSrc);

                    // Si plus de 6 images dans selectedImages, supprimer la plus ancienne (le premier élément)
                    if (selectedImages.length > 6) {
                        selectedImages.shift();
                    }

                    renderSelectedImages();
                    renderImages();

                    // Ajouter l'action au tableau history pour qu'elle puisse être annulée plus tard
                    history.push(lastUndoAction);
                }
            }
        }
    });

    // Réinitialiser les images sélectionnées
    $('#clean').on('click', function() {
        selectedImages = [];  // Réinitialise les images sélectionnées
        images = correctOrder.slice();  // Réinitialise les images dans le bon ordre
        history = [];  // Réinitialise l'historique
        redoHistory = [];  // Réinitialise l'historique redo
        renderSelectedImages();
        renderImages();
    });

    // Afficher les images initialement
    renderImages();
});