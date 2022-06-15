$(function () {
    $('.header__btn').on('click', function () {
        $('.rightside-menu').removeClass('rightside-menu--close')
    });
    $('.rightside-menu__close').on('click', function () {
        $('.rightside-menu').addClass('rightside-menu--close')
    });

    $('.header__btn-menu').on('click', function () {
        $('.menu').toggleClass('menu--open')
    });
    $('.rightside-menu__close').on('click', function () {
        $('.rightside-menu').addClass('rightside-menu--close')
    });

    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true
    });

    $('.contact-slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 10,
        slidesToScroll: 10,
        responsive: [{
                breakpoint: 1700,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 8,
                }
            },
            {
                breakpoint: 1511,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                }
            },
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 841,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 551,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 376,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.article-slider__box').slick({
        prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrow-left"><img src="images/arrow-slide-left.svg" alt="arrow left"></button>',
        nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrow-right"><img src="images/arrow-slide-right.svg" alt="arrow right"></button>'
    });


    var mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.living'
        }
    });


})