"use strict"

const iconBurger = document.querySelector(".header__burger");
if(iconBurger) {
  const burgerNav = document.querySelector(".header__nav");
  iconBurger.addEventListener("click", () => burgerNav.classList.toggle("_active"));
  const closeBurger = document.querySelector(".header__close-btn");
  closeBurger.addEventListener("click", () => burgerNav.classList.remove("_active"));
};

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("form");
    form.addEventListener("submit", formSend);

    async function formSend(e){
        e.preventDefault();
        let error = formValidate(form);
           error === 0 && alert("Sent");
    }

   function formValidate(form){
        let error = 0;
        let formReq = document.querySelectorAll('._req');
      
      formReq.forEach(input => {

            formRemoveError(input);

           if(input.classList.contains('_email')){
                if(emailTest(input)){
                    formAddError(input);
                    error++;
                }
            }else {
                if(input.value === ''){
                    formAddError(input);
                    error++;
                }
            }
        });
        return error;
    }
     
   function formAddError(input){ 
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
        input.nextElementSibling.classList.add('_error')
    }
   
   function formRemoveError(input){
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
        input.nextElementSibling.classList.remove('_error')
    }
    
    function emailTest(input){
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

});