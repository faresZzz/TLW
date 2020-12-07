
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
    let venice= new destination(hotels[3].ville , hotels[3].prixAdulte , hotels[3].petitDej , hotels[3].animauxOK, hotels[3].image,hotels[3].continent, hotels[3].lien);
    let johannesburg= new destination(hotels[4].ville , hotels[4].prixAdulte , hotels[4].petitDej , hotels[4].animauxOK, hotels[4].image,hotels[4].continent, hotels[4].lien);
    let LasVegas= new destination(hotels[5].ville , hotels[5].prixAdulte , hotels[5].petitDej , hotels[5].animauxOK, hotels[5].image,hotels[5].continent, hotels[5].lien);
    let singapour= new destination(hotels[6].ville , hotels[6].prixAdulte , hotels[6].petitDej , hotels[6].animauxOK, hotels[6].image,hotels[6].continent, hotels[6].lien);
    let Rio= new destination(hotels[7].ville , hotels[7].prixAdulte , hotels[7].petitDej , hotels[7].animauxOK, hotels[7].image,hotels[7].continent, hotels[7].lien);
    let sydney= new destination(hotels[8].ville , hotels[8].prixAdulte , hotels[8].petitDej , hotels[8].animauxOK, hotels[8].image,hotels[8].continent, hotels[8].lien);
    let tokyo= new destination(hotels[9].ville , hotels[9].prixAdulte , hotels[9].petitDej , hotels[9].animauxOK, hotels[9].image,hotels[9].continent, hotels[9].lien);
    listeHotels=[paris,londres,newYork,venice,johannesburg,LasVegas,singapour,Rio,sydney,tokyo];
    
    addDestination(listeHotels)
}    


function addDestination(listH){
    const aff = document.getElementById("listehotels");
    aff.innerHTML=""
    listH.forEach(hotel => {
        var nouvDiv=document.createElement("div");
        var autreDest= document.createElement("a");
        var img= document.createElement("img");
        var over=document.createElement("div");
        
        nouvDiv.className="container"; 

        autreDest.href=hotel.lien;
        
        img.src=hotel.image[0];
        img.alt=hotel.nom;
        img.id=hotel.nom;
        img.className=hotel.nom;
        
        over.className="overlay";
        over.innerText=hotel.nom
        
        autreDest.addEventListener("click",function(){localStorage.setItem("ville", hotel.nom)});
        img.addEventListener("mouseover", function(){defilement(hotel); AfficherTemperature(hotel.nom)});
        img.addEventListener('mouseout',function(){stop(hotel)})

        aff.appendChild(nouvDiv);
        nouvDiv.appendChild(autreDest)
        nouvDiv.appendChild(over)
        autreDest.appendChild(img);
    });    
}

function defilement(htl){
    img=document.getElementById(htl.nom)
    img.src=htl.image[i];
    if(i<htl.image.length-1){
        i++;
    }
    else{
        i=0
    }
    compteur= setTimeout(function(){defilement(htl)}, 1500)
}
function stop(hots){
    clearTimeout(compteur);
    let img=document.getElementById(hots.nom);
    i=0;
    img.src=hots.image[i];
}

function filtre(){
    var listefiltres=[]
    let recherche=document.getElementById("recherchecase").value.toLowerCase();
    let continent=document.getElementById("continent").value;
    let prix=document.getElementById("prix").value;
    let pitidej=document.getElementById("petidej").checked;
    let animaux=document.getElementById("animaux").checked;
    
    listefiltres={"recherche":recherche.toLowerCase(),"continent":continent,"prix":prix,"pitidej":pitidej,"animaux":animaux};
    
    
    filtrage( listefiltres);
}   
function filtrage(choix){
    console.log(choix)
    let listehtls=listeHotels.slice();
    listeHotels.forEach(htls=>{
        
        if (choix.prix<htls.prix){
            listehtls.splice(listehtls.indexOf(htls),1);
        }
        else if (choix.continent!="All" && choix.continent!= htls.continent){
            listehtls.splice(listehtls.indexOf(htls),1);
        }
        else if(choix.recherche!="" && choix.recherche!=htls.nom.toLowerCase()){
            listehtls.splice(listehtls.indexOf(htls),1);
        }
        else if (choix.pitidej==true && htls.pitidej==false){
            listehtls.splice(listehtls.indexOf(htls),1);
        }
        else if (choix.animaux==true && htls.animaux==false){
            listehtls.splice(listehtls.indexOf(htls),1);
        }    
    })
    addDestination(listehtls);
    

    
}
    
    

 function affichebarrePrix(){
    let prix=document.getElementById("prix").value;
    document.getElementById("afficheprix").innerHTML=prix +" euros"; 
 }

 
function scroll() {
    /* total copie colle de W3School*/
    mybutton = document.getElementById("top");
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
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

 function infoHotel(val){
   console.log( val);
 }
 function AfficherTemperature(ville)
{
    var valRen;
    let appid="bfb725a2d2eb425c0443cbcdf5c91e8f";
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+ville+"&appid="+appid+"&units=metric").then(function(reponse)
    {
        json=reponse.json();
        return json;    
    })
    .then(function(json)
    {
        valRen= "La temperature à " +json["name"]+" est de "+json["main"]["temp"]+" °C"
        infoHotel(valRen);
    })

    
}


var listeHotels;
var i=0;
var compteur;
Recup();
window.onscroll=function(){scroll()};
