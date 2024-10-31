//  * Создём и добавляем коллекцию

// buttonEl.style.backgroundColor = option.color; - создаем инлайн стиль на элементе и пишем какой стиль
// ПРИКОЛ в том что в CSS мы пишем background-color а тут Используя КэмелКейс нотацию!

const colorPickerOptions = [
    { label: 'red', color: '#F44336' },
    { label: 'green', color: '#4CAF50' },
    { label: 'blue', color: '#2196F3' },
    { label: 'grey', color: '#607D8B' },
    { label: 'pink', color: '#E91E63' },
    { label: 'indigo', color: '#3F51B5' },
  ];
  
  const colorPickerContainerEl = document.querySelector('.js-color-picker'); /* нашли div с классом js-color-picker */
  
  // const elements = colorPickerOptions.map(option => {
  //   const buttonEl = document.createElement('button');
  //   buttonEl.type = 'button';
  //   buttonEl.classList.add('color-picker__option');
  //   buttonEl.textContent = option.label;
  //   buttonEl.style.backgroundColor = option.color;
  
  //   return buttonEl; /* Возвращаем массив кнопок такой же длинны которые создали */
  // });
  
  // console.log(elements);
  
// * Пишем функцию для создания разметки колорпикера
  const makeColorPickerOptions = options => {
    return options.map(option => {
      const buttonEl = document.createElement('button');
      buttonEl.type = 'button';
      buttonEl.classList.add('color-picker__option');
      buttonEl.textContent = option.label;
      buttonEl.style.backgroundColor = option.color;
  
      return buttonEl; /* Возвращаем массив копок такой же длинны которые создали */
    });
  };
//   2 return потому что 1й это возврат от функции а 2й это возврат коллбэка Мэпа как каждой итерации!
  
  const elements = makeColorPickerOptions(colorPickerOptions);
  colorPickerContainerEl.append(...elements); /* распылили в ДОМ (в div по названию его класса) */