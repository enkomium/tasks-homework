// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку.
// Функция проверяет ее на содержание слов spam и sale.
// Если нашли зарещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false.
// Слова в строке могут быть в произвольном регистре.

// const checkForSpam = function (message) {
//   message = message.toLowerCase().replace(/[^a-z\s]/g, '');
//   return `${message} - ${message.includes('spam') || message.includes('sale')}`;
// };

// НО ЛУЧШЕ И ПРОЩЕ СДЕЛАТЬ КАК НИЖЕ👇
// В ПЕРВОМ ПРИМЕРЕ ИЗОЩРЕННЫЙ МЕТОД а у нас простое условие!

// const checkForSpam = function(message) {
//     message = message.toLowerCase();

//     return message.includes("spam") || message.includes("sale");

//   };

// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
