// Напиши функцию slugify(title)
// которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.

// Значением параметра title будут строки, слова которых разделены только пробелами
// Все символы slug должны быть в нижнем регистре
// Все слова slug должна быть разделены тире

// function slugify(title) {
//   // Change code below this line

//   let slug;

//   slug = title.split(' ').join('-').toLowerCase();

//   return slug;
//   // Change code above this line
// }

// console.log(slugify('Arrays for begginers'));
// -----------------------------------------------------------------------

// Напиши функцию makeArray(firstArray, secondArray, maxLength)
// для создания нового массива со всеми элементами двух исходных firstArray и secondArray.
// Параметр maxLength содержит максимально допустимую длину нового массива.

// Если количество элементов нового массива больше maxLength,
// функция должна вернуть копию массива длиной maxLength элементов.
// В противном случае функция должна вернуть новый массив целиком.

// function makeArray(firstArray, secondArray, maxLength) {
//   const united = firstArray.concat(secondArray);

//   if (united.length >= maxLength) {
//     return united.slice(0, maxLength);
//   }

//   if (united.length < maxLength) {
//     return united;
//   }
// }

// console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 0));
// -----------------------------------------------------------------------

// Напиши функцию calculateTotal(number),
// которая принимает целое число(параметр number) и возвращает сумму всех целых чисел от единицы и до этого числа.
// Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.

// function calculateTotal(number) {
//   let total = 0;
//   // Change code below this lines
//   for (let i = 1; i <= number; i += 1) {
//     total += i;
//   }
//   return total;

//   // Change code above this line
// }

// console.log(calculateTotal(3));
// ------------------------------------------------------------------------

// Напиши функцию calculateTotalPrice(order),
// которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов.
// Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i++) {
//     total += order[i];
//   }
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// ------------------------------------------------------------------------

// Напиши функцию findLongestWord(string)
// которая принимает произвольную строку состоящую только из слов разделённых пробелом(параметр string)
// и возвращает самое длинное слово в этой строке.

// function findLongestWord(string) {
//   string = string.split(' ');
//   let longSrting = string[0];

//   for (const word of string) {
//     if (longSrting.length < word.length) {
//       longSrting = word;
//     }
//   }
//   return longSrting;
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// ------------------------------------------------------------------------

// Дополни код функции createArrayOfNumbers(min, max) так,
// чтобы она возвращала массив всех целых чисел от значения min до max.

// function createArrayOfNumbers(min, max) {
//   const numbers = [];

//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }

//   return numbers;
// }

// console.log(createArrayOfNumbers(14, 17));
// ------------------------------------------------------------------------

// Напиши функцию filterArray(numbers, value),
// которая принимает массив чисел(параметр numbers) и возвращает новый массив,
// в котором будут только те элементы массива numbers, которые больше чем значение параметра value(число).

// function filterArray(numbers, value) {
//   const largeNumbers = [];

//   for (const number of numbers) {
//     if (number > value) {
//       largeNumbers.push(number);
//     }
//   }

//   return largeNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// ------------------------------------------------------------------------

// Функция checkFruit(fruit) принимает строку с названием фрукта(параметр fruit),
// и проверяет есть ли такой фрукт в массиве fruits.

// Дополни код функции так, что если:

//  * фрукт есть в массиве, то функция возвращает true;
//  * фрукта нет в массиве, то функция возвращает false.

// function checkFruit(fruit) {
//   const fruits = ['apple', 'plum', 'pear', 'orange'];

//   return fruits.includes(fruit); // Change this line
// }

// console.log(checkFruit('Pear'));
// ------------------------------------------------------------------------

// Напиши функцию которая получает два массива произвольной длины в параметры array1 и array2,
// и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.

// function getCommonElements(array1, array2) {
//   const commonElements = [];

//   for (const item of array1) {
//     if (array2.includes(item)) {
//       commonElements.push(item);
//     }
//   }

//   return commonElements;
// }

// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// ------------------------------------------------------------------------

// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end.
// Чётным считается число которое делится на 2 без остатка(10 % 2 === 0).

// function getEvenNumbers(start, end) {
//   const result = [];

//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       result.push(i);
//     }
//   }
//   return result;
// }

// console.log(getEvenNumbers(2, 5));
// ------------------------------------------------------------------------

// Напиши функцию includes(array, value),
// которая делает тоже самое, что и метод массива массив.includes(значение)
// - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.

// При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).

// function includes(array, value) {
//   for (const i of array) {
//     if (i === value) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(includes([1, 2, 3, 4, 5], 3));
