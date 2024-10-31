//  * Свойство innerHTML
//  * - чтение
//  * - запись
// textContent возвращает только текст а innerHTML весь контент который там есть
// через innerHTML можно не только перезаписать что-то вписав новое но и пересоздать на другое
// innerHTML используется если нужно что-то очистить или записать что-то не изменяя старое, это не деструктивный метод
// нельзя добавлять что-то новое к существуюшему через += плохо для производительности, оно удаяет, создает по новой и добавляет новое
// ЧТо бы добавлять новое ЮЗЯТЬ - titleEl.insertAdjacentHTML(позиция, что передаем)

const titleEl = document.querySelector('.title');
// titleEl.innerHTML = '<a href="">Это ссылка)</a>'; /* Записали новое */
// titleEl.innerHTML = ''; /* очистили тайтл */

//  * Вставка разметки с insertAdjacentHTML()
//  * http://fecore.net.ua/books/m5ph3r-javascript/module-07/dom-manipulation.html#%D0%BC%D0%B5%D1%82%D0%BE%D0%B4-insertadjacenthtml

// titleEl.insertAdjacentHTML(позиция, что передаем)
// Юзаем когда надо что-то добавить!
titleEl.insertAdjacentHTML(
  'beforeend',
  '<a href="" class="title__link">Это ссылка)</a>',
);

// Значения позиций для insertAdjacentHTML()
// "beforebegin" - перед elem
// "afterbegin" - внутри elem, перед всеми детьми
// "beforeend" - внутри elem, после всех детей
// "afterend" - после elem