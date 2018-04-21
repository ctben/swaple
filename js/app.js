jQuery(document).ready(function($) {
    // Header fixed and Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
            $('#header').addClass('header-fixed');
        } else {
            $('.back-to-top').fadeOut('slow');
            $('#header').removeClass('header-fixed');
        }
    });
    $('.back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });

    new WOW().init();

    //$(document).on("scroll", onScroll);

    // Smoth scroll on page hash links
    $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function(e) {
        e.preventDefault();
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (target.length) {
                var top_space = 50;

                // if ($('#header').length) {
                //   top_space = $('#header').outerHeight();

                //   if( ! $('#header').hasClass('header-fixed') ) {
                //     top_space = top_space - 20;
                //   }
                // }

                $('html, body').animate({
                    scrollTop: target.offset().top - top_space
                }, 1000, 'easeInOutExpo');

                if ($(this).parents('.nav-menu').length) {
                    $('.nav-menu .menu-active').removeClass('menu-active');
                    $(this).closest('li').addClass('menu-active');
                }

                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
                    $('#mobile-body-overly').fadeOut();
                }
                return false;
            }
        }
    });
    $('.pie-switch .slider').on('click', function() {
        $(this).toggleClass('on');
        if (!$(this).hasClass('on')) {
            $('.tokens img.soft').fadeIn();
            $('.tokens img.hard').fadeOut();
            $('.tokens .switcher .hard').addClass('off');
            $('.tokens .switcher .soft').removeClass('off');
        } else {
            $('.tokens img.hard').fadeIn();
            $('.tokens img.soft').fadeOut();
            $('.tokens .switcher .soft').addClass('off');
            $('.tokens .switcher .hard').removeClass('off');
        }
    });

    $('.member-title').click(function(e) {
        // console.log("Clicked");
        $(this).next().slideToggle();
        $(this).next().next().next().slideToggle();
    })
});

// $(document).ready(function () {
//     $(document).on("scroll", onScroll);

//     //smoothscroll
//     $('a[href^="#"]').on('click', function (e) {
//         e.preventDefault();
//         $(document).off("scroll");

//         $('a').each(function () {
//             $(this).removeClass('active');
//         })
//         $(this).addClass('active');

//         var target = this.hash,
//             menu = target;
//         $target = $(target);
//         var top_space = 61;
//         $('html, body').stop().animate({
//             'scrollTop': $target.offset().top - top_space
//         }, 500, 'swing', function () {
//             window.location.hash = target - top_space;
//             $(document).on("scroll", onScroll);
//         });
//     });
// });
/*
function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('#navbarResponsive a').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top - 150 <= scrollPos && refElement.position().top - 150 + refElement.height() > scrollPos) {
            $('#navbarResponsive ul li a').removeClass("active");
            currLink.addClass("active");
        } else {
            currLink.removeClass("active");
        }
    });
}*/

particlesJS('particles-js',

    {
        "particles": {
            "number": {
                "value": 69,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.32,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 5.68,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 168,
                "color": "#ffffff",
                "opacity": 0.28,
                "width": 2
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 89,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 168,
                    "size": 9,
                    "duration": 1,
                    "opacity": 8,
                    "speed": 1
                },
                "repulse": {
                    "distance": 200
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true,
        "config_demo": {
            "hide_card": false,
            "background_color": "#b61924",
            "background_image": "",
            "background_position": "50% 50%",
            "background_repeat": "no-repeat",
            "background_size": "cover"
        }
    }

);