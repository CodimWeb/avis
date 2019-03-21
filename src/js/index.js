import $ from 'jquery';
import '../scss/style.scss';
import bootstrap from 'bootstrap';
import '../js/slick.min.js';

$(document).ready(function(){
  let slider = $('.slider');
  slider.each(function(){
    let id = $(this).data('slider');
    $(this).not('.slick-initialized').slick({
      dots: false,
      infinite: false,
      speed: 300,
      infinite: true,
      slidesToScroll: 1,
      variableWidth: true,
      prevArrow: $('.slick-prev-'+id),
      nextArrow: $('.slick-next-'+id),
    });
  });

  var header = $('.header');
  var scrollHeader = header.outerHeight();
    

  $(window).scroll(function() {
    var scrollLength = $(this).scrollTop();
    showHeader(scrollHeader, scrollLength,header);
  });

  let toTop = $('.to-top');

  $(window).scroll(function () {
    if ( $(this).scrollTop() > 300 ) {
      toTop.addClass('show');
    } else {
      toTop.removeClass('show');
    }
  });

  toTop.click(function (e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: 0
    }, 1000);
    return false;
  });
    
  let offcanvas = $('.offcanvas-menu');
  $('.btn-offcanvas, .offcanvas-menu__list__close').on('click', function(e){
    e.preventDefault();
    offcanvas.toggleClass('show');
  });

  $('.btn-show-language').on('click', function(e){
    e.preventDefault();
    $('.offcanvas-menu__inner').toggleClass('show-language');
  });

  $('.offcanvas-menu__language__header').on('click', function(){
    $('.offcanvas-menu__inner').toggleClass('show-language');
  });

  let smooth = $('.smooth');
  smooth.on('click', function(e){
    e.preventDefault();
    let target = $(this).data('target');
    $('body,html').animate({
      scrollTop: ($(target).offset().top - 70) //70 header height
    }, 1000);
    smooth.removeClass('active');
    $('[data-target="'+target+'"]').addClass('active');
  });
});

let showHeader = (scrollHeader,scrollLength,header)=> {
    if ( scrollLength > scrollHeader) {
      header.addClass('top');
      setTimeout(function(){
        if ( header.hasClass('top')) {
          header.addClass('header-fixed');
        }
      }, 300);
    }
    else if ( scrollLength <= 0 ) {
      header.removeClass('top');
      header.removeClass('header-fixed');
    }
}
