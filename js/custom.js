var $ = jQuery;
$(document).ready(function() {
	/********************* Sticky Header ************************/
    if ($(window).scrollTop() > $(".site-main > header").height()) {
        $('header').addClass('sticky');
        $('header').addClass('transition');
    }
	/********************* scroll-top ************************/
    if ($(window).scrollTop() > 100) {
        $('.scroll-top').addClass('visible');
    }
    $(".scroll-top").click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });
	/********************* mobile-accordion ************************/
    $(".mobile-accordion .title span").click(function() {
        $(this).parent(".title").parent(".mobile-accordion").children(".mobile-accordion-toggle").slideToggle();
        $(this).parent(".title").parent(".mobile-accordion").toggleClass("in");
    }); 
	/********************* file-box  ************************/
    $(".file-box .input").change(function(e) {
        var z = $(this).val().replace(/\\/g, '/').replace(/.*\//, '');
        if (z == "") {
            $(this).parent(".file-box").children(".input-text").val("No Files Selected");
        } else {
            $(this).parent(".file-box").children(".input-text").val(z);
        }
    });
	/********************* search-button  ************************/
    $(".search-button").click(function() {
        $(".search-box-main").fadeIn();
        $("body").addClass("search-popup");
    });
    $(".search-close").click(function() {
        $(".search-box-main").fadeOut();
        $("body").removeClass("search-popup");
    });
	
});

/*****************************************************************/
$(window).scroll(function() {
    if ($(window).scrollTop() > $(".site-main > header").height()) {
        $('header').addClass('sticky');
        $('header').addClass('transition');
    } else {
        $('header').removeClass('sticky');
        $('header').removeClass('transition');
    }
    if ($(window).scrollTop() > 100) {
        $('.scroll-top').addClass('visible');
    } else {
        $('.scroll-top').removeClass('visible');
    }
});

$(window).on('click touchend', function(e) {
    if (!$(e.target).hasClass("mini-cart-close") && !$(e.target).hasClass("mini-cart-products") && !$(e.target).hasClass("mini-cart-icon") && $(e.target).parents(".mini-cart-products").length === 0) {
        $(".mini-cart").hide();
        $("body").removeClass("mini-cart-active");
    }

    if (!$(e.target).hasClass("search-button") && !$(e.target).hasClass("search-text") && !$(e.target).hasClass("search-input") && $(e.target).parents(".search-box-main").length === 0) {
        $(".search-box-main").fadeOut();
        $("body").removeClass("search-popup");
    }
});