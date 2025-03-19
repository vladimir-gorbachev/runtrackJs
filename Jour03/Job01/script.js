$(function() {
    const text = "Les logiciels et les cathédrales, c'est un peu la même chose - d'abord, on les construit, ensuite, on prie.";
  
    // Afficher le texte au clic
    $('#showText').on('click', function() {
      $('#textContainer').text(text).show();
    });
  
    // Cacher/Afficher le texte au clic
    $('#hideText').on('click', function() {
      $('#textContainer').hide();
    });
  });
  