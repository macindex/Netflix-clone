$('.owl-carousel').owlCarousel({
    center: true,
    items:2,
    loop:true,
    margin:10,
    responsive:{
        0:{
            items: 1
        },
        600:{
            items:4
        },
        1000:{
            items:5
        }
    }
});

$('.nonloop').owlCarousel({
    center: true,
    items:2,
    loop:false,
    margin:10,
    responsive:{
        0:{
            items: 1
        },
        600:{
            items:4
        },
        1000:{
            items:5
        }
    }
});
