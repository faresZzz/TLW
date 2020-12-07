
class destination{
    constructor(nom,prix, pitidej,animaux,image,continent,lien,temp){
        this.nom= nom;
        this.prix=prix;
        this.pitidej=pitidej;
        this.image=image;
        this.lien=lien;
        this.continent=continent;
        this.animaux=animaux;
        this.temp=temp
        
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
        conti() 
    })  
}

function listHotels(hotels){
    listeHotels=hotels;
    for (i in listeHotels){
        listeHotels[i].temp=listeTemp[i];
    }
    console.log(listeHotels)
    addDestination(listeHotels)
}    

/* Permet d'afficher les destinations dans la page*/
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
        img.alt=hotel.ville;
        img.id=hotel.ville;
        img.className=hotel.ville;
        
        over.className="overlay";
        over.innerText=`${hotel.ville}: ${hotel.temp} °C`
        
        autreDest.addEventListener("click",function(){localStorage.setItem("ville", hotel.ville)});
        img.addEventListener("mouseover", function(){defilement(hotel) ;infoHotel(hotel)});
        img.addEventListener('mouseout',function(){stop(hotel)})

        aff.appendChild(nouvDiv);
        nouvDiv.appendChild(autreDest)
        nouvDiv.appendChild(over)
        autreDest.appendChild(img);
    });    
}

function defilement(htl){
    img=document.getElementById(htl.ville)
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
    let img=document.getElementById(hots.ville);
    i=0;
    img.src=hots.image[i];
}


/* Permet de faire "marcher" les différents filtre (Prix,continent...)*/
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
    
    let listehtls=listeHotels.slice();
    listeHotels.forEach(htls=>{
        
        if (choix.prix<htls.prix){
            listehtls.splice(listehtls.indexOf(htls),1);
        }
        else if (choix.continent!="All" && choix.continent!= htls.continent){
            listehtls.splice(listehtls.indexOf(htls),1);
        }
        else if(choix.recherche!="" && choix.recherche!=htls.ville.toLowerCase()){
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
    
    
/* Permet d'afficher le prix calculé selon l'hôtel/nb de jours */
 function affichebarrePrix(){
    let prix=document.getElementById("prix").value;
    document.getElementById("afficheprix").innerHTML=prix +" €"; 
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
   console.log( val.temp);
 }
 function Temperature(listeVille)
{
    
    for(ville of listeVille){
        
        let appid="bfb725a2d2eb425c0443cbcdf5c91e8f";
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+ville+"&appid="+appid+"&units=metric").then(function(reponse)
        {
            json=reponse.json();
            return json;    
        })
        .then(function(json)
        {   
            console.log(json["main"]["temp"])
            listeTemp.push(json["main"]["temp"])
        })
        

    }
    console.log(listeTemp)
    
    
}

function conti(){
    let ul=sessionStorage.getItem("continent");
    let selet=document.getElementById(ul);
    selet.selected='true'
    filtre()

}
var listeTemp=[] ;
Temperature(["Paris","Londres","New York","Venice","Johannesburg","Las Vegas","Singapour", "Rio","Sydney","Tokyo"])
var listeHotels;
var i=0;
var compteur;
Recup();

 
window.onscroll=function(){scroll()};
