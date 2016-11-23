$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 70
                }, 1000);
                return false;
            }
        }
    });
});

$(document).ready(function(){
    var navHeight = $('.container-nav').height();
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    $('.container-main').css('margin-top', navHeight);
    $('.section').css('height', windowHeight - navHeight);
    $('.background-image').css('width', windowHeight);
});

$(window).resize(function(){
    var navHeight = $('.container-nav').height();
    var windowHeight = $(window).height();
    $('.container-main').css('margin-top', navHeight);
    $('.section').css('height', windowHeight - navHeight);
    $('.background-image').css('height', windowHeight);
});
