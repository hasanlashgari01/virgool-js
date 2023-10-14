const $ = document;
const overlayElem = $.querySelector(".overlay");
const profileElem = $.querySelector(".header__panel-profile");
const headerMenuElem = $.querySelector(".header__menu");

profileElem.addEventListener("click", () => {
    console.log('show')
    overlayElem.classList.add("show")
    headerMenuElem.classList.add("show")
})

overlayElem.addEventListener("click", () => {
    console.log('hide')
    overlayElem.classList.remove("show")
    headerMenuElem.classList.remove("show")
})

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
