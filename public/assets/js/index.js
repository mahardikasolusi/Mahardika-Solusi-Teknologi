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
    './assets/image/clients/deloitte.jpg',         
    './assets/image/clients/rajaherbal.jpg',         
    './assets/image/clients/mira.jpg',         
    './assets/image/clients/tokogampang.jpg',         
    './assets/image/clients/vietnammobile.jpg',         
    './assets/image/clients/escorindo.jpg',         
    './assets/image/clients/scola.jpg',         
    './assets/image/clients/kemenhub.jpg',         
    './assets/image/clients/indohub.jpg',         
    './assets/image/clients/eccchurch.jpg',         
    './assets/image/clients/modena.jpg',         
    './assets/image/clients/pelitatex.jpg',         
    './assets/image/clients/palapa.jpg',         
    './assets/image/clients/tri.jpg',         
    './assets/image/clients/indosatooredo.jpg',         
    './assets/image/clients/medcoenergi.jpg',         
    './assets/image/clients/indihomestudy.jpg',         
    './assets/image/clients/ajinomoto.jpg',         
    './assets/image/clients/kelasahli.jpg',         
    './assets/image/clients/tgt.jpg',         
    './assets/image/clients/adira.jpg',         
    './assets/image/clients/bnp2tki.jpg',         
    './assets/image/clients/ragi.jpg',         
    './assets/image/clients/conocophilips.jpg',         
    './assets/image/clients/thomry.jpg',         
]

document.getElementById("clients1").innerHTML = clients.map((client) => 
    (
        `<img src="${client}" alt="">  `
    )
    
).join(" ");