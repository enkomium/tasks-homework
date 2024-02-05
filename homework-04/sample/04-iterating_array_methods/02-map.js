// * Array.prototype.map()
// - Поэлементо перебирает оригинальный массив
// - Не изменяет оригинальный массив
// - Возвращает НОВЫЙ МАССИВ такой же длины, на место результата ставит то что вернула функция
// - Используется что-бы вытянуть что-то, какой-то 1 или Обновить элементы старой коллекции

// const numbers = [5, 10, 15, 20, 25];

// const doubledNums = numbers.map(function (number) {
//   console.log(number);
//   return 555;
// });

// console.log(doubledNums);
// ----------------------------------------------------------------

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];
// console.table(players);

// const playerNames = players.map(player => {
//   return player.name; /* Возвращает НОВЫЙ МАССИВ с именами*/
// });

// console.log(playerNames);

// КАк вернуть сразу несколько значений из объекта?
// const result = players.map(player => {
//   return {
//     name: player.name,
//     online: player.online,
//   };
// });

// // Запись в 1 строку с деструктуризацией!
// // const result = players.map(({ name, online }) => ({ name, online }));

// console.log(result);
// ----------------------------------------------------------------

// Увеличение количества поинтов игроков.
// Изменяем значение в старой коллекции не трогая ее и возвращаем новую коллекцию с измененными значениями!
// const newPlayers = players.map(player => {
//   return {
//     ...player,
//     points: player.points * 1.1,
//   };
// });

// console.log(newPlayers);
// ----------------------------------------------------------------

// Если нуно изменить значение какого-то опредененного пользователя.
// const playerId = 'player-3';

// const updatePlayers = players.map(player => {
//   if (player.id === playerId) {
//     return {
//       ...player,
//       timePlayed: player.timePlayed + 100,
//     };
//   }

//     return player;
// });

// Перепишем через Тернарник!
// const updatePlayers = players.map(player =>
//   player.id === playerId
//     ? { ...player, timePlayed: player.timePlayed + 100 }
//     : player,
// );

// console.log(updatePlayers);
