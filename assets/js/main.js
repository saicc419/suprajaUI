$(function () {
    'use strict'
 /*Nav toggle*/
 $(document).ready(function () {
    $('#nav-icon3').click(function () {
        $(this).toggleClass('open');
    });
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $("#navhead").addClass("extramenu");
    } else {
        $("#navhead").removeClass("extramenu");
    }
});

var wow = new WOW({
    boxClass: 'wow',      // default
    animateClass: 'animated', // default
    offset: 0,          // default
    mobile: false,       // default
    //live:         true        // default
}
);
wow.init();


$('#owl-demo').owlCarousel({
    loop: true,
    nav: true,
    margin: 10,
    navText: ['', ''],
    dots: true,
    singleItem: true,
    autoplay: true,
    // autoplayHoverPause:true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        },
        1200: {
            items: 2
        }
    }
})

/*Pre Loader*/
$(window).on('load', function () {
    $('.preload').fadeOut(500);
});

/*Top Scroll*/
$('.top-scroll').fadeOut();
$(window).scroll(function () {
    if ($(this).scrollTop() > 90) {
        $('.top-scroll').fadeIn();
    } else {
        $('.top-scroll').fadeOut();
    }
});
$('.top-scroll').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});

});