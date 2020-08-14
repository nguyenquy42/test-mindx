var owl = $(".owl-carousel");
owl.owlCarousel({
margin: 10,
loop: true,
autoplay: true,
autoplayTimeout: 3000,
nav: true,
navText: ["<span class='btn btn-primary prev-slide'><i class='fas fa-arrow-left'></i></span>", "<span class='btn btn-primary next-slide'><i class='fas fa-arrow-right'></i></span>"],
responsive: {
0: {
    items: 1,
},
600: {
    items: 2,
},
1000: {
    items: 3,
},
},
});