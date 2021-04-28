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
if ($('.siderbarTab').length) {
    var sliders = new Object();
    $('.siderbarTab').each(function () {
        var box = $(this).attr('id');
        sliders[box] = tns({
            container: '#' + box + ' .object__slider',
            fixedWidth: 280,
            gutter: 16,
            items: 1,
            nav: false,
            lazyload: true,
            mouseDrag: true,
            swipeAngle: false,
            speed: 400,
            controlsText: ['<span class="object__next"><span class="object__prev-icon"></span></span>', '<span class="object__next"><span class="object__next-icon"></span></span>'],
            center: true,
            responsive: {
                "601": {
                    gutter: 32,
                    fixedWidth: 304,
                },
                "767": {
                    items: 4,
                    gutter: 32,
                },
            }
        });
    });
}
$('.sidebarMenu__item').on('click', function () {
    console.log()
    $(this).parents(".property-front").find($('.siderbarTab-active')).removeClass('siderbarTab-active')
    $(this).parents(".property-front").find($(this).attr('href')).addClass('siderbarTab-active')
})
// $(document).ready(function () {
//     if ($('.cottegesSlider').length) {
//         var cottegesSlider = tns({
//             container: '.cottegesSlider',
//             fixedWidth: 304,
//             items: 4,
//             gutter: 32,
//             nav: false,
//             prevButton: '.cotteges__prev',
//             nextButton: '.cotteges__next',
//             nested: 'inner',
//             mouseDrag: true,
//         });
//     };
//     if ($('.apartmentsSlider').length) {
//         var apartmentsSlider = tns({
//             container: '.apartmentsSlider',
//             fixedWidth: 304,
//             items: 4,
//             gutter: 32,
//             nav: false,
//             prevButton: '.apartments__prev',
//             nextButton: '.apartments__next',
//             nested: 'inner',
//             mouseDrag: true,
//         });
//     };
//     if ($('.cottegeSliderLast').length) {
//         var cottegeSliderLast = tns({
//             container: '.cottegeSliderLast',
//             fixedWidth: 304,
//             items: 4,
//             gutter: 32,
//             nav: false,
//             prevButton: '.last__prev',
//             nextButton: '.last__next',
//             nested: 'inner',
//             mouseDrag: true,
//         });
//     };
//     if ($('.apartmentSliderLast').length) {
//         var apartmentSliderLast = tns({
//             container: '.apartmentSliderLast',
//             fixedWidth: 304,
//             items: 4,
//             gutter: 32,
//             nav: false,
//             prevButton: '.last__prev',
//             nextButton: '.last__next',
//             nested: 'inner',
//             mouseDrag: true,
//         });
//     };
//     if ($('.taunhouseSliderLast').length) {
//         var taunhouseSliderLast = tns({
//             container: '.taunhouseSliderLast',
//             fixedWidth: 304,
//             items: 4,
//             gutter: 32,
//             nav: false,
//             prevButton: '.last__prev',
//             nextButton: '.last__next',
//             nested: 'inner',
//             mouseDrag: true,
//         });
//     };
//     if ($('.flatSliderLast').length) {
//         var flatSliderLast = tns({
//             container: '.flatSliderLast',
//             fixedWidth: 304,
//             items: 4,
//             gutter: 32,
//             nav: false,
//             prevButton: '.last__prev',
//             nextButton: '.last__next',
//             nested: 'inner',
//             mouseDrag: true,
//         });
//     };
//     if ($('.villagesSliderNew').length) {
//         var villagesSliderNew = tns({
//             container: '.villagesSliderNew',
//             fixedWidth: 304,
//             items: 4,
//             gutter: 32,
//             nav: false,
//             prevButton: '.new__prev',
//             nextButton: '.new__next',
//             nested: 'inner',
//             mouseDrag: true,
//         });
//     };
//     if ($('.complexesSliderNew').length) {
//         var complexesSliderNew = tns({
//             container: '.complexesSliderNew',
//             fixedWidth: 304,
//             items: 4,
//             gutter: 32,
//             nav: false,
//             prevButton: '.new__prev',
//             nextButton: '.new__next',
//             nested: 'inner',
//             mouseDrag: true,
//         });
//     };
// })