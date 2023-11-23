$(document).ready(function () {
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $("nav").addClass("fixed-top");
        } else {
            $("nav").removeClass("fixed-top");
        }
    });

    // $(selector).countMe(delay,speed)
    $(".counter-y").countMe(500, 65);
    $(".counter-c").countMe(500, 65);
    $(".counter-p").countMe(500, 65);

    
});


