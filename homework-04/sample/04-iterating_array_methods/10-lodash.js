// Свойства из Библиотеки ЛОДАШ (Объект с методами)

//  * isEmpty()

// console.log(_.isEmpty({}));
// console.log(_.isEmpty({ a: 1 }));
// ----------------------------------------------------------------

//  * get()
// Посмотреть что-то глубоко в Объекте
// Метод с кучей проверок под капотом

// 2 аналога - Если такого свойства нет, проверять дальше не будет
//  * - user && user.location && obj.location.city
//  * - user?.location?.city

// const user = {
//   name: 'mango',
//   location: {
//     city: 'Lviv',
//   },
// };

// console.log(_.get(user, 'location.city'));
// console.log(user.location.city);

// Пример аналога с последовательной проверкой в глубину, но без дополнительных проверок по копотом!
// if (user && user.location && user.location.city) {
//     console.log(user.location.city);
// }

// console.log(user?.location?.city);
// ----------------------------------------------------------------

//  * union()
// Собирает уникальные элементы без повторений в 1 массив

// console.log(_.union([1, 2, 3], [3, 4, 5]));
// ----------------------------------------------------------------

//  * range()
// Создает массив с числами от указанного и до указанного но не считая его!
// Можно устанавливать шаг, то есть 1234567 с шагом 2, 1357

// console.log(_.range(10, 51));
// ----------------------------------------------------------------

// * sortBy()
// Сортировка по возростанию

// var users = [
//   { user: 'fred', age: 48 },
//   { user: 'barney', age: 36 },
//   { user: 'fred', age: 40 },
//   { user: 'barney', age: 34 },
// ];

// сортировка по возрасту
// const ageSort = _.sortBy(users, user => user.age);
// console.log(ageSort);

// сортировка по нескольким полям
// const ageSort = _.sortBy(users, ['user', 'age']);
// console.log(ageSort);
// ----------------------------------------------------------------

//  * sum() и sumBy()
//  Посчитать сумму корзины товаров
//  * sum() - для массива а sumBy() для массива-Объектов

// считает общюю сумму
// console.log(_.sum([1, 2, 3, 4, 5, 6, 7]));

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];

// считает общюю сумму
// console.log(_.sumBy(players, player => player.timePlayed));
// ----------------------------------------------------------------

/*
 * uniq() и uniqBy()
 * sortedUniq() и sortedUniqBy()
 */

/*
 * random()
 */

/*
 * min() и max()
 * minBy() и maxBy()
 */

// console.log(_.minBy(players, player => player.timePlayed));

/*
 * camelCase(), capitalize(), kebabCase(), lowerCase(), upperCase()
 */

// console.log(_.kebabCase(' a b c '));
