// Стрелочные функции
//  * - Объявление
//  * - Явный и неявный возврат
//  * - Аргументы
//  * - Неявный возврат объекта

// Обычная функция.
// const add = function (a, b, c) {
//   console.log(a, b, c);
//   return a + b + c;
// };

// console.log(add(5, 10, 15));

// // Стрелочная функция!
// // Если параметр 1, то скобки не нежны! если нет параметров, то просто пустые скобки!
// // Если в теле функции просто возврат, то тело не нужно! НЕЯВНЫЙ ВОЗВРАТ!
// const add2 = (a, b, c) => a + b + c;

// console.log(add2(3, 9, 12));

// Если возратом идет ОБЪЕКТ, то ноужно ставитьпузатые скобки ()!!!
// Называемые выражением! То есть они выернут результат выражения!
// --------------------------------------------------------------------------------------------------------------------------------

// У стрелочных Функций нет локальной переменной "arguments"
// И что бы получить доступ ко всем аргументам используется REST (...args)
// const add3 = (...args) => {
//   let total = 0;

//   for (const el of args) {
//     total += el;
//   }

//   return total;
// };

// console.log(add3(4, 16, 32));
// --------------------------------------------------------------------------------------------------------------------------------

// ПЕРЕПИШЕМ задачу с Коллбеков (01-callbacks) на стрелочные функции!
// const filter = (array, test) => {
//   const result = [];

//   for (const el of array) {
//     const passed = test(el);

//     if (passed) {
//       result.push(el);
//     }
//   }

//   return result;
// };

// const r1 = filter([1, 2, 3, 4, 5, 6], value => value < 4);
// console.log(r1);

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], value => value > 4);
// console.log(r2);

// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];

// // const getFruitQuantity = fruit => fruit.quantity >= 120;

// const r3 = filter(fruits, fruit => fruit.quantity >= 120);
// console.log(r3);
