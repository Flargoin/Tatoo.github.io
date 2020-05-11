$(document).ready(function(){
  $('.slider').slick({
    autoplay:true,
    autoplaySpeed:2500,
    arrows:true,
    prevArrow:'<button type="button" class="slick-prev"></button>',
    nextArrow:'<button type="button" class="slick-next"></button>',
    centerMode:false,
    slidesToShow:1,
    slidesToScroll:1
  });
});

const cartButton = document.querySelector('#advantage-button');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
const close2 = document.querySelector('.button');

cartButton.addEventListener('click', function(event) { 
     modal.classList.add('is_open');
});

close.addEventListener('click', function(event) { 
    modal.classList.remove('is_open');
});

