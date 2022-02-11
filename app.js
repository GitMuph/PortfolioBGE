 /* anim carte */

let playing = false;
let card = document.querySelector(".card");

card.addEventListener('click',function() {
  if(playing)
    return;
  
  playing = true;
  anime({
    targets: card,
    scale: [{value: 1}, {value: 1.4}, {value: 1, delay: 250}],
    rotateY: {value: '+=180', delay: 200},
    easing: 'easeInOutSine',
    duration: 400,
    complete: function(anim){
       playing = false;
    }
  });
});
 
 /* menu */
let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');


    toggle.addEventListener('click', function() {
    body.classList.toggle('open');
    
})

function hidemenu() {
  body.classList.toggle('open');
  
}



/*Anim titre changeant: jquery-3.6.0.min.js */
var text = ["Front-end... ","Back-end...", "& responsive design !"];
var counter = 0;
var elem = $("#titrechangeant");
setInterval(change, 3000);
function change() {
    elem.fadeOut(function(){
        elem.html(text[counter]);
        counter++;
        if(counter >= text.length) { counter = 0; }
        elem.fadeIn();
    });
}
/* slider */
$('.slider').slick({
     dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    autoplay:true,
    useCSS: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  
/* CV */
$(document).ready(function(){
	$('.togglebtn').click(function(){
   		$('.myimgdivshowhide').toggle();
	});
});

/* sliders projets */

$('.tempo').slick({
  arrows: false,
  dots:true,
  autoplay: true,
  speed:1000
});

$('.tempo2').slick({
  arrows: false,
  dots:true,
  autoplay: true,
  speed:1000
});
/* jeu */

var character =
document.getElementById("character");
var block = document.getElementById("block");
function jump(){
    if(character.classList != "animate"){
    character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}
var checkDead = setInterval(function(){
    var characterTop =
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockleft =
    parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockleft<20 && blockleft>0 && characterTop>= 80){
        block.style.animation = "none";
        block.style.display = "none";
        alert("t nul")
    }
},10);



