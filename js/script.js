$(function () {
    $(function () {
        $('input[name=phone]').mask('+7 (999) 999-99-99');
    });

    // Поделиться tooltip
    $('.share-opener').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.share-tooltip').toggleClass('active');
    });

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


    // mob filter menu
    $('.mob-filter-btn, .filter-closer-btn').on('click', function (e) {
        e.preventDefault();
        $('.side-col').toggleClass('active');
        $('body').toggleClass('no-scroll');
    });

    $('.side-item > p').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).parent().toggleClass('active');
    });

    // Выпадающее окно при выборе города
    $('.head-location-btn, .close-loc-modal').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
    });

    // article page mob Содержание-btn
    $('.article-mob-btn').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.article-content-items').toggleClass('active');
    });

    // fixed message menu
    $('.fixed-message-btn').on('click', function () {
        $('.fixed-message-menu').toggleClass('active');
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
            320: {
                slidesPerView: 1.4,
                spaceBetween: 10,
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

});

// script.js
$(document).ready(function () {
    $('#fileInput').change(function () {
        const fileList = this.files;
        const fileListContainer = $('#fileList');
        fileListContainer.empty();
        for (let i = 0; i < fileList.length; i++) {
            const fileName = fileList[i].name;
            const fileSize = formatFileSize(fileList[i].size);
            const listItem = $('<li>').addClass('item');
            const nameSpan = $('<span>').addClass('name').text(`${fileName} (${fileSize})`);
            const removeDiv = $('<div>').addClass('remove').html('<i class="fa-solid fa-trash-can"></i>');
            listItem.append(nameSpan).append(removeDiv);
            fileListContainer.append(listItem);
        }
    });

    $(document).on('click', '.remove', function () {
        $(this).closest('.item').remove();
    });
});

function formatFileSize(size) {
    const units = ["B", "KB", "MB", "GB"];
    let index = 0;

    while (size >= 1024 && index < units.length - 1) {
        size /= 1024;
        index++;
    }

    return `${size.toFixed(2)} ${units[index]}`;
}



$(document).on("mouseenter", ".header-block__mid-catalog", function () {
    $(".header-catalog").addClass("active");
});

$(document).on("mouseleave", ".header-block__mid-catalog", function () {
    if (!$(".header-catalog").is(":hover")) {
        $(".header-catalog").removeClass("active");
    }
});

$(document).on("mouseleave", ".header-catalog", function () {
    if (!$(this).is(":hover")) {
        $(".header-block__mid-catalog").removeClass("active");
    }
});

if ($(".header-catalog__inner.active").length < 1) {
    $(".header-catalog__left ul li:first, .header-catalog__inner:first").addClass("active");
}

$(document).on("mouseenter", ".header-catalog__left ul li a", function () {
    var e = $(this).parent("li"),
        t = e.index();
    e.addClass("active").siblings().removeClass("active");
    $(".header-catalog__inner").eq(t).addClass("active").siblings().removeClass("active");
});

$(document).on("mouseenter", ".header-block__mid-catalog", function () {
    $(".header-catalog").addClass("active");
});

$(document).on("mouseleave", ".header-block__mid-catalog", function () {
    if (!$(".header-catalog").is(":hover")) {
        $(".header-catalog").removeClass("active");
    }
});

$(document).on("mouseleave", ".header-catalog", function () {
    if (!$(this).is(":hover")) {
        $(".header-block__mid-catalog").removeClass("active");
    }
});

if ($(".header-catalog__inner.active").length < 1) {
    $(".header-catalog__left ul li:first, .header-catalog__inner:first").addClass("active");
}


