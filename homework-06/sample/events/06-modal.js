//  * 1. Открыть и закрыть по кнопке
//  * 2. Закрыть по клику в бекдроп: onBackDropClick
//  * 3. Закрыть по ESC: onEscapeKeypress
//  *
//  * В CSS есть класс show-modal, который необходимо добавить на body при открытии модалки

// Очень удобно вешать класс открытия модалки на на backdrop а на body 
// что бы можно было в глубину что-то изменять типа открыл модалку и закрыл другое

// Всплытие событий:
// Все что вложенно в глубь в HTML оно ближе к нашим глазам!
// Когда мы кликаем на элемент он начинает всплывать вверх через всех своих предков
// В нашем случаем он всплывает до того момента пока мы не поймаем его нашим слушателем событий на БЭКДРОПЕ
// Есть 2 свойстава event.currentTarget и event.target
// 1. event.currentTarget - это текущий элемент на котором мы словили это событие! то есть то где его поймаем слушателем событий
// Типа повешали слушатель на Бэкдроп и куда бы не кликнули событие будет Бэкдропа.
// 2. event.target - целефой элемент где произошло это событие! ТО куда мы в интерфейсе кликнули!
// Поэтому ниже в коде мы делаем проверку на закрытие модалки при клике на Бэкдроп где проверяем 
// что бы event.currentTarget и event.target были ровны при клики именно в бэкдроп!

// ПОМНИТЬ что когда мы вешаем слушатель клавишь на window где попало он будет всегда отслеживать нажатия клавишь!!!!

// Объект ссылок на элементы
const refs = {
    openModalBtn: document.querySelector('[data-action="open-modal"]'),
    closeModalBtn: document.querySelector('[data-action="close-modal"]'),
    backdrop: document.querySelector('.js-backdrop'),
  };
  
// Вешаем события
  refs.openModalBtn.addEventListener('click', onOpenModal);
  refs.closeModalBtn.addEventListener('click', onCloseModal);
  refs.backdrop.addEventListener('click', onBackdropClick);
  
// Функция/метод для добавления класа и вешания слушателя событий клавишь глобально на window
  function onOpenModal() {
    window.addEventListener('keydown', onEscKeyPress);
    document.body.classList.add('show-modal');
  }
  
// Функция/метод для снятия класа и снятия слушателя событий клавишь глобально с window
  function onCloseModal() {
    window.removeEventListener('keydown', onEscKeyPress);
    document.body.classList.remove('show-modal');
  }

// Функция/метод для снятия класа по клику на backdrop
  function onBackdropClick(event) {
    if (event.currentTarget === event.target) {
      console.log('Кликнули именно в бекдроп!!!!');
      onCloseModal();
    }
  }
  
// Функция/метод для проверки нажатия на нужную клавишу и закрытие модалки.
// Хотя можно было без 2й переменной записать сравнение в if и все
  function onEscKeyPress(event) {
    const ESC_KEY_CODE = 'Escape';
    const isEscKey = event.code === ESC_KEY_CODE;
  
    if (isEscKey) {
      onCloseModal();
    }
  }