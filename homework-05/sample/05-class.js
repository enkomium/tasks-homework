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
// Идут на экземпляр, можно обращаться к ним в методах
// ПОчитать в интернете
// ВСЕ ЧТО МЫ ДЕЛАЕМ ПУБЛИЧНЫМ ИДЕТ НА ЭКЗЕМПЛЯР! к примеру методы класса не делаются публичными, они хранятся в Прототайпе
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

// Геттеры и сеттеры (поподаютна каждый экземпляр)
// - Геттер выполняется при попытке ПОЛУЧИТЬ значение свойства, а сеттер - при попытке его ИЗМЕНИТЬ.
// - Геттеры и сеттеры хорошо использовать для простых операций чтения и изменения значения свойств, 
// особенно приватных, как их публичный интерфейс. Для работы со свойством которое хранит массив или объект они не подойдут.
// - Плюс в том, что это методы, а значит при записи можно выполнить дополнительный код, 
// например с какими-то проверками, в отличии от выполнениях этой же операции напрямую со свойством.
// Геттер не может называться так же как совйство кторое он Описывает, поэтому СВОЙСТВУ ставят нижнее подчеркивание к имени _
// а геттер записывают без него (при вызове или возврате свойства тоже ставят подчеркивание)
// Использовать тогда когда внешний код будет читать и записывать, когда все из вне будет к нему обращаться на прямую
// ПРОИТАТЬ ПРО СВОЙСТВА Object.defineProperty() типа как создаются Геттеры и Сеттеры

// Пример 1
// ------
// class Car {
//   static description = 'Класс описывающий автомобиль';

//   static logInfo(carObj) {
//       console.log('Car.logInfo -> carObj', carObj);
//   }

//   constructor({ brand, model, price } = {}) {
//       this.brand = brand;
//       this._model = model;
//       this._price = price;
//   }

//   get price() {
//       return this._price;
//   }

//   set price(newPrice) {
//       this._price = newPrice;
//   }

//   get model() {
//       return this._model;
//   }

//   set model(newModel) {
//       this._model = newModel;
//   }
// }

// const carInstance = new Car({
//   brand: 'Audi',
//   model: 'Q3',
//   price: 35000,
// });

// console.log(carInstance.model);
// carInstance.model = 'Q4';
// console.log(carInstance.model);

// console.log(carInstance.price);
// carInstance.price = 50000;
// console.log(carInstance.price);

// console.log(carInstance);
// ----------------------------

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

// Статические методы
// В классе можно объявить не только методы будущего экземпляра, но и методы доступные только классу - статические методы, 
// которые могут быть как публичные, так и приватные. 
// Синтаксис объявления аналогичен статическим свойствам, за исключением того, что значением будет метод.
// Особенность статических методов в том, что во время их вызова ключевое слово this ссылается на сам класс. 
// Это значит, что статический метод может получить доступ к статическим свойствам класса, но не к свойствам экземпляра. 
// Логично, потому что статические методы вызывает сам класс, а не его экземпляры.
// class Car {
//   static #MAX_PRICE = 50000;
//   // Пиши код ниже этой строки

//   static checkPrice(price) {
//     if(price > Car.#MAX_PRICE) {
//       return 'Внимание! Цена превышает допустимую.';
//     }
    
//     return 'Всё хорошо, цена в порядке.';
//   }

//   // Пиши код выше этой строки
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
// console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.
// ----------------------------------------------------------------

// Наследование классов (помнить про супер при наследовании)
// Когда от одного класса (Родителя) мы наследуем его свойства в другой в Конструкторе класса ребенка вызвать конструктор РОДИТЕЛЯ
// КОроче говоря создаем новый класс на базе другова слева ребенок, справа Родитель
// Важно помнить, что приватные свойства и методы класса-родителя не наследуются классом-ребёнком (новым классом).

// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User { /* Новый класс */
//   // Тело класса ContentEditor
// }

// const editor = new ContentEditor("mango@mail.com");
// console.log(editor); // { email: "mango@mail.com" }
// console.log(editor.email); // "mango@mail.com"
// ----------------------------------------------------------------

// Конструктор дочернего класса
// Первым делом в конструкторе дочернего класса необходимо вызвать специальную функцию super(аргументы) 
// - это псевдоним конструктора родительского класса. 
// В противном случае, при попытке обратиться к this в конструкторе дочернего клаcса, будет ошибка. 
// При вызове конструктора класса родителя передаём необходимые ему аргументы для инициализации свойств.
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//     accessLevel;
  
//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser
// ----------------------------------------------------------------

// Методы дочернего класса
// В дочернем классе можно объявлять методы которые будут доступны только его экземплярам.
// Обычные методы как в Объекте, не че сложного!