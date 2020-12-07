
function Recup()
{
    
    fetch("../Json/hotel.json")
    .then(function(reponse)
    {
        json=reponse.json();
        return json;
        
    })
    .then(function(json)
    {   
         
        data= json;
        listHotels(data); 
    })  
}

function listHotels(hotels){
    listeHotels=hotels;
    
}    
function recupUrl(){
    const resa = new URLSearchParams(window.location.search);
    var ville=localStorage.getItem("ville");
    var prix=localStorage.getItem("price");
    var nom=resa.get("nom");
    var prenom=resa.get("prenom");
    var mail=resa.get("email");
    var tel=resa.get("telephone");
    var depart=resa.get('datededepart');
    var retour=resa.get("datederetour");
    let nbJour=Math.ceil(((Date.parse(retour)-Date.parse(depart))/(1000*60*60*24)))
    var adulte=resa.get("nbadulte");
    var enfant=resa.get("nbenfant");
    var infosComp=resa.get("plus")
    var infos={"ville":ville,"prix":prix,"nom":nom,"prenom":prenom,"mail":mail,"tel":tel,"depart":depart,"retour":retour,"nbJour":nbJour,"adulte":adulte,"enfant":enfant,"infosplus":infosComp};
    
    addInfos(infos);
}
function addInfos(inf){
    
    let infospersonnes=document.getElementById("infospersonnes");
    let infosVoyages=document.getElementById("infosVoyages");
    let perso=document.createElement("div");
    let voyage=document.createElement("div");
    
    perso.innerText=`bonjour ${inf.nom} ${inf.prenom}\n Veuiller verifier les informations de reservation si elles ne sont pas juste nous vous invitons à retourner en arriere pour les corriger.\n nom: ${inf.nom} prenom: ${inf.prenom}\n mail: ${inf.mail} telephone: ${inf.tel}`;

    if(inf.adulte>1){
        if (inf.enfant!=0){
            voyage.innerText=` Voyage pour ${inf.ville} du ${inf.depart} au ${inf.retour} (${inf.nbJour} jours).\n Pour ${inf.adulte} adultes et ${inf.enfant} enfants\n prix: ${inf.prix}\n `
        }
        else{
            voyage.innerText=` Voyage pour ${inf.ville} du ${inf.depart} au ${inf.retour} (${inf.nbJour} jours).\n Pour ${inf.adulte} adultes \nprix: ${inf.prix}\n `
        }            
    }else if (inf.enfant!=0){
        voyage.innerText=` Voyage pour ${inf.ville} du ${inf.depart} au ${inf.retour} (${inf.nbJour} jours).\n Pour ${inf.adulte} adulte et ${inf.enfant} enfants \nprix: ${inf.prix}\n `
    }
    else{
        voyage.innerText=` Voyage pour ${inf.ville} du ${inf.depart} au ${inf.retour} (${inf.nbJour} jours).\n Pour ${inf.adulte} adulte \nprix: ${inf.prix}\n `
    }
    infospersonnes.appendChild(perso);
    infosVoyages.appendChild(voyage);

    if(inf.infosplus!=" "){
        var plus=document.createElement("div");
        plus.innerText=`de plus nous transmettrons les infos complementaire à l'hotelier.\n ${inf.infosplus}`;
        infosVoyages.appendChild(plus);
    }   
}
function blague(){
    bod=document.getElementById("body");
    
    ancien=bod.cloneNode(true);
    bod.innerHTML=""
    texte=document.createElement("p");
    texte.innerHTML="Non je rigole c est une blague nous n'avons pas de page de payement mais ca serais la suite logique du processus. Mais pour cela il nous faudrais un minimim de PHP coté serveur."
    button=document.createElement("input");
    button.type="button";
    button.value="Tous reafficher"
    button.addEventListener("click",function(){bod.appendChild(ancien); bod.removeChild(texte); bod.removeChild(button)});
    bod.appendChild(texte)
    bod.appendChild(button);
}

function scroll() {
    /* total copie colle de W3School*/
    mybutton = document.getElementById("top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } 
    else {
        mybutton.style.display = "none";
    }
}


function remontrer() {
    /* total copie colle de W3School*/
  document.body.scrollTop = 0; // safari
  document.documentElement.scrollTop = 0; // le reste
}
var listeHotels;
window.onscroll=function(){scroll()};
Recup();

