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