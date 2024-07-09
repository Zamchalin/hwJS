// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

const numberToCube = (number) => number ** 3;

alert(numberToCube(2));
alert(numberToCube(3));

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст
// "Размер заработной платы за вычетом налогов равен значение"

function salaryWhithoutTax(salary) {
  if (!salary) {
    alert("Вы ввели не число");
  } else {
    alert(`Размер заработной платы за вычетом налогов равен ${salary * 0.87}`);
  }
}

let salary = +prompt("Введите пожалуйста вашу зарплату");
salaryWhithoutTax(salary);

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

const maxFromThree = (fN, sN, tN) => {
  if (!fN || !sN || !tN) {
    alert("Вы ввели не число в одном или нескольких элементах");
  } else {
    if (fN > sN && fN > tN) {
      alert(`Число ${fN} максимальное`);
    } else if (sN > fN && sN > tN) {
      alert(`Число ${sN} максимальное`);
    } else {
      alert(`Число ${tN} максимальное`);
    }
  }
};

let fN = +prompt("Введите первое число");
let sN = +prompt("Введите второе число");
let tN = +prompt("Введите третье число");
maxFromThree(fN, sN, tN);

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций
// (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6));
// должно вывести число 8 в консоль (sum - функция сложения в данном примере,
//     ваши названия функций могут отличаться). Округлять значения, которые
//     возвращают функции не нужно, однако, обратите внимание на разность,
//     функция должна вычесть из большего числа меньшее, либо вернуть 0, если
//     числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

const sum = (firstNumber, secondNumber) => firstNumber + secondNumber;
const minus = (firstNumber, secondNumber) =>
  firstNumber >= secondNumber
    ? firstNumber - secondNumber
    : secondNumber - firstNumber;
const multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;
const division = (firstNumber, secondNumber) => firstNumber / secondNumber;

console.log(minus(12, 32));
console.log(sum(12, 32));
console.log(multiply(12, 32));
console.log(division(12, 32));
