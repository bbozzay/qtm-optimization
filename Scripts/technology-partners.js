$(function () {

    var filters = [];

    $('.go-back').css("display", "none");
    $('.btn-container').click(function () {
        $('#filterText').text('Filter by');
        if ($('.mobile-filter').not(":visible").length === 1) {
            $('.mobile-filter, .filter-item,.or-spacer').show();
        } else {
            $('.go-back, .mobile-filter, .country-options, .partner-options, .solution-options, .product-options, .option-check').hide();
            $('.mobile-chevron').show();
        }
    });

    $(".mobile-filter").on("click", ".filter-item", function (e) {
        e.preventDefault();
        var group = $(this);
        group.next().toggleClass("on");
        $(".go-back").show();
    })

    $(".isotope-container-fitrows").fadeIn();
    var $grid = $(".isotope-container-fitrows").isotope({
        itemSelector: '.isotope-item',
        layoutMode: 'fitRows',
        transitionDuration: '0.4s'
    });

    $(".mobile-filter").on("click", ".option", function (e) {
        e.preventDefault();
        var optionSelected = $(this);

        var filter = optionSelected.attr("data-option");
        if ($.inArray(filter, filters) != -1) {
            removeFilter(filter);
            optionSelected.removeClass("active");
        } else {
            addFilter(filter);
            optionSelected.addClass("active");
        }
        $grid.isotope({ filter: filters.join('') });
    });

    $(".mobile-filter").on("click", ".cta-button > a", function (e) {
        e.preventDefault();
        $(this).closest(".mobile-filter").hide();

        
        $('html, body').animate({
            scrollTop: $(this).closest('.container').offset().top
        }, "fast");
    });

    $('.filter-btn').on('click', '.select', function () {
        var $this = $(this);

        // set filter for group
        var filter = $this.attr('data-filter');

        $this.parent().prev("button").text($this.text());

        if (filter == undefined) {
            var siblings = $this.siblings();
            siblings.each(function () {
                var sib = $(this);
                removeFilter(sib.attr('data-filter'));
                sib.removeClass("active");
            })
        }

        if ($.inArray(filter, filters) != -1) {
            removeFilter(filter);
            $this.removeClass("active");
        } else {
            addFilter(filter);
            $this.addClass("active");
        }
        // set filter for Isotope
        $grid.isotope({ filter: filters.join('') });

        console.log(filters.join(''));
    });

    function addFilter(filter) {
        if (filters.indexOf(filter) == -1) {
            filters.push(filter);
        }
    }

    function removeFilter(filter) {
        var index = filters.indexOf(filter);
        if (index != -1) {
            filters.splice(index, 1);
        }
    }
})
