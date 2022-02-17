$(document).ready(function(){
    $('.selection').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1});

    $('.install').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1});

    $('.basic').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1});

    $('.usage').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1});

    $('.autoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows : false,
        centerMode: true,
        autoplaySpeed: 2000});

    $('.fade').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
        });   

        let slideIndex = 0;

        $('.add-remove').slick({
        slidesToShow: 3,
        slidesToScroll: 3
        });
        $('.js-add-slide').on('click', function() {
        slideIndex++;
        $('.add-remove').slick('slickAdd','<div><h3>' + slideIndex + '</h3></div>');
        });
        
        $('.js-remove-slide').on('click', function() {
        $('.add-remove').slick('slickRemove',slideIndex - 1);
        if (slideIndex !== 0){
            slideIndex--;
        }
        });


        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav'
          });
          $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: true,
            centerMode: true,
            focusOnSelect: true
          });
});