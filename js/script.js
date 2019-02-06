console.log("hello wolrd");
let titre = " titre";
let auteurrealisateur = "auteurrea";
let dsortie = "11/11/11";        // déclaration
let synopsis = "synopsis";
let nbentree = "nb d'entrées";
// créatrion de l'objet film en Json.
let film ={
    titre : "un titre",
    auteurrealisateur: "un auteur",
    dsortie: "11/11/11",
    synopsis: "un synopsis",
    nbentree: 4000
};
// création de l'objet film en tableau.
 /*let filmTab = [ titre = "un titre", auteurrealisateur= "un auteur", dsortie= "11/11/11",
 synopsis = "un synopsis", 
 nbentrée = 4000 ];*/

let listefilms = [
   {  
    titre : "un titre 1",
    auteurrealisateur: "un auteur1",
    dsortie: "11/11/11",
    synopsis: "un synopsis1",
    nbentree: 1000,
    nb: 1000
   },
   {
    titre : "un titre2",
    auteurrealisateur: "un auteur2",
    dsortie: "22/22/22",
    synopsis: "un synopsis2",
    nbentree: 2000
   },
   {
    titre : "un titre3",
    auteurrealisateur: "un auteur3",
    dsortie: "33/33/33",
    synopsis: "un synopsis3",
    nbentree: 3000
   }

   

 ];
// console.log(listefilms[0].titre);

 for (let i = 0; i < listefilms.length; i++) {                 ///for///
     console.log (listefilms[i].titre);
     
 };
 for (index in listefilms) {                       
         console.log (listefilms[index].titre);
         
 };
 listefilms.forEach (function (listefilms){            ///foreach///
     console.log ( listefilms.titre);

 });

 let filmfilter = listefilms.filter(listefilms => listefilms.nbentree>= 1000);
    console.log(filmfilter);
 
var filme = filmfilter.reduce (function(a,b){
    return {nbentree: a.nbentree + b.nbentree};

})
console.log(filme);
