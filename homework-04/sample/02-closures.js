// ЗАМЫКАНИЕ
// ---------
//  * Функция результатом своей работы может возвращать другую функцию.

//  * Возвращаемая функция во время вызова будет иметь доступ ко всем локальным переменным (области видимости КОТОРЫЕ МЫ ИСПОЛЬЗУЕМ!!!) ---
//  * родительской функции (той из которой её вернули), это называется «замыкание» где бы мы ее не вызвали.
//  * То есть когда мы записали функцию внутри другой функции, при вызове той которая внутри ---
//  * мы имеем доступ ко всему что есть в той в которую мы вложили. ВСЕ ЧТО МЫ ИСПОЛЬЗУЕМ ВО ВЛОЖЕННОЙ!!!

// Задача - Поворенок
// ------------------
// const makeShef = function (name) {
//   const makeDish = function (dish) {
//     console.log(`${name} готовит ${dish}`);
//   };

//   return makeDish;
// };

// // Вызываем 1ю функцию и записываем туда "Манго", потом кидаем вложенную функцию в переменную ---
// // так как результат работы 1й функции это возврат вложенной!
// // То есть мы записали Имя в первую и вывели вторую в переменную, туда пока не чего не приходит.
// const mango = makeShef('Манго');

// /* вызываем вложенную функцию и передаем туда ЩИ */
// mango('щи');

// // Как посмотреть на чем замкнулась Функция?
// // Scopes => Closure = на чем замкнулась Функция и что ей доступно!
// console.dir(mango);
// --------------------------------------------------------------------------------------------------------------------------------

// Задача - Округлятор!
// --------------------
// const rounder = function (places) {
//   return function (number) {
//     return Number(number.toFixed(places));
//   };
// };

// // Вызвали и Передали в 1ю функцию число "2" (фикс после запятой) и присвоили ВОЗВРАТ в переменную.
// // Записалась 2я функция.
// const rounder2 = rounder(2);
// const rounder3 = rounder(3);

// // Пердаем второй функции число с которым она должна работать!
// // На возврате получаем число которое округлит 2я функция!
// console.log(rounder2(3.33333));
// --------------------------------------------------------------------------------------------------------------------------------

// Приватные переменные с использованием ЗАМЫКАНИЯ!
// Их можно изменить только через Методы, на прямую не как!

// Задача - Зарплаты работников.
// ----------------------------
// const salaryManagerFactory = function (enployesName, baseSalary) {
//   let salary = baseSalary; /* Храним зарплату в приватной переменной */

//   /* Функция возвращает объект с методами */
//   return {
//     raise(amout) {
//       salary += amout;
//     },
//     lower(amout) {
//       salary -= amout;
//     },
//     current() {
//       return `Текущая зарплата ${enployesName} - ${salary}`;
//     },
//   };
// };

// /* Вызываем функцию, передаем туда Аргументы и записываем то что вернет функция в переменную! (Объект) */
// const salaryManager = salaryManagerFactory('Mango', 15000);
// const salaryPapa = salaryManagerFactory('Papa', 777777);

// console.log(salaryManager.current());
// console.log(salaryPapa.current());

// console.log(salaryPapa.raise(777));
// console.log(salaryPapa.current());
// --------------------------------------------------------------------------------------------------------------------------------
