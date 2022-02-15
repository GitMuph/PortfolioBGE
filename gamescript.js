var character = document.getElementById("character");
var block = document.getElementById("block");
var rocket = document.getElementById("rocket");
var star = document.getElementById("star");
var counter2=0;


function newscore(){
  counter2+=1;
  
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



    if(blockleft<20 && blockleft>-20 && characterTop>= 80){
      
        block.style.animation = "none";
        block.style.display = "none";
        rocket.style.animation = "none";
      rocket.style.display = "none";
      star.style.animation = "none";
    star.style.display = "none";
        console.log("Jeu prêt")
        
        
        document.getElementById("scoreSpan").innerHTML = counter;
    }
  
    if(rocketleft<20 && rocketleft>-20 && characterTop>= 80){
      
      rocket.style.animation = "none";
      rocket.style.display = "none";
      block.style.animation = "none";
        block.style.display = "none";
        star.style.animation = "none";
    star.style.display = "none";
    console.log("Jeu prêt")
    document.getElementById("scoreSpan").innerHTML = counter;
    }
    
    if(starleft<20 && starleft>-20 && characterTop>= 80){
      
      star.style.animation = "none";
      star.style.display = "none";
      rocket.style.animation = "none";
      rocket.style.display = "none";
      block.style.animation = "none";
        block.style.display = "none";
        console.log("Jeu prêt")
        document.getElementById("scoreSpan").innerHTML = counter ;
       
    }
    
    },1);
  


