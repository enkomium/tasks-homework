//  * Array.prototype.forEach(callback(currentValue, index, array), thisArg)
// - Поэлементо перебирает оригинальный массив
// - Ничего не возвращает
// - Заменяет классический for, если не нужно прерывать цикл
// - Для собеседования --
//  у forEach есть 2 аргумента, 1й - Коллбекк, 2й - Объект в контексте которого будет вызываться этот коллбекк. (строка №3)

// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(function (number, index, array) {
//   array[2] = 100;

//   console.log(number);
// });
