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


    let collapses = document.querySelectorAll('.mobile-collapse')
    window.onresize = () =>{
      makeCollapse(collapses);
    };
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

let makeCollapse = (collapses) => {
  console.log(collapses, 's');
}
