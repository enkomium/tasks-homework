// * Array.prototype.reduce()
// - Поэлементо перебирает оригинальный массив
// - Возвращает что угодно 🤯
// - Заменяет всё на свете, но использовать нужно с умом
// Аккумулятор по дефолту начинается с первого значения в коллекции
// Аккумулятор на каждой итерации прокидывает предыдущее значение РЕТЕРНА, то что возвращаем
// В аккумулятор записывается то что мы возвращаем
// Аккумулятором может быть хоть что, к примеру пустой Массив в который будем что-то пушить на каждой итерации, Объект или буль

// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, number) => {
//   console.log('acc -', acc);
//   console.log('number -', number);

//   return acc + number;
// }, 0);
// console.log(total);

// accumulator = 0 -> number = 5 -> return 0 + 5
// accumulator = 5 -> number = 10 -> return 5 + 10
// accumulator = 15 -> number = 15 -> return 15 + 15
// accumulator = 30 -> number = 20 -> return 30 + 20
// accumulator = 50 -> number = 25 -> return 50 + 25
// accumulator = 75 = (return total)
// ----------------------------------------------------------------

// Считаем общую зарплату
// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// const totalSalary = Object.values(salary).reduce(
//   (acc, number) => acc + number,
//   0,
// );
// console.log(totalSalary);
// ----------------------------------------------------------------

// Считаем общее количество наигранных часов игроками
// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
// ];

// const totalTimePlayed = players.reduce(
//   (totalTime, player) => totalTime + player.timePlayed,
//   0,
// );
// console.log(totalTimePlayed);
// ----------------------------------------------------------------

// Считаем общую сумму товаров корзины
// Умножение имеет ВЫСОКИЙ ПРИОРИТЕТ, сперва умножится а потом сложится!
// const cart = [
//   { label: 'Apples', price: 100, quantity: 2 },
//   { label: 'Bananas', price: 120, quantity: 3 },
//   { label: 'Lemons', price: 70, quantity: 4 },
// ];

// const totalAmount = cart.reduce(
//   (total, { price, quantity }) => total + price * quantity,
//   0,
// );
// console.log(totalAmount);
// ----------------------------------------------------------------

// Собираем все теги из твитов
// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const allTags = tweets.reduce((tags, tweet) => {
//   tags.push(tweet.tags); /* Так не делать, пушится каждый элемент */

//   // Так работает но тоже не надо, мы изменяем параметр функции, линтеры это не любят
//   // надо писать Имутабельный Код! который не мутирует (не изменяет данные на прямую)
//   tags.push(...tweet.tags);

//   return tags;
// }, []);
// console.log(allTags);

// ПОэтому просто распыляем на каждой Интерации все в новый массив
// const allTags = tweets.reduce((tags, tweet) => [...tags, ...tweet.tags], []);
// console.log(allTags);
// ----------------------------------------------------------------

// Ведём статистику тегов, создаем объект с количеством повторяющихся тегов
// РЕШЕНИЕ - 1.
// НЕ правильное, изменяет параметр функции - Мутабельный
// const tagsStats = allTags.reduce((acc, tag) => {
//   console.log(acc);

//   /* Проверяет есть ли в Объекте Ключь с таким именем */
//   if (acc[tag]) {
//     acc[tag] += 1; /* Если есть, прибавляет ему 1 */
//   }

//   acc[tag] = 1; /* Если нет, создает такой ключь и присваевает ему 1 */

//   return acc;
// }, {});

// РЕШЕНИЕ - 2.
// Имутабельное, создаем новый Объект
// const tagsStats = allTags.reduce((acc, tag) => {
//   console.log(acc);

//   /* Проверяет есть ли в Объекте Ключь с таким именем */
//   if (acc[tag]) {
//     /* Если есть, распыляем все в новый Объект и прибавляет ключу 1 */
//     return {
//       ...acc,
//       [tag]: acc[tag] + 1,
//     };
//   }

//   /* Если нет, распыляет все в новый Объект создает такой ключь и присваевает ему 1 */
//   return {
//     ...acc,
//     [tag]: 1,
//   };
// }, {});

// РЕШЕНИЕ - 3.
// С помощью ТЕРНАРНИКА
// На каждой Интереции вернем новый Аккумулятор куда распылим Старый, а свойство с ключом тега сделаем с помощью Тернарника
// Если такое свойсто есть, то увеличим на 1, если нет, то просто запишем 1
// Короче Тернарник чисто для КЛЮЧА
// const tagsStats = allTags.reduce((acc, tag) => {
//   ({ ...acc, [tag]: acc[tag] ? acc[tag] + 1 : 1 });
// }, {});
// console.log(tagsStats);
