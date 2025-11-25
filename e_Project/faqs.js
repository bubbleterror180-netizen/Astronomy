$(document).ready(function () {
    $('.accordion-content').removeClass('active');

    $('.accordion-header').click(function () {
        $('.accordion-content').not($(this).next()).removeClass('active');
        $('.accordion-icon').not($(this).find('.accordion-icon')).text('+');

        $(this).next('.accordion-content').toggleClass('active');

        if ($(this).next('.accordion-content').hasClass('active')) {
            $(this).find('.accordion-icon').text('−');
        } else {
            $(this).find('.accordion-icon').text('+');
        }
    });
});