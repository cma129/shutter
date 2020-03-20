const sound = document.querySelector(".sound");
function play() {
    sound.play();
}
setTimeout(function (){
    play();
}, 2900);


new TypeIt('.type', {
        strings: `<h1 class="play"><span class="lato welcome">Welcome to</span>Shutter</h1>`, 
        speed: 80,
        waitUntilVisible: true,
        afterComplete: function (instance) {
            instance.destroy();
        }
    }).go();


setTimeout(function (){
    $('.flash').fadeIn(500, function(){
        $('.flash').fadeOut(500, function(){
            $('body').fadeIn(100);
        })
    });
}, 2600);


$(function() {
    $('.hamburger').click(function() {
        $('.menu').fadeIn('slow');
    });

    $('.exit-responsive').click(function() {
        $('.menu').fadeOut('slow')
    });
});

AOS.init();