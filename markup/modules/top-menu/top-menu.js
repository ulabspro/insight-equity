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