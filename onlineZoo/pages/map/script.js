const iconBurger = document.querySelector(".header__burger");
if(iconBurger) {
  const burgerNav = document.querySelector(".header__nav");
  iconBurger.addEventListener("click", () => burgerNav.classList.toggle("_active"));
  const closeBurger = document.querySelector(".header__close-btn");
  closeBurger.addEventListener("click", () => burgerNav.classList.remove("_active"));
};