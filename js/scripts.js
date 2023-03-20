// OWL CAROUSEL
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
    responsive:{
        320:{
            items:2
        },
        600:{
            items:4
        }
    }
});

// Javascript del menu hamburguesa para que cierre con animacion

function CloseNav() {
    $(".navbar-collapse").stop().animate({'height': 0},160, function () {
        $('.navbar-collapse').removeClass('show').addClass("collapse");
    });
    $(".navbar-toggler").stop().removeClass('collapsed');
};