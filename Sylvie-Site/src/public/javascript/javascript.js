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
    achat = document.getElementById("nav-achat")
    footer = document.getElementById("footer")
    if (x != null && x.style.display === "none") {
        x.style.display = "block";
    } else  if (x != null){
        x.style.display = "none";
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

function showModal(photos){

        var modal = document.getElementById("myModal");
        var img = document.getElementById("myImg");
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");
        modal.style.display = "block";
    if (document.getElementById("a1").children.length <= 0) {
        var photosList = photos.split(',');
        let innervdiv = document.createElement("div");
        innervdiv.className = "carousel-inner";
        for (let i = 0; i < photosList.length; i++) {
            let div = document.createElement("div");
            if (i == 0) {
                div.className = "carousel-item active";
            } else div.className = "carousel-item";
            let elem = document.createElement("img");
            elem.src = photosList[i];
            elem.style = 'width:auto; height: 25rem;object-fit: cover; margin-left: 40%;';
            div.appendChild(elem)
            innervdiv.appendChild(div)
        }
        modal.appendChild(innervdiv);
        let flecheLeft = document.getElementById("a1");
        let span1 = document.createElement("span");
        span1.className = "carousel-control-prev-icon";
        span1.ariaHidden = "true";
        span1.style = "cursor: pointer; color:white";
        let span2 = document.createElement("span");
        span2.className = "sr-only";
        span2.innerText = "Previous";
        flecheLeft.appendChild(span1);
        flecheLeft.appendChild(span2);
        let span3 = document.createElement("span");
        span3.className = "carousel-control-next-icon";
        span3.ariaHidden = "true";
        span3.style = "cursor: pointer; color:white";
        let span4 = document.createElement("span");
        span4.className = "sr-only";
        span4.innerText = "Next";
        let flechRight = document.getElementById("a2");
        flechRight.appendChild(span3);
        flechRight.appendChild(span4);
        captionText.innerHTML = "Photos du bien selectionné";
    }
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

