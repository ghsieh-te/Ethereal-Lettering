var animateIntro = function() {

    var revealIntro = function() {
        $(this).css({
             opacity: 1,
             transform: 'scaleX(1) translateY(0)'
         });
    };

    $.each($('.introduction'), revealIntro);

};

$(window).load(function() {
  if ($(window).height() > 950) {
    animateIntro();
  }

  var scrollDistance = $('.introduction').offset().top - $(window).height() + 200;

  $(window).scroll(function(event) {
    if ($(window).scrollTop() >= scrollDistance) {
             animateIntro();
    }
  });
});
