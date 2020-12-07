

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
        if (ville==hotel.ville){
            return hotel.prixAdulte;
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


