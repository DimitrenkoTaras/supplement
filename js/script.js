$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.header__list').click(function(event) {
        $('.header__burger, .header__menu').removeClass('active');
        $('body').removeClass('lock');
    });

    $('.results-slider').slick({
        speed:1000,
        dots:true,     
    });

    $('.testimonials-slider').slick({
        speed:1000,
        dots:true,
        arrows:false,     
    });
});