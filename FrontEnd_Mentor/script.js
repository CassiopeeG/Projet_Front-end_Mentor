// Variables globales
const arrAjouterPaniers = document.querySelectorAll(".ajouter")
const arrPaniersChoisis = document.querySelectorAll(".choisi")

// Écouteurs d'événements
for(i = 0; i < arrAjouterPaniers.length; i++){
    arrAjouterPaniers[i].addEventListener("click", afficherPanierChoisi)
}

for(i = 0; i < arrPaniersChoisis.length; i++){
    arrPaniersChoisis[i].addEventListener("click", afficherAjouterPanier)
}

//Fonctions
function afficherPanierChoisi(e){
    let panierActif = e.currentTarget
    let refPanierActifChoisi = panierActif.closest(".item").querySelector(".choisi")

    panierActif.classList.add("hidden")
    refPanierActifChoisi.classList.remove("hidden")
}

function afficherAjouterPanier(e){
    let panierActif = e.currentTarget
    let refPanierActifAjouter = panierActif.closest(".item").querySelector(".ajouter")

    panierActif.classList.add("hidden")
    refPanierActifAjouter.classList.remove("hidden")
}

