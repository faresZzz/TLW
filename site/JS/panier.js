
function isconnect(){
    if (sessionStorage.getItem("estConnecte")===null || sessionStorage.getItem("estConnecte")===false){
        document.getElementById("connect").innerHTML= "veuillez vous connecter";
    }
    else {
        document.getElementById("connect").innerHTML= "bonjour bienvenue dans votre panier";
        panier();
    }
}
function panier(){
  let pan=JSON.parse( sessionStorage.getItem("panier"));
  console.log(pan);
  if (pan===null){
    document.getElementById("connect").innerHTML= "votre panier est vide";
  }
  else{

    var item=document.createElement("div");
    if (pan.animaux===false){
      if (pan.pD===false){
        item.innerText=`destination: ${pan.dest}\ndate de depart: ${pan.depart}\ndate de retour: ${pan.arrive}\n nombre d'adultes: ${pan.nbAdultes} \n nombre d'enfants: ${pan.nbEnfants}\n petit dejeuner: non \n animaux: non \nprix: ${pan.prix} euros`;
      }
      else{
        item.innerText=`destination: ${pan.dest}\ndate de depart: ${pan.depart}\ndate de retour: ${pan.arrive}\n nombre d'adultes: ${pan.nbAdultes} \n nombre d'enfants: ${pan.nbEnfants}\n petit dejeuner: oui \n animaux: non \nprix: ${pan.prix} euros `;
      }
    }
    else{
      if(pan.pD===false){
        item.innerText=`destination: ${pan.dest}\ndate de depart: ${pan.depart}\ndate de retour: ${pan.arrive}\n nombre d'adultes: ${pan.nbAdultes} \n nombre d'enfants: ${pan.nbEnfants}\n petit dejeuner: non \n animaux: oui \nprix: ${pan.prix} euros`;
      }
      else{
        item.innerText=`destination: ${pan.dest}\ndate de depart: ${pan.depart}\ndate de retour: ${pan.arrive}\n nombre d'adultes: ${pan.nbAdultes} \n nombre d'enfants: ${pan.nbEnfants}\n petit dejeuner: oui \n animaux: oui \nprix: ${pan.prix} euros`;
      }
      
    } 
    document.getElementById('panier').appendChild(item);
    
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
window.onscroll=function(){scroll()};

