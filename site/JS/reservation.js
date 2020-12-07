


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
    let paris= new destination(hotels[0].ville , hotels[0].prixAdulte , hotels[0].petitDej , hotels[0].animauxOK, hotels[0].image,hotels[0].continent, "../html/formulaire.html?ville=paris");
    let londres= new destination(hotels[1].ville , hotels[1].prixAdulte , hotels[1].petitDej , hotels[1].animauxOK, hotels[1].image,hotels[1].continent, "../html/formulaire.html?ville=londres");
    let newYork= new destination(hotels[2].ville , hotels[2].prixAdulte , hotels[2].petitDej , hotels[2].animauxOK, hotels[2].image,hotels[2].continent, "../html/formulaire.html?ville=newyork");
    let venise= new destination(hotels[3].ville , hotels[3].prixAdulte , hotels[3].petitDej , hotels[3].animauxOK, hotels[3].image,hotels[3].continent, "../html/formulaire.html?ville=venise");
    let johannesburg= new destination(hotels[4].ville , hotels[4].prixAdulte , hotels[4].petitDej , hotels[4].animauxOK, hotels[4].image,hotels[4].continent, "../html/formulaire.html?ville=johannesburg");
    let LasVegas= new destination(hotels[5].ville , hotels[5].prixAdulte , hotels[5].petitDej , hotels[5].animauxOK, hotels[5].image,hotels[5].continent, "../html/formulaire.html?ville=LasVegas");
    let MachuPichu= new destination(hotels[6].ville , hotels[6].prixAdulte , hotels[6].petitDej , hotels[6].animauxOK, hotels[6].image,hotels[6].continent, "../html/formulaire.html?ville=MachuPichu");
    let Rio= new destination(hotels[7].ville , hotels[7].prixAdulte , hotels[7].petitDej , hotels[7].animauxOK, hotels[7].image,hotels[7].continent, "../html/formulaire.html?ville=Rio");
    let sydney= new destination(hotels[8].ville , hotels[8].prixAdulte , hotels[8].petitDej , hotels[8].animauxOK, hotels[8].image,hotels[8].continent, "../html/formulaire.html?ville=sydney");
    let tokyo= new destination(hotels[9].ville , hotels[9].prixAdulte , hotels[9].petitDej , hotels[9].animauxOK, hotels[9].image,hotels[9].continent, "../html/formulaire.html?ville=tokyo");
    listeHotels=[paris,londres,newYork,venise,johannesburg,LasVegas,MachuPichu,Rio,sydney,tokyo];
    
    findville(listeHotels);
}


function formulaire()
{
    let nom=document.getElementById("nom").value;
    let prenom=document.getElementById("prenom").value;
    let mail=document.getElementById("email").value;
    let tel=document.getElementById("telephone").value;
    let depart=document.getElementById("datededepart").value;
    let arrive=document.getElementById("datederetour").value;
    let nbAdultes=document.getElementById("nbadulte").value;
    let nbEnfants=document.getElementById("nbenfant").value;
    let pD=document.getElementById("pdej").checked;
    let animaux=document.getElementById("animaux").checked;
    //let renseignement=document.getElementById("plus").value;
    
    jours=verifDate(depart,arrive);
    let valeurs={"jours":jours,"nbAdultes":nbAdultes,"nbEnfants":nbEnfants,"pD":pD,"animaux":animaux,"depart":depart,"arrive":arrive};
    prix(valeurs)
    return valeurs
}

function verifDate(dateDpart,dateRetour){
    valren="dates valides"
    if (Date.parse(dateDpart)<date){
        valren="Erreur de date: verifiez les dates svp"    
    }
    else if (Date.parse(dateRetour)<date){
        valren="Erreur de date: verifiez les dates svp"
    }
    else if (Date.parse(dateRetour)-Date.parse(dateDpart)<=0){
        valren="Erreur de date: verifiez les dates svp"
    }
    document.getElementById("validiteDates").innerHTML=valren;
    return Math.ceil(((Date.parse(dateRetour)-Date.parse(dateDpart))/(1000*60*60*24)))
}

function findville(liste){
    document.getElementById("destination").innerText= "Voyage pour "+ ville;
    for(let hotel of liste ){
        if (ville==hotel.nom){
            return hotel.prix;
        }
    }
    
}
function prix(infos){
    let prixhotel=findville(listeHotels);
    prixfinal=0;
    let prixPetitDej;
    let prixanimaux;
    let nbJours=  infos.jours;
    let nbadulte=parseInt(infos.nbAdultes,10);
    let nbenfant=parseInt( infos.nbEnfants,10);


    if (infos.pD== false){ prixPetitDej = 0}
    else{prixPetitDej=12}
    if (infos.animaux== false){prixanimaux = 0}
    else{prixanimaux=12}

    prixfinal=nbJours*(prixhotel*(nbadulte+0.4*nbenfant));
    prixfinal+= nbJours* prixPetitDej*(nbadulte+nbenfant);
    prixfinal+= nbJours* prixanimaux; 
    document.getElementById("total").innerHTML=Math.round( prixfinal)+" euros";
    localStorage.setItem("price",prixfinal)
    
}

function estconnecter(){
    
    if(sessionStorage.getItem('estConnecte')!='true'){
        
        event.preventDefault();
        document.getElementById('pasConnect').textContent ="Veuillez vous connecter";
        document.getElementById('pasConnect').style.color="red";
        setTimeout(function(){document.getElementById('pasConnect').textContent =""},2000);
        return false;
    }else{
        return true;
    }

}

function AjoutPanier(){
    let recap =formulaire();
    recap.dest=ville;
    recap.prix=prixfinal;
    if (estconnecter()){
        if (sessionStorage.getItem("panier")===null){
            console.log(sessionStorage.getItem("panier"));
            let panier={}
            panier.ancien=JSON.parse(sessionStorage.getItem("panier"))
            panier.nouveau=recap;
            sessionStorage.setItem("panier",JSON.stringify(panier))
        }
        else{
            sessionStorage.setItem("panier",JSON.stringify(recap))
        }
    }
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


var date=Date.now();
var ville=localStorage.getItem("ville");

var listeHotels;
var prixfinal
window.onscroll=function(){scroll()};
Recup();


