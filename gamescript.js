var character = document.getElementById("character");
var block = document.getElementById("block");
var rocket = document.getElementById("rocket");
var star = document.getElementById("star");
var star2 = document.getElementById("star2");
var monster = document.getElementById("monster");

var counter2=0;


function newscore(){
  counter2++;
  
  document.getElementById("scoreSpan").innerHTML = counter2;
  
 
}
function jump(){
    if(character.classList != "animate"){
    character.classList.add("animate");
    
    }
    setTimeout(function(){
        character.classList.remove("animate");
      
    },400);
}

var checkDead = setInterval(function(){
var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
var rocketleft = parseInt(window.getComputedStyle(rocket).getPropertyValue("left"));
var starleft = parseInt(window.getComputedStyle(star).getPropertyValue("left"));
var star2left = parseInt(window.getComputedStyle(star2).getPropertyValue("left"));
var monsterleft = parseInt(window.getComputedStyle(monster).getPropertyValue("left"));



    if(blockleft<20 && blockleft>-20 && characterTop>= 80){
    monster.style.animation = "none ";
    monster.style.display = "none"; 
    star2.style.animation = "none ";
    star2.style.display = "none";
    block.style.animation = "none";
    block.style.display = "none";
    rocket.style.animation = "none";
    rocket.style.display = "none";
    star.style.animation = "none";
    star.style.display = "none";
    character.style.color = "red";
    
        console.log("Jeu prêt")
        
        document.getElementById("scoreSpan").innerHTML = counter2;
return;
    }
  
    if(rocketleft<20 && rocketleft>-20 && characterTop>= 80){
    monster.style.animation = "none ";
    monster.style.display = "none";    
    star2.style.animation = "none ";
    star2.style.display = "none";
    rocket.style.animation = "none";
    rocket.style.display = "none";
    block.style.animation = "none";
    block.style.display = "none";
    star.style.animation = "none";
    star.style.display = "none";
    character.style.color = "red";

    console.log("Jeu prêt")

    document.getElementById("scoreSpan").innerHTML = counter2;
    return;
    }
    
    if(starleft<20 && starleft>-20 && characterTop>= 80){
    monster.style.animation = "none ";
    monster.style.display = "none"; 
    star2.style.animation = "none ";
    star2.style.display = "none";
    star.style.animation = "none";
    star.style.display = "none";
    rocket.style.animation = "none";
    rocket.style.display = "none";
    block.style.animation = "none";
    block.style.display = "none";
    character.style.color = "red";

    console.log("Jeu prêt")

    document.getElementById("scoreSpan").innerHTML = counter2 ;
    return;  
    }
    if(star2left<20 && star2left>-20 && characterTop>= 80){
    monster.style.animation = "none ";
    monster.style.display = "none";    
    star2.style.animation = "none ";
    star2.style.display = "none";
    star.style.animation = "none";
    star.style.display = "none";
    rocket.style.animation = "none";
    rocket.style.display = "none";
    block.style.animation = "none";
    block.style.display = "none";
    character.style.color = "red";

    console.log("Jeu prêt")

    document.getElementById("scoreSpan").innerHTML = counter2 ;
    return;     
      }
      if(monsterleft<20 && monsterleft>-20 && characterTop>= 0){
    star2.style.animation = "none ";
    star2.style.display = "none";
    star.style.animation = "none";
    star.style.display = "none";
    rocket.style.animation = "none";
    rocket.style.display = "none";
    block.style.animation = "none";
    block.style.display = "none";
    character.style.color = "red";

    console.log("Jeu prêt")

    document.getElementById("scoreSpan").innerHTML = counter2 ;
    return;       
        }
    
    },1);
  
  


