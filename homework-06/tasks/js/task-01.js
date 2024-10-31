// В HTML есть список категорий ul#categories.
// Напиши скрипт который:

// 1. Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// 2. Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) 
// и количество элементов в категории (всех вложенных в него <li>).

// Для выполнения этой задачи нужно использовать метод forEach() и свойства навигации по DOM.

// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
// ------------------------------------------------------------------------------------------------------------------------------
const categories = document.querySelectorAll("#categories .item");
console.log('Колличество категорий:', categories.length);

categories.forEach(categorie => {
  const categorieText = categorie.querySelector("h2").textContent;
  const categorieElements = categorie.querySelectorAll("ul li").length;
s
  console.log("Категория:", categorieText);

  console.log("Колличество элементов:", categorieElements);
});





// Пример
// const technologiesReactEl = document.querySelector('#categories .item:nth-child(3) ul li:nth-child(4)');
// console.log(technologiesReactEl); /* Нашли li c надписью React */
// -------------------------------------------------------------------------------------------------------

// const categoriesItems = document.querySelectorAll('#categories .item');
// const itemEl = list.children;

// categoriesItems.forEach(element => {
//    const headingEl = document.querySelector('h2');
   
// });

// console.log(list);
// console.log(itemEl);


// Выбираем все элементы li.item
// const categoriesItems = document.querySelectorAll('#categories .item');

// Выводим количество категорий

// Перебираем каждый элемент li.item
  // Находим заголовок категории (элемент h2)
  // Находим все элементы списка внутри текущей категории
  
  // Выводим название категории и количество элементов в ней

  
  
  
  
  
  
  
  
  
  
  
  
  // Пример решения
  // --------------
  
  // const cheeseElement = document.querySelector('#categories li.item:nth-child(2) ul');

  // const newItem = document.createElement('li');
  // newItem.classList.add('li-one'); 

  // const title = document.createElement('h3');
  // title.textContent = 'Это заголовок 1';
  
  // const imageEl = document.createElement('img');
  // imageEl.src = 'https://gas-kvas.com/grafic/uploads/posts/2023-10/1696411675_gas-kvas-com-p-kartinki-zabavnie-30.jpg';
  // imageEl.alt = 'Махач';
  // imageEl.width = 220;
  // imageEl.height = 140;

  // newItem.append(title, imageEl);
  // cheeseElement.appendChild(newItem);




  // console.log(cheeseElement);