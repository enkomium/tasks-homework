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

// function getExtremeElements(array) {
//   const lastIndex = array.length - 1;
//   const result = array[(0, lastIndex)];

//   return result;
// }

// -----------------------------------------------------------------------------------------------------------------------------

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],

//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     for (const item of this.potions) {
//       if (item.name === newPotion.name) {
//         return `Ошбка! Зелье ${newPotion.name} уже есть в вашем ивентаре!`;
//       }
//     }

//     this.potions.push(newPotion);
//   },

//   removePotion(potionName) {
//     const { potions } = atTheOldToad;

//     for (let i = 0; i < potions.length; i += 1) {
//       if (potions[i].name === potionName.name) {
//         potions.splice(i, 1);
//         return `Зелье ${potionName} было удалено из инвентаря.`;
//       }
//     }
//     return `Зелье ${potionName} нет в инвентаре!`;
//   },

//   updatePotionName(oldName, newName) {
//     const { potions } = atTheOldToad;

//     for (const item of potions) {
//       if (item.name === oldName) {
//         item.name = newName;
//         return `Зелье ${oldName} было обновлено до ${newName}.`;
//       }
//     }
//     return `Зелье ${oldName} нет в инвентаре!`;
//   },
// };

// console.log(atTheOldToad.potions);

// console.log(atTheOldToad.removePotion({ name: 'Stone skin', price: 520 }));

// console.log(atTheOldToad.potions);

// console.log(atTheOldToad.updatePotionName('Dragon breath', 'VATAFAK'));

// console.log(atTheOldToad.addPotion({ name: 'VACHDISH PRO', price: 777 }));

// console.log(atTheOldToad.updatePotionName('VACHDISH PRO', 'VItoliSH PRO MAX'));
// console.log(atTheOldToad.potions);

// console.log(atTheOldToad.addPotion({ name: 'MAMBA', price: 555 }));

// console.log(atTheOldToad.updatePotionName('Dragon breath', 'VATAFAK'));
// console.log(atTheOldToad.potions);
// ----------------------------------------------------------------------------------------------------------------------

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';

// const keys = Object.keys(user);

// for (const key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }
// -------------------------------------------------------------------------------------------------------------------------

// const countProps = function (obj) {
//   const quantity = Object.keys(obj).length;
//   return quantity;
// };

// console.log(countProps({})); // 0

// console.log(countProps({ name: 'Mango', age: 2 })); // 2

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
// --------------------------------------------------------------------------------------------------------------------------

// const findBestEmployee = function (employees) {
//   const keys = Object.keys(employees);
//   const values = Object.values(employees);
//   const maxNumber = Math.max(...values);

//   for (const key of keys) {
//     if (employees[key] === maxNumber) {
//       console.log(`${key} = ${maxNumber}`);
//     }
//   }
// };

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }),
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }),
// ); // lux
// ---------------------------------------------------------------------------------------------------------------------------

// const countTotalSalary = function (employees) {
//   let total = 0;
//   const keys = Object.keys(employees);

//   for (const key of keys) {
//     console.log(`Сотрудник ${key} = ${employees[key]}`);
//     total += employees[key];
//   }
//   return console.log('Общая сумма зарплат сотрудников =', total);
// };

// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   }),
// ); // 400
//
// ---------------------------------------------------------------------------------------------------------------------------

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function (arr, prop) {
//   const array = [];

//   for (const item of arr) {
//     if (item[prop]) {
//       array.push(item[prop]);
//     }
//   }
//   return array;
// };

// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []
// ---------------------------------------------------------------------------------------------------------------------------

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function (allProdcuts, productName) {
//   let total = 0;

//   for (const item of allProdcuts) {
//     if (item.name === productName) {
//       total += item.price * item.quantity;
//     }
//   }

//   return total;
// };

// console.log(calculateTotalPrice(products, 'Радар')); // 5200

// console.log(calculateTotalPrice(products, 'Дроид')); // 2800
// ---------------------------------------------------------------------------------------------------------------------------

// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   order(pizzaName, onSuccess, onError) {
//     if (!this.pizzas.includes(pizzaName)) {
//       return onError(`В ассортименте нет пиццы с названием ${pizzaName}.`);
//     }
//     return onSuccess(pizzaName);
//   },
// };
// // Пиши код выше этой строки

// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//   return console.log(`Ваш заказ принят. Готовим пиццу ${pizzaName}.`);
// }

// // Колбэк для onError
// function onOrderError(error) {
//   return console.log(`Ошибка! ${error}`);
// }

// // Вызовы метода с колбэками
// pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
// pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
// pizzaPalace.order('Биг майк', makePizza, onOrderError);
// pizzaPalace.order('Венская', makePizza, onOrderError);
// ---------------------------------------------------------------------------------------------------------------------------

// Геморная задача с CALL
// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// // Пиши код ниже этой строки
// function composeMessage(position) {
//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${
//     position + 1
//   }-й в очереди.`;
// }

// const messages = [];

// // Запомни, когда вызываешь функцию, то по сути ты запускаешь ее выполнение!
// // ТО есть все что мы записали при ее вызове, передалось в саму функцию, отработало, вернулось и записалось в order!!!!
// for (let i = 0; i < orders.length; i += 1) {
//   const order = composeMessage.call(orders[i], i);
//   messages.push(order);
// }
// ---------------------------------------------------------------------------------------------------------------------------

// const students = [
//   { name: 'Манго', courses: ['математика', 'физика'] },
//   { name: 'Поли', courses: ['информатика', 'математика'] },
//   { name: 'Киви', courses: ['физика', 'биология'] },
// ];

// const allCourses = students.flatMap(student => student.courses);

// console.log(allCourses);

// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index,
// );

// for (let i = 0; i < allCourses.length; i += 1) {
//   if (allCourses.indexOf(allCourses[i]) === i) {
//     console.log(allCourses[i], i);
//   }
// }

// console.log(uniqueCourses);

// const inventory = {
//     items: ['Knife', 'Gas mask'],
//     add: itemName => {
//       console.log(`Adding ${itemName} to inventory`);
  
//       inventory.items.push(itemName);
//     },
//     remove(itemName) {
//       console.log(`Removing ${itemName} from inventory`);
  
//       this.items = this.items.filter(item => item !== itemName);
//     },
//   };
  
//   const invokeInventoryAction = function(itemName, action) {
//     console.log(`Invoking action on ${itemName}`);
//     action(itemName);
//   };
  
//   invokeInventoryAction('Medkit', inventory.add);
  
//   console.log(inventory.items); 
  
//   invokeInventoryAction('Gas mask', inventory.remove.bind(inventory));
//   // Invoking action on Gas mask
//   // Removing Gas mask from inventory
  
//   console.log(inventory.items); 
// ------------------------------------------------------------------------------------------------------------------------------

// class Car {
//   brand; /* для читабельности кода разрабам, писать не обязательно если они уже есть в Конструторе! */
//   model;
//   color;
//   #price;
//   configuration;

//   static #MAX_PRICE = 100000; 

//   static getMaxPrice() {
//     return this.#MAX_PRICE;
//   }

//   constructor({ brand, model, color, price, configuration }) {
//     this.brand = brand;
//     this.model = model;
//     this.color = color;
//     this.#price = price;
//     this.configuration = configuration;
//   }

//   getInfo() {
//     return `Brand: ${this.brand}, Model: ${this.model}, Price: $${this.price}, configuration: ${this.configuration}`;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }

// class Audi extends Car {
//   constructor({ brand, model, color, price, configuration }) {
//     super({ brand, model, color, price, configuration });
//   }
// }

// const Q3 = new Audi({ brand: "audi", model: "Q3", color: "blue", price: 30000, configuration: "econom"})

// console.log(Q3.getInfo());
// Q3.price = 35000;
// console.log(Q3.getInfo());

// class BMW extends Car {}

// class Vesta extends Car {}

// class Vehicle {
//   // Конструктор класса, принимает один параметр - brand
//   constructor(brand) {
//     // Устанавливаем свойство brand
//     this.brand = brand;
//   }

//   // Метод класса, который выводит информацию о том, что транспортное средство движется
//   drive() {
//     console.log(`${this.brand} is driving.`);
//   }
// }

// class Car extends Vehicle {
//   // Конструктор класса Car, принимает два параметра - brand и model
//   constructor(brand, model) {
//     // Вызываем конструктор родительского класса Vehicle с помощью super()
//     super(brand);
//     // Устанавливаем свойство model
//     this.model = model;
//   }

//   // Метод класса, который выводит информацию о модели автомобиля
//   getModel() {
//     console.log(`Model: ${this.model}`);
//   }
// }

// const myCar = new Car('Toyota', 'Camry');

// myCar.drive(); // Вывод: Toyota is driving.
// myCar.getModel(); // Вывод: Model: Camry
// ------------------------------------------------------------------------------------------------------------------------------

// Задание 3
// Напиши скрипт имитирующий авторизацию администратора в панели управления.

// Есть переменная message в которую будет записано сообщение о результате. 
// При загрузке страницы у посетителя запрашивается пароль через prompt:

// Если нажали Cancel, записать в message строку 'Отменено пользователем!'
// В протовном случае, если введен пароль который совпадает со значением константы ADMIN_PASSWORD, 
// записать в message строку 'Добро пожаловать!'
// В противном случае, то есть если ни одно из предыдущих условий не выполнилось, 
// записать в message строку 'Доступ запрещен, неверный пароль!'
// После всех проверок вывести в alert значение переменной message.


// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;

// let log = prompt('Введите пароль')

// if(ADMIN_PASSWORD === log) {
//     message = "Добро пожаловать!";
// } else if (log === null){
//     message = "'Отменено пользователем!"
// }else if (log.trim() === ""){
//     message = "Вы ничего не ввели!"
// }else {message = "Доступ запрещен, неверный пароль!"}

// alert(message);

// ------------------------------------------------------------------------------------------------------------------------------


let input;
let total = 0;

while(true){
    input = prompt('Введите число!');

    if(input === null){
        alert(`Общая сумма чисел равна ${total}`);
        break;
    }else if(input.trim() === ''){
        alert('Продолжайте вводить числа пока не нажмете "отмена"!');
        continue; //не обязательно
    }else if(input.startsWith('0') && input.length > 1){
        alert('Введите число без ведущих нулей!');
    }else {

        input = Number(input);

        if(isNaN(input)){
            alert('Введите корректное число!');
        }else if(input <= 0){
            alert('Введите чило больше нуля!');
        }else {
            total += input;
        }
    }
}

