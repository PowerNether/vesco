$(document).ready(function () {
    if ($(window).width() <= 768) {
        var mobile_m = $('<div class="mobile_m" />').append('<span class="one" />').append('<span class="two" />').append('<span class="three" />');
        $('.headerBottom>.w-page').prepend(mobile_m);
        var mobile_p = $('<div class="mobile_p" />');
        $('.headerBottom>.w-page').append(mobile_p);
        $('nav').prepend($('.headerBottom__contact'));
        $('nav').prepend($('.headerBottom>.w-page>button'));
    } else {
    }
});
$(window).resize(function () {
    if ($(window).width() <= 768) {
        if ($('.mobile_m').length < 1) {
            var mobile_m = $('<div class="mobile_m" />').append('<span class="one" />').append('<span class="two" />').append('<span class="three" />');
            $('.headerBottom>.w-page').prepend(mobile_m);
            var mobile_p = $('<div class="mobile_p" />');
            $('.headerBottom>.w-page').append(mobile_p);
            $('nav').prepend($('.headerBottom__contact'));
            $('nav').prepend($('.headerBottom>.w-page>button'));
        }
    } else {
        $('.mobile_m').remove();
        $('.mobile_p').remove();
        $('.headerBottom>.w-page').append($('nav>.headerBottom__contact'));
        $('.headerBottom>.w-page').append($('nav>button'));
    }
});
$(document).on('click', '.mobile_m', function () {
    if (!$('body').hasClass('overflow-search')) {
        $('body').toggleClass('open-menu');
    }
});
$(document).on('click', '.mobile_p', function () {
    if (!$('body').hasClass('overflow-search')) {
        $('body').toggleClass('open-menu');
    }
});
