
$(function() {
    //menu on click

    let flagMenu = true;

    $('#menu').on('click', function (e) {
       e.stopPropagation();


       if (flagMenu) {
           flagMenu = false;

           $('.menu-list-small').slideToggle(function () {
               flagMenu = true;
           });

           $('body').toggleClass('active');
       }
    });

    $('body').on('click', function () {
       $('.menu-list-small').fadeOut();
       $('body').removeClass('active');
    });

    $('.menu-list-small').on('click', function (e) {
       e.stopPropagation();
    });


  $(".owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,

        responsive: {
            0:{
                items: 1,
                nav: false
            },
            670: {
                items: 2,
                nav: false

            },

            960: {
                items: 3
            }
        }
    });

    //outline none

    $('button, a').on('focus', function () {
        $(this).blur();
    });

    //  scroll down btn
  $('.scroll-item').on('click', function () {
     let scrollTo = $(this).attr('data-scrollTo');

     $('body, html').animate({
        "scrollTop": $('.' + scrollTo).offset().top
     }, 2000);
     return false;
  });
});