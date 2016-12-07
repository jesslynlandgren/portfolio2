$(document).ready(function(){
    var navHeight = $('.navigation').height();
    var windowHeight = $(window).height();
    $('.tag').css('height', (windowHeight - navHeight));
    $('.tag').css('padding-top', navHeight);
    var skillsHeight = $('.skills').height();
    $('.filter-skills').css('height', skillsHeight);
    var contactHeight = $('.contact').height();
    $('.filter-contact').css('height', contactHeight);
    var iconWidth = $('.skill-icon').width();
    $('.icon-grid').css('max-width', iconWidth);
});

$(window).resize(function(){
    var navHeight = $('.navigation').height();
    var windowHeight = $(window).height();
    $('.tag').css('height', (windowHeight - navHeight));
    $('.tag').css('padding-top', navHeight);
    var skillsHeight = $('.skills').height();
    $('.filter-skills').css('height', skillsHeight);
    var contactHeight = $('.contact').height();
    $('.filter-contact').css('height', contactHeight);
    var iconWidth = $('.skill-icon').width();
    $('.icon-grid').css('max-width', iconWidth);
});
