 /* anim carte */

// let playing = false;
// let card = document.querySelector(".card");

// card.addEventListener('click',function() {
//   if(playing)
//     return;
  
//   playing = true;
//   anime({
//     targets: card,
//     scale: [{value: 1}, {value: 1.4}, {value: 1, delay: 250}],
//     rotateY: {value: '+=180', delay: 200},
//     easing: 'easeInOutSine',
//     duration: 400,
//     complete: function(anim){
//        playing = false;
//     }
//   });
// });
 
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
// $('.slider').slick({
//      dots: false,
//     arrows: true,
//     infinite: true,
//     speed: 1000,
//     autoplay:true,
//     useCSS: true,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     responsive: [
//       {
//         breakpoint: 1100,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           infinite: true,
//           dots: false
//         }
//       },
//       {
//         breakpoint: 800,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
  
//     ]
//   });
  
// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'hozizontal',
//   loop: true,
//   autoplay : true,


//   //  pagination: {
//   //    el: '.swiper-pagination',
//   //  },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

   
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
// });

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







