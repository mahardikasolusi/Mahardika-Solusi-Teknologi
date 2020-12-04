$('.autoplay').slick({
    arrows: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});

$('.myteam').slick({
    arrows: false,
    infinite: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
    ]
});


$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,
    fade: true,
    asNavFor: '.slider-nav'
});

$('.slider-nav').slick({
    arrows: false,
    dots: false,
    infinite: true,
    focusOnSelect: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
    ]
});

function openNav() {
    document.getElementById("myNav").style.height= "100%";
    document.getElementById("navbuttonClose").style.display = "block";
    document.getElementById("navbuttonOpen").style.display = "none";
}
function closeNav() {
    document.getElementById("myNav").style.height= "0%";
    document.getElementById("navbuttonClose").style.display = "none";
    document.getElementById("navbuttonOpen").style.display = "block";
}

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

// $(function () {
//     $(document).scroll(function () {
//         var $nav = $(".navbar-fixed-top");
//         $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
//     });
// });
