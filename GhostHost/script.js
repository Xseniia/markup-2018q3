//slider//

$(document).ready(function(){
  $('.slider').slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
  });
});

//disappearing menu//

jQuery(function(f){
    var element = f('.top');
    f(window).scroll(function(){
        element['fade'+ (f(this).scrollTop() > 2520 ? 'Out': 'In')](500);           
    });
});