import $ from 'jquery';
import '../scss/style.scss';
import bootstrap from 'bootstrap';
import '../js/slick.min.js';

let slider = $('.slider');
slider.each(function(){
    let id = $(this).data('slider');
    $(this).not('.slick-initialized').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 3,
        variableWidth: true,
        prevArrow: $('.slick-prev-'+id),
        nextArrow: $('.slick-next-'+id),
    });
});