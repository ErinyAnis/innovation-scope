$(document).ready(function() {
            $('.home-slider').slick({
            autoplay: true,
            speed: 800,
            autoplaySpeed: 3000,
            dots: false,
            infinite: true,
            fade: true,
            cssEase: 'linear',
        });

        $('.case-study-slider').slick({
        dots: true,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        infinite: false,

        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1.5,
                    dots: true
                }
            }
            ]
        });

        $('.review-card-container ').slick({
                dots: true,
                arrows: false,
                centerMode: true,
                slidesToShow: 3,
                slidesToScroll: 3,
                centerPadding: '0',

                responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        arrows: true,
                        prevArrow: "<img class='a-left control-c prev slick-prev' src='images/prev-arrow.png'>",
                        nextArrow: "<img class='a-right control-c next slick-next' src='images/next-arrow.png'>",
                        dots: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        
                    }
                },
            ]
                
            });

        });