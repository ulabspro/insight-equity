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
