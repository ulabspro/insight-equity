jQuery(document).ready(function ($) {
    $('#articles-slide').slick({
        accessibility: false,
        autoplay: false,
        autoplaySpeed: 3000,
        speed: 1000,
        infinite: true,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: 0,
        pauseOnHover: false,
        prevArrow: '<span class="slick-prev slick-nav slick-nav--prev" aria-label="previous"></span>',
        nextArrow: '<span class="slick-next slick-nav slick-nav--next" aria-label="next"></span>',
        responsive: [{
            breakpoint: 800,
            settings: {
                arrows: true,
                centerMode: true,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 640,
            settings: {
                arrows: true,
                centerMode: true,
                slidesToShow: 1
            }
        }]
    });
});

jQuery(document).ready(function ($) {
    $('#advantages-list').slick({
        accessibility: false,
        autoplay: false,
        autoplaySpeed: 3000,
        speed: 1000,
        infinite: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: 0,
        pauseOnHover: false,
        prevArrow: '<span class="slick-prev slick-nav slick-nav--prev" aria-label="previous"></span>',
        nextArrow: '<span class="slick-next slick-nav slick-nav--next" aria-label="next"></span>',
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: true,
                centerMode: true,
                slidesToShow: 1
            }
        }]
    });
});

jQuery(document).ready(function ($) {
    $('#business-completed-slide').slick({
        accessibility: false,
        autoplay: false,
        autoplaySpeed: 3000,
        speed: 1000,
        infinite: true,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: 0,
        pauseOnHover: false,
        prevArrow: '<span class="slick-prev slick-nav slick-nav--prev" aria-label="previous"></span>',
        nextArrow: '<span class="slick-next slick-nav slick-nav--next" aria-label="next"></span>',
        responsive: [{
            breakpoint: 800,
            settings: {
                arrows: true,
                centerMode: true,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 640,
            settings: {
                arrows: true,
                centerMode: true,
                slidesToShow: 1
            }
        }]
    });
});

jQuery(document).ready(function ($) {
    $('#business-object-gallery').slick({
        accessibility: false,
        autoplay: false,
        autoplaySpeed: 3000,
        speed: 1000,
        infinite: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: 0,
        pauseOnHover: false,
        prevArrow: '<span class="slick-prev slick-nav slick-nav--prev" aria-label="previous"></span>',
        nextArrow: '<span class="slick-next slick-nav slick-nav--next" aria-label="next"></span>'
        // responsive: [{
        //     breakpoint: 800,
        //     settings: {
        //         arrows: true,
        //         centerMode: true,
        //         slidesToShow: 2
        //     }
        // },
        // {
        //     breakpoint: 640,
        //     settings: {
        //         arrows: true,
        //         centerMode: true,
        //         slidesToShow: 1
        //     }
        // }]
    });
});

jQuery(document).ready(function ($) {
    $('#hide-map').click(function () {
        if ($(this).html() == 'Убрать карту') {
            $(this).html('Показать карту');
            $('#map').removeClass('active');
        } else {
            $(this).html('Убрать карту');
            $('#map').addClass('active');
        }
    });
});
jQuery(document).ready(function ($) {
    $('.security-technology-tabs-control__item').click(function () {
        var tabIndex = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.security-technology-tabs-content__item').eq(tabIndex).addClass('active').siblings().removeClass('active');
    });
});
jQuery(document).ready(function ($) {
    $('.services-item').hover(function () {
        $(this).children('.services-item-noactive').toggleClass('active');
        $(this).children('.services-item-active').toggleClass('active');
    });
});
jQuery(document).ready(function ($) {
    $('.top-menu__item--dropdown').click(function () {
        $(this).toggleClass('active').siblings().removeClass('active');
        if ($(this).hasClass('active')) {
            $('.header').addClass('active');
        } else {
            $('.header').removeClass('active');
        }
    });
    $('.top-menu__mobile').click(function () {
        $('.top-menu__fixed, body, .mask').toggleClass('active');
    });
    $('.mask').click(function () {
        $('.top-menu__fixed, body, .mask').removeClass('active');
    });
});