$(document).ready(function() {

    $('.titulo-nav').click(function() {
        $('nav').slideToggle();
    })

    $('.titulo-nav').on('click', "#menu-situation", function() {
        if($(this).hasClass('off')){
            $(this).removeClass('off');
            $(this).addClass('on');
            $('.menu-hamburger').css({display: "none"});
            $('.menu-closed').css({display: "block"});
        } else {
            $(this).removeClass('on');
            $(this).addClass('off');
            $('.menu-hamburger').css({display: "block"});
            $('.menu-closed').css({display: "none"});

        }
    })

    $('.contacts').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 5,
        slidesToScroll: 4,
        infinite: true
    });
})

