// КРАТКОЕ СОДЕРЖАНИЕ ТОГО ЧТО ЕСТЬ:
// - РАСПЫЛЕНИЕ
// - ГЛУБОКАЯ ДЕСТРУКТУРИЗАЦИЯ
// - ДЕСТРУКТУРИЗАЦИЯ МАССИВОВ
// - ДЕСТРУКТУРИЗАЦИЯ со СБОРОМ - REST
// - ПАТТЕР ОБЪЕКТ НАСТРОЕК!

// --------------------------------------------------------------------------------------------------------------------------------------
// ДЕСТРУКТУРИЗАЦИЯ SPREAD и REST //////////////////////////////////////////////////////////////////////////////////////////////////////
// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------
// РАСПЫЛЕНИЕ //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// --------------------------------------------------------------------------------------------------------------------------------------
// Array.prototype.concat(); и аналог через Spread
// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);
// console.log(numbers);

// const number = [4, 5, 6];

// const result = [1, 2, 3, ...number];
// console.log(result);

// const resultMax = Math.min(...result);
// console.log(resultMax);

// const arrayObj = [{ x: 1 }, { y: 2 }, { z: 3 }];
// const resultObj = [...arrayObj];
// console.log(resultObj);

// const a = { x: 1 };
// const b = { z: 3 };
// const c = Object.assign({}, a, b);
// console.log(c);

// const c = {
//   ...a,
//   name: 'Mango',
//   ...b,
// };
// console.log(c);
// --------------------------------------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------------------------------------
// ДЕСТРУКТУРИЗАЦИЯ (для удобства, создает локальные переменные) ///////////////////////////////////////////////////////////////////////
// --------------------------------------------------------------------------------------------------------------------------------------
// const playlist = {
//   name: 'Мой плейлист',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,
// };

// const { name, rating, tracks, trackCount } = playlist;

// Добавили переменную author со значением по умолчанию! И rating тоже.
// const { name, rating = 0, tracks, trackCount, author = 'user' } = playlist;

// Поменяли имя переменной из Обьекта trackCount на numberOfTracks и задали значение по умолчанию!
// const {
//   name,
//   rating = 0,
//   tracks,
//   trackCount: numberOfTracks = 0,
//   author = 'user',
// } = playlist;
// МОЖНО ДЕСТРУКТУРИЗИРОВАТЬ СВОЙСТВО 2 РАЗА (в 2х опирациях), НУЖНО ТОЛЬКО УКАЗЫВАТЬ РАЗНЫЕ ИМЕНА ПЕРЕМЕННЫХ.
// --------------------------------------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------------------------------------
// ГЛУБОКАЯ ДЕСТРУКТУРИЗАЦИЯ (Когда в Объекте есть еще Объект) ////////////////////////////////////////////////////////////////////////
// --------------------------------------------------------------------------------------------------------------------------------------
// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };
// Можно Распаковать (деструктуризировать) в 2 раза
// const { name, tag, location, avatar } = profile;
// const { followers, views, likes } = stats;

// А можно в 1 раз.
// const {
//   name,
//   tag,
//   location,
//   avatar,
//   stats: { followers, views, likes },
// } = profile;
// --------------------------------------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------------------------------------
// ДЕСТРУКТУРИЗАЦИЯ МАССИВОВ (деструктуризируется по ПОРЯДКУ!) ////////////////////////////////////////////////////////////////////////
// --------------------------------------------------------------------------------------------------------------------------------------
// const rgb = [255, 100, 80];
// const [a, b, c] = rgb;
// console.log(rgb);

// Что бы пропустить свойство ставим запятую вместо свойства. (можно пропустить несколько раз)
// const rgb = [255, 100, 80];
// const [a, , c] = rgb;
// console.log(rgb);

// С Объекта с использованием "Object.entries()" (Возвращает Массив Массивов!)
// ---------------------------------------
// const authors = {
//   kiwi: 4,
//   poly: 7,
//   ajax: 9,
//   mango: 6,
// };

// Возвращаем Массив Массивов!
// const entries = Object.entries(authors);
// то есть получим
// [[kiwi, 4], [poly,7], [ajax, 9], [mango, 6]]
// потом перебираем этот Массив с Массивами.

// 1. Первый способ с Выводом в отдельные переменные!
// for (const entrie of entries) {
//   const name = entrie[0];
//   const rating = entrie[1];

//   console.log(name, rating);
// }

// 2. Второй способ с Деструктуризацией в переменные. 0 элемент в name а 1й в переменную rating.
// То есть 1 элемент это Массив у которго 2 Индекса, 0 и 1.
// Мы говорим Распакуй 0 и 1й элементы в такие переменные.
// for (const entrie of entries) {
//   const [name, rating] = entrie;

//   console.log(name, rating);
// }

// 3. Третий способ на место переменной "entrie" ставим Деструктуризацию, так как ссылка на массив и так храниться там.
// Проще говоря ставим распаковку на мсто Переменой!
// for (const [name, rating] of entries) {
//   console.log(name, rating);
// }
// --------------------------------------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------------------------------------
// ДЕСТРУКТУРИЗАЦИЯ со СБОРОМ - REST ////////////////////////////////////////////////////////////////////////
// --------------------------------------------------------------------------------------------------------------------------------------

// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// // в переменную "restProps" собирается все остальное.
// const { name, tag, location, ...restProps } = profile;
// console.log(name, tag, location);
// console.log(restProps);

// const array = [100, 200, 300, 400, 500];
// // const [a, b, c, ...restProps] = array;

// // console.log(a, b, c);
// // console.log(restProps);

// // Ниже просто пример Распыления и поиска самого большого числа с массива.
// const result = Math.max(...array);
// console.log(result);
// --------------------------------------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------------------------------------
// ПАТТЕР ОБЪЕКТ НАСТРОЕК! (Применяется когда передается 3 или больше параметров!) /////////////////////////////////////////////////////
// --------------------------------------------------------------------------------------------------------------------------------------
// Передаем в Функцию Объект настроект, что бы было понятно где что значит!
// const showProfileInfo = function (userProfile) {
//   console.log(userProfile);
// };

// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// Что бы функция использовала переданные свойства, мы Деструктуризируем Объект.
// Делаем Деструктуризацию в Функции Двумя способами!
// Способ - 1. (В теле Функции)
// const showProfileInfo = function (userProfile) {
//   const {
//     name,
//     tag,
//     location,
//     avatar,
//     stats: { followers, views, likes },
//   } = userProfile;

//   console.log(name, tag, location, avatar, followers, views, likes);
// };

// Способ - 2. (В подписи (параметрах) Функции)
// const showProfileInfo = function ({
//   name,
//   tag,
//   location,
//   avatar,
//   stats: { followers, views, likes },
// }) {
//   console.log(name, tag, location, avatar, followers, views, likes);
// };

// Способ - 3(Дополнение ко всем Двум!)
// Если хотим что бы что-то пошло в отдельную переменную делаем РЕСТ к avatar и stats.
// К примеру статы пойдут в переменную "restProps"
// const showProfileInfo = function ({ name, tag, location, ...restProps }) {
//   console.log(name, tag, location);
//   console.log(restProps);
// };

// showProfileInfo(profile);
// Короче говоря, в функцию мы кидаем Объект настроект, она его принимает, делает там Деструктуризацию,
// Применяет разбандеренные переменные куда нужно и возврощает Готовый результат! ЙОу!
// Так мы делаем Код чище и читабельнее, избовляясь от точек!
// --------------------------------------------------------------------------------------------------------------------------------------
