// Напиши класс StringBuilder. На вход он получает один параметр - строку, которую записывает в свойство _value.

// Добавь классу следующий функционал:

// Геттер value - возвращает текущее значение поля _value
// Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value
// Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало value
// Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value

// ГРАМОТНОЕ РЕШЕНИЕ! 
// class StringBuilder {
//     constructor(str) {
//         this._value = str;
//     }

//     get value() {
//        return this._value;
//     }

//     append(str) {
//         this._value += `${str}`;
//     }

//     prepend(str) {
//         this._value = `${str}${this._value}`;
//     }

//     pad(str) {
//         this.append(str);
//         this.prepend(str);
//     }
// }

// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '. ^'

// builder.prepend('^');
// console.log(builder.value); // '^ . ^'

// builder.pad('=');
// console.log(builder.value); // '= ^ . ^ ='
// ---------------------------------------

// class StringBuilder {
//     constructor(str) {
//         str = str.split(" ");
//         this._value = str;
//     }

//     get value() {
//        return this._value.join("");
//     }

//     append(str) {
//         this._value.push(str)
//     }

//     prepend(str) {
//         this._value.unshift(str)
//     }

//     pad(str) {
//         this._value.unshift(str)
//         this._value.push(str)
//     }
// }

// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='
// ----------------------------------------

