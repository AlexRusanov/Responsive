const burgerMenuContainer = document.querySelector(".header-menu-container");
const burgerMenuList = document.querySelector(".menu-container-list");

burgerMenuContainer.addEventListener("click", function() {
    this.classList.toggle("active-burger-menu");
    burgerMenuList.classList.toggle("active-menu")
});