'use strict';

//Task 1 Homework 1
// let x = 400;
// const a = prompt('Введите А');
// const b = prompt('Введите В');
//
//  if (a>b){
//     alert(x = a+b/2*4);
// } else if(a<b){
//     alert(x = a-b+2/b*4)
// } else{
//      alert(x);
//  }

// Task 2.1 Homework 2
// const x = prompt('Введите координату по оси Х');
// const y = prompt('Введите координату по оси У');
//
// if ((x >= -4 && x <= 4) && (y >= 0 && y <= 4)) {
//     if ((-4 * x - 4 * y + 16) <= 0 || (-4 * x + 4 * y - 16) <= 0) {
//         alert('Точка Не попадает в область')
//     } else if ((-4 * x - 4 * y + 16) > 0 || (-4 * x + 4 * y - 16) > 0){
//         alert('Точка попадает в область')
//     }
// } else {
//     alert('Точка Не попадает в область')
// }

// Task 2.2 Homework 2
const x = prompt('Введите координату по оси Х');
const y = prompt('Введите координату по оси У');

if ((x >= -1 && x <= 1) && (y >= -1 && y <= 1)) {
    if ((-x + y > 0)&& (x + y < 0)) {
        alert('Точка  не попадает в область')
    } else{
        alert('Точка попадает в область')
    }
} else {
    alert('Точка Не попадает в область')
}

// Task 3 Homework 2
// const dayWeek= prompt('Введите номер дня недели!');
// switch (dayWeek) {
//     case 1:
//         alert('Понедельник');
//         break;
//     case 2:
//         alert('Вторник');
//         break;
//     case 3:
//         alert('Среда');
//         break;
//     case 4:
//         alert('Четверг');
//         break;
//     case 5:
//         alert('Пятница');
//         break;
//     case 6:
//         alert('Суббота');
//         break;
//     case 7:
//         alert('Воскресенье');
//         break;
//     default:  alert('default');
// }

  // Task 4 Homework 2
// const firstNumber = prompt('Введите первое число');
// const secondNumber = prompt('Введите второе число');
//
// if(firstNumber > secondNumber) {
//     alert('Ваше число ' + firstNumber + secondNumber)
// } else {
//     alert('Ваше число ' + secondNumber + firstNumber)
// }

 // Task 5 Homework 2
// const numberFirst = prompt('Введите первое число');
// const numberSecond = prompt('Введите второе число');
//
// if(numberFirst > numberSecond) {
//     alert('Ваше число ' + numberFirst);
// } else if (numberFirst === numberSecond)  {
//     alert("Ответа нет!");
// } else {
//     alert('Ваше число ' + numberSecond );
// }

// Task 6 Homework 2 Flat Number
// const flatNumber  = prompt('Введите номер квартиры');
//
// if(flatNumber >= 1 && flatNumber <= 20) {
//     alert('Эта квартира в подьезде №1');
// } else if(flatNumber >= 21 && flatNumber <= 48) {
//     alert('Эта квартира в подьезде №2');
// } else if(flatNumber >=49 && flatNumber <= 90) {
//     alert('Эта квартира в подьезде №3');
// } else {
//     alert ('Такой квартиры нет');
// }

// Task 7 Homework 2 Log & Passwo
// const loGin = prompt('Введите Логин');
// const password  = prompt('Введите Пароль');
//
// if((oGin = 'ivan' && password = 334455) || (loGin = 'alex' && password = 777) || (loGin = 'petr' && password = b5678)) {
//     alert ('Добро пожаловать');
// } else{
//     alert ('Ошибка входа');
// }


// Task 8 Homework 2
// const yearBirth = prompt('Введите год рождения');
// const age = 2019 - yearBirth;
// if (age >= 16) {
//     alert(age + ' лет' + ' Добро пожаловать!');
// } else {
//     alert('Вход воспрещен');
// }

// Task 9 Homework 2
// const expWork = prompt('Введите стаж работы');
// const pay = 2000;
//
// if (expWork >= 0 && expWork < 3)
// {
//     alert('Ваша надбавка ' + 0 + ' грн.');
// }
// else if (expWork >= 3 && expWork < 10)
// {
//     alert('Ваша надбавка ' + pay * 0.1 + ' грн.');
// }
// else if (expWork >= 10 && expWork < 20)
// {
//     alert('Ваша надбавка ' + pay * 0.2 + ' грн.');
// }
// else if (expWork >= 20)
// {
//     alert('Ваша надбавка ' + pay * 0.25 + ' грн.');
// }

// Task 10 Homework 2
// const quantity = prompt();
// if (quantity == 1 || quantity == 21  || quantity == 31  || quantity == 41 )
// {
//     alert('В корзине ' + quantity + ' товар');
// }
// else if (quantity >= 2 && quantity <= 4 || quantity >= 22 && quantity <= 24)
// {
//     alert('В корзине ' + quantity + ' товара');
// }
// else if (quantity >= 5 && quantity <= 20 || quantity >= 25 && quantity <= 30)
// {
//     alert('В корзине ' + quantity + ' товаров');
// }
// else {
// }
