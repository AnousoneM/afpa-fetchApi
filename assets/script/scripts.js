let url = 'https://randomuser.me/api/'

// utilisation de fetch pour aller recupérer les données
fetch(url)
.then(response => response.json()) // je transforme la réponse en 
.then(data => {
    console.log(data)
})
.catch(error => console.log(error))