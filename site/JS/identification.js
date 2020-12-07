function Recup()
{
    
    fetch("../Json/comptes.json")
    .then(function(reponse)
    {
        json=reponse.json();
        return json;
        
    })
    .then(function(json)
    {   
        comptes = json;
        
        
    })  
}
function connexion()
{
    mail= document.getElementById("mail").value;
    motDePasse= document.getElementById("motdpasse").value;
    
    check=true
    for(element of comptes) {
        if (element.mail== mail && element.motDePasse== motDePasse){
            sessionStorage.setItem('estConnecte',"True");
            sessionStorage.setItem("utilisateur",JSON.stringify(element));
            val=true;
            break;
        }
        else{
            check=false;
        }    
    };
    if(check==false){
        let faux=document.createElement('span');
        affiche=document.getElementById("connect");
        faux.innerText="le nom d'utilisateur ou le mot de passe est faux";
        affiche.appendChild(faux);
        setTimeout(function(){affiche.removeChild(faux)},2000);
    }

 
}

function identifiants(){
    let prenom=document.getElementById("prenom").value;
    let nom=document.getElementById("Nom").value;
    let adresseMail=document.getElementById("email").value;
    let motDePasse= document.getElementById("motdpasse").value; 
    let confirm= document.getElementById("confirmermotdpasse").value;
    let identifiant={"prenom":prenom,"nom":nom,"mail":adresseMail,"motDePasse":motDePasse,"confirm":confirm};
    
    creationCompte(identifiant);
}
function creationCompte(id){
    valide=true;
    
    if( id.prenom=="" || id.nom=="" || id.mail=="" || id.motDePasse=="" || id.confirm==""){
        let ok = document.createElement("span")
            ok.innerText=" veuiller remplir toutes les cases"
            document.getElementById("ins").appendChild(ok);
            setTimeout(function(){document.getElementById('ins').removeChild(ok)},2000);
    }
    else{
        for(personne of comptes){
            if (personne.mail== id.mail){
                let ok = document.createElement("span")
                ok.innerText="un compte est deja relier a cette adresse mail"
                document.getElementById("ins").appendChild(ok);
                setTimeout(function(){document.getElementById('ins').removeChild(ok)},2000);
                valide=false
                break;
            
            } 
        }
        if (valide){
            if (id.confirm!=id.motDePasse){
                let ok = document.createElement("span")
                ok.innerText="le mot de passe ne correcpond pas"
                document.getElementById("ins").appendChild(ok);
                setTimeout(function(){document.getElementById('ins').removeChild(ok)},2000);
            }
            else{
            sessionStorage.setItem("nouvelUtilisateur",JSON.stringify(id));
            sessionStorage.setItem('estConnecte',"True");
            let ok = document.createElement("span")
            ok.innerText=" vous etes biens Inscrit et connecter"
            document.getElementById("ins").appendChild(ok);
            setTimeout(function(){document.getElementById('ins').removeChild(ok)},2000);
            }
        }
    
    }    
    
   

}
function deconnexion(){
    if (sessionStorage.getItem('estConnecte')=='True'){
        sessionStorage.setItem("estConnecte","False");
        let ok = document.createElement("span")
        ok.innerText=": Vous etes biens deconnecté"
        document.getElementById("deco").appendChild(ok);
        setTimeout(function(){document.getElementById('deco').removeChild(ok)},2000);
    }
    else{
        let ok = document.createElement("span")
        ok.innerText=": Vous n'etiez pas connecté"
        document.getElementById("deco").appendChild(ok);
        setTimeout(function(){document.getElementById('deco').removeChild(ok)},2000);
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
var comptes;
window.onscroll=function(){scroll()};

Recup();


