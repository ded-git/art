let burgerBtn = document.querySelector('#burger-btn');

let headerMenu = document.querySelector('.header__menu');
let lang = document.querySelector('.language');

let headerTitle = document.querySelector('.header__title');
let headerImg = document.querySelector('.header__img');
// let menu
burgerBtn.addEventListener("click", function(){
    headerTitle.classList.toggle('hidden');
    headerImg.classList.toggle('hidden');
    headerMenu.classList.toggle('hidden');
    lang.classList.toggle('hidden');
})