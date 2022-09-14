//GESTION DES FORMULAIRES

function openFormConnec() {
    document.getElementById("myFormConnec").style.display = "block";
}

function closeFormConnec() {
    document.getElementById("myFormConnec").style.display = "none";
}
/*
function openFormInscr() {
    document.getElementById("myFormInscr").style.display = "block";
}

function closeFormInscr() {
    document.getElementById("myFormInscr").style.display = "none";
}
*/
//GESTION DES ONGLETS

function home(){
    location.reload();/*
    document.getElementById("film").hidden = false;
    document.getElementById("filmIndividuel").hidden = true;
    document.getElementById("listes").hidden = true;
    document.getElementById("suggestion").hidden = true;
    document.getElementById("myFormInscr").hidden = true;*/
}

function openListes(){/*
    document.getElementById("listes").hidden = false;
    document.getElementById("film").hidden = true;
    document.getElementById("suggestion").hidden = true;
    document.getElementById("tri").hidden = true;
    document.getElementById("myFormInscr").hidden = true;
    document.getElementById("filmIndividuel").hidden = true;*/
}

function openSuggestions(){/*
    document.getElementById("suggestion").hidden = false;
    document.getElementById("tri").hidden = false;
    document.getElementById("listes").hidden = true;
    document.getElementById("film").hidden = true;
    document.getElementById("myFormInscr").hidden = true;
    document.getElementById("filmIndividuel").hidden = true;*/
}

function openProfil(){/*
    document.getElementById("suggestion").hidden = true;
    document.getElementById("film").hidden = true;
    document.getElementById("listes").hidden = true;
    document.getElementById("tri").hidden = true;
    document.getElementById("myFormInscr").hidden = true;
    document.getElementById("filmIndividuel").hidden = true;*/
}

function openInscription(){/*
    document.getElementById("myFormInscr").hidden = false;
    document.getElementById("film").hidden = true;
    document.getElementById("listes").hidden = true;
    document.getElementById("suggestion").hidden = true;
    document.getElementById("tri").hidden = true;
    document.getElementById("filmIndividuel").hidden = true;*/
}

function openFilmIndiv(){/*
    document.getElementById("filmIndividuel").hidden = false;
    document.getElementById("tri").hidden = true;
    document.getElementById("film").hidden = true;
    document.getElementById("listes").hidden = true;
    document.getElementById("suggestion").hidden = true;
    document.getElementById("myFormInscr").hidden = true;*/
}

function userGetConnected(){
    document.getElementById("liste").hidden = false;
    document.getElementById("suggestions").hidden = false;
    document.getElementById("profil").hidden = false;
    document.getElementById("tri").hidden = false;
    document.getElementById("film").hidden = false;
    document.getElementById("deconnection").hidden = false;
    document.getElementById("inscription").hidden = true;
    document.getElementById("connection").hidden = true;
    document.getElementById("listes").hidden = true;
    document.getElementById("suggestion").hidden = true;
    document.getElementById("myFormInscr").hidden = true;
    document.getElementById("filmIndividuel").hidden = true;
}

function userGetDisconnected(){
    document.getElementById("film").hidden = false;
    document.getElementById("inscription").hidden = false;
    document.getElementById("connection").hidden = false;
    document.getElementById("deconnection").hidden = true;
    document.getElementById("liste").hidden = true;
    document.getElementById("suggestions").hidden = true;
    document.getElementById("profil").hidden = true;
    document.getElementById("tri").hidden = true;
    document.getElementById("listes").hidden = true;
    document.getElementById("suggestion").hidden = true;
    document.getElementById("myFormInscr").hidden = true;
    document.getElementById("filmIndividuel").hidden = true;
}

function validateFormAccueil(){
    console.log("formulaire validé");
}

function validateFormAchat(){
    console.log("formulaire validé");
}

function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
    x = document.getElementById("form");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function faireDefilerCarouselAvant(id){
    x = document.getElementById(id);
    size = x.children.item(0).children.length;
    number=-1;
    for (let i=0 ; i < size ; i++){
        y = x.children.item(0).children.item(i);
        if (y.classList.contains('active')){
            y.classList.remove('active')
            number = i;
            break;
        }
    }
    if (number === size-1) {
        x.children.item(0).children.item(0).classList.add('active');
    }
    else x.children.item(0).children.item(number+1).classList.add('active');
}

function faireDefilerCarouselArriere(id){
    x = document.getElementById(id);
    size = x.children.item(0).children.length;
    number=-1;
    for (let i=0 ; i < size ; i++){
        y = x.children.item(0).children.item(i);
        if (y.classList.contains('active')){
            y.classList.remove('active')
            number = i;
            break;
        }
    }
    if (number === 0) {
        x.children.item(0).children.item(size-1).classList.add('active');
    }
    else x.children.item(0).children.item(number-1).classList.add('active');
}