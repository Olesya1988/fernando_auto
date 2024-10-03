// Придумываем базу данных
const data = {
  countries: [
    "Китай",
    "Корея",
  ],
  brand: {
    "Все марки": [
      "Giulia",
      "Junior",
      "Stelvio",
      "Tonale",
      "A1",
      "A3",
      "A4",
      "A5",
      "A6",
      "A7",
      "A8",
      "Q2",
      "A3",
      "Q5",
      "Q8",
      "X5",
      "X6",
      "X7",
      "iX",
      "Bentayga",
      "Continental GT",
      "Continental GTC",
      "Mulsanne",
    ],
    "Alfa Romeo": ["Все модели", "Giulia", "Junior", "Stelvio", "Tonale"],
    Audi: [
      "Все модели",
      "A1",
      "A3",
      "A4",
      "A5",
      "A6",
      "A7",
      "A8",
      "Q2",
      "A3",
      "Q5",
      "Q8",
    ],
    BMW: ["Все модели", "X5", "X6", "X7", "iX"],
    Bentley: [
      "Все модели",
      "Bentayga",
      "Continental GT",
      "Continental GTC",
      "Mulsanne",
    ],
  },
};

// Определяем переменные
const chooseCountryButton = document.querySelector(".choose__country");
const chooseBrandButton = document.querySelector(".brands__content");
const chooseModelButton = document.querySelector(".models__content");
const chooseYearButton = document.querySelector(".years__content");
const countriesList = document.querySelector(".countries__list");
const brandsContainer = document.querySelector(".brands__container");
const brandsList = document.querySelector(".brands__list");
const brandText = document.querySelector(".brand__text");
const modelsList = document.querySelector(".models__list");
const modelText = document.querySelector(".model__text");
const yearText = document.querySelector(".year__text");
const countryArrowDown = document.querySelector(".country__arrow__down");
const countryArrowUp = document.querySelector(".country__arrow__up");
const brandArrowDown = document.querySelector(".brand__arrow__down");
const brandArrowUp = document.querySelector(".brand__arrow__up");
const modelArrowDown = document.querySelector(".model__arrow__down");
const modelArrowUp = document.querySelector(".model__arrow__up");
const yearsList = document.querySelector(".years__list");
const yearArrowDown = document.querySelector(".years__arrow__down");
const yearArrowUp = document.querySelector(".years__arrow__up");

// Генерируем список стран
data.countries.forEach((country) => {
  // меняем окончания страны
  if (
    country[country.length - 2] === "и" ||
    country[country.length - 2] === "е"
  ) {
    country = country.slice(0, country.length - 1) + "и";
  } else if (
    country[country.length - 2] === "а" &&
    country[country.length - 1] === "н"
  ) {
    country = country + "а";
  } else if (country[country.length - 2] === "а") {
    country = country.slice(0, country.length - 1) + "я";
  }

  let li = document.createElement("li");
  li.classList.add("country");
  li.textContent = country;
  countriesList.appendChild(li);
});

// Генерируем список марок
const brandsArr = Object.keys(data.brand);

brandsArr.forEach((brand) => {
  let li = document.createElement("li");
  li.classList.add("brand");
  li.textContent = brand;
  brandsList.appendChild(li);
});

// Генерируем список моделей
const modelsArr = data.brand["Все марки"];

modelsArr.forEach((model) => {
  let li = document.createElement("li");
  li.classList.add("model");
  li.textContent = model;
  modelsList.appendChild(li);
});

// Реализация фильтра марок
const search = document.querySelector(".brands__search");
search.addEventListener("click", (e) => {
  e.stopPropagation();
});

search.addEventListener("input", (ev) => {
  const value = ev.target.value.trim();
  const searchItems = Array.from(document.querySelectorAll(".brand"));
  const searchRegExp = new RegExp(value, "gi");

  if (value === "") {
    searchItems.forEach((el) => {
      el.classList.remove("hidden");
    });
    return;
  }

  searchItems.forEach((el) => {
    const elementText = el.textContent;
    const isContainsSearchRequest = searchRegExp.test(elementText);
    if (!isContainsSearchRequest) {
      el.classList.add("hidden");
    } else {
      el.classList.remove("hidden");
    }
  });
});

