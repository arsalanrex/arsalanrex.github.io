/*-----------------------------------------------------------
* Template Name    : Nill | Bootstrap 4 personal, portfolio and resume
* Author           : Retrinagroup
* Version          : 1.0.0
* Created          : Dec 2019
* File Description : Main js file of the template
*------------------------------------------------------------
*/

// repeated variables
var $window = $(window);
var $root = $('html, body');

$(document).ready(function () {

    "use strict";

    colorScheme();
    menuToggler();
    sliderOwlCarousel();
    swiperSlider();
    typedJS();
    skills();
    countup();
    portfolioPopup();
    mapInit();
    validateEmail();
    sendEmail();
    $('.owl-item.active .hero-slide').addClass('zoom');
    

});

$window.on("load", (function() {
    $("#overlayer").delay(200).fadeOut('slow');
    $(".loader").delay(500).fadeOut('slow');
    pagePilling();
    portfolioIsotop();
}));

/*-----------------------------------------------------------------------------
                                   FUNCTIONS
-----------------------------------------------------------------------------*/

/*-------------------------
       Page Pilling
-------------------------*/
function pagePilling(){

    "use strict";
    
    var ids = [];
    var tooltips = [];
    var colors = [];
    $('.section').each(function () {
        ids.push(this.id);
        tooltips.push($(this).data("navigation-tooltip"));
        colors.push($(this).data("navigation-color"));
    });
    $('#pagepiling').pagepiling({
        sectionsColor: colors,
        anchors: ids,
        menu: '#myMenu',
        direction: 'vertical',
        verticalCentered: true,
        navigation: {
            'position': 'right',
            'tooltips': tooltips
        },
        loopBottom: true,
        loopTop: true,
        scrollingSpeed: 700,
        easing: 'swing',
        css3: true,
        normalScrollElements: '.owl-stage-outer',
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: true,
        //events
        onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
    });
}

/*-------------------------
        Color Scheme
-------------------------*/
function colorScheme(){

    "use strict";

    $('.color-scheme').click(function() {
        $("body").toggleClass('nill-dark');
        $('.section').toggleClass('bg-dark');
        $(this).children().toggleClass('lni-night lni-sun');
    });
}

/*-------------------------
    MENU TOGGLER
-------------------------*/
function menuToggler() {

    "use strict";

    $(".header-info-area").click(function(){
        $('.overlay-menu').toggleClass("show");
    });
}

/*--------------------------
    HERO BACKGROUND IMAGE
---------------------------*/
var hero01 = $('.hero-01');
var backgrounImage = hero01.data("background-image");
hero01.css('background', 'url(' + backgrounImage + ') no-repeat');

/*---------------------------
    FOOTER BACKGROUND IMAGE
---------------------------*/
var footer = $('.footer');
var backgrounImage = footer.data("background-image");
footer.css('background', 'url(' + backgrounImage + ') no-repeat');

/*-----------------------------
      SLIDER OWL CAROUSEL
------------------------------*/
function sliderOwlCarousel(){
    "use strict";

    $('.hero .owl-carousel').owlCarousel({
        loop:true,
        items: 1,
        nav: false,
        dots: false,
        autoplay:true,
        touchDrag: true,
        smartSpeed: 5000,
        animateOut: 'fadeOut',
        autoplayHoverPause: true,
    });
    $('#hero-slider').on("translate.owl.carousel", function(){
        setTimeout(function(){
            $('.hero-slide').removeClass("zoom");
        }, 1000)
	});
	$('#hero-slider').on("translated.owl.carousel", function(){
		$('.owl-item.active .hero-slide').addClass("zoom");
    });
}

/*-----------------------------
     HERO SWIPER SLIDER
------------------------------*/
function swiperSlider(){

    "use strict";
    
    if($(".swiper-container").length){
        var swiper = new Swiper('.swiper-container', {
            effect: "slide",
            allowTouchMove: 'false',
            touchRatio: 0,
            threshold: 992,
            autoplay: {
                delay: 5000,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });
        
          var textSwiper = new Swiper('.text-swiper', {
            effect: "fade",
            allowTouchMove: 'false',
            touchRatio: 0,
            threshold: 992,
            autoplay: {
                delay: 5000,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });
        
        $(".hero-item-image").css('background', function () {
            var bg = ('url(' + $(this).data("image-src") + ') no-repeat center');
            return bg;
        });
        var $fullscreen = $(".hero-04, .hero-swiper, .hero-text, .hero-images");
        $fullscreen.css("height", $window.height());
    }
}

/*-------------------------
        TYPED JS
-------------------------*/
function typedJS() {

    "use strict";

    var $element = $(".element");
    if($element.length){
        var options = {
            strings: $element.attr('data-elements').split(','),
            typeSpeed: 100,
            backDelay: 3000,
            backSpeed: 50,
            loop: true
        };
        var typed = new Typed(".element", options);
    }
}

/*-------------------------
            Skills
-------------------------*/
function skills() {

    "use strict";
    
    $('.skillbar').each(function () {
        $(this).find('.skillbar-bar').animate({
            width: $(this).attr('data-percent')
        }, 6000);
    });
}

/*-------------------------
            Count up
  -------------------------*/
function countup() {

    "use strict";

    $('.timer').countTo();
    $('.count-number').removeClass('timer');
}

/*-------------------------
     MAGNIFIC POPUP JS
-------------------------*/
function portfolioPopup() {

    "use strict";

    if (('.portfolio-items').length > 0) {
        $('.portfolio-items').each(function() {
            $(this).magnificPopup({
                delegate: '.js-zoom-gallery',
                type: 'image',
                gallery: {
                    enabled:true
                },
                callbacks: {
                    open: function() {
                        $.fn.pagepiling.setKeyboardScrolling(false);
                      
                    },
                    close: function() {
                        $.fn.pagepiling.setKeyboardScrolling(true);
                    }
                  }
            });
        });
    }
}

/*-------------------------
    Testimonial CAROUSEL JS
-------------------------*/
$(".testimonial .owl-carousel").owlCarousel({
    loop:true,
    stagePadding:5,
    margin: 10,
    nav: true,
    autoplay: false,
    center: false,
    dots: true,
    mouseDrag: true,
    touchDrag: true,
    smartSpeed: 1000,
    autoplayHoverPause: false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1200:{
            margin:60,
            items:2,
        },

    },
});
