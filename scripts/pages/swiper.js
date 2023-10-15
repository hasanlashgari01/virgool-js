window.addEventListener("load", () => {
    const swiper = new Swiper('.nav__items', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView: 'auto',
        spaceBetween: 12,
        // centeredSlides: true,
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
})