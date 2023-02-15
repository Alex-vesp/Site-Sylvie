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


function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
    x = document.getElementById("form");
    achat = document.getElementById("nav-achat")
    footer = document.getElementById("footer")
    if (x != null && x.style.display === "none") {
        x.style.display = "block";
    } else  if (x != null){
        x.style.display = "none";
        document.getElementById("biens").style.display = "none";
    }
    if (achat != null && achat.style.display === "none") {
        achat.style.display = "block";
    } else  if (achat != null){
        achat.style.display = "none";
    }
    if (footer.style.display === "none"){
        footer.style.display = "block";
    }
    else {
        footer.style.display = "none";
    }
    if (document.getElementById("notreAgence") != null){
        if(document.getElementById("notreAgence").style.display === "none") {
            document.getElementById("notreAgence").style.display = "block";
        }
        else {
            document.getElementById("notreAgence").style.display = "none";
        }
    }

    if (document.getElementById("achat") != null){
        if(document.getElementById("achat").style.display === "none") {
            document.getElementById("achat").style.display = "block";
        }
        else {
            document.getElementById("achat").style.display = "none";
        }
    }

    if (document.getElementById("vendre") != null){
        if(document.getElementById("vendre").style.display === "none") {
            document.getElementById("vendre").style.display = "block";
        }
        else {
            document.getElementById("vendre").style.display = "none";
        }
    }

    if (document.getElementById("recrutement") != null){
        if(document.getElementById("recrutement").style.display === "none") {
            document.getElementById("recrutement").style.display = "block";
        }
        else {
            document.getElementById("recrutement").style.display = "none";
        }
    }

    if (document.getElementById("contact") != null){
        if(document.getElementById("contact").style.display === "none") {
            document.getElementById("contact").style.display = "block";
        }
        else {
            document.getElementById("contact").style.display = "none";
        }
    }

    if (document.getElementById("mention") != null){
        if(document.getElementById("mention").style.display === "none") {
            document.getElementById("mention").style.display = "block";
        }
        else {
            document.getElementById("mention").style.display = "none";
        }
    }

    if (document.getElementById("detailPageAchat") != null){
        if(document.getElementById("detailPageAchat").style.display === "none") {
            document.getElementById("detailPageAchat").style.display = "block";
        }
        else {
            document.getElementById("detailPageAchat").style.display = "none";
        }
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

function println(data) {
    console.log("DATA" + data);
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

function close(){
    var span = document.getElementsByClassName("close");
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
    console.log("here");
}

function faireDefilerCarouselAvantAchat(id){
    x = document.getElementById(id);
    size = x.children.item(4).children.length;
    number=-1;
    console.log(x)
    for (let i=0 ; i < size ; i++){
        y = x.children.item(4).children.item(i);
        if (y.classList.contains('active')){
            y.classList.remove('active')
            number = i;
            break;
        }
    }
    if (number === size-1) {
        x.children.item(4).children.item(0).classList.add('active');
    }
    else x.children.item(4).children.item(number+1).classList.add('active');
}


function faireDefilerCarouselArriereAchat(id){
    x = document.getElementById(id);
    size = x.children.item(4).children.length;
    number=-1;
    for (let i=0 ; i < size ; i++){
        y = x.children.item(4).children.item(i);
        if (y.classList.contains('active')){
            y.classList.remove('active')
            number = i;
            break;
        }
    }
    if (number === 0) {
        x.children.item(4).children.item(size-1).classList.add('active');
    }
    else x.children.item(4).children.item(number-1).classList.add('active');
}

async function validateFormContact() {
    emailjs.init('0Hy-X1pZusrJjhO_I');
    var name = document.getElementById('name').value;
    if (name == "") {
        document.querySelector('.status').innerHTML = "Veuillez renseigner votre nom";
        return false;
    }
    var email = document.getElementById('email').value;
    if (email == "") {
        document.querySelector('.status').innerHTML = "Veuillez renseigner votre adresse email";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) {
            document.querySelector('.status').innerHTML = "Format de l'adresse email incorrect";
            return false;
        }
    }
    var subject = document.getElementById('subject').value;
    if (subject == "") {
        document.querySelector('.status').innerHTML = "Veuillez renseigner un sujet";
        return false;
    }
    var message = document.getElementById('message').value;
    if (message == "") {
        document.querySelector('.status').innerHTML = "Veuillez renseigner un message";
        return false;
    }
    var tel = document.getElementById('tel').value;
    document.querySelector('.status').innerHTML = "Envoie en cours...";
    var formData = {
        name,
        email,
        subject,
        message,
        tel
    }
    emailjs.send("service_r7fxoim", "template_a51ugy3", formData);
    await new Promise(r => setTimeout(r, 2000));
    document.querySelector('.status').innerHTML = "Votre demande de contact a été envoyée avec succès...";
    await new Promise(r => setTimeout(r, 5000));
}

/**
 * https://dashboard.emailjs.com/
 *
 */

async function validateFormVente() {
    emailjs.init('0Hy-X1pZusrJjhO_I');
    var name = document.getElementById('name').value;
    if (name == "") {
        document.querySelector('.status').innerHTML = "Veuillez renseigner votre nom";
        return false;
    }
    var email = document.getElementById('email').value;
    if (email == "") {
        document.querySelector('.status').innerHTML = "Veuillez renseigner votre adresse email";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) {
            document.querySelector('.status').innerHTML = "Format de l'adresse email incorrect";
            return false;
        }
    }
    var type = document.getElementById('type').value;
    if (type == "") {
        document.querySelector('.status').innerHTML = "Veuillez renseigner le type du bien";
        return false;
    }
    var lieu = document.getElementById('lieu').value;
    if (lieu == "") {
        document.querySelector('.status').innerHTML = "Veuillez renseigner la situation géographique du bien";
        return false;
    }
    var surface = document.getElementById('surface').value;
    if (surface == "") {
        document.querySelector('.status').innerHTML = "Veuillez renseigner la surface du bien";
        return false;
    }
    var message = document.getElementById('message').value;
    if (message == "") {
        message = "Pas de message";
    }
    var tel = document.getElementById('tel').value;
    document.querySelector('.status').innerHTML = "Envoie en cours...";
    var formData = {
        name,
        email,
        type,
        lieu,
        tel,
        message,
        surface
    }
    emailjs.send("service_r7fxoim", "template_t6zuzon", formData);
    await new Promise(r => setTimeout(r, 2000));
    document.querySelector('.status').innerHTML = "Votre demande de vente a été envoyée avec succès...";
    await new Promise(r => setTimeout(r, 5000));
}



function openPictures(photos){
    document.getElementById("detailImages").style.display = "block";
    document.getElementById("detail").style.display = "none";
    var images = document.getElementById("images").children;
    if (images.length === 0){
        var photosList = photos.split(',');
        for (let i = 0; i < photosList.length; i++) {
            let elem = document.createElement("img");
            let div = document.createElement("div");
            elem.src = photosList[i];
            elem.style = 'width: 100%; object-fit: cover;" class="d-block w-100; margin-bottom : 3%;cursor:pointer;';
            elem.setAttribute( "onClick", "javascript: openNewTab(src);");
            //div.setAttribute('onclick', openNewTab(1));
            document.getElementById("images").appendChild(elem)
        }
    }
}



function closePictures(){
    document.getElementById("detailImages").style.display = "none";
    document.getElementById("detail").style.display = "block";
}

function openNewTab(src){
    window.open(src, '_blank');
}


function achatWidth(){
    if (window.screen.width < 1200 ) {
        console.log(navigator.userAgent.toLowerCase())
        x = document.getElementById("resultatsAchat");
        if (x != null){
            let children = x.children;
            for (let i=0 ; i < children.length ; i++){
                children[i].children[0].style.width = "100%";
                children[i].children[0].children[0].style.width = "50%";
                children[i].children[0].children[1].style.width = "50%";
                children[i].children[0].children[1].style.height = "18rem";
                children[i].children[0].children[0].style.height = "18rem";
                children[i].children[0].children[1].children[0].style.paddingLeft = "5px";
                children[i].children[0].children[1].children[0].children[0].style.fontSize = "1rem";
                children[i].children[0].children[1].children[0].children[1].style.fontSize = "0.8rem";
                children[i].children[0].children[1].children[0].children[2].style.fontSize = "1rem";
                children[i].children[0].children[1].children[0].children[3].style.fontSize = "1rem";
                children[i].children[0].children[1].children[0].children[4].style.fontSize = "0.6rem";
                children[i].children[0].children[1].children[0].children[4].style.width = "40%";
                if (navigator.userAgent.toLowerCase().indexOf("safari") && navigator.userAgent.toLowerCase().indexOf("apple")){
                    children[i].children[0].children[1].children[0].children[4].style = "margin-bottom: 1rem;font-size: 1rem;word-wrap: break-word;width: 40%;overflow: hidden;max-height: 7.5em;line-height: 1.5em;"
                }
                let images = children[i].children[0].children[0].children[0]
                for (let j=0 ; j < images.children.length ; j++){
                    images.children[j].children[0].style.height = "18rem";
                }
            }
        }
    }
}

