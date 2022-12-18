"use strict"
/* Module de recherche dans une base de données de films */
//const Sqlite = require('better-sqlite3');
let express = require('express');

//let db = new Sqlite('db.sqlite');
/*
exports.loadList = (id) => {
    let liste = db.prepare('SELECT nomListe FROM Liste WHERE idUtilisateur = ? ORDER BY nomListe').all(id);
    return{
        liste : liste
    }
}

exports.loadInscription = () => {

    let acteurs = db.prepare('SELECT nomActeur FROM A_Joue GROUP BY nomActeur ORDER BY nomActeur').all();
    let realisateurs = db.prepare('SELECT nomRealisateur FROM A_Realise GROUP BY nomRealisateur ORDER BY nomRealisateur').all();
    let genres = db.prepare('SELECT nomGenre FROM Genre GROUP BY nomGenre ORDER BY nomGenre').all();


    return {
        acteurs : acteurs,
        realisateurs : realisateurs,
        genres : genres,
    }
}

exports.addFilmToList = (id, nomListe, idFilm) => {
    let liste = db.prepare('SELECT nomListe FROM Liste WHERE idUtilisateur = ? AND nomListe = ?').get(id, nomListe);
    if (liste === undefined){
        return -1;
    }
    let film = db.prepare('SELECT nomListe FROM Film_Utilisateur WHERE idUtilisateur = ? AND nomListe = ? AND idFilm = ?').get(id, nomListe, idFilm);
    if (film !== undefined){
        return -2;
    }
    db.prepare('INSERT INTO Film_Utilisateur (idUtilisateur, idFilm, nomListe) VALUES (?, ?, ?)').run(id, idFilm, nomListe);
    return 1;
}


exports.addCritique = (id, idFilm, message, date, note) => {
    let existing = db.prepare('SELECT idUtilisateur FROM Critique WHERE idUtilisateur = ? AND idFilm = ?').get(id, idFilm);
    if (existing !== undefined){
        return -1;
    }
    db.prepare('INSERT INTO Critique (idUtilisateur, idFilm, message, date, note) VALUES (?, ?, ?, ?, ?)').run(id, idFilm, message, date, note);
    var res = db.prepare('SELECT idFilm, nomFilm, dateFilm, acteursFilm, realisateursFilm, descriptionFilm, dureeFilm, image, noteMoyenne FROM Film WHERE idFilm = ?').get(idFilm);
    var j = 0;
    var noteMoyenne = 0;
    var resultsCritiques = db.prepare('SELECT note FROM Critique C, Utilisateur U WHERE C.idFilm = ? AND  U.idUtilisateur = C.idUtilisateur ORDER BY date').all(res.idFilm);
    for (j; j<resultsCritiques.length; j++) {
        noteMoyenne = noteMoyenne + resultsCritiques[j].note;
    }
    if (noteMoyenne === 0){
        noteMoyenne = null;
    }
    else {
        noteMoyenne = noteMoyenne / j;
    }
    db.prepare('UPDATE Film SET noteMoyenne = ? WHERE idFilm = ?').run(noteMoyenne, res.idFilm);


}

exports.loadListTitle = (id, nomListe) => {
    let film = db.prepare('SELECT idFilm FROM Film_Utilisateur WHERE idUtilisateur = ? AND nomListe = ?').all(id, nomListe);
    let results = [];
    for (let i=0; i<film.length ; i++){
        var res = db.prepare('SELECT idFilm, nomFilm, dateFilm, acteursFilm, realisateursFilm, descriptionFilm, dureeFilm, image, noteMoyenne FROM Film WHERE idFilm = ?').get(film[i].idFilm);
        var j = 0;
        var noteMoyenne = 0;
        var resultsCritiques = db.prepare('SELECT note FROM Critique C, Utilisateur U WHERE C.idFilm = ? AND  U.idUtilisateur = C.idUtilisateur ORDER BY date').all(res.idFilm);
        for (j; j<resultsCritiques.length; j++) {
            noteMoyenne = noteMoyenne + resultsCritiques[j].note;
        }
        if (noteMoyenne === 0){
            noteMoyenne = null;
        }
        else {
            noteMoyenne = noteMoyenne / j;
        }
        db.prepare('UPDATE Film SET noteMoyenne = ? WHERE idFilm = ?').run(noteMoyenne, res.idFilm);
        results.push(db.prepare('SELECT idFilm, nomFilm, dateFilm, acteursFilm, realisateursFilm, descriptionFilm, dureeFilm, image, noteMoyenne FROM Film WHERE idFilm = ?').get(film[i].idFilm));
    }
    return{
        results : results,
        nomListe : nomListe,
    }
}

exports.addList = (id, nouvelleListe) => {
    var allList = db.prepare('SELECT nomListe FROM Liste WHERE idUtilisateur = ? ORDER BY nomListe').all(id);
    for (let i = 0; i < allList.length; ++i){
        if (allList[i].nomListe === nouvelleListe){
            return -1;
        }
    }
    db.prepare('INSERT INTO Liste(nomListe, idUtilisateur) VALUES (?, ?)').run(nouvelleListe, id);
}

*/
exports.read = (id) => {
    /*
    let idFilm = id;
    var nomFilm = db.prepare('SELECT nomFilm FROM Film WHERE idFilm = ?').get(id).nomFilm;
    var dateFilm = db.prepare('SELECT  dateFilm FROM Film WHERE idFilm = ?').get(id).dateFilm;
    var realisateursFilm = db.prepare('SELECT realisateursFilm FROM Film WHERE idFilm = ?').get(id).realisateursFilm;
    var acteursFilm = db.prepare('SELECT acteursFilm FROM Film WHERE idFilm = ?').get(id).acteursFilm;
    var descriptionFilm = db.prepare('SELECT descriptionFilm FROM Film WHERE idFilm = ?').get(id).descriptionFilm;
    var duree = db.prepare('SELECT dureeFilm FROM Film WHERE idFilm = ?').get(id).dureeFilm;
    var image = db.prepare('SELECT image FROM Film WHERE idFilm = ?').get(id).image ;
    var results = db.prepare('SELECT pseudoUtilisateur, note, date, message FROM Critique C, Utilisateur U WHERE C.idFilm = ? AND  U.idUtilisateur = C.idUtilisateur ORDER BY date').all(id);
    var noteMoyenne = 0;
    let i=0;
    for (i; i<results.length; i++){
        noteMoyenne = noteMoyenne + results[i].note;
    }
    if (noteMoyenne === 0){
        noteMoyenne = null;
    }
    else {
        noteMoyenne = noteMoyenne / i;
    }
    return{
        idFilm : idFilm,
        nomFilm : nomFilm,
        dateFilm : dateFilm,
        realisateursFilm : realisateursFilm,
        acteursFilm : acteursFilm,
        noteMoyenne : noteMoyenne,
        descriptionFilm : descriptionFilm,
        duree: duree,
        image: image,
        results : results,
    };*/
    if (id == 1){
        return {
            id: id,
            type: "achat",
            bien: "Maison ancienne à rénover",
            lieu: "Salon-de-Provence",
            pieces: 4,
            chambres: 3,
            surface: 120,
            terrain: 850,
            prix: "315 900",
            plus: ["Calme", "4 pièces", "Quartier prisé"],
            caracteristiques: ["Entrée", "1 salle de bain", "4 pièces", "3 chambres", "Plain-pied"],
            description: "Dans un quartier prisé de Salon de Provence, maison ancienne de 120 M² de 1963 de plain-pied offrant une belle pièce de vie lumineuse avec une cuisine à côté permettant ainsi d’ouvrir car le mur n’est pas porteur. \n" +
                "Pour la partie « nuit », elle offre trois chambres ainsi qu’une salle de bains et un wc.\n" +
                "Cette maison de bonne construction nécessitera néanmoins quelques travaux de remise aux normes concernant l’installation électrique ainsi que pour la mettre au goût du jour.\n" +
                "Beau potentiel et beaucoup de cachet sur un terrain de 850 M²\n",

            loi: "Informations Loi ALUR : Honoraires inclus à la charge du vendeur =5.3% du prix TTC affiché\n",
            reference: "0125",
            salleBain: 1,
            salleEau: 0,
            chauffage: "au bois",
            annee: "1963",
            date: "20220917",
            DPE: "133",
            GES: "1",
            photos: ["../images/ACHAT1/1.webp", "../images/ACHAT1/2.webp", "../images/ACHAT1/3.webp", "../images/ACHAT1/4.webp", "../images/ACHAT1/5.webp", "../images/ACHAT1/6.webp","../images/ACHAT1/7.webp","../images/ACHAT1/8.webp"],
        }
    }
    if (id == 2){
        return {
            id: id,
            type: "achat",
            bien: "Maison/Appartement",
            lieu: "Salon-de-Provence",
            pieces: 5,
            chambres: 4,
            surface: 107,
            terrain: 0,
            prix: "307 000",
            plus: ["Calme", "5 pièces", "Quartier prisé", "Place de parking", "Grand garage", "2 terrasses"],
            caracteristiques: ["Entrée", "1 salle de bain", "1 salle d'eau", "5 pièces", "4 chambres", "2 étages", "Garage", "2 terrasses"],
            description: "Coquette maison/ appartement rénovée avec goût offrant un séjour volumineux avec sa cuisine ouverte équipée ouverts sur deux terrasses à l'Est de 50 M² et à l'Ouest de 12M² ainsi qu’un bureau pouvant faire office de chambre pour le 1er niveau. En ce qui concerne le 2ème niveau, vous découvrirez trois chambres aux volumes généreux dont une dotée d'une salle d'eau, une salle de bains. Un grand garage complète ce bien situé en copropriété, ainsi qu'une place de parking.",
            loi: "Informations Loi ALUR : Honoraires inclus à la charge du vendeur =5.3% du prix TTC affiché\n",
            reference: "003",
            salleBain: 1,
            salleEau: 1,
            chauffage: "",
            annee: "",
            date: "20220829",
            DPE: "100",
            GES: "3",
            photos: ["../images/ACHAT2/1.jpg", "../images/ACHAT2/2.jpg", "../images/ACHAT2/3.jpg", "../images/ACHAT2/4.JPG", "../images/ACHAT2/5.JPG", "../images/ACHAT2/6.JPG","../images/ACHAT2/7.JPG","../images/ACHAT2/8.jpg", "../images/ACHAT2/9.JPG"],
        }
    }
    if (id == 3){
        return {
            id: id,
            type: "achat",
            bien: "Appartement",
            lieu: "Lançon-Provence",
            pieces: 5,
            chambres: 3,
            surface: 105,
            terrain: 0,
            prix: "840 000",
            plus: ["Calme", "5 pièces", "Quartier prisé", "Grandes chambres", "Style Hongrois"],
            caracteristiques: ["Entrée", "1 salle de bain", "4 pièces", "3 chambres", "Plain-pied"],
            description: "Une adresse pour ce magnifique appartement Bourgeois du 18e siècle doté de parquet d’époque en point de Hongrie apportant un charme indéniable à ce bien d’exception. Dès votre entrée, vous serez transportés dans une autre époque en découvrant le salon et la salle à manger à l’atmosphère feutrée. A proximité, une cuisine aux volumes généreux mérite une rénovation pour lui redonner son charme d’antan. Trois belles chambres de 18 à 25 M² avec rangements et une salle de bains complètent ce bien.",
            loi: "Informations Loi ALUR : Honoraires inclus à la charge du vendeur =5.3% du prix TTC affiché\n",
            reference: "0125",
            salleBain: 1,
            salleEau: 0,
            chauffage: "",
            annee: "1948",
            date: "20220616",
            DPE: "228",
            GES: "71",
            photos: ["../images/ACHAT3/1.jpg", "../images/ACHAT3/2.jpg", "../images/ACHAT3/3.jpg", "../images/ACHAT3/4.jpg", "../images/ACHAT3/5.jpg", "../images/ACHAT3/6.jpg","../images/ACHAT3/7.jpg","../images/ACHAT3/8.jpg"],
        }
    }
    if (id == 4){
        return {
            id: id,
            type: "achat",
            bien: "Appartement",
            lieu: "Lyon 9ème",
            pieces: 3,
            chambres: 2,
            surface: 65,
            terrain: 201,
            prix: "337 000",
            plus: ["3 pièces", "2 terrasses", "Grand jardin clos", "Grand garage"],
            caracteristiques: ["1 salle de bain", "3 pièces", "2 chambres", "Plain-pied", "Rez de jardin", "2 terrasses", "Grand jardin"],
            description: "Une adresse pour ce magnifique appartement Bourgeois du 18e siècle doté de parquet d’époque en point de Hongrie apportant un charme indéniable à ce bien d’exception. Dès votre entrée, vous serez transportés dans une autre époque en découvrant le salon et la salle à manger à l’atmosphère feutrée. A proximité, une cuisine aux volumes généreux mérite une rénovation pour lui redonner son charme d’antan. Trois belles chambres de 18 à 25 M² avec rangements et une salle de bains complètent ce bien.",
            loi: "Informations Loi ALUR : Honoraires inclus à la charge du vendeur =5.3% du prix TTC affiché\n",
            reference: "062",
            salleBain: 1,
            salleEau: 0,
            chauffage: "individuel",
            annee: "2017",
            date: "20220616",
            DPE: "133",
            GES: "12",
            photos: ["../images/ACHAT4/1.jpg", "../images/ACHAT4/2.jpg", "../images/ACHAT4/3.jpg", "../images/ACHAT4/4.JPG", "../images/ACHAT4/5.JPG", "../images/ACHAT4/6.JPG"],
        }
    }
    if (id == 5){
        return {
            id: id,
            type: "achat",
            bien: "Maison",
            lieu: "Marseille 11ème",
            pieces: 6,
            chambres: 4,
            surface: 140,
            terrain: 650,
            prix: "760 000",
            plus: ["6 pièces", "Terrasse", "Cuisine équipée", "Atelier", "Grand garage"],
            caracteristiques: ["1 salle de bain", "6 pièces", "3 chambres", "1 bureau", "Terrasse"],
            description: "Marseille 11e, belle maison de 140 M² construite en 1990 sur un terrain de 650 M² offrant un séjour et une salle à manger avec accès sur la terrasse permettant de déjeuner au calme, une cuisine équipée, trois grandes chambres et un bureau, salle de bains. Un grand garage complète ce bien ainsi qu’un atelier pour bricoler.",
            loi: "Informations Loi ALUR : Honoraires inclus à la charge du vendeur =5.3% du prix TTC affiché\n",
            reference: "003",
            salleBain: 1,
            salleEau: 0,
            chauffage: "",
            annee: "1990",
            date: "20220616",
            DPE: "228",
            GES: "71",
            photos: ["../images/ACHAT5/1.jpg", "../images/ACHAT5/2.jpg", "../images/ACHAT5/3.jpg", "../images/ACHAT5/4.JPG", "../images/ACHAT5/5.JPG", "../images/ACHAT5/6.JPG"],
        }
    }
    if (id == 6){
        return {
            id: id,
            type: "achat",
            bien: "Appartement",
            lieu: "Avignon",
            pieces: 3,
            chambres: 2,
            surface: 65,
            terrain: 0,
            prix: "220 000",
            plus: ["3 pièces", "Grand balcon", "Cuisine équipée", "Place parking"],
            caracteristiques: ["1 salle de bain", "WC séparés", "2 chambres", "Grand balcon"],
            description: "Bel appartement de Type 3 de 65 M² situé en périphérie d’Avignon offrant un grand séjour lumineux donnant sur un grand balcon avec une cuisine ouverte équipée, deux chambres avec placards, une salle de bains et un WC. Une place privative en sous-sol complète ce bien",
            loi: "Informations Loi ALUR : Honoraires inclus à la charge du vendeur = 5.3% du prix TTC affiché\n",
            reference: "003",
            salleBain: 1,
            salleEau: 0,
            chauffage: "",
            annee: "",
            date: "20220616",
            DPE: "385",
            GES: "12",
            photos: ["../images/ACHAT6/1.jpg", "../images/ACHAT6/2.jpg", "../images/ACHAT6/3.jpg", "../images/ACHAT6/4.JPG", "../images/ACHAT6/5.JPG", "../images/ACHAT6/6.JPG"],
        }
    }
    if (id == 7){
        return {
            id: id,
            type: "achat",
            bien: "Maison",
            lieu: "Miramas",
            pieces: 7,
            chambres: 3,
            surface: 110,
            terrain: 430,
            prix: "303 000",
            plus: ["7 pièces", "Terrain clos", "Grand séjour", "Cuisine indépendante"],
            caracteristiques: ["1 salle d'eau'", "WC séparés", "3 chambres"],
            description: "Maison de plain pied de 110 M² sur un terrain clos et arboré de 430 M² offrant un grand séjour donnant sur une véranda, une cuisine aménagée indépendante pouvant être reliée au séjour pour obtenir une belle pièce de vie, trois chambres à l'arrière et au calme, une salle d'eau, wc ainsi qu'une pièce indépendante.",
            loi: "Informations Loi ALUR : Honoraires inclus à la charge du vendeur = 5.3% du prix TTC affiché\n",
            reference: "003",
            salleBain: 0,
            salleEau: 1,
            chauffage: "",
            annee: "",
            date: "20220616",
            DPE: "151",
            GES: "8",
            photos: ["../images/ACHAT7/1.jpg", "../images/ACHAT7/2.jpg", "../images/ACHAT7/3.jpg", "../images/ACHAT7/4.jpg", "../images/ACHAT7/5.jpg", "../images/ACHAT7/6.jpg", "../images/ACHAT7/7.jpg", "../images/ACHAT7/8.jpg", "../images/ACHAT7/9.jpg", "../images/ACHAT7/10.jpg"],
        }
    }
    if (id == 8){
        return {
            id: id,
            type: "achat",
            bien: "Maison",
            lieu: "Cornillon Confoux",
            pieces: 7,
            chambres: 3,
            surface: 137,
            terrain: 9000,
            prix: "732 000",
            plus: ["Grand terrain", "Dépendance", "Grand garage"],
            caracteristiques: ["Dépendance", "3 chambres"],
            description: "Rare à la vente, en campagne, dans le village prisé de Cornillon Confoux, découvrez cette maison de plain-pied de 137 M² sur 9000 M² de terrain arboré avec forage.\n" +
                "La maison divisée en deux logements se compose ainsi :\n" +
                "La partie principale de 95 M² offre un séjour et une cuisine aménagée avec accès au garage de 37M² doté d’un cave de 24M², deux grandes chambres de 14 et 19M² et une salle de bain.\n" +
                "Un T2 loué offre une rentabilité locative supplémentaire.\n" +
                "Une dépendance de 70 M² avec un point d’eau permet de bricoler sans déranger.\n",
            loi: "Informations Loi ALUR : Honoraires inclus à la charge du vendeur = 5.3% du prix TTC affiché\n",
            reference: "004",
            salleBain: 2,
            salleEau: 0,
            chauffage: "",
            annee: "",
            date: "20220616",
            DPE: "137",
            GES: "5",
            photos: ["../images/ACHAT8/1.jpg", "../images/ACHAT8/2.jpg", "../images/ACHAT8/3.jpg", "../images/ACHAT8/4.jpg", "../images/ACHAT8/5.jpg", "../images/ACHAT8/6.jpg"],
        }
    }
    if (id == 9){
        return {
            id: id,
            type: "achat",
            bien: "Villa",
            lieu: "Charleval",
            pieces: 8,
            chambres: 6,
            surface: 235,
            terrain: 2400,
            prix: "735 000",
            plus: ["Piscine", "Terasse", "Grand terrain", "Jacuzzi"],
            caracteristiques: ["Piscine", "6 chambres"],
            description: "Vous cherchez une grande villa au pied du Luberon, au calme, tout en étant proche du centre village, cette maison aux volumes généreux est faite pour vous.\n" +
                "Au rez de chaussée, vous serez séduits par le volume de la pièce de vie et sa luminosité ainsi que par la générosité de la cuisine équipée. Vous découvrirez ensuite, la partie \"nuit\" dotée d'une chambre ainsi qu'une suite parentale avec accès direct sur le jardin arboré. Un cellier / buanderie ainsi qu'un wc complètent le rez de chaussée.\n" +
                "A l'étage, vous serez charmés par la grande chambre de 40M² dotée d'un dressing avec accès direct sur la terrasse ainsi que les deux suites parentales de 20 M². L'étage est complété par une autre chambre avec accès sur la terrasse et par une salle d'eau indépendante ainsi qu'un wc.\n" +
                "Cette villa est implantée sur une grand terrain arboré et clos avec forage de 2400 M² avec piscine et pool house. Un grand garage de 33M² et une pièce jacuzzi / sauna complète ce bien.\n" +
                "Ce bien d'exception est présenté en exclusivité par Laetitia Collerie mandataire indépendant du réseau L'AGENCE DES MANDATAIRES inscrite au RSAC de Salon de Provence N° 897 682 407\n" +
                "Plus de photos sur demande. A visiter rapidement.",
            loi: "Informations Loi ALUR : Honoraires inclus à la charge du vendeur = 5.3% du prix TTC affiché\n",
            reference: "005",
            salleBain: 1,
            salleEau: 1,
            chauffage: "",
            annee: "",
            date: "20220523",
            DPE: "100",
            GES: "2",
            photos: ["../images/ACHAT9/1.jpg", "../images/ACHAT9/2.jpg", "../images/ACHAT9/3.jpg", "../images/ACHAT9/4.jpg", "../images/ACHAT9/5.jpg", "../images/ACHAT9/6.jpg", "../images/ACHAT9/7.jpg", "../images/ACHAT9/8.jpg", "../images/ACHAT9/9.jpg"],
        }
    }
    if (id == 10){
        return {
            id: id,
            type: "achat",
            bien: "Maison",
            lieu: "Charleval",
            pieces: 3,
            chambres: 2,
            surface: 75,
            terrain: 250,
            prix: "289 000",
            plus: ["Véranda", "Grand hall d'entrée", "Cuisine équipée"],
            caracteristiques: ["Véranda", "2 chambres"],
            description: "Seulement chez L'Agence des mandataires, Laetitia Collerie vous propose de visiter cette coquette maison de plain pied sur un terrain clos de 250 M², à deux pas du cœur du village.\n" +
                "Vous accéderez à la maison par une spacieuse et lumineuse véranda de 30 M² où vous pourrez déjeuner en famille ou flâner l'hiver avec un bon livre.\n" +
                "Un grand hall d'entrée dessert d'une part, la cuisine équipée avec son cellier, et d'autre part, le grand séjour de 25 M². Côté \"nuit\", vous découvrirez deux chambres calmes aux volumes généreux, ainsi que la salle d'eau.\n" +
                "Prix tout doux, à visiter rapidement.",
            reference: "008",
            salleBain: 0,
            salleEau: 1,
            chauffage: "",
            annee: "",
            date: "20220523",
            DPE: "250",
            GES: "8",
            photos: ["../images/ACHAT10/1.jpg", "../images/ACHAT10/2.jpg", "../images/ACHAT10/3.jpg", "../images/ACHAT10/4.jpg", "../images/ACHAT10/5.jpg"],
        }
    }
    else {
        return {
            id: id,
            type: "achat",
            bien: "Maison provençale",
            lieu: "Venelles, Aix-en-provence",
            pieces: 5,
            chambres: 4,
            surface: 150,
            terrain: 850,
            prix: "650 000",
            plus: ["piscine", "terasse", "belle vue", "calme"],
            caracteristiques: ["Entrée", "1 salle de bain", "4 pièces", "3 chambres", "Plain-pied"],
            description: "A cinq minutes du centre ville d'Aix en Provence, très belle propriété de caractère en pierre de Bibemus d'une surface habitable de 270m2, posée sur un terrain de 3500m2 agrémenté de fontaines, d'arbres séculaires, une piscine avec un grand pool house aménagé de 70m2. La bâtisse dispose d'une belle réception avec cheminée, une cuisine entièrement équipée, 5 chambres avec salle de bains et salle d'eau et un bureau. Cette maison de Maître a su conserver le charme de l'ancien grâce à des matériaux de qualité et à son vécu.",
            loi: "Informations Loi ALUR : Honoraires inclus à la charge du vendeur =5.3% du prix TTC affiché\n",
            reference: "MA-50-D",
            salleBain: 1,
            salleEau: 1,
            chauffage: "Electrique",
            annee: "2002",
            date: "20220917",
            DPE: "60",
            GES: "15",
            photos: ["../images/provence2.jpg", "../images/provence2noir.jpg", "../images/provence2.jpg"],
        }
    }
};



/*


exports.supprimerFilm = function(id) {
    db.prepare('DELETE FROM Film WHERE id = ?').run(id);
}

exports.supprimerUtilisateur = function(id) {
    if (db.prepare('SELECT idUtilisateur FROM Utilisateur WHERE idUtilisateur = ?').get(id) === undefined){
        return -1;
    }
    db.prepare('DELETE FROM Utilisateur WHERE idUtilisateur = ?').run(id);
}



exports.search = (query) => {
    query = query || "";

    let num_found = db.prepare('SELECT count(*) FROM Film WHERE nomFilm LIKE ?').get('%' + query + '%')['count(*)'];
    let res = db.prepare('SELECT idFilm, nomFilm, descriptionFilm, noteMoyenne, dureeFilm, image FROM Film WHERE nomFilm LIKE ? ORDER BY idFilm').all('%' + query + '%');
    let acteurs = db.prepare('SELECT nomActeur FROM A_Joue GROUP BY nomActeur ORDER BY nomActeur').all();
    let realisateurs = db.prepare('SELECT nomRealisateur FROM A_Realise GROUP BY nomRealisateur ORDER BY nomRealisateur').all();
    let genres = db.prepare('SELECT nomGenre FROM Genre GROUP BY nomGenre').all();
    let i=0;
    for (i; i<res.length; i++){
        let j = 0;
        let noteMoyenne = 0;
        let resultsCritiques = db.prepare('SELECT note FROM Critique C, Utilisateur U WHERE C.idFilm = ? AND  U.idUtilisateur = C.idUtilisateur ORDER BY date').all(res[i].idFilm);
        for (j; j<resultsCritiques.length; j++) {
            noteMoyenne = noteMoyenne + resultsCritiques[j].note;
        }
        if (noteMoyenne === 0){
            noteMoyenne = null;
        }
        else {
            noteMoyenne = noteMoyenne / j;
        }
        db.prepare('UPDATE Film SET noteMoyenne = ? WHERE idFilm = ?').run(noteMoyenne, res[i].idFilm);
    }
    let results = db.prepare('SELECT idFilm, nomFilm, descriptionFilm, noteMoyenne, dureeFilm, image FROM Film WHERE nomFilm LIKE ? ORDER BY idFilm').all('%' + query + '%');

    return {
        acteurs : acteurs,
        realisateurs : realisateurs,
        genres : genres,
        results: results,
        num_found: num_found,
        query: query,
    };
};

exports.loadSuggestions  = (id) => {
    let userPref = db.prepare('SELECT nomGenre, idActeur, idRealisateur FROM Utilisateur WHERE idUtilisateur = ?').get(id);
    let realPref = db.prepare('SELECT idFilm FROM A_Realise WHERE idRealisateur = ?').all(userPref.idRealisateur);
    let acteurPref = db.prepare('SELECT idFilm FROM A_Joue WHERE idActeur = ?').all(userPref.idActeur);
    let genrePref = db.prepare('SELECT idFilm FROM Genre WHERE nomGenre = ?').all(userPref.nomGenre);
    let listeIdFilm = [];
    for (let i = 0; i < realPref.length ; i++){
        listeIdFilm.push(realPref[i].idFilm);
    }
    for (let i = 0; i < acteurPref.length ; i++){
        listeIdFilm.push(acteurPref[i].idFilm);
    }
    for (let i = 0; i < genrePref.length ; i++){
        listeIdFilm.push(genrePref[i].idFilm);
    }
    let uniqueListeIdFilm = [...new Set(listeIdFilm)];
    let results = [];
    for (let i = 0; i < uniqueListeIdFilm.length ; i++){
        let film = db.prepare('SELECT F.idFilm, nomFilm, descriptionFilm, noteMoyenne, dureeFilm, image FROM Film F WHERE F.idFilm = ? GROUP BY F.idFilm ORDER BY F.idFilm').get(uniqueListeIdFilm[i]);
        if (film !== undefined){
            results.push(film);
        }
    }
    return {
        results : results,
    }
};

exports.searchProfil = (id) => {
    let results = db.prepare('SELECT pseudoUtilisateur, mailUtilisateur, nomUtilisateur, prenomUtilisateur, dateNaissance, nomGenre, idActeur, idRealisateur FROM Utilisateur WHERE idUtilisateur = ?').get(id);
    let resultsActeur = db.prepare('SELECT nomActeur FROM A_Joue  WHERE idActeur = ?').get(results.idActeur).nomActeur;
    let resultsReal = db.prepare('SELECT nomRealisateur FROM A_Realise  WHERE idRealisateur = ?').get(results.idRealisateur).nomRealisateur;
    return {
        results : results,
        resultsActeur : resultsActeur,
        resultsReal : resultsReal,
    }
};



exports.searchActeur = (acteur) => {
    let results = db.prepare('SELECT idActeur FROM A_Joue  WHERE nomActeur = ?').get(acteur.toUpperCase());
    if (results === undefined) return 1;
    return results.idActeur
};

exports.searchRealisateur = (real) => {
    let results = db.prepare('SELECT idRealisateur FROM A_Realise WHERE nomRealisateur = ? ').get(real.toUpperCase());
    if (results === undefined) return 1;
    return results.idRealisateur;
};

exports.searchGenre = (genre) => {
    let results = db.prepare('SELECT nomGenre FROM Genre WHERE nomGenre = ? ').get(genre.toUpperCase());
    if (results === undefined) return 'ACTION';
    return results.nomGenre;
};

exports.searchTriGenre = (genre) => {
    let results = db.prepare('SELECT idFilm FROM Genre WHERE nomGenre = ? GROUP BY idFilm').all(genre.toUpperCase());
    if (results === undefined) return -1;
    return {
        results : results,
    }
};

exports.searchTriActeur = (acteur) => {
    let results = db.prepare('SELECT idFilm FROM A_Joue WHERE nomActeur = ? GROUP BY idFilm').all(acteur.toUpperCase());
    if (results === undefined) return -1;
    return {
        results : results,
    }
};

exports.searchTriReal = (real) => {
    let results = db.prepare('SELECT idFilm FROM A_Realise WHERE nomRealisateur = ? GROUP BY idFilm').all(real.toUpperCase());
    if (results === undefined) return -1;
    return {
        results : results,
    }
};

exports.searchTriAnnee = (annee) => {
    let anneeFin = annee + "-12-31";
    let anneeDebut = annee + "-01-01";
    let results = db.prepare('SELECT idFilm FROM Film WHERE dateFilm > ? AND dateFilm < ? GROUP BY idFilm').all(anneeDebut, anneeFin);
    if (results === undefined) return -1;
    return {
        results : results,
    }
};

exports.searchInfTriAnnee = (annee) => {
    annee = annee + "-12-31";
    let results = db.prepare('SELECT idFilm FROM Film WHERE dateFilm <= ? GROUP BY idFilm').all(annee);
    if (results === undefined) return -1;
    return {
        results : results,
    }
};

exports.searchTriNote = (note, liste) => {
    let listeResults = [];
    for (let i=0 ; i < liste.length ; i++){
        let search = db.prepare('SELECT idFilm FROM Film WHERE noteMoyenne >= ? AND idFilm = ? GROUP BY idFilm').get(note, liste[i]);
        if (search !== undefined){
            listeResults.push(search.idFilm);
        }
    }

    if (listeResults.length === 0) return -1;
    return {
        listeResults : listeResults ,
    }
};

exports.searchFilms = (finalListe) => {
    let results = [];
    for (let i = 0; i < finalListe.length ; i++){
        let film = db.prepare('SELECT F.idFilm, nomFilm, descriptionFilm, noteMoyenne, dureeFilm, image FROM Film F WHERE F.idFilm = ? GROUP BY F.idFilm ORDER BY F.idFilm').get(finalListe[i]);
        if (film !== undefined){
            results.push(film);
        }
    }
    return {
        results : results,
    }
};




exports.ajouterFilm = function(titre, date, realisateurs, acteurs, description, duree, image, genres) {
    let listeActeurs = acteurs.split(",");
    let listeRealisateurs = realisateurs.split(",");
    let listeGenres = genres.split(",");
    var exist = db.prepare('SELECT nomFilm FROM Film WHERE nomFilm = ?').get(titre);
    if (exist === undefined){
        db.prepare('INSERT INTO Film (nomFilm, dateFilm, acteursFilm, realisateursFilm, descriptionFilm, dureeFilm, image) VALUES (?, ?, ?, ?, ?, ?, ?)').run(titre, date, acteurs.toUpperCase(), realisateurs.toUpperCase(), description, duree, image);
        var result = db.prepare('SELECT idFilm FROM Film WHERE nomFilm = ?').get(titre).idFilm;
        exports.ajouter(listeActeurs, listeRealisateurs, listeGenres, result);
        return result;
    }
    return -1;
    return db.prepare('SELECT idFilm FROM Film WHERE nomFilm = ?').get(titre).idFilm;
}

exports.ajouter = function(listeActeurs, listeRealisateurs, listeGenres, idFilm){

    for (let i=0; i<listeActeurs.length; i++){
        db.prepare('INSERT INTO A_Joue (idFilm, nomActeur) VALUES (?, ?)').run(idFilm, listeActeurs[i].toUpperCase());
    }

    for (let i=0; i<listeRealisateurs.length; i++){
        db.prepare('INSERT INTO A_Realise (idFilm, nomRealisateur) VALUES (?, ?)').run(idFilm, listeRealisateurs[i].toUpperCase());
    }

    for (let i=0; i<listeGenres.length; i++){
        db.prepare('INSERT INTO Genre (idFilm, nomGenre) VALUES (?, ?)').run(idFilm, listeGenres[i].toUpperCase());
    }
}

exports.login = function(user, password) {
    var result = db.prepare('SELECT idUtilisateur FROM Utilisateur WHERE pseudoUtilisateur = ? AND mdpUtilisateur = ?').get(user, password);
    if(result === undefined) return -1;
    return result.idUtilisateur;
}

exports.new_user = function(user, mail, password, nom, prenom, date, genre, acteur, realisateur) {

    let today = new Date();
    let yyyy = today.getFullYear();
    let yearDate = date.split("-")[0];


    if (yyyy - yearDate < 13){
        return -3;
    }
    let existpseudo = db.prepare('SELECT pseudoUtilisateur FROM Utilisateur WHERE pseudoUtilisateur = ?').get(user);
    if (existpseudo === undefined){
        let existmail = db.prepare('SELECT mailUtilisateur FROM Utilisateur WHERE mailUtilisateur = ?').get(mail);
        if (existmail === undefined){
            db.prepare('INSERT INTO Utilisateur (pseudoUtilisateur, mailUtilisateur, mdpUtilisateur, nomUtilisateur, prenomUtilisateur, dateNaissance, nomGenre, idActeur, idRealisateur) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)').run(user, mail, password, nom, prenom, date, genre.toUpperCase(), acteur, realisateur);
            return db.prepare('SELECT idUtilisateur FROM Utilisateur WHERE pseudoUtilisateur = ?').get(user).pseudoUtilisateur;
        }
        return -1;
    }
    return -2;
}

exports.update_userMdp = function(id, mdp) {
    db.prepare('UPDATE Utilisateur SET mdpUtilisateur = ?  WHERE idUtilisateur = ?').run(mdp, id);
}

exports.update_userInfos = function(id, pseudo, nom, prenom, email, date) {
    let found = false;
    if (pseudo.length === 0 ) pseudo = db.prepare('SELECT pseudoUtilisateur FROM Utilisateur WHERE idUtilisateur = ?').get(id).pseudoUtilisateur;
    else found = true;
    if (nom.length === 0 ) nom = db.prepare('SELECT nomUtilisateur FROM Utilisateur WHERE idUtilisateur = ?').get(id).nomUtilisateur;
    else found = true;
    if (prenom.length === 0 ) prenom = db.prepare('SELECT prenomUtilisateur FROM Utilisateur WHERE idUtilisateur = ?').get(id).prenomUtilisateur;
    else found = true;
    if (email.length === 0 ) email = db.prepare('SELECT mailUtilisateur FROM Utilisateur WHERE idUtilisateur = ?').get(id).mailUtilisateur;
    else found = true;
    if (date.length === 0 ) date = db.prepare('SELECT dateNaissance FROM Utilisateur WHERE idUtilisateur = ?').get(id).dateNaissance;
    else found = true;
    if (found === false) return -3;
    let existpseudo = db.prepare('SELECT pseudoUtilisateur FROM Utilisateur WHERE pseudoUtilisateur = ? AND idUtilisateur != ?').get(pseudo, id);
    if (existpseudo === undefined){
        var existemail = db.prepare('SELECT mailUtilisateur FROM Utilisateur WHERE mailUtilisateur = ? AND idUtilisateur != ?').get(email, id);
        if (existemail === undefined) {
            db.prepare('UPDATE Utilisateur SET pseudoUtilisateur = ?, mailUtilisateur = ?, nomUtilisateur = ?, prenomUtilisateur = ?, dateNaissance = ?  WHERE idUtilisateur = ?').run(pseudo, email, nom, prenom, date, id);
            return 0;
        }
        return -1;
    }
    return -2;
}

exports.update_userPref = function(id, genre, acteur, realisateur) {
    db.prepare('UPDATE Utilisateur SET nomGenre = ?, idActeur = ?, idRealisateur = ?  WHERE idUtilisateur = ?').run(genre, acteur, realisateur, id);
}
*/
