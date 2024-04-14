//  * Паттерн «Объект ссылок»

//  * События
//  * - focus и blur
//  * - input и change
//  * - Чекбоксы и свойство checked

// Сам патерн Объект ссылок РЕФЫ (не обяательный но оч полезный)
// Что бы было проще искать элементы в нашем коде
const refs = {
    input: document.querySelector('.js-input'),
    nameLabel: document.querySelector('.js-button > span'),
    licenseCheckbox: document.querySelector('.js-license'),
    btn: document.querySelector('.js-button'),
  };
  
  // refs.input.addEventListener('focus', onInputFocus); /* Можно програмно отслеживать фокус когда он ставиться и что то Выполнять */
  // refs.input.addEventListener('blur', onInputBlur); /* Можно програмно отслеживать Блур когда снимается фокус и что то Выполнять */

  /* 'change' - Отлавливаем что написал пользователь после потери фокуса, на Инпутах лучше не Юзать, чекбоксы радиокнопки и т.д!!! */
  // refs.input.addEventListener('change', onInputChange); 
  // refs.input.addEventListener('input', onInputChange); /*Отлавливаем что написал пользователь в РЕАЛЬНОМ времени для Инпута и текста */
  
  refs.input.addEventListener('input', onInputChange);
  refs.licenseCheckbox.addEventListener('change', onLicenseChange);
  
  function onInputFocus() {
    console.log('Инпут получил фокус - событие focus');
  }
  
  function onInputBlur() {
    console.log('Инпут потерял фокус - событие blur');
  }

  function onInputChange(event) {
    console.log(event.currentTarget.value);
  }
  
  function onInputChange(event) {
    refs.nameLabel.textContent = event.currentTarget.value;
  }
  
  function onLicenseChange(event) {
    // У чекбокса в HTML есть атрибут "disabled" это буль в который можно присвоить true или false по умолчанию false
    // В Объекте настроек который приходит от чекбокса есть свойство "checked" буль в котором true или false
    // У Кнопки есть свойство "disabled" (выключено) типа включена или нет
    // И мы пишем что Кнопка выключена когда НЕ включен Чекбокс!
    refs.btn.disabled = !event.currentTarget.checked;
  }