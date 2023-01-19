var swiper = new Swiper(".mySwiper", {
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    

    scrollbar:
    {
        el:'.swiper-scrollbar'
    }
    
});

