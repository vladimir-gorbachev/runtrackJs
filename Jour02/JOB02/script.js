function showhide() {
    let article = document.getElementById("citation");

    if (article) {
        article.remove();
    } else {
        let newArticle = document.createElement("article"); 
        newArticle.id = "citation"; 
        newArticle.textContent = "L'important n'est pas la chute, mais l'atterrissage."; 
        
        document.body.appendChild(newArticle);
    }
}
document.getElementById("button").addEventListener("click", showhide);
