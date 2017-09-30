// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('scroll-to')).offset().top - 120
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// cookie policy
window.addEventListener("load", function(){
  window.cookieconsent.initialise({
    "palette": {
      "popup": {
        "background": "#000"
      },
      "button": {
        "background": "#fffdf2"
      }
    }
})});
