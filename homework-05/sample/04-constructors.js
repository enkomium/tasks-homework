// * Основы ООП: класс, экземпляр (объект), интерфейс

// 1. Класс это чертеж, по которому будут делаться машины (функция конструктор) Пишется с Большой буквы (Существительное кто-что)
// 2. Экземпляр это какая-то 1 машина из всех селанных (объект)
// 3. Интерфейс это набор доступных свойств, методов и т.д (радио, всякие кнопки)

// В основном, все конструкторы принимают Объекты настроек (с параметрами по умолчанию)

// СДелали Класс, записали в нем какие-то свойства, методы
// делаем от этого класса отдельные экземпляры, при создании эеземпляра можно передавать какие-то коллбеки()значения в Класс
// Класс всегда ссылается на екземпляр this
// Больше 2х аргументов передаем ОБъектом настроект
// свойство prototype только у ФУНКЦИЙ у Объектов __proto__
// ПРи создании Экземпляра у него создается свойство __proto__ которое ссылается на User.prototype, то есть фукция будет ему Прототипом
// И если создать функцию(метод) от Конструктора(класса) то она будет доступна всем Экземплярам в цепочке прототипов
// То есть в Функции конструкторе есть Объект protoype в который мы можем что-то пихать (методы всякие) ---
// и они будут иметь связь с новыми экземплярами, ссылаться по this на них
// Как я понял Прототип это некая ссылка на что-то 

// есть методы на прототипе, а есть статические которые доступны только на конструкторе и не доступны на экземплярах!
// Типа Object.keys() Конструктор Object (функция конструктор) и метод keys

// const User = function ({ email, password } = {}) {
//     this.email = email;
//     this.password = password;
//   };
  
//   console.log(User.prototype);
  
//   User.prototype.changeEmail = function (newMail) {
//     this.email = newMail;
//   };
  
//   const mango = new User({ email: 'mango@mail.com', password: 1111111 });
  
//   mango.changeEmail('my-new-mail@mail.com');

//   console.log(mango);

// 1. У каждого обьекта есть свойство __proto__
// 2. В этом свойстве лежит ссылка на его ПРОТОТИП, то есть другой обьект
// 3. При создании литерала обьекта, в свойство __proto__ записывается ссылка на Функция.prototype
// 4. Функция-конструктор это просто функция :)
// 5. Всю магию делает оператор new
// 6. Если функция вызывается через new, создаётся пустой объект где-то там
// 7. Функция вызывается в контексте созданного объекта
// 8. В свойство this.__proto__ записывается ссылка на обьект Функция.prototype
// 9. Ссылка на обьект возвращается в место вызова new Фунукция()
// ----------------------------------------------------------------

// * Статические свойства и методы, в них хранят вспомогательные вещи котрые не нужны на экземпляре к примеру КОНСТАНТЫ
// - Статические свойства и методы доступны только на самом конструкторе
// - В статических методах не нужен this, он ссылается на сам Конструктор
// - После статических свойств точка с запятой обязательна, после статического метода нет

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
// console.dir(User);
// console.log(mango);
// ----------------------------------------------------------------



