// * Array.prototype.every()
// - Поэлементо перебирает оригинальный массив
// - Возвращает true если все элементы массива удовлетворяют условию
// Буквально говорит - а ВСЕ ли элементы коллекции удовлетворяют условие? и возвращает true или false

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];
// console.table(players);

// А все ли timePlayed больше 200?
// const isAllOnline = players.every(({ timePlayed }) => timePlayed > 200);
// console.log(isAllOnline); /* false */
// --------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------

// * Array.prototype.some()
// - Поэлементо перебирает оригинальный массив
// - Возвращает true если хотя бы один элемент массива удовлетворяет условию
// Хотя бы 1 удовлетворяет условие?

// Есть ли задроты кто играет больше 300?
// const anyHardcorePlayers = players.some(({ timePlayed }) => timePlayed > 300);
// console.log(anyHardcorePlayers);
