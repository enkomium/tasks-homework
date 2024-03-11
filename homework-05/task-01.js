// Напиши функцию-конструктор Account, которая создает объект со свойствами login и email. 
// В prototype функции-конструктора добавь метод getInfo(), 
// который выводит в консоль значения полей login и email объекта который его вызвал.

// function Account({login, email} = {}) {
//     this.login = login;
//     this.email = email;  
// }

// Account.prototype.getInfo = function() {
//     console.log(`Login: ${this.login}, Email: ${this.email}`);
//     // помнить что return не выводит console.log(), если только вызов функции не произходит в console.log()
//     // Что бы в консоль вывелось то что Вернет Ретурн!
// }

// console.log(Account.prototype.getInfo); // function

// const mango = new Account({
//   login: 'Mangozedog',
//   email: 'mango@dog.woof',
// });

// mango.getInfo(); // Mangozedog, mango@dog.woof