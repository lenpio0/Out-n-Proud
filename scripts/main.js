function loadHTML(html, id){
    fetch(html)
    .then(response=> response.text())
    .then(text=> document.querySelector('#' + id).innerHTML = text);
}

// Rentrer le nom du fichier en premier paramètre, l'id de la section en second

loadHTML('landing.html', 'landing');