$(function () {

    $('.catalog-btn').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        // $('.navbar').toggleClass('active');
    });

    $('.stock-cart').on('click', function (e) {
        e.preventDefault();
        $(this).parent().addClass('active');
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


    // Main slide
    var swiper3 = new Swiper(".main-slide", {
        slidesPerView: 1,
        spaceBetween: 40,
        loop: false,
        speed: 1000,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        // breakpoints: {
        //     640: {
        //         slidesPerView: 1,
        //     },
        //     768: {
        //         slidesPerView: 1,
        //     },
        //     1024: {
        //         slidesPerView: 1,
        //     },
        // },
    });


    // Main slide
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

});

