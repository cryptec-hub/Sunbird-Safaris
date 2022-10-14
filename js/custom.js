$(function() {
    $('.header').vegas({
        slides: [
            { src: 'images/logo.jpg' },
            { src: 'images/download.jpg' },
            { src: 'images/sunsetZebras.jpg' }
        ],
        timer: false,
        transition: ['zoomIn', ],
        animation: ['kenburns']
    });
});


$(function() {
    $('.banner').vegas({
        slides: [
            { src: 'images/Elephants2.jpg' },
            { src: 'images/Rhino.jpg' },
            { src: 'images/Nakuru.jpg' }
        ],
        timer: false,
        transition: ['zoomIn', ],
        animation: ['kenburns']
    });
});

$(function() {
    $('.footer').vegas({
        slides: [
            { src: 'images/Accomodations.jpg' },
            { src: 'images/accomodations1.jpg' },
            { src: 'images/vehicles1.jpg' }
        ],
        timer: false,
        transition: ['zoomIn', ],
        animation: ['kenburns']
    });
});

new WOW().init();

var loader = document.getElementById("preloader");
window.addEventListener("load", function() {
    loader.style.display = "none"
})