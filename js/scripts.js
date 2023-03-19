$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

  $('.loop').owlCarousel({
    center: true,
    items:2,
    loop:true,
    margin:10,
    mouseDrag:true,
    touchDrag:true,
    nav: true,
    responsive:{
        320:{
            items:1
        },
        600:{
            items:4
        }
    }
});