//  * События мыши
//  * - mouseenter и mouseleave (это ховер) - когда мышка заходит за границы блока и выходит
//  * - mouseover и mouseout 1 когда завели на родителя 2 когда на ребенка (выше)
//  * - mousemove (chatty event - болтливое событие) - реагирует на каждое движение мышки (нужно оганичивать)
//  * - Допмат по координатам: https://nerdparadise.com/programming/javascriptmouseposition
//  * - Хорошая задачка - https://learn.javascript.ru/task/move-ball-field

// Не используется для ховера используется что бы получить какие-то данные и динамически что-то высчитать и сделать

const boxRef = document.querySelector('.js-box');

// boxRef.addEventListener('mouseover', onMouseEnter);
// boxRef.addEventListener('mouseout', onMouseLeave);
// boxRef.addEventListener('mousemove', onMouseMove);

function onMouseEnter(event) {
  const box = event.currentTarget;
  box.classList.add('box--active');
}

function onMouseLeave(event) {
  const box = event.currentTarget;
  box.classList.remove('box--active');
}

function onMouseMove(event) {
  console.log(event);
}

//            ------------- mouseout
// ------------------------------------- mouseover