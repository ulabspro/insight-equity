jQuery(document).ready(function ($) {
    $('.security-technology-tabs-control__item').click(function () {
        var tabIndex = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.security-technology-tabs-content__item').eq(tabIndex).addClass('active').siblings().removeClass('active');
    });
});