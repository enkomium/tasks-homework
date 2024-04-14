// //  * Создание элементов

// //  * Вставка узлов:
// // - appendChild(elem) - создает В РАЗМЕТКЕ в самом конце того элемента которго укажем, ЮЗАЕМ КОГДА НУЖНО СОБРАТЬ ВИНОГРАДНУЮ ГРОЗДЬ
// // - insertBefore(elem, nextSibling) создает В РАЗМЕТКЕ перед тем элементом которого укажем первым, если указать null встанет в конец
// // - append(...elems) - для вставки моножества независимых элементов (соседей) за 1 опирацию в конец (передавать через запятую)
// // - prepend(...elems) - для вставки перед каким-то элементом много независимых

// // создает такой тег который мы передаем в прямом смысле слова
// // сперва создается в памяти, мы создаем пихаем в него то что надо потом только добавляем
// // Стараться собирать всю разметку в памяти как виноградную гроздь и потом добовлять ее используя главного родителя туда куда надо
// // document(или переменная).body.appendChild(что добавляем) - так можно выбирать любой тег на странице куда нужно добавить

// //  * Создаём заголовок
// const titleEl = document.createElement('h1'); /* создали в пямити тег */
// titleEl.classList.add('page-title'); /* создали у тега КЛасс */
// titleEl.textContent = 'Это заголовок страницы :)'; /* создали у тега Текст */
// // console.log(titleEl);
// // document.body.appendChild(titleEl);

// //  * Создаём изображение (тоже самое что и с заголовком только создаем картинку)
// const imageEl = document.createElement('img');
// imageEl.src =
//   'https://wp-s.ru/wallpapers/10/13/535228233983431/gornye-snezhnye-vershiny-ryadom-s-ushhelem.jpg';
// imageEl.alt = 'valais-alpine-mountains-glacier';
// imageEl.width = 320;

// //  * Добавляем текст с изображением по очереди в div - hero
// const heroEl = document.querySelector('.hero');
// heroEl.appendChild(titleEl);
// heroEl.appendChild(imageEl);
// heroEl.append(titleEl, imageEl); /* Добавление за 1 опирацию!!! */

// //  * Создаём и добавляем новый пункт меню
// const navItemEl = document.createElement('li');
// navItemEl.classList.add('site-nav__item');

// const navLinkEl = document.createElement('a');
// navLinkEl.classList.add('site-nav__link');
// navLinkEl.textContent = 'Личный кабинет';
// navLinkEl.href = '/profile';

// navItemEl.appendChild(navLinkEl);
// // console.log(navItemEl);

// const navEl = document.querySelector('.site-nav');

// // navEl.appendChild(navItemEl);
// navEl.insertBefore(navItemEl, navEl.firstElementChild);