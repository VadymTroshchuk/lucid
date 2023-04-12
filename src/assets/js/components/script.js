new Swiper ('.prices-slider' , {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    grabCursor: true,

    mousewheel: {
        sensitivity: 1,
    },

    loop: true,

    autoplay: {
        delay: 5000,

        stopOnLastSlide:false,

        disableOnInteraction: false,
    },


    speed: 800,

    

});