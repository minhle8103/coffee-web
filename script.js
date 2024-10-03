const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", ()=> 
    document.body.classList.toggle("show-moblie-menu")
);

menuCloseButton.addEventListener("click", ()=> menuOpenButton.click());