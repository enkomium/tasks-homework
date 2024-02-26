// * Классы
// * 🐷 - объявление
// * 🐷 - конструктор
// * 🐷 - методы
// * 🐷 - static
// * 🐷 - приватные свойства
// * 🐷 - синтаксис публичных свойства и методы классов
// * 🐷 - геттеры и сеттеры

// Перезапись функции конструктора в под КЛасс (04-constructor)
// class User {
//     constructor({ email, password } = {}) {
//         this.email = email;
//         this.password = password;
//     }
 
//     changeEmail(newMail) {
//         this.email = newMail;
//     }

//   };
  
//   const mango = new User({ email: 'mango@mail.com', password: 1111111 });
  
//   mango.changeEmail('my-new-mail@mail.com');

//   console.log(mango);
  // ----------------------------------------------------------------

// Запись в классе!
// Сначала объявляются все статические свойства и методы.
// Потом конструктор и остальные методы.
// Запятые не обьязательны.

// Запись Класса - функции конструктора (Синтактический сахар)
// class User { 
//     // Необязательное объявление публичных свойств name; email; 
//     // Аналог функции-конструктора 
//     constructor({ name, email }) { 
//     // Инициализация объявленных свойств 
//     this.name = name; 
//     this.email = email; } 
// } 

// const mango = new User({ name: 'Манго', email: 'mango@mail.com' });
// ----------------------------------------------------------------

// class Car {
//     static description = 'Класс описывающий автомобиль';

//     static logInfo(carObj) {
//         console.log('Car.logInfo -> carObj', carObj);
//     }

//     constructor({ brand, model, price } = {}) {
//         this.brand = brand;
//         this._model = model;
//         this._price = price;
//     }

//     get price() {
//         return this._price;
//     }

//     set price(newPrice) {
//         this._price = newPrice;
//     }

//     get model() {
//         return this._model;
//     }

//     set model(newModel) {
//         this._model = newModel;
//     }
// }

// const carInstance = new Car({
//     brand: 'Audi',
//     model: 'Q3',
//     price: 35000,
// });

// console.log(carInstance.model);
// carInstance.model = 'Q4';
// console.log(carInstance.model);

// console.log(carInstance.price);
// carInstance.price = 50000;
// console.log(carInstance.price);

// console.log(carInstance);
// ----------------------------------------------------------------

// ПРиватные свойства (#email)
// class User { 
//     // Необязательное объявление публичных свойств name; 
//     // Обязательное объявление приватных свойств 
//     #email; 
//     constructor({ name, email }) {
//         this.name = name; 
//         this.#email = email; 
//     } 
//     getEmail() {
//         return this.#email; 
//     } 
    
//     changeEmail(newEmail) {
//         this.#email = newEmail; 
//     } 
// } 
            
// const mango = new User({ name: 'Манго', email: 'mango@mail.com' }); 
            
// mango.changeEmail('mango@supermail.com'); 
// console.log(mango.getEmail()); /* mango@supermail.com  */

// // console.log(mango.#email); // Будет ошибка, это приватное свойство
// ----------------------------------------------------------------

// Геттеры и сеттеры
// - Геттер выполняется при попытке ПОЛУЧИТЬ значение свойства, а сеттер - при попытке его ИЗМЕНИТЬ.
// - Геттеры и сеттеры хорошо использовать для простых операций чтения и изменения значения свойств, 
// особенно приватных, как их публичный интерфейс. Для работы со свойством которое хранит массив или объект они не подойдут.
// - Плюс в том, что это методы, а значит при записи можно выполнить дополнительный код, 
// например с какими-то проверками, в отличии от выполнениях этой же операции напрямую со свойством.

// class User { 
//   name; 
//   #email; 
//   constructor({ name, email }) {
//      this.name = name; 
//      this.#email = email; 
//   } 
//   get email() { // Геттер email 
//     return this.#email; 
//   } 

//   set email(newEmail) { // Сеттер email 
//     if(newEmail === '') { 
//       console.log('Ошибка! Почта не может быть пустой строкой!'); 
//       return; 
//     } 
    
//     this.#email = newEmail; 
//   }  
// }

// const mango = new User({ name: 'Манго', email: 'mango@mail.com' }); 
// console.log(mango.email); // mango@mail.com 

// mango.email = 'mango@supermail.com'; 
// console.log(mango.email); // mango@supermail.com
// ----------------------------------------------------------------

// Статические свойства
// - Кроме публичных и приватных свойств будущего экземпляра, в классе можно объявить его собственные свойства, 
// доступные только классу, но не его экземплярам - статические свойства (static). 
// Они полезны для хранения информации относящейся к самому классу.
// Статические свойства объявляются в теле класса. Перед именем свойства добавляется ключевое слово static.
// - Статические свойства также могут быть приватные, то есть доступные только внутри класса. 
// Для этого имя свойства должно начинаться с символа #, также как приватные свойства. 
// Обращение к приватному статическому свойству вне тела класса вызовет ошибку.
// При обращении нужно указывать ОБЪЕКТ (User.TYPES) а не this

// class User { 
//   // Объявление и инициализация статического свойства 
//   static TYPES = { 
//     ADMIN: 'admin', 
//     EDITOR: 'editor', 
//   }; 
  
//   #email; 
//   #type; 
  
//   constructor({ email, type }) {
//     this.#email = email; 
//     this.#type = type; 
//   } 
  
//   get type() {
//     return this.#type; 
//   } 
  
//   set type(newType) { 
//     if (User.TYPES[newType] === undefined) {
//        console.log('Ошибка! Такого типа пользователя не существет'); 
//        return; 
//     } 
//     this.#type = newType; 
//   } 
// } 

// const mango = new User({ email: 'mango@mail.com', type: User.TYPES.ADMIN, }); 
// console.log(mango.TYPES); // undefined 
// console.log(User.TYPES); // { ADMIN: 'admin', EDITOR: 'editor' } 

// console.log(mango.type); // admin 
// mango.type = User.TYPES.EDITOR; 
// console.log(mango.type); // editor
// ----------------------------------------------------------------