// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

for (let i = 0; i < 11; i++) {
  if (i === 0) {
    alert(`${i} - это ноль`);
  } else if (i % 2 != 0) {
    alert(`${i} - это нечетное число`);
  } else {
    alert(`${i} - это четное число`);
  }
}

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const arrayTask2 = [1, 2, 3, 4, 5, 6, 7];
console.log(arrayTask2);
const newArray = arrayTask2.splice(3, 2);
console.log(arrayTask2);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

const array = [];
for (let i = 0; i < 5; i++) {
  array[i] = Math.floor(Math.random() * (9 - 0) + 0);
}
console.log(array);
let result = 0;
array.forEach((element) => {
  result = element + result;
});
console.log(result);

let minNumber = Infinity;
array.forEach((element) => {
  if (minNumber > element) {
    minNumber = element;
  }
});
console.log(minNumber);

const res = array.includes(3);
res == true
  ? console.log("Число 3 есть в массиве")
  : console.log("Числа 3 в массиве нет");

// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx

let x = "x";
let empty = "";
for (let i = 0; i < 20; i++) {
  console.log(`${empty}${x}`);
  empty = empty + x;
}
