// const refs = {
//     modalOpen: document.querySelector('[data-modal-open]'),
//     modalClose: document.querySelector('[data-modal-close]'),
//     backdrop: document.querySelector('[data-modal]'),
//     form: document.querySelector('.form'),
// }

// refs.modalOpen.addEventListener('click', onOpenModal);
// refs.modalClose.addEventListener('click', onModalClose);
// refs.backdrop.addEventListener('click', onBackdropClick);
// refs.form.addEventListener('submit', onFormSubmit);


// function onOpenModal() {
//     window.addEventListener('keydown', onEscKeyPress);
//     document.body.classList.add('modal-open');
// }

// function onModalClose () {
//     window.removeEventListener('keydown', onEscKeyPress);
//     document.body.classList.remove('modal-open');
// }

// function onBackdropClick (event) {
//     if(event.currentTarget === event.target){
//         onModalClose()
//     }
// }

// function onEscKeyPress (event) {
//     const ESC_KEY_CODE = event.code === 'Escape';
//     if(ESC_KEY_CODE){
//         onModalClose()
//     }
// }

// function onFormSubmit (event) {
//     event.preventDefault();
//     // onModalClose();
// ----------------------------------------------------------------------------------------------------------------------
// 

// Более грамотный код от ЧатаГПТ с деструктуризацией событий для улучшения читаемости,
// Добавлен обработчик DOMContentLoaded: Это гарантирует, что скрипт будет выполнен после полной загрузки HTML-документа.
// проверкой на существование элемента перед добавлением к нему обработчика события
// Деструктуризация в функции onBackdropClick и onEscKeyPress: Делает код более понятным. (но не для меня)
document.addEventListener('DOMContentLoaded', () => {
    const refs = {
        modalOpen: document.querySelector('[data-modal-open]'),
        modalClose: document.querySelector('[data-modal-close]'),
        backdrop: document.querySelector('[data-modal]'),
        form: document.querySelector('.form'),
    };

    if (refs.modalOpen) refs.modalOpen.addEventListener('click', onOpenModal);
    if (refs.modalClose) refs.modalClose.addEventListener('click', onModalClose);
    if (refs.backdrop) refs.backdrop.addEventListener('click', onBackdropClick);
    if (refs.form) refs.form.addEventListener('submit', onFormSubmit);

    function onOpenModal() {
        window.addEventListener('keydown', onEscKeyPress);
        document.body.classList.add('modal-open');
    }

    function onModalClose() {
        window.removeEventListener('keydown', onEscKeyPress);
        document.body.classList.remove('modal-open');
    }

    function onBackdropClick({ currentTarget, target }) {
        if (currentTarget === target) {
            onModalClose();
        }
    }

    function onEscKeyPress({code}) {
        if (code === 'Escape') {
            onModalClose();
        }
    }

    function onFormSubmit(event) {
        event.preventDefault();
        onModalClose();
    }
});