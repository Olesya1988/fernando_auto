// Определяем переменные
const clientTypesToggle = document.querySelector(".client-types-toggle");
const clientTypesList = document.querySelector(".client-types__list");

const clientTypesArrowDown = document.querySelector(
  ".client-type__arrow__down"
);
const clientTypesArrowUp = document.querySelector(".client-type__arrow__up");

const clientTypes = Array.from(document.querySelectorAll(".client-type"));

const fuelTypesToggle = document.querySelector(".fuel-types-toggle");
const fuelTypesContainer = document.querySelector(".fuel-types__container");
const fuelTypesList = document.querySelector(".fuel-types__list");


const fuelTypesArrowDown = document.querySelector(
  ".fuel-type__arrow__down"
);
const fuelTypesArrowUp = document.querySelector(".fuel-type__arrow__up");

const fuelTypes = Array.from(document.querySelectorAll(".fuel-type"));


// Событие появления/скрытия списка типов лиц
clientTypesToggle.addEventListener("click", () => {
  clientTypesList.classList.toggle("hidden");
  clientTypesArrowDown.classList.toggle("hidden");
  clientTypesArrowUp.classList.toggle("hidden");
});

// По клику на конкретный тип лица он отображается в списке
clientTypes.forEach((clientType) => {
  clientType.addEventListener("click", () => {
    clientTypesToggle.textContent = clientType.textContent;
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
const search = document.querySelector(".fuel-types__search");
search.addEventListener("click", (e) => {
  e.stopPropagation();
});

search.addEventListener("input", (ev) => {
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