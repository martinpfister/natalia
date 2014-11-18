/************************************************************
 *     Initializing
************************************************************/
$(function() {

    // Init foundation
    $(document).foundation();

    // Init placeholder for browsers not supporting placeholder attribute
    if (Modernizr.input.placeholder) {
        $('html').addClass('placeholder');
    } else {
        $('input, textarea').placeholder();
        $('html').addClass('no-placeholder');
    }

    // Init toggle buttons and double tap navigations
    $('.top-bar-section').doubleTapMenu();
    // $('.hamburger-icon').toggler();

    // Init lightbox (fancybox)
    $('.fancybox, .lightbox').fancybox();

    // Init slider (slick slider)
    var slickSliderSettings = {
        dots: true,
        infinite: true,
        pauseOnHover: true,
        speed: 800,
        cssEase:'ease-in-out', // CSS easing
        easing:'swing', // jQuery easing
        autoplay: false,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    dots: false
                }
            }
        ]
    };
    $('.slider:not(.autoplay)').slick(slickSliderSettings);
    slickSliderSettings.autoplay = true;
    $('.slider.autoplay').slick(slickSliderSettings);

});