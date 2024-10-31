// События клавиатуры
//  * Типы событий: keypress - композитное, keydown - отжимается в низ, keyup - отжимвется вверх
//  * - Ограничения keypress
//  * - Свойства KeyboardEvent.key и KeyboardEvent.code

// СОбытия клавиатуры вешаются на winown
// keydown и keyup - реагируют на нажатие любой клавиши включая СЛУЖЕБНЫЕ
// keypress - только на символы и пробел

// У Объекта который приходит есть 2 свойства kode и key
// kode - это физическая клавиша как она сделана изначально
// key - это та буква на том алфавите которым сейчас пишешь

const refs = {
    output: document.querySelector('.js-output'),
    clearBtn: document.querySelector('.js-clear'),
  };
  
  window.addEventListener('keypress', onKeypress);
  refs.clearBtn.addEventListener('click', onClearOutput);
  
  function onKeypress(event) {
    // console.log('event.key: ', event.key);
    // console.log('event.code: ', event.code);
  
    refs.output.textContent += event.key;
  }
  
  function onClearOutput() {
    refs.output.textContent = '';
  }