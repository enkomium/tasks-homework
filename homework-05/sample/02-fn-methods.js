// call и apply
// Берет функцию и вызывает принудительно (не делая копии функции) в контексте какого-то Объекта, только на 1 вызов!
// Аргументы можно не передавать
// Вызывает функцию сдесь и сейчас!

// const changeColor = function (color) {
//     console.log('у changeColor -> this будет', this);
//     this.color = color;
// };

// const hat = {
//     color: 'black',
// };

// const sweater = {
//     color: 'green',
// };

// changeColor.call(hat, 'orange');
// console.log('hat = ', hat);

// changeColor.call(sweater, 'blue');
// console.log('sweater', sweater);
// ----------------------------------------------------------------

// bind
// Делает копию Функции с привязанным контекстом на всегда!
// Решает передачу методов Объекта как колбэков, передаем не ссылку на оригинальный метод а его привязанную версию (копию) с контекстом!
// call просто вызывает сдесь и сейчас а bind сможет передать внутрь ссылку на копию этой функции!
// Сам Объект не как не меняется, просто делается копия функции с привязкой к Объекту.

// const changeHatColor = changeColor.bind(hat);
// const changeSweaterColor = changeColor.bind(sweater);

// changeHatColor('yellow');
// console.log(hat);

// changeSweaterColor('red');
// console.log(sweater);