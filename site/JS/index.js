






function continent(conti){
    conti.forEach(element => {
    element.addEventListener("mouseover",function(){illumination(element.className)})
    element.addEventListener("mouseout",function(){stop(element.className)})
    element.addEventListener("click",function(){destination(element.className)})

    
    });
}
function illumination(name){
    
    if (name.animVal=="europe"){
        europe.forEach(element=>{
        element.style.fill="red"
    })
    }
    else if (name.animVal=="asie"){
        asie.forEach(element=>{
        element.style.fill="red"
    })
    }
    else if (name.animVal=="afrique"){
        afrique.forEach(element=>{
        element.style.fill="red"
    })
    }
    else if (name.animVal=="oceanie"){
        oceanie.forEach(element=>{
        element.style.fill="red"
    })
    }
    else if (name.animVal=="ameriqueSud"){
        ameriqueSud.forEach(element=>{
        element.style.fill="red"
    })
    }
    else if (name.animVal=="ameriqueNord"){
        ameriqueNord.forEach(element=>{
        element.style.fill="red"
    })
    }
    
}   

function stop(name){
    
    if (name.animVal=="europe"){
        europe.forEach(element=>{
        element.style.fill="grey"
    })
    }
    else if (name.animVal=="asie"){
        asie.forEach(element=>{
        element.style.fill="grey"
    })
    }
    else if (name.animVal=="afrique"){
        afrique.forEach(element=>{
        element.style.fill="grey"
    })
    }
    else if (name.animVal=="oceanie"){
        oceanie.forEach(element=>{
        element.style.fill="grey"
    })
    }
    else if (name.animVal=="ameriqueSud"){
        ameriqueSud.forEach(element=>{
        element.style.fill="grey"
    })
    }
    else if (name.animVal=="ameriqueNord"){
        ameriqueNord.forEach(element=>{
        element.style.fill="grey"
    })
    }
}

function destination(name){
    
    document.location.href=`/site/html/destinations.html?continent=${name.animVal}`
}


var europe=document.querySelectorAll('.europe');
continent(europe)
var asie=document.querySelectorAll('.asie');
continent(asie)
var afrique=document.querySelectorAll('.afrique');
continent(afrique)
var oceanie=document.querySelectorAll('.oceanie');
continent(oceanie)
var ameriqueSud=document.querySelectorAll('.ameriqueSud');
continent(ameriqueSud)
var ameriqueNord=document.querySelectorAll('.ameriqueNord');
continent(ameriqueNord)


