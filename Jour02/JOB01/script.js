function citation() {
    let elementCitation = document.getElementById("citation");
    
    let texteCitation = elementCitation.textContent;
    
    console.log(texteCitation);
}

document.getElementById("button").addEventListener("click", citation);
