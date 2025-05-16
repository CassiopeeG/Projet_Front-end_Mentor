// Variables globales
const arrAjouterPaniers = document.querySelectorAll(".ajouter")
const arrPaniersChoisis = document.querySelectorAll(".choisi") //valider que encore utile
const arrBoutonsQuantite = document.querySelectorAll(".choisi svg") 
//Variables pour le panier
const arrItems = document.querySelectorAll(".item")
const arrQuantiteItems = document.querySelectorAll(".item > .choisi > h4")
const arrNomItems = document.querySelectorAll(".item > .nom")
const arrPrixItems = document.querySelectorAll(".item > .prix")

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

    //Afficher le nombre d'item dans le panier
    afficherItemAuPanier()
}

function  afficherItemAuPanier(){

    for(i = 0; i < arrItems.length; i++){
        let intQuantité = parseInt(arrQuantiteItems[i].innerHTML)
        let strNom = arrNomItems[i].innerHTML
        //ENLEVER LE $ au début du string
        let strPrix = arrPrixItems[i].innerHTML
        let intPrix = parseFloat(strPrix.slice(1))

        console.log(intQuantité + ", " + strNom + ", " + intPrix)

        // if()
        // arrItems[i]
    }


    let refPanierVide = document.getElementById("panier-vide")
    refPanierVide.classList.add("hidden")



}