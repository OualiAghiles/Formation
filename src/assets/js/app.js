$(document).ready(function(){
    "use strict";
    // Author Code Here
    var ratio = 2;

    $('.dropdown-toggle').dropdown();
    //Function to animate slider captions
    function doAnimations( elems ) {
        //Cache the animationend event in a variable
        var animEndEv = 'webkitAnimationEnd animationend';

        elems.each(function () {
            var $this = $(this),
                $animationType = $this.data('animation');
            $this.addClass($animationType).one(animEndEv, function () {
                $this.removeClass($animationType);
            });
        });
    }

    //Variables on page load
    var $myCarousel = $('.sc_carousel'),
        $firstAnimatingElems = $myCarousel.find('.carousel-item:first').find("[data-animation ^= 'animated']");

    //Initialize carousel
    $myCarousel.carousel();

    //Animate captions in first slide on page load
    doAnimations($firstAnimatingElems);

    //Pause carousel
    $myCarousel.carousel('pause');


    //Other slides to be animated on carousel slide event
    $myCarousel.on('slide.bs.carousel', function (e) {
        var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
        doAnimations($animatingElems);
    });




        $('section .cut').each(function() {
            if ($(this).hasClass('cut-top'))
                $(this).css('border-right-width', $(this).parent().width() + "px");
            else if ($(this).hasClass('cut-bottom'))
                $(this).css('border-left-width', $(this).parent().width() + "px");
        });

        // Navbar Init
        $('nav').addClass('original').clone().insertAfter('nav').addClass('navbar-fixed-top').css('position', 'fixed').css('top', '0').css('margin-top', '0').removeClass('original');
        $('.mobile-nav ul').html($('nav .navbar-nav').html());
        $('nav.navbar-fixed-top .navbar-brand img').attr('src', $('nav.navbar-fixed-top .navbar-brand img').data("active-url"));

    // Window Scroll
    function onScroll() {
        if ($(window).scrollTop() > 50) {
            $('nav.original').css('opacity', '0');
            $('nav.navbar-fixed-top').css('opacity', '1');
        } else {
            $('nav.original').css('opacity', '1');
            $('nav.navbar-fixed-top').css('opacity', '0');
        }
    }

    window.addEventListener('scroll', onScroll, false);

});
