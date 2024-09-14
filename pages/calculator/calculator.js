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
