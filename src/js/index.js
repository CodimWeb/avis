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

  $('.offcanvas-menu__language__header .icon').on('click', function(){
    $('.offcanvas-menu__inner').toggleClass('show-language');
  });

  let smooth = $('.smooth');
  smooth.on('click', function(e){
    e.preventDefault();
    let target = $(this).data('target');
    offcanvas.removeClass('show');
    $('body,html').animate({
      scrollTop: ($(target).offset().top - 70) //70 header height
    }, 1000);
    smooth.removeClass('active');
    $('[data-target="'+target+'"]').addClass('active');
  });

  $('.btn-collapse').on('click', function(){
    $(this).parent().remove();
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

// Functions
function getSections($links) {
  console.log($links);
  return $(
    $links
      .map((i, el) => $(el).attr('href'))
      .toArray()
      .filter(href => href.charAt(0) === '#')
      .join(','),
  );
}

function activateLink($sections, $links) {
  const yPosition = $window.scrollTop();

  for (let i = $sections.length - 1; i >= 0; i -= 1) {
    const $section = $sections.eq(i);

    if (yPosition >= ($section.offset().top - 100)) {
      return $links
        .removeClass('active')
        .filter(`[href="#${$section.attr('id')}"]`)
        .addClass('active');
    }
  }
}

function onScrollHandler() {
  activateLink($sections, $links);
}

// function onClickHandler(e) {
//   const href = $.attr(e.target, 'href');

//   e.preventDefault();
//   $root.animate(
//     { scrollTop: $(href).offset().top },
//     500,
//     () => (window.location.hash = href),
//   );

//   return false;
// }

// Variables
const $window = $(window);
const $links = $('.smooth');
const $sections = getSections($links);
const $root = $('html, body');
const $hashLinks = $('a[href^="#"]:not([href="#"])');

// Events
$window.on('scroll', onScrollHandler);
// $hashLinks.on('click', onClickHandler);

// Body
// window.CP.PenTimer.MAX_TIME_IN_LOOP_WO_EXIT = Number.MAX_SAFE_INT; // For codepen
// activateLink($sections, $links);
