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
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: $('.slick-prev-'+id),
        nextArrow: $('.slick-next-'+id),
    });
});

$('.slick-btn').on('mouseover', function(e){
    if(!$(this).hasClass('slick-disabled')) {
        $(this).parent().addClass('active');
    }  
});

$('.slick-btn').on('mouseout', function(e){
    $(this).parent().removeClass('active');
});