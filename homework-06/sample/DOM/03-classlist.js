// Работа с Классами добавляем классы селлекторам
// Работает только с классами, не с Айдишниками не с селлекторами
// Можно добалвять хоть сколько через запятую
// linkEl.classList.add('super-cool'); /* - добавили класс */
// linkEl.classList.remove('super-cool'); /* - удалили класс */
// linkEl.classList.toggle('super-cool'); /* - удалит если такой класс есть и добавить если его нет */
// linkEl.classList.replace('super-cool', 'qwerty'); /* - заменяет старый класс на новый */
// linkEl.classList.contains('super-cool'); /* - Проверяет есть ли такой класс и возвращает буль true или false */

const magicBtn = document.querySelector('.js-magic-btn');

// Вешаем дополнительный класс на абстрактный элемент

// записываем значение href в переменную
const currentPageUrl = '/portfolio';

// записываем элемент в переменную
// передавая значение href как переменную
// Важно что используем ШАБЛОННУЮ строку так как делаем интерполяцию при передачи переменной
const linkEl = document.querySelector(
  `.site-nav__link[href="${currentPageUrl}"]`,
);

// добавляем новый класс
console.log(linkEl);
linkEl.classList.add('site-nav__link--current');