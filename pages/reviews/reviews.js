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

// Событие открытия полного текста комментария через стрелочку
const popup3 = document.querySelector(".popup3");
const parent = document.querySelector(".reviews__cards");
const buttons3 = Array.from(parent.querySelectorAll(".reviews__card__button__img"));
const close3 = document.querySelector(".popup3__close");

buttons3.forEach((button) => {
    button.addEventListener("click", () => {
        popup3.classList.remove("hidden");
    });
});

// Событие закрытия окна "Оставить заявку"
close3.addEventListener("click", () => {
    popup3.classList.add("hidden");
});

// Развернуть/свернуть комментарий по кнопке "Читать полностью"
const reviewsCardButton = document.querySelectorAll('.reviews__card__button__text');

reviewsCardButton.forEach(el => {
    el.addEventListener('click', () => {
        let parent = el.closest('.reviews__card');
        let children = parent.querySelectorAll('.reviews__card__text');
        children.forEach(elem => {
            elem.classList.toggle('hidden');
        })
    })
})

