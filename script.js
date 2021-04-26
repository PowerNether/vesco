$(document).ready(function () {
    if ($(window).width() <= 768) {
        // $('#tophead>.c-page').prepend($('header>.c-page>.logo'));
        // var toggle = $('<div class="toggle-menu" />')
        //     .append('<span class="toggle-icon" />')
        // $('#tophead>.c-page').append(toggle);
        // var search = $('<span class="mobile-search" />')
        // $('#tophead>.c-page').append(search);
        // var menu = $('<div class="mobile-menu" />')
        //     .append('<div class="mobile-list"></div>')
        // $('#tophead>.c-page').append(menu);

        // $('.mobile-menu').append($('<span class="toggle-menu active" />'))
        // $('#tophead>.c-page>.menu').clone().appendTo($('.mobile-menu'))
        // $('#tophead>.c-page>.region').clone().appendTo($('.mobile-menu'))
        // $('.mobile-list').append('<div class="mobile-categ"></div>')
        // $('.mobile-list').append('<div class="mobile-items"></div>')
        // $('header>.c-page>nav>ul>li').clone().appendTo($('.mobile-categ'));
        var mobile_m = $('<div class="mobile_m" />')
            .append('<span class="one" />')
            .append('<span class="two" />')
            .append('<span class="three" />')
        $('.headerBottom>.w-page').prepend(mobile_m)
        var mobile_p = $('<div class="mobile_p" />')
        $('.headerBottom>.w-page').append(mobile_p)
        $('nav').prepend($('.headerBottom__contact'))
        $('nav').prepend($('.headerBottom>.w-page>button'))
    } else {
        // $('header>.c-page').prepend($('#tophead>.c-page>.logo'));
        // if ($('#tophead>.c-page').find('.mobile-menu').length > 0) {
        //     $('#tophead>.c-page').remove('.mobile-menu');
        //     $('#tophead>.c-page').remove('.mobile-search');
        // }
    }
});
$(window).resize(function () {
    if ($(window).width() <= 768) {
    } else {
    }
});
$(document).on('click', '.mobile_m', function () {
    if (!$('body').hasClass('overflow-search')) {
        $('body').toggleClass('open-menu')
    }
})
$(document).on('click', '.mobile_p', function () {
    if (!$('body').hasClass('overflow-search')) {
        $('body').toggleClass('open-menu')
    }
})