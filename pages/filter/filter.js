// Придумываем базу данных
const data = {
  countries: [
    "Япония",
    "Китай",
    "Корея",
    "Германия",
    "Швеция",
    "США",
    "Франция",
    "Казахстан",
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

// Страны
const chooseCountryButton = document.querySelector(".choose__country");
const chooseBrandButton = document.querySelector(".brands__content");
const chooseModelButton = document.querySelector(".models__content");
const countriesList = document.querySelector(".countries__list");
const countryArrowDown = document.querySelector(".country__arrow__down");
const countryArrowUp = document.querySelector(".country__arrow__up");

// Марки
const brandsContainer = document.querySelector(".brands__container");
const brandsList = document.querySelector(".brands__list");
const brandText = document.querySelector(".brand__text");
const brandArrowDown = document.querySelector(".brand__arrow__down");
const brandArrowUp = document.querySelector(".brand__arrow__up");

// Модели
const modelsList = document.querySelector(".models__list");
const modelText = document.querySelector(".model__text");
const modelArrowDown = document.querySelector(".model__arrow__down");
const modelArrowUp = document.querySelector(".model__arrow__up");

// Тип двигателя/топлива
const fuelTypesToggle = document.querySelector(".fuel-types-toggle");
const fuelTypesContainer = document.querySelector(".fuel-types__container");
const fuelTypesList = document.querySelector(".fuel-types__list");
const fuelTypesArrowDown = document.querySelector(
  ".fuel-type__arrow__down"
);
const fuelTypesArrowUp = document.querySelector(".fuel-type__arrow__up");
const fuelTypes = Array.from(document.querySelectorAll(".fuel-type"));

// Тип приводы
const driveTypesToggle = document.querySelector(".drive-types-toggle");
const driveTypesContainer = document.querySelector(".drive-types__container");
const driveTypesList = document.querySelector(".drive-types__list");
const driveTypesArrowDown = document.querySelector(
  ".drive-type__arrow__down"
);
const driveTypesArrowUp = document.querySelector(".drive-type__arrow__up");
const driveTypes = Array.from(document.querySelectorAll(".drive-type"));

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

// По клику на конкретную страну она отображается в заголовке
countries.forEach((country) => {
  country.addEventListener("click", () => {
    chooseCountryButton.textContent = country.textContent;
  });
});

// По клику на конкретную страну она отображается в заголовке
countries.forEach((country) => {
  country.addEventListener("click", () => {
    chooseCountryButton.textContent = country.textContent;
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

// Событие появления/скрытия списка типов топлива
fuelTypesToggle.addEventListener("click", () => {
  fuelTypesContainer.classList.toggle("hidden");
  fuelTypesArrowDown.classList.toggle("hidden");
  fuelTypesArrowUp.classList.toggle("hidden");
});

// По клику на конкретный тип топлива он отображается в списке
fuelTypes.forEach((fuelType) => {
  fuelType.addEventListener("click", () => {
    fuelTypesToggle.textContent = fuelType.textContent;
  });
});

// Реализация поиска типов топлива
const searchFuel = document.querySelector(".fuel-types__search");
searchFuel.addEventListener("click", (e) => {
  e.stopPropagation();
});

searchFuel.addEventListener("input", (ev) => {
  const value = ev.target.value.trim();
  const searchItems = Array.from(document.querySelectorAll(".fuel-type"));
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

// Событие появления/скрытия списка типов привода
driveTypesToggle.addEventListener("click", () => {
  driveTypesContainer.classList.toggle("hidden");
  driveTypesArrowDown.classList.toggle("hidden");
  driveTypesArrowUp.classList.toggle("hidden");
});

// По клику на конкретный тип топлива он отображается в списке
driveTypes.forEach((driveType) => {
  driveType.addEventListener("click", () => {
    driveTypesToggle.textContent = driveType.textContent;
  });
});

// Реализация поиска типов топлива
const searchDrive = document.querySelector(".drive-types__search");
searchDrive.addEventListener("click", (e) => {
  e.stopPropagation();
});

searchDrive.addEventListener("input", (ev) => {
  const value = ev.target.value.trim();
  const searchItems = Array.from(document.querySelectorAll(".drive-type"));
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