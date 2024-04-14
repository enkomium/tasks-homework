import transactionHistory from '../../../data/transactions.js';

// Добавляем приходящие с Беккенда данные в таблицу!

// Пишем функцию которая принимает КАКУЮ-ТО транзакцию и создает и возвращает 1 таблицу
const makeTransactionTableRowMarkup = transaction => {
  const { id, amount, date, business, type, name, account } = transaction;

  return `
  <tr>
    <td>${id}</td>
    <td>${amount}</td>
    <td>${date}</td>
    <td>${business}</td>
    <td>${type}</td>
    <td>${name}</td>
    <td>${account}</td>
  </tr>
  `;
};

console.log(transactionHistory);

// получаем ссылку на элемент в который нужно вставить созданную в функции таблицу
const tableEl = document.querySelector('.js-transaction-table');

// перебираем МАПом приходящий Объект и кидаем коллбком ссылку на функцию которая будет отрабатывать на каждой итерации
// В итоге на каждой итерации будет создаваться таблица с данными от Объекта
// На выходе получаем Массив строк, но так как массив нас не устраивает, то ДЖОйним его в 1 большую строку
const transactionTableRowsMarkup = transactionHistory
  .map(makeTransactionTableRowMarkup)
  .join('');

// Добавляем эту строку в нужное нам место!
// КСТАТИ!!!! тег tbody, куда вставилась наша таблица СОЗДАЕТСЯ САМ, как? ХЗ..
tableEl.insertAdjacentHTML('beforeend', transactionTableRowsMarkup);

console.log(transactionTableRowsMarkup);
// ---------------------------------------------------------------------------------------------------------------------
// Как ЧАТ-GPT расписал мне итерации МАПа

// 1. transactionHistory - это массив объектов, который содержит информацию о транзакциях.

// 2. map(makeTransactionTableRowMarkup) - это метод map, который вызывается для массива transactionHistory. 
// Он принимает функцию makeTransactionTableRowMarkup в качестве аргумента. 
// Функция makeTransactionTableRowMarkup будет вызываться для каждого элемента массива transactionHistory.

// 3. Функция makeTransactionTableRowMarkup принимает один аргумент transaction, 
// который представляет собой отдельный объект транзакции из массива transactionHistory. 
// Она используется для создания разметки строки таблицы для каждой транзакции.

// 4. map возвращает новый массив, в котором каждый элемент представляет собой результат вызова функции -
// makeTransactionTableRowMarkup для соответствующего элемента из transactionHistory.

// 5. join('') - этот метод объединяет все элементы возвращаемого массива в одну строку. 
// В данном случае мы используем пустую строку в качестве разделителя, 
// чтобы объединить все строки разметки в одну большую строку.

// Таким образом, в результате выполнения этой строки кода мы получаем строку, 
// содержащую разметку всех строк таблицы для каждой транзакции из transactionHistory, которая затем добавляется в таблицу.