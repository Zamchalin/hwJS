// Задание 1
// Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.

let num1 = +prompt("Введите первое число");
let num2 = +prompt("Введите второе число");
alert(num1 <= 1 ? "Число меньше или ровно 1" : "Число не меньше или ровно 1");
alert(num2 >= 3 ? "Число больше или ровно 3" : "Число не больше или ровно 3");

// Задание 2
// Перепишите код к тернарному оператору

// let test = true;
// if (test === true) {
// console.log('+++');
// } else {
// console.log('---');
// }

let test = true;
test === true ? console.log("+++") : console.log("---");

// Задание 3
// В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

let day = +prompt("Введите дату от 1 до 31");
if (!day) {
  alert("Это не число");
} else if (day >= 1 && day <= 10) {
  alert("Число относится к первой декаде");
} else if (day > 10 && day <= 20) {
  alert("Число относится ко второй декаде");
} else if (day > 20 && day <= 31) {
  alert("Число относится ко второй декаде");
} else {
  alert("Число не входит в диапазон от 1 до 31");
}

// Задание 4
// Необязательное задание. (Если вам показалось домашнее задание простым, выполняем данный пункт)
// (Для решения задания вам потребуется оператор остаток от деления %,
//     например 10%3 === 1 , десять разделить на 3, остаток 1, второй пример 7 % 5,
//     тут остаток от деления будет 2, ну и 3 пример это 14 % 10 === 4, остаток от деления на 10 будет равен 4)

let number = +prompt("Введите число");
let unit = number % 10;
let dozen = Math.floor(number / 10) % 10;
let hundred = Math.floor(number / 100) % 10;

alert(
  `В числе 163 количество сотен: ${hundred}, десятков: ${dozen}, единиц: ${unit}`
);