// Определяем переменные
const countries = Array.from(document.querySelectorAll(".country"));
const brands = Array.from(document.querySelectorAll(".brand"));
let models = Array.from(document.querySelectorAll(".model"));
const years = Array.from(document.querySelectorAll(".year"));

// По клику на страну появляется/исчезает список всех стран, меняется цвет текста и вид иконки стрелки
chooseCountryButton.addEventListener("click", () => {
  chooseCountryButton.classList.toggle("selected");
  countriesList.classList.toggle("hidden");
  countryArrowDown.classList.toggle("hidden");
  countryArrowUp.classList.toggle("hidden");
});

// По клику на марку появляется/исчезает список всех марок, меняется вид иконки стрелки
chooseBrandButton.addEventListener("click", () => {
  brandsContainer.classList.toggle("hidden");
  brandArrowDown.classList.toggle("hidden");
  brandArrowUp.classList.toggle("hidden");
});

// По клику на модель появляется/исчезает список всех моделей, меняется вид иконки стрелки
chooseModelButton.addEventListener("click", () => {
  modelsList.classList.toggle("hidden");
  modelArrowDown.classList.toggle("hidden");
  modelArrowUp.classList.toggle("hidden");
});

// По клику на год выпуска появляется/исчезает список всех годов, меняется вид иконки стрелки
chooseYearButton.addEventListener("click", () => {
  yearsList.classList.toggle("hidden");
  yearArrowDown.classList.toggle("hidden");
  yearArrowUp.classList.toggle("hidden");
});

// По клику на конкретную страну она отображается в заголовке
countries.forEach((country) => {
  country.addEventListener("click", () => {
    chooseCountryButton.textContent = country.textContent;
    countriesList.classList.add("hidden");
  });
});

// По клику на конкретную марку она отображается в заголовке
brands.forEach((item) => {
  item.addEventListener("click", () => {
    brandText.textContent = item.textContent;

    // Также меняем список моделей в зависимости от выбранной марки
    let text = brandText.textContent;
    const modelsArr = data.brand[text];
    modelsList.innerHTML = "";
    modelsArr.forEach((model) => {
      let li = document.createElement("li");
      li.classList.add("model");
      li.textContent = model;
      modelsList.appendChild(li);
    });

    // По клику на конкретную модель она отображается в заголовке (если марка выбрана)
    models = Array.from(document.querySelectorAll(".model"));

    models.forEach((item) => {
      item.addEventListener("click", () => {
        modelText.textContent = item.textContent;
      });
    });
  });
});

// По клику на конкретную модель она отображается в заголовке (если нет выбора марки)
models.forEach((item) => {
  item.addEventListener("click", () => {
    modelText.textContent = item.textContent;
  });
});

// По клику на конкретный год он отображается в заголовке
years.forEach((item) => {
  item.addEventListener("click", () => {
    yearText.textContent = item.textContent;
  });
});

document.querySelector(".filter__button").addEventListener("click", (e) => {
  e.preventDefault();
  window.location.replace('./pages/filter/filter.html');
});


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

// Событие разворачивания меню-гамбургера

const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerMenuList = document.querySelector('.hamburger-menu__list');
hamburgerMenu.addEventListener('click', () => {
  console.log(1);
  hamburgerMenuList.classList.toggle('hidden');
})

// Слайдер раздела О нас

const companyImagesArrowBack = document.querySelector('.company__images__arrow__back');
const companyImagesArrowNext = document.querySelector('.company__images__arrow__next');


const companyImageArray = document.querySelectorAll('.company__image');
let counter = 1;
companyImageArray[counter].classList.add('active');
companyImagesArrowBack.addEventListener('click', () => {
  companyImageArray.forEach(el => el.classList.remove('active'));
  counter = counter - 1;
  if (counter === -1) {
    counter = companyImageArray.length - 1;
  }
  companyImageArray[counter].classList.add('active');
})

companyImagesArrowNext.addEventListener('click', () => {
  companyImageArray.forEach(el => el.classList.remove('active'));
  counter = counter + 1;
  if (counter === 3) {
    counter = 0;
  }
  companyImageArray[counter].classList.add('active');
})

// Слайдер раздела Популярные авто
const goodsArrowBack = document.querySelector('.goods__arrow__back');
const goodsArrowNext = document.querySelector('.goods__arrow__next');


const goodsCardsArray = document.querySelectorAll('.goods__card');
let counterGood = 0;
goodsCardsArray[counterGood].classList.add('active');
goodsArrowBack.addEventListener('click', () => {
  goodsCardsArray.forEach(el => el.classList.remove('active'));
  counterGood = counterGood - 1;
  if (counterGood === -1) {
    counterGood = goodsCardsArray.length - 1;
  }
  goodsCardsArray[counterGood].classList.add('active');
})

goodsArrowNext.addEventListener('click', () => {
  goodsCardsArray.forEach(el => el.classList.remove('active'));
  counterGood = counterGood + 1;
  if (counterGood === 3) {
    counterGood = 0;
  }
  goodsCardsArray[counterGood].classList.add('active');
})

// Слайдер раздела с фильтром
const fiterGoodsArrowBack = document.querySelector('.fiter__goods__arrow__back');
const fiterGoodsArrowNext = document.querySelector('.fiter__goods__arrow__next');


const fiterGoodsCardsArray = document.querySelectorAll('.fiter__goods__item');
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

// Слайдер раздела с отзывами
const reviewsArrowBack = document.querySelector('.reviews__title__arrow__back');
const reviewsArrowNext = document.querySelector('.reviews__title__arrow__next');


const reviewsCardsArray = document.querySelectorAll('.reviews__card');
let counterReviews = 0;
reviewsCardsArray[counterReviews].classList.add('active');
reviewsArrowBack.addEventListener('click', () => {
  reviewsCardsArray.forEach(el => el.classList.remove('active'));
  counterReviews = counterReviews - 1;
  if (counterReviews === -1) {
    counterReviews = reviewsCardsArray.length - 1;
  }
  reviewsCardsArray[counterReviews].classList.add('active');
})

reviewsArrowNext.addEventListener('click', () => {
  reviewsCardsArray.forEach(el => el.classList.remove('active'));
  counterReviews = counterReviews + 1;
  if (counterReviews === 3) {
    counterReviews = 0;
  }
  reviewsCardsArray[counterReviews].classList.add('active');
})

// Слайдер раздела, где можно оставить заявку
const applicationArrowBack = document.querySelector('.application-form__img__arrow__back');
const applicationArrowNext = document.querySelector('.application-form__img__arrow__next');


const applicationImgArray = document.querySelectorAll('.application-form__img');
let counterApplication = 0;
applicationImgArray[counterApplication].classList.add('active');
applicationArrowBack.addEventListener('click', () => {
  applicationImgArray.forEach(el => el.classList.remove('active'));
  counterApplication = counterApplication - 1;
  if (counterApplication === -1) {
    counterApplication = applicationImgArray.length - 1;
  }
  applicationImgArray[counterApplication].classList.add('active');
})

applicationArrowNext.addEventListener('click', () => {
  applicationImgArray.forEach(el => el.classList.remove('active'));
  counterApplication = counterApplication + 1;
  if (counterApplication === 3) {
    counterApplication = 0;
  }
  applicationImgArray[counterApplication].classList.add('active');
})

// Согласие с cookie
const cookieButton = document.querySelector('.intro__cookie__button');
const cookie = document.querySelector('.intro__cookie');

cookieButton.addEventListener('click', () => {
  cookie.classList.add("hidden");
})