//  * Array.prototype.find()
// - Поэлементо перебирает оригинальный массив
// - Возвращает первый элемент удовлетворяющий условию или undefined
// Восновном проверяют на равенство и для поиска по УНИКАЛЬНМ свойствам, типа найти не по имени а по id

// Ищем человека по id
// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];
// console.table(players);

// const playerIdToFind = 'player-3';

// const finPlayerById = (allPlayer, playerId) =>
//   allPlayer.find(({ id }) => id === playerId);

// console.log(finPlayerById(players, playerIdToFind));
