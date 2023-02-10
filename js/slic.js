$(document).ready(function(){

$('.slider__list').slick({
    dots: false,
    arrows:true,
    autoplaySpeed:5000,
    infinite: true,
    speed: 1500,
    autoplay:true,
    fade: true,
});

$(".prev-btn").click(function () {
  $(".slider__list").slick("slickPrev");
});

$(".next-btn").click(function () {
  $(".slider__list").slick("slickNext");
});

$('.owl-carousel').owlCarousel({
    loop:false,
    margin:4,
    data:true,
    nav:false,
    autoplaySpeed:2000,
    autoplay:true,
      responsive:{
        0:{
          items:1
        },

        500:{
          items:1
        },
  
        700:{
          items:2
        },
  
        1000:{
          items:3
        },
  
        1250:{
          items:4
        }
    }
});

$('.memoriy_content__slider__list').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  infinite: false,
  asNavFor: '.memoriy_content__slider__item'
});

$('.memoriy_content__slider__item').slick({
  asNavFor: '.memoriy_content__slider__list',
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  focusOnSelect: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },

      breakpoint: 900,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },

      breakpoint: 650,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },

      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    }
  ]
});


$('.fotogalereya_in__list1').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  arrows: true,
  fade: true,
  asNavFor: '.fotogalereya_in__list2'
});

$('.fotogalereya_in__list2').slick({
              arrows: false,
              asNavFor:'.fotogalereya_in__list1',
              dots: false,
              infinite: true,
              speed: 300,
              slidesToShow: 6,
              slidesToScroll: 1,
              focusOnSelect: true,
               responsive: [
             {
            breakpoint: 1200,
            settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: false
            }
          },

           {
            breakpoint: 1100,
            settings: {
            slidesToShow: 4,
           slidesToScroll: 1
            }
           },

           {
            breakpoint: 900,
            settings: {
            slidesToShow: 3,
           slidesToScroll: 1
            }
           },

           {
            breakpoint: 550,
            settings: {
            slidesToShow: 2,
           slidesToScroll: 1
            }
           },
         ]
});

})