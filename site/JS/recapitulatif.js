
class destination{
    constructor(nom,prix, pitidej,animaux,image,continent,lien){
        this.nom= nom;
        this.prix=prix;
        this.pitidej=pitidej;
        this.image=image;
        this.lien=lien;
        this.continent=continent;
        this.animaux=animaux;
        
    }
}



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
    let paris= new destination(hotels[0].ville , hotels[0].prixAdulte , hotels[0].petitDej , hotels[0].animauxOK, hotels[0].image,hotels[0].continent, hotels[0].lien);
    let londres= new destination(hotels[1].ville , hotels[1].prixAdulte , hotels[1].petitDej , hotels[1].animauxOK, hotels[1].image,hotels[1].continent, hotels[1].lien);
    let newYork= new destination(hotels[2].ville , hotels[2].prixAdulte , hotels[2].petitDej , hotels[2].animauxOK, hotels[2].image,hotels[2].continent, hotels[2].lien);
    let venise= new destination(hotels[3].ville , hotels[3].prixAdulte , hotels[3].petitDej , hotels[3].animauxOK, hotels[3].image,hotels[3].continent, hotels[3].lien);
    let johannesburg= new destination(hotels[4].ville , hotels[4].prixAdulte , hotels[4].petitDej , hotels[4].animauxOK, hotels[4].image,hotels[4].continent, hotels[4].lien);
    let LasVegas= new destination(hotels[5].ville , hotels[5].prixAdulte , hotels[5].petitDej , hotels[5].animauxOK, hotels[5].image,hotels[5].continent, hotels[5].lien);
    let MachuPichu= new destination(hotels[6].ville , hotels[6].prixAdulte , hotels[6].petitDej , hotels[6].animauxOK, hotels[6].image,hotels[6].continent, hotels[6].lien);
    let Rio= new destination(hotels[7].ville , hotels[7].prixAdulte , hotels[7].petitDej , hotels[7].animauxOK, hotels[7].image,hotels[7].continent, hotels[7].lien);
    let sydney= new destination(hotels[8].ville , hotels[8].prixAdulte , hotels[8].petitDej , hotels[8].animauxOK, hotels[8].image,hotels[8].continent, hotels[8].lien);
    let tokyo= new destination(hotels[9].ville , hotels[9].prixAdulte , hotels[9].petitDej , hotels[9].animauxOK, hotels[9].image,hotels[9].continent, hotels[9].lien);
    listeHotels=[paris,londres,newYork,venise,johannesburg,LasVegas,MachuPichu,Rio,sydney,tokyo];
    
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
            voyage.innerText=` Voyage pour ${inf.ville} du ${inf.depart} au ${inf.retour} (${inf.nbJour} jours).\n Pour ${inf.adulte} adultes et ${inf.enfant} enfants\n\n `
        }
        else{
            voyage.innerText=` Voyage pour ${inf.ville} du ${inf.depart} au ${inf.retour} (${inf.nbJour} jours).\n Pour ${inf.adulte} adultes \n\n `
        }            
    }else if (inf.enfant!=0){
        voyage.innerText=` Voyage pour ${inf.ville} du ${inf.depart} au ${inf.retour} (${inf.nbJour} jours).\n Pour ${inf.adulte} adulte et ${inf.enfant} enfants \n\n `
    }
    else{
        voyage.innerText=` Voyage pour ${inf.ville} du ${inf.depart} au ${inf.retour} (${inf.nbJour} jours).\n Pour ${inf.adulte} adulte \n\n `
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

