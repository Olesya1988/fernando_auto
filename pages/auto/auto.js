// Событие открытия окна "Оставить заявку"
const popup = document.querySelector(".popup");
const buttons = Array.from(document.querySelectorAll(".order"));
const close = document.querySelector(".popup__close");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    popup.classList.remove("hidden");
  });
});

// Событие закрытия окна "Оставить заявку"
close.addEventListener("click", () => {
  popup.classList.add("hidden");
});

// Событие открытия окна "Задать вопрос"
const popup2 = document.querySelector(".popup2");
const buttons2 = Array.from(document.querySelectorAll(".write"));
const close2 = document.querySelector(".popup2__close");

buttons2.forEach((button) => {
  button.addEventListener("click", () => {
    popup2.classList.remove("hidden");
  });
});

// Событие закрытия окна "Задать вопрос"
close2.addEventListener("click", () => {
  popup2.classList.add("hidden");
});

// Слайдер раздела с фильтром
const fiterGoodsArrowBack = document.querySelector('.auto__similar__arrow__back');
const fiterGoodsArrowNext = document.querySelector('.auto__similar__arrow__next');


const fiterGoodsCardsArray = document.querySelectorAll('.auto__similar__card');
let counterGoodFiter = 0;
fiterGoodsCardsArray[counterGoodFiter].classList.add('active');
fiterGoodsArrowBack.addEventListener('click', () => {
  fiterGoodsCardsArray.forEach(el => el.classList.remove('active'));
  counterGoodFiter = counterGoodFiter - 1;
  if (counterGoodFiter === -1) {
    counterGoodFiter = fiterGoodsCardsArray.length - 1;
  }
  fiterGoodsCardsArray[counterGoodFiter].classList.add('active');
})

fiterGoodsArrowNext.addEventListener('click', () => {
  fiterGoodsCardsArray.forEach(el => el.classList.remove('active'));
  counterGoodFiter = counterGoodFiter + 1;
  if (counterGoodFiter === 3) {
    counterGoodFiter = 0;
  }
  fiterGoodsCardsArray[counterGoodFiter].classList.add('active');
})

// Событие разворачивания меню-гамбургера

const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerMenuList = document.querySelector('.hamburger-menu__list');
hamburgerMenu.addEventListener('click', () => {
  console.log(1);
  hamburgerMenuList.classList.toggle('hidden');
})