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