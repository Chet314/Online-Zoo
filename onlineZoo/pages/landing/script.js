const iconBurger = document.querySelector(".header__burger");
if(iconBurger) {
  const burgerNav = document.querySelector(".header__nav");
  iconBurger.addEventListener("click", () => burgerNav.classList.toggle("_active"));
  const closeBurger = document.querySelector(".header__close-btn");
  closeBurger.addEventListener("click", () => burgerNav.classList.remove("_active"));
}

const arrowLeftPet = document.getElementById("pets-arrow-left");
const arrowRightPet = document.getElementById("pets-arrow-right");
const arrowLeftSection6 = document.getElementById("section6_arrow-left");
const arrowRightSection6 = document.getElementById("section6_arrow-right");
let reviewCardFlag = true;
const petCards = document.querySelector("#pet-cards");
const reviewCards = document.querySelector("#section6__review")
const donateNow1 = document.getElementById("donate-now1");
const donateNow2 = document.getElementById("donate-now2");
const popup = document.getElementById("popup");
const popupCloseLink = document.getElementById("popup__close-link");
const popupCloseLink1 = document.getElementById("popup__close-link1");
const popupCloseLink2 = document.getElementById("popup__close-link2");
const popupCloseLink3 = document.getElementById("popup__close-link3");
const popupCloseBtn = document.getElementById("popup__close-button");
const listDonationBtn = document.querySelectorAll(".popup__donation-button");
const donationAmount = document.getElementById("donation__button");
const donationInput = document.getElementById("donation__input");
const popupStep1 = document.getElementById("popup-step1");
const popupStep2 = document.getElementById("popup-step2");
const popupStep3 = document.getElementById("popup-step3");
const listDonationStep1Btn = document.querySelectorAll(".donation-button");
const step1Btn = document.getElementById("step1__button");
const step2BackLink = document.getElementById("step2__back-link");
const step2Btn = document.getElementById("step2__button");
const step3BackLink = document.getElementById("step3__back-link");
const elementValue10 = document.getElementById("value10");
const chooseList = document.getElementById("choose-fild__submit");
const chooseInput = document.getElementById("choose-fild__input");
const nameFildInput = document.getElementById("name-fild__input");
const emailFildInput = document.getElementById("email-fild__input");
const payBtn = document.getElementById("pay-button");
const cardNumberInput = document.getElementById("cardnumber");
const cvvInput = document.getElementById("cvv");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");


const chooseFildSelectButton = document.getElementById("select__button");
const chooseFildList = document.getElementById("choose-fild__list");
const chooseMonthButton = document.getElementById("month-button");
const chooseYearButton = document.getElementById("year-button");
const chooseMonthList = document.getElementById("select-month__list");
const chooseYearList = document.getElementById("select-year__list");
const chooseFildArray = document.querySelectorAll(".choose-fild__list");
const chooseMonthFildArray = document.querySelectorAll(".select-month__list");
const chooseYearFildArray = document.querySelectorAll(".select-year__list");
const inputChooseFild = document.querySelector("#choose-fild__input");
const submitChooseFild = document.querySelector("#choose-fild__submit");
const inputMonthFild = document.querySelector("#month");
const inputYearFild = document.querySelector("#year");

const positionCard = (direction) => {
  const stringGridElem = getComputedStyle(petCards, null).gridTemplateAreas;
  const array = stringGridElem.split(/[\"\s\"]/gm).filter(el => el !== "");
  switch(direction) {
    case "left":{ 
      array.push(array.shift());
      const string1 = `${array[0]} ${array[1]} ${array[2]} ${array[3]}`;
      const string2 = `${array[4]} ${array[5]} ${array[6]} ${array[7]}`;
      return`${"'"}${string1}${"'"} ${"'"}${string2}${"'"}`;
    }
    case "right" : { 
    array.unshift(array.pop());
    const string1 = `${array[0]} ${array[1]} ${array[2]} ${array[3]}`;
    const string2 = `${array[4]} ${array[5]} ${array[6]} ${array[7]}`;
    return`${"'"}${string1}${"'"} ${"'"}${string2}${"'"}`;
  }       
    default : return stringGridElem;
  }
};

const positionSection6Card = (direction) => {
  const stringGridSection6Elem = getComputedStyle(reviewCards, null).gridTemplateAreas;
  const array = stringGridSection6Elem.split(/[\"\s\"]/gm).filter(el => el !== "");
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
    default : return stringGridSection6Elem;
  }
}

const changeFlag = () => {
 return reviewCardFlag ? reviewCardFlag = false : reviewCardFlag = true;
}

const debounce = (fn, ms) => {
  if(reviewCardFlag){
    fn();
    setTimeout(fn, ms);
  } 
}

(function() {

  (function loop() {
    if (reviewCardFlag) {
    const string = positionSection6Card("left");
    reviewCards.style.gridTemplateAreas = string;
    setTimeout(loop, 5000);
  } else {
    setTimeout(loop, 1000)
  }
  }());

}());

const activatePopup = () => {
  if (popup.classList.contains("active")) {
    return
    } else {
      popup.classList.add("active");
  }
};

const diactivatePopup = () => {
  if (popup.classList.contains("active")) {
    popup.classList.remove("active");
    } else if (popupStep1.classList.contains("active")) {
      popupStep1.classList.remove("active");
    }  else if (popupStep2.classList.contains("active")) {
      popupStep2.classList.remove("active");
    }  else {
      popupStep3.classList.remove("active");
    }
}

arrowLeftPet.addEventListener("click", () => {
 const string  = positionCard("left");
  petCards.style.gridTemplateAreas = string;
});

arrowRightPet.addEventListener("click", () => {
  const string  = positionCard("right");
  petCards.style.gridTemplateAreas = string;
});

arrowLeftSection6.addEventListener("click", () => {
  debounce(changeFlag, 20000)
  const string = positionSection6Card("left");
  reviewCards.style.gridTemplateAreas = string;

});

arrowRightSection6.addEventListener("click", () => {
  debounce(changeFlag, 20000)
  const string = positionSection6Card("right");
  reviewCards.style.gridTemplateAreas = string;
});

donateNow1.addEventListener("click", () => activatePopup());
donateNow2.addEventListener("click", () => activatePopup());
popupCloseLink.addEventListener("click", () => diactivatePopup());
popupCloseLink1.addEventListener("click", () => diactivatePopup());
popupCloseLink2.addEventListener("click", () => diactivatePopup());
popupCloseLink3.addEventListener("click", () => diactivatePopup());
popupCloseBtn.addEventListener("click", () => diactivatePopup());

listDonationBtn.forEach(el => el.addEventListener("click", (e) => {
  const value = e.path[0].defaultValue;
  popup.classList.remove("active");
  popupStep1.classList.add("active");
  listDonationStep1Btn.forEach(el => { 
    el.classList.contains("_req") && el.classList.remove("_req");
    el.value === value && (el.classList.add("_req"), donationInput.value = value.slice(1));
    donationAmount.classList.add("_req");
  });
}));

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById("section3__form");
  form.addEventListener("submit", formSend);
  async function formSend(e){
      e.preventDefault();
     const value = document.getElementById("donate").value;
     popupStep1.classList.add("active");
     listDonationStep1Btn.forEach(el => { 
      el.classList.contains("_req") && el.classList.remove("_req");
    });
     donationAmount.classList.add("_req");
     value !== "" ? donationInput.value = value : (elementValue10.classList.add("_req"), donationInput.value = 10);
  }
});

const addError = (input) => {
  if(input.classList.contains("_error")) {
    return
  }
  input.classList.add("_error");
};

const removeError = (input) => {
  if(!input.classList.contains("_error")) {
    return
  } 
  input.classList.remove("_error");
};

const closeFild = (item) => {
  item.classList.remove("active");
}

const checkError = (value) => {
  if (value >= 10 && value <= 1000) {
    removeError(donationInput);
  }
};

chooseFildSelectButton.addEventListener("click", ()=> {
  chooseFildList.classList.contains("active") ?  closeFild(chooseFildList) :  chooseFildList.classList.add("active")
});

chooseFildArray.forEach(el => el.addEventListener("click", (e) => {
  e.path[1].classList.add('_req');
  inputChooseFild.value = e.target.innerHTML;
  submitChooseFild.classList.add("_req");
  closeFild(chooseFildList);
  e.path[1].classList.remove('_req');
  removeError(chooseInput);
}
));

step1Btn.addEventListener("click", () => {
  const value = Number(donationInput.value);
  checkError(value);
  if (value < 10 || value >= 1000) {
    addError(donationInput);
  } 
  if (!chooseList.classList.contains("_req")) { 
    addError(chooseInput)
  }
  if (value >= 10 && value <= 1000 && chooseList.classList.contains("_req")) {
    popupStep1.classList.remove("active");
    popupStep2.classList.add("active");
  } 
});

const checkEmail = (input) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
};
const checkCardNumber = (input) => {
  return /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$/.test(input.value);
};
const checkCvv = (input) => {
  return /[0-9]{3}/.test(input.value)
};

step2BackLink.addEventListener("click", () => {
  popupStep2.classList.remove("active");
  popupStep1.classList.add("active");
});

step2Btn.addEventListener("click", () => {
  removeError(nameFildInput);
  removeError(emailFildInput);
  if (nameFildInput.value === "") {
    addError(nameFildInput);
  }
  if (!checkEmail(emailFildInput)) {
    addError(emailFildInput);
  }
  if (nameFildInput.value !== "" && checkEmail(emailFildInput)) {
    popupStep2.classList.remove("active");
    popupStep3.classList.add("active");
  }
});

step3BackLink.addEventListener("click", () => {
  popupStep3.classList.remove("active");
  popupStep2.classList.add("active");
});

payBtn.addEventListener("click", () => {
  removeError(cardNumberInput);
  removeError(cvvInput);
  if (!checkCardNumber(cardNumberInput)) {
    addError(cardNumberInput);
  }
  if (!checkCvv(cvvInput)) {
    addError(cvvInput);
  }
  if (monthInput.value === "") {
    addError(monthInput);
  }
  if (yearInput.value === "") {
    addError(yearInput);
  }
  if (checkCardNumber(cardNumberInput)&&checkCvv(cvvInput)&&monthInput.value !== ""&&yearInput.value !== "") {
    popupStep3.classList.remove("active");
    alert("Success")
  }
});

chooseMonthButton.addEventListener("click", ()=> {
  chooseMonthList.classList.contains("active") ?  closeFild(chooseMonthList) :  chooseMonthList.classList.add("active")
});

chooseYearButton.addEventListener("click", ()=> {
  chooseYearList.classList.contains("active") ?  closeFild(chooseYearList) :  chooseYearList.classList.add("active")
});

chooseMonthFildArray.forEach(el => el.addEventListener("click", (e) => {
  e.path[1].classList.add('active');
  inputMonthFild.value = e.path[0].innerHTML;
  closeFild(chooseMonthList)
  e.path[1].classList.remove('active');
  removeError(monthInput);
}
));

chooseYearFildArray.forEach(el => el.addEventListener("click", (e) => {
  e.path[1].classList.add('active');
  inputYearFild.value = e.path[0].innerHTML;
  closeFild(chooseYearList)
  e.path[1].classList.remove('active');
  removeError(yearInput);
}
));




