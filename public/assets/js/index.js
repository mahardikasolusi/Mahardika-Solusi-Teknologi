$(window).ready(function() {
    $('.single-item').slick();
    
    $('#clients1').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
            breakpoint: 1024,
                settings: {
                    slidesToShow: 10,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
})

var clients = [
    '/public/assets/image/clients/deloitte.jpg',         
    '/public/assets/image/clients/rajaherbal.jpg',         
    '/public/assets/image/clients/mira.jpg',         
    '/public/assets/image/clients/tokogampang.jpg',         
    '/public/assets/image/clients/vietnammobile.jpg',         
    '/public/assets/image/clients/escorindo.jpg',         
    '/public/assets/image/clients/scola.jpg',         
    '/public/assets/image/clients/kemenhub.jpg',         
    '/public/assets/image/clients/indohub.jpg',         
    '/public/assets/image/clients/eccchurch.jpg',         
    '/public/assets/image/clients/modena.jpg',         
    '/public/assets/image/clients/pelitatex.jpg',         
    '/public/assets/image/clients/palapa.jpg',         
    '/public/assets/image/clients/tri.jpg',         
    '/public/assets/image/clients/indosatooredo.jpg',         
    '/public/assets/image/clients/medcoenergi.jpg',         
    '/public/assets/image/clients/indihomestudy.jpg',         
    '/public/assets/image/clients/ajinomoto.jpg',         
    '/public/assets/image/clients/kelasahli.jpg',         
    '/public/assets/image/clients/tgt.jpg',         
    '/public/assets/image/clients/adira.jpg',         
    '/public/assets/image/clients/bnp2tki.jpg',         
    '/public/assets/image/clients/ragi.jpg',         
    '/public/assets/image/clients/conocophilips.jpg',         
    '/public/assets/image/clients/thomry.jpg',         
]

document.getElementById("clients1").innerHTML = clients.map((client) => 
    (
        `<img src="${client}" alt="">  `
    )
    
).join(" ");