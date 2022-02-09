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




