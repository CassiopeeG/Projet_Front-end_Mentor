// Variables globales
const arrAjouterPaniers = document.querySelectorAll(".ajouter")
const arrPaniersChoisis = document.querySelectorAll(".choisi") //valider que encore utile
const arrBoutonsQuantite = document.querySelectorAll(".choisi svg") 

// Écouteurs d'événements
for(i = 0; i < arrAjouterPaniers.length; i++){
    arrAjouterPaniers[i].addEventListener("click", afficherPanierChoisi)
}

for(i = 0; i < arrBoutonsQuantite.length; i++){
    arrBoutonsQuantite[i].addEventListener("click", modifierQuantite)
}

//Fonctions
function afficherPanierChoisi(e){
    let panierActif = e.currentTarget
    let refPanierActifChoisi = panierActif.closest(".item").querySelector(".choisi")

    panierActif.classList.add("hidden")
    refPanierActifChoisi.classList.remove("hidden")
}

function afficherAjouterPanier(panierActif){
    let refPanierActifAjouter = panierActif.closest(".item").querySelector(".ajouter")

    panierActif.classList.add("hidden")
    refPanierActifAjouter.classList.remove("hidden")
}

function  modifierQuantite(e){
    let boutonChoisi = e.currentTarget
    let panierActif = boutonChoisi.closest(".choisi")
    let refAffichageQuantite = panierActif.querySelector("h4")
    let intNombreAffiché = parseInt(refAffichageQuantite.innerHTML)
    let intQuantite = 1

    //Pour soustraire
    if(boutonChoisi.classList == "soustraire"){
        intQuantite = intNombreAffiché - 1 
    }
    else{ //Pour additionner
        intQuantite = intNombreAffiché + 1 
    }

    //Afficher la quantité
    refAffichageQuantite.innerHTML = intQuantite

    //Si aucun item choisi, enlever l'affichage de quantité
    if(intQuantite <= 0){
        afficherAjouterPanier(panierActif)
        refAffichageQuantite.innerHTML = 0
    }
    else{ //Sinon afficher le nombre d'item dans le panier
        ajouterItemAuPanier(intQuantite, panierActif.closest(".item").id)
    }
}

function  ajouterItemAuPanier(intQuantite, idItem){
    console.log(intQuantite + ", " + idItem)

    
}