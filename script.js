
let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = () => {
     menuBtn.classList.toggle('fa-times');
     navbar.classList.toggle('active');
};



var swiper = new Swiper(".service-slider", {
     spaceBetween: 20,
     grabCursor: true,
     loop: true,

     pagination: {
          el: ".swiper-pagination",
          clickable: true,
     },
     breakpoints: {
          540: {
               slidesPerView: 1,

          },
          768: {
               slidesPerView: 2,
          },
          1024: {
               slidesPerView: 3,

          },
     },
});
var swiper = new Swiper(".profesori-slider", {
     spaceBetween: 40,
     grabCursor: true,
     loop: true,

     pagination: {
          el: ".swiper-pagination",
          clickable: true,
     },
     breakpoints: {
          540: {
               slidesPerView: 1
          },
          768: {
               slidesPerView: 2
          },
          1024: {
               slidesPerView: 3
          },
     },
});

var swiper = new Swiper(".recenzii-slider", {
     spaceBetween: 25,
     grabCursor: true,
     loop: true,

     pagination: {
          el: ".swiper-pagination",
          clickable: true,
     },
     breakpoints: {
          540: {
               slidesPerView: 1
          },
          768: {
               slidesPerView: 2
          },
          1024: {
               slidesPerView: 3
          },
     },
});
