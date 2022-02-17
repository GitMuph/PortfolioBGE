
 
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


/* CV */
$(document).ready(function(){
	$('.togglebtn').click(function(){
   		$('.myimgdivshowhide').toggle();
	});
});

/* sliders projets */

// $('.tempo').slick({
//   arrows: false,
//   dots:true,
//   autoplay: true,
//   speed:1000
// });







