import $ from 'jquery';
import '../scss/style.scss';
import bootstrap from 'bootstrap';
import '../js/slick.min.js';


//fix dropdown
console.log('start')
$('.btn-primary').click(function(){
    console.log('btn');
});
$('.dropdown').click(function(){
    console.log('dropdown');
    $('.dropdown-menu').toggleClass('show');
});