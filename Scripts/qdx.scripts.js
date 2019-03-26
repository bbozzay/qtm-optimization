
$(function () {
    var hasCurtainInit = false;
    var windowWidth;
    var windowHeight;

    $.fn.centerModal = function (modalTarget) {
        var timer = window.setTimeout(function () {
            if ($(modalTarget).find('#diagram-image').height() < 0) {
                $(modalTarget).centerModal(modalTarget);
            } else {
                var height = $(modalTarget).height();
                var width = $(modalTarget).width();
                var topPosition = (windowHeight * 0.5) - (height / 2) > 0 ? (windowHeight * 0.5) - (height / 2) : 10;
                var leftPosition = (windowWidth * 0.5) - (width / 2) > 0 ? (windowWidth * 0.5) - (width / 2) : 10;

                $(modalTarget).css({ "margin-top": topPosition + $(window).scrollTop() + "px", "margin-left": leftPosition + "px" });
            };
        }, 10);

    };
    //DS Commenting following for conflict with vendor.js
    /*
    $(".eq-height div[class*='col-'] > .e-content > p:first-child, .model-box, .eq-height .panel-body").matchHeight({
        byRow: true,
        property: 'height',
        remove: false
    });
    

    $(".home-page-carousel-nav .text-center").matchHeight();

    $(".eq-height section .eh-wrapper").matchHeight().matchHeight({
        byRow: true,
        property: 'height',
        remove: false
    });
    */
    var tabbedCarousel = $(".tabbed-carousel").owlCarousel({
        items: 1,
        dots: true,
        dotsContainer: '#carousel-custom-dots',
        loop: true,

        responsive: {
            991: {
                dots: true
            }
        },
        startPosition: 0
    });

    $('.owl-dot').click(function () {
        tabbedCarousel.trigger('to.owl.carousel', [$(this).index(), 300]);
    });



    $('#CustomerStoryModal').on('show.bs.modal', function (e) {
        var link = $(e.relatedTarget);
        $(this).find('.modal-body').load(link.attr('href'));
    });

    $("body").on("click", '.curtain, .zoom-out-cursor, #diagram-image', function () {
        $('.curtain, #diagram-image').remove();
    });

    $(".diagram").on("click", function (e) {

        $("body")
            .prepend("<img class=\"img-responsive large-diagram animated zoomIn\" src=\"#\" id=\"diagram-image\" alt=\"diagram\" />")
            .prepend("<div class='curtain'></div>");

        var imgSrc = $('img', $(this)).attr('src');
        var modalTarget = $('#diagram-image');

        $('.curtain, #diagram-image').show();

        $('#diagram-image').attr('src', imgSrc);

        $(modalTarget).centerModal(modalTarget);
    });

    $(".bc-thumbnail").on("click", function (e) {
        e.preventDefault();
        $.ajax({
            method: "GET",
            url: $(".btn-video", $(this)).attr("href"),
            dataType: "html"
        }).done(function (html) {
            var modal = $(html);
            modal.modal("show");

            modal.on('hide.bs.modal', function (e) {
                $(this).remove();
            })
        });
    });

    // Homepage Banner Carousel
    //DS Commenting follows, as not needed
    /*
    var homePageCarousel = $(".home-page-carousel").owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        autoplayHoverPause: true
    });

    $(".home-page-carousel-nav").on("click", ".item", function () {
        var $this = $(this);
        var slideNum = $(".home-page-carousel-nav .item").index($this);
        homePageCarousel.trigger('to.owl.carousel', [slideNum, 300]);
        setTimeout(function () {
            $('html, body').animate({
                scrollTop: $('body').offset().top
            }, "300");
        }, 300);
    });

    $('.home-page-carousel-nav .item').hoverIntent(function (e) {
        e.preventDefault();
        var el = $(this);
        var slideNum = $(".home-page-carousel-nav .item").index(el);
        homePageCarousel.trigger('to.owl.carousel', [slideNum, 300]);
        homePageCarousel.trigger('stop.owl.autoplay');
    }, function (e) {
        e.preventDefault();
        homePageCarousel.carousel('play.owl.autoplay');
    });
    */

    // Customer SuccessStories Home Page Carousel
    var refarchCarousel = $('.ref-arch-carousel');

    refarchCarousel.owlCarousel({
        items: 1,
        dots: true,
        dotsContainer: '#carousel-custom-dots',
        loop: true,
        autoplay: true,
        responsive: {
            991: {
                dots: true
            }
        },
        startPosition: 0
    });
    $('.owl-dot').click(function () {
        refarchCarousel.trigger('to.owl.carousel', [$(this).index(), 300]);
    });
});

