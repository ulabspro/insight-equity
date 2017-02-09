jQuery(document).ready(function ($) {
    $('.services-item').hover(function () {
        $(this).children('.services-item-noactive').toggleClass('active');
        $(this).children('.services-item-active').toggleClass('active');
    });
});