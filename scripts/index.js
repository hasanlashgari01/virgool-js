const $ = document;
const overlayElem = $.querySelector(".overlay");
const profileElem = $.querySelector(".header__panel-profile");
const headerMenuElem = $.querySelector(".header__menu");

profileElem.addEventListener("click", () => {
    overlayElem.classList.add("show")
    headerMenuElem.classList.add("show")
})

overlayElem.addEventListener("click", () => {
    overlayElem.classList.remove("show")
    headerMenuElem.classList.remove("show")
})

