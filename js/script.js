$(function () {

    // Открытие меню каталога
    $('.catalog-opener').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.nav--vertical').toggleClass('active');
    });

    // Ссылки внутри каталога
    $('.menu-in-subcat').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).parent().toggleClass('active');
    });

    // Открытие мобильного меню
    $('.menu-opener').on('click', function (e) {
        e.preventDefault();
        $(this).addClass('active');
        $('.navbar').addClass('active');
    });
    $('.mob-menu-closer').on('click', function (e) {
        e.preventDefault();
        $('.menu-opener').removeClass('active');
        $('.navbar').removeClass('active');
    });


    // Счетчик, который появляется при нажатии кнопки на странице корзины покупок.
    $('.stock-cart').on('click', function (e) {
        e.preventDefault();
        $(this).parent().addClass('active');
    });

    // Выпадающее окно при выборе города
    $('.head-location-btn, .close-loc-modal').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
    });


    $('.moreless-button').click(function () {
        $('.moretext').toggleClass('active');
        if ($('.moreless-button').text() == "Читать все") {
            $(this).text("Скрывать")
        } else {
            $(this).text("Читать все")
        }
    });

    $('.moreless-btn').click(function () {
        $('.moretext').toggleClass('active');
        if ($('.moreless-btn').text() == "Читать все") {
            $(this).text("Скрывать")
        } else {
            $(this).text("Читать все")
        }
    });


    // input + / - count
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });


    // Main slider
    var swiper3 = new Swiper(".main-slide", {
        slidesPerView: 1,
        spaceBetween: 40,
        loop: false,
        speed: 1000,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });


    // slider - Вместе с этим покупают
    var swiper4 = new Swiper(".together-slide", {
        slidesPerView: 4,
        spaceBetween: 24,
        loop: false,
        speed: 1000,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
        },
    });

    // slider - карточка товара
    var swiper = new Swiper(".mySwiper", {
        direction: 'vertical',
        spaceBetween: 10,
        speed: 1000,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 50,
        speed: 1000,
        thumbs: {
            swiper: swiper,
        },
    });


    // (function() {

    //     'use strict';
    //     // breakpoint where swiper will be destroyed
    //     // and switches to a dual-column layout
    //     const breakpoint = window.matchMedia( '(min-width:31.25em)' );
    //     // keep track of swiper instances to destroy later
    //     let mySwiper;

    //     const breakpointChecker = function() {
    //       // if larger viewport and multi-row layout needed
    //       if ( breakpoint.matches === true ) {
    //         // clean up old instances and inline styles when available
    //         if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
    //         // or/and do nothing
    //         return;
    //         // else if a small viewport and single column layout needed
    //         } else if ( breakpoint.matches === false ) {
    //           // fire small viewport version of swiper
    //           return enableSwiper();
    //         }
    //     };

    //     const enableSwiper = function() {
    //       mySwiper = new Swiper ('.xit-mob-slide', {
    //         loop: true,
    //         slidesPerView: 'auto',
    //         centeredSlides: true,
    //         a11y: true,
    //         keyboardControl: true,
    //         grabCursor: true,
    //       });
    //     };
    //     // keep an eye on viewport size changes
    //     breakpoint.addListener(breakpointChecker);
    //     // kickstart
    //     breakpointChecker();

    // })();

});

