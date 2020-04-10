// sticky nav bar
$(window).on("scroll", function() {
    if($(window).scrollTop() > 500) {
        $(".top-menu").addClass("active");
    } else {
        $(".top-menu").removeClass("active");
    }
});

// nav bar colour change on scroll
$(window).on("scroll", function() {
    if($(window).scrollTop() > 10) {
        $(".hamburger").addClass("scrolled");
    } else {
        $(".hamburger").removeClass("scrolled");
    }
});

// shutter sound
const sound = document.querySelector(".sound");
function play() {
    sound.play();
}
setTimeout(function (){
    play();
}, 2900);

// title type on page load
new TypeIt('.type', {
        strings: `<h1 class="play"><span class="lato welcome">Welcome to</span>Shutter</h1>`, 
        speed: 80,
        waitUntilVisible: true,
        afterComplete: function (instance) {
            instance.destroy();
        }
    }).go();

// shutter animation effect on page load
setTimeout(function (){
    $('.flash').fadeIn(500, function(){
        $('.flash').fadeOut(500, function(){
            $('body').fadeIn(100);
        })
    });
}, 2600);

// hamburger menu show/remove
$(function() {
    $('.hamburger').click(function() {
        $('.menu').fadeIn('slow');
    })

    const mq = window.matchMedia("(max-width: 768px)");
    if (mq.matches) {
        $('.top-menu li').click(function () {
            $('.menu').fadeOut('slow');
        })
    }

    $('.exit-responsive').click(function() {
        $('.menu').fadeOut('slow');
    })
});

// animation on scroll 
AOS.init();
