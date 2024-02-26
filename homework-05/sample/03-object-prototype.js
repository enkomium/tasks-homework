// * Алгоритм поиска свойства в цепочке прототипов:
//  1. Поиск начинается в собственных свойствах, ищет до первого совпадения
//  2. Если свойства нет в сообственных, поиск переходит к цепочке прототипов
//  3. Поиск прекращается при первом совпадении (есть такое свойство)
//  4. Возвращается значение свойства
//  5. Наследуется как бы с конца

// У каждой функции, кроме стрелочных, есть свойство prototype, 
// значение которого это ОБЪЕКТ с единственным свойством constructor, указывающим на саму функцию-конструктор.
// При вызове функции-конструктора и создании объекта через new, 
// объект в свойстве prototype (функции-конструктора) будет прототипом создаваемого объекта.
// В свойство prototype можно записывать СВОЙСТВА и МЕТОДЫ, которые будут доступны ВСЕМ объектам созданным этой функцией-конструктором. 
// Методы в prototype будут вызываться объектами созданными функцией-конструктором, 
// Поэтому для доступа к свойствам вызываемого объекта в методах используется ключевое слово this.

// function User({ name, email }) {
//      this.name = name; 
//      this.email = email; 
// } 
    
// User.prototype.getEmail = function () {
//     return this.email; 
// }; 
        
// User.prototype.changeEmail = function (newEmail) {
//     this.email = newEmail; 
// }; 
            
// const mango = new User({ name: 'Манго', email: 'mango@mail.com' }); 
// console.log(mango.getEmail()); 

// console.dir(User);
// console.dir(mango);
// ----------------------------------------------------------------

// function StringBuilder(baseValue) {
//     this.value = baseValue;
// }

// StringBuilder.prototype.getValue = function() {
//    return this.value;
// };

// StringBuilder.prototype.padEnd = function(str) {
//     this.value = this.value + str;
// };

// StringBuilder.prototype.padStart = function(str) {
//     this.value = str + this.value;
// };

// StringBuilder.prototype.padBoth = function(str) {
//     this.value = str + this.value + str;
// };


// // Пиши код выше этой строки
// const builder = new StringBuilder('.');

// console.log(builder.getValue()); // '.'

// builder.padStart('^');
// console.log(builder.getValue()); // '^.'

// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'

// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='
// ----------------------------------------------------------------

