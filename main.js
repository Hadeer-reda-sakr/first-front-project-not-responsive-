$(function () {
    'use strict';
    //adjust slider height

    var windowHEIGHT = $(window).height(),
        upperHEIGHT  = $('.upper-bar').innerHeight(),
        navHEIGHT    = $('.navbar').innerHeight();

    $('.slider,.carousel-item').height(windowHEIGHT - (upperHEIGHT + navHEIGHT));

//.featuredWork .shuffle

$('.featuredWork ul li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
   
    if($(this).data('class') ==='all'){
        $('.shuffleImage .col-md' ).css('opacity',1);
    }
    else{
        $('.shuffleImage .col-md' ).css('opacity','.08');
        $($(this).data('class')).parent().css('opacity',1);
    }
})




  


});