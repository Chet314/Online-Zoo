const chooseFildSelectButton = document.getElementById("select_button");
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



const closeFild = (item) => {
    item.classList.remove("active");
}

chooseFildSelectButton.addEventListener("click", ()=> {
    chooseFildList.classList.contains("active") ?  closeFild(chooseFildList) :  chooseFildList.classList.add("active")
});

chooseMonthButton.addEventListener("click", ()=> {
    chooseMonthList.classList.contains("active") ?  closeFild(chooseMonthList) :  chooseMonthList.classList.add("active")
});

chooseYearButton.addEventListener("click", ()=> {
    chooseYearList.classList.contains("active") ?  closeFild(chooseYearList) :  chooseYearList.classList.add("active")
});


chooseFildArray.forEach(el => el.addEventListener("click", (e) => {
    e.path[1].classList.add('_req');
    inputChooseFild.value = e.path[0].innerHTML;
    submitChooseFild.classList.add("_req");
    closeFild(chooseFildList);
    e.path[1].classList.remove('_req');
}
));

chooseMonthFildArray.forEach(el => el.addEventListener("click", (e) => {
    e.path[1].classList.add('active');
    inputMonthFild.value = e.path[0].innerHTML;
    closeFild(chooseMonthList)
    e.path[1].classList.remove('active');
}
));

chooseYearFildArray.forEach(el => el.addEventListener("click", (e) => {
    e.path[1].classList.add('active');
    inputYearFild.value = e.path[0].innerHTML;
    closeFild(chooseYearList)
    e.path[1].classList.remove('active');
}
));

