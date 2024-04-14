// import products from './data/proucts.js'; Импортируем с папки data файлы 
// указываем имя переменной (как они будут тут называться) и путь к файлу с расширением .js ОБЯЗАТЕЛЬНО!
// Короче в data открыли контейнет а тут забрали там где открыто. Только если стоит type=module
import products from '../../../data/proucts.js';

// * Создаём карточку продукта по данным с Беккенда!
// * - В классе продукта может быть product--on-sale product--not-available


  /* Пример разметки которую нужно создать!
<article class="product">
  <h2 class="product__name">Название</h2>
  <p class="product__descr">Описание</p>
  <p product__pridct>Цена: 1111 кредитов</p>
</article>
*/

// * Пишем функцию для создания карточки продукта по примеру выше!
const productsContainerEl = document.querySelector('.js-products');

const makeProductCard = ({ name, description, price }) => {
  const productEl = document.createElement('article');
  productEl.classList.add('product');

  const nameEl = document.createElement('h2');
  nameEl.textContent = name;
  nameEl.classList.add('product__name');

  const descrEl = document.createElement('p');
  descrEl.textContent = description;
  descrEl.classList.add('product__descr');

  const priceEl = document.createElement('p');
  priceEl.textContent = `Цена: ${price} кредитов`;
  priceEl.classList.add('product__price');

  productEl.append(nameEl, descrEl, priceEl);

  return productEl;
};

// Передаем МАПу коллбэк от функции (то что она возвращает)
// То есть выше функция создает 1 карточку и возвращает ее
// ниже мы перебираем products и на каждой итерации срабатывает функция выше (создается новая карточка)
// На выходе поучаем массив карточек
const elements = products.map(makeProductCard);

console.log(elements);
productsContainerEl.append(...elements); /* распыляем в ДОМ (div) наши карточки */