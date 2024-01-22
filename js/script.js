$(function () {

    $('.catalog-btn').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        // $('.navbar').toggleClass('active');
    });


    $('.moreless-button').click(function () {
        $('.moretext').toggleClass('active');
        if ($('.moreless-button').text() == "Читать все") {
            $(this).text("Скрывать")
        } else {
            $(this).text("Читать все")
        }
    });


    // Main slide
    var swiper = new Swiper(".main-slide", {
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

});