function recrutementWidth(){
    if (window.screen.width < 1200 ) {
        document.getElementById("blockRecrutement").style.marginLeft = "-10%";
        document.getElementById("blockRecrutement").style.marginRight = "10%";
        document.getElementById("titreRecrutement").style.marginLeft = "-5%";
        document.getElementById("imageRecrutement").style.marginLeft = "-5%";
    }
}

function vendreWidth(){
    if (window.screen.width < 1200 ) {
        document.getElementById("titreVendre").style.marginLeft = "-10%";
    }
}

function contactWidth(){
    if (window.screen.width < 1200 ) {
        document.getElementById("titreContact").style.marginLeft = "-10%";
    }
}

function mentionWidth(){
    if (window.screen.width < 1200 ) {
        document.getElementById("mentionTitre").style.marginLeft = "-10%";
    }
}

function detailAchat(){
    if (window.screen.width < 1200 ) {
        document.getElementById("enteteAchat").style.width = "90%";
        document.getElementById("images").style.width = "90%";
        document.getElementById("returnPage").innerText = "X";
        document.getElementById("imagesBlock1").style.height = "20rem";
        document.getElementById("imagesBlock2").style.height = "20rem";
        document.getElementById("imagesBlock1").children[0].style.height = "20rem";
        document.getElementById("imagesBlock2").children[0].children[0].style.height = "10rem";
        document.getElementById("imagesBlock2").children[1].children[0].style.height = "10rem";
        document.getElementById("imagesBlock2").children[0].style.height = "10rem";
        document.getElementById("imagesBlock2").children[0].style.height = "10rem";
        document.getElementById("descriptionAchat").style.width = "90%";
        document.getElementById("descriptionAchat").style.marginLeft = "5%";
        document.getElementById("loiAchat").style.width = "90%";
        document.getElementById("loiAchat").style.marginLeft = "5%";
        document.getElementById("caracteristiquesAchat").style.width = "85%";
        document.getElementById("caracteristiquesAchat").style.paddingLeft = "0";
        document.getElementById("caracteristiquesAchat").style.marginLeft = "7.5%";
        document.getElementById("listeCaracteristiqueAchat").style.display = "block";
        document.getElementById("listeCaracteristiqueAchat").style.marginBottom = "0";
        document.getElementById("listeCaracteristiqueAchat").nextElementSibling.style.display = "block";
        document.getElementById("listeAmenagementAchat").style.display = "block";
        document.getElementById("listeAmenagementAchat").style.marginBottom = "0";
        document.getElementById("listeAmenagementAchat").nextElementSibling.style.display = "block";
        document.getElementById("amenagementsAchat").style.width = "85%";
        document.getElementById("amenagementsAchat").style.paddingLeft = "0";
        document.getElementById("amenagementsAchat").style.marginLeft = "7.5%";
        document.getElementById("diagnostiquesAchat").style.marginTop = "10%";
        document.getElementById("diagnostiquesAchat").style.width = "85%";
        document.getElementById("diagnostiquesAchat").style.paddingLeft = "0";
        document.getElementById("diagnostiquesAchat").style.marginLeft = "7.5%";
    }
}

function displayMessageForm(){
    const url = window.location.href
    const last = url.split("/")[url.split("/").length-1]
    if(last != undefined && last !== "connexion.html") {
        document.getElementById("loginAlert").hidden = false;
    }
}