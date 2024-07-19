// 8. Удалите тег h6 на странице.

// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
// []()

const super_linkEl = document.getElementById("super_link");
console.log(super_linkEl);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
// []()

const сard_linkEl = document.querySelectorAll(".card-link");
console.log(сard_linkEl);
сard_linkEl.forEach((element) => {
  element.textContent = "ссылка";
});

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
// []()

const allCardInBodyEl = document.querySelectorAll(".card-body .card-link");
console.log(allCardInBodyEl);

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
// []()
const dataElement = document.querySelector('[data-number="50"]');
console.log(dataElement);

// 5. Выведите содержимое тега title в консоль.
// []()
const titleEl = document.querySelector("title");
console.log(titleEl);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
// []()
const cardTitleEl = document.querySelector(".card-title");
console.log(cardTitleEl);
console.log(cardTitleEl.parentElement);

// 7. Создайте тегp`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
const newP = document.createElement("p");
newP.textContent = "Привет";
const cardEl = document.querySelector(".card");
cardEl.appendChild(newP);

const headingElement = document.querySelector("h6");
headingElement.remove();
