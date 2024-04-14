// Поиск элементов
// Приходит HTML, Браузер ПАРСИТ этот HTML и создает DOM дерево
// Потом подключается Скрипт и м работаетм с этим Деровом.
// Скрипт загружается еще до того как ренздериться разметрка но выполняется ПОСЛЕ! Такая Особенность!

// получить сылку на элемент что бы с ним работать
// console.dir(document) - глобальный Объект Документа страницы у которого на Прототипе лежат методы для работы с элементами;
// Когда делаем переменную для хранения элемента в конце делаем приставку El или Ref ccылка на элемент - const navRef
// ----------------------------------------------------------------

// Находим 1 - li на странице:
// const navitemRef = document.querySelector('.site-nav__item'); /* - пердаем селектор или класс как строку (у класса точка в начале) */
// console.dir(navitemRef); /* - возвращает как объект */
// querySelector возвращает 1й попавщийся и только 1 (до первого совпадения) если не чего не найдет вернет null

// Находим все li на странице по классу
// const navitemRef = document.querySelectorAll('.site-nav__item');
// console.dir(navitemRef);
// querySelectorAll - находит всё с таким селектором или классом, возвращает МАССИВ, если не найдет вернет Пустой Массив!
// ----------------------------------------------------------------

// Как искать в определенном месте:
// document.querySelectorAll и document.querySelector ищую во всем документе
// Можно этот поиск Фильрануть
// К примеру Записываем в переменную ссылку на ul где лежат li и используем эту переменную вместо document при втором поиске
// const navRef = document.querySelector('.site-nav');
// const navLinksRef = navRef.querySelectorAll('.site-nav__link');
// console.dir(navLinksRef);

// Так же можно просто дополнительно передать в начало селектор родителя (как в css)
// const navLinksRef = document.querySelectorAll('.site-nav, .site-nav__link');
// console.dir(navLinksRef);

// Кстати можно выбрать конкретно 1 или несколько указав Индекс - /* console.dir(navLinksRef[1]); */
// ----------------------------------------------------------------

// const magicBtn = document.querySelector('.js-magic-btn');


// //  * document.querySelector(selector) и document.querySelectorAll(selector)
// //  * selector - любой валидный CSS-селектор

// //  * Что возвращают?

// const navEl = document.querySelector('.site-nav');
// console.log('navEl', navEl);

// const navLinksEl = document.querySelectorAll('.site-nav__link');
// console.log('navLinksEl', navLinksEl);

// // Document.querySelector* и Element.querySelector*