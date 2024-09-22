$(window).scroll(function() {
    var scrollTop = $(window).scrollTop()
    var header = $('.main_header-section');
    if (scrollTop > header.height()) {
        header.addClass('sticky-nav');
    } else {
        header.removeClass('sticky-nav');
    }
});

$(document).ready(function () {
    // Header Class Add Js
    $('.navbar-toggler').click(function () {
        if ($(this).hasClass('oppend')) {
            $(this).addClass('closed').removeClass('oppend');
            $('body').removeClass('open');
        } else {
            $(this).removeClass('closed').addClass('oppend');
            $('body').addClass('open');
        }
    });

    // Banner Slider Js
    var owl = $(".banner-slider");
    owl.owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplay: true,
        autoplayTimeout: 2500,
        loop:true,
        margin:0,
        nav: true,
        autoHeight: false,
        mouseDrag: true,
        autoplayHoverPause: true,
        items: 1
    });

    // Client Work Slider
    var owl = $(".client-slider");
    owl.owlCarousel({
        autoplay: true,
        loop:true,
        margin:0,
        nav: false,
        dots: false,
        items: 5,
        responsive:{
            992:{
                items:5
            },
            768:{
                items:4
            },
            426:{
                items:3
            },
            320:{
                items:2
            }
        }
    });

    // Solution Js
    $('.right-content a').click(function () {
        if(!$(this).hasClass('active'))
        {
            $('.right-content a.active').removeClass('active');
            $(this).addClass('active');        
        }
        $('.section-area active').hide();
        $('.section-area').hide();       
        $('.section-area[data-link=' + $(this).data('link') + ']').fadeIn({
            width: '200px'
        }, 300);
    });

    // Projects Grid Layout Js
    if ($('.teaser-content').length > 0) {
    var $container = $('.project-grid');
    var $grid = $('.project-grid').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        columnWidth: '.grid-sizer'
      }
    });
    $('.teaser-title a').on( 'click', function() {
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector
        });
        return false;
    });
    $('.teaser-title a').on( 'click', function() {
          $('.teaser-title').find('.current').removeClass('current');
          $( this ).addClass('current');
        });
    }

    // Work Counter Js
    var a = 0;
    $(window).scroll(function () {
        var oTop = $(".numbers-of").offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $(".count").each(function () {
                var $this = $(this),
                    countTo = $this.attr("data-stop");
                $({
                    countNum: $this.text()
                }).animate(
                    {
                        countNum: countTo
                    },
                    {
                        duration: 2500,
                        easing: "swing",
                        step: function () {
                            $this.text(
                                Math.ceil(this.countNum).toLocaleString("en")
                            );
                        },
                        complete: function () {
                            $this.text(
                                Math.ceil(this.countNum).toLocaleString("en")
                            );
                        }
                    }
                );
            });
            a = 1;
        }
    });

    // Parallax Animation
    var rellax = new Rellax('.parallax');
    const sr = ScrollReveal({
        duration: 2500,
        reset: true
    });

    /*Data*/
    sr.reveal('.solution .img img',{origin: 'left',distance: '70px'}); 

    /*Imgs*/
    sr.reveal('.solution .img img',{origin: 'left',distance: '90px',delay: 200}); 

});





