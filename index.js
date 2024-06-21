let input = document.querySelector("#input");
let add__btn = document.querySelector("#add__button");
let nameText = document.querySelector("#name");

nameText.textContent = "Ism";

add__btn.addEventListener("click", (event) => {
    nameText.textContent = input.value;
}) 