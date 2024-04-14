// свойства
// Получаем доступ к элементам и меняем их свойства
// Любой Тег это Объект и у этого Объекта есть свойства которые мы можем изменять! (их значения)
// Находим элементи и меняем его свойство!
// К примеру сменим картинку КОтика при нажатии на кнопку!
const magicBtn = document.querySelector('.js-magic-btn');

magicBtn.addEventListener('click', () => {
    const imageEl = document.querySelector('.hero__image');
    imageEl.src = 'https://gas-kvas.com/grafic/uploads/posts/2023-09/1695826328_gas-kvas-com-p-kartinki-s-kotikami-50.jpg';
    // Добавим смену текстового контента
    const heroTitleRef = document.querySelector('.hero__title');
    heroTitleRef.textContent = 'Я сладкий пирожочек!';
})

// методы для работы с атрибутами
// console.log(imageEl.getAttribute('src')); /* - показывает значение Атрибута (тоже самое что и imageEl.src) */
// console.log(imageEl.removeAttribute('src')); /* - Удаляет Атрибут */
// console.log(imageEl.hasAttribute('src')); /* - ПРоверяет есть ли такой Атрибут возвращает true или false */
// ----------------------------------------------------------------

// Дополнительные классы для js пишем с приставкой js- в начале

// //  * Data-атрибуты (кастомные данные - что делает, что содержит)
// К примру есть 3 кнопки и что бы на каждую назначить свое действие даются эти Дата-Атрибуты
// (data-action="add") action - это ключь(свойство), add - значение
// const actions = document.querySelectorAll('.js-actions button'); /* - найди все кнопки */
// console.log(actions);
// console.log(actions[2].dataset.action); /* (dataset - что бы достучаться до атрибута и получить его значение) */


