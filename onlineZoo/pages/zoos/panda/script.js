const iconBurger = document.querySelector(".header__burger");
if(iconBurger) {
  const burgerNav = document.querySelector(".header__nav");
  iconBurger.addEventListener("click", () => burgerNav.classList.toggle("_active"));
  const closeBurger = document.querySelector(".header__close-btn");
  closeBurger.addEventListener("click", () => burgerNav.classList.remove("_active"));
}

const sliderLeftBtn = document.getElementById("left");
const sliderRightBtn = document.getElementById("right");
const sliderBox = document.querySelector(".slider__box");
const listSliderBox = document.querySelectorAll(".slider__box");
const videoBox = document.getElementById("video__box");
const camName = document.querySelector("#cam__name");
const asideBtn = document.getElementById("footer__button");
const asidePopupBtn = document.getElementById("popup-footer__button");
const asideBox = document.querySelector(".section1__list");
const asidePopupBox = document.querySelector(".section1-popup__list");
const section1 = document.getElementById("section1");
const section1Popup = document.getElementById("section1-popup");
const headerOpenBtn = document.getElementById("header__open-button");
const headerCloseBtn = document.getElementById("header__close-button");


const positionAsideCard = (box) => {
      const stringGridElem = getComputedStyle(box, null).gridTemplateAreas;
      const array = stringGridElem.split(/[\"\s\"]/gm).filter(el => el !== "");
      array.unshift(array.pop());
      const string = array.map(el => `${"'"}${el}${"'"}`).join(' ');
      return string;
};

asideBtn.addEventListener("click", () => {
    const string = positionAsideCard(asideBox);
    asideBox.style.gridTemplateAreas = string;
});

asidePopupBtn.addEventListener("click", () => {
  const string = positionAsideCard(asidePopupBox);
  asidePopupBox.style.gridTemplateAreas = string;
});

const positionCard = (direction) => { 
    const stringGridElem = getComputedStyle(sliderBox, null).gridTemplateAreas;
    const array = stringGridElem.split(/[\"\s\"]/gm).filter(el => el !== "");
  
    switch(direction) {
      case "left":{ 
        array.push(array.shift());
        const string1 = `${array[0]} ${array[1]} ${array[2]}`;
        const string2 = `${array[3]} ${array[4]} ${array[5]}`;
        return`${"'"}${string1}${"'"} ${"'"}${string2}${"'"}`;
      }
      case "right" : { 
      array.unshift(array.pop());
      const string1 = `${array[0]} ${array[1]} ${array[2]}`;
      const string2 = `${array[3]} ${array[4]} ${array[5]}`;
      return`${"'"}${string1}${"'"} ${"'"}${string2}${"'"}`;
    }       
      default : return stringGridElem;
    }
  };

headerOpenBtn.addEventListener("click", () => {
  section1.classList.remove("active");
  section1Popup.classList.add("active");
});

headerCloseBtn.addEventListener("click", () => {
  section1Popup.classList.remove("active");
  section1.classList.add("active");
});


sliderLeftBtn.addEventListener("click", () => {
    const string  = positionCard("left");
    sliderBox.style.gridTemplateAreas = string;
});

sliderRightBtn.addEventListener("click", () => {
    const string  = positionCard("right");
    sliderBox.style.gridTemplateAreas = string;
});

listSliderBox.forEach(el => el.addEventListener("click", (e) => {
  if (e.path[0].classList.contains("active")) {
    return
  } else {
  const iframeSrc = e.path[0].getElementsByTagName("iframe")[0].getAttribute("src");
  videoBox.getElementsByTagName("iframe")[0].setAttribute("src", iframeSrc);
  [...el.children].forEach(el => el.classList.remove("active"));
  e.path[0].classList.add("active");

  camName.innerHTML = e.path[0].getElementsByTagName("span")[0].innerText.toLowerCase();
}
}));





