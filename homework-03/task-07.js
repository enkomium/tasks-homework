// Напиши скрипт управления личным кабинетом интернет банка.
// Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

// * Типов транзацкий всего два.
// * Можно положить либо снять деньги со счета.
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// // * Каждая транзакция это объект со свойствами: id, type и amount

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   // * Метод создает и возвращает объект транзакции.
//   // * Принимает сумму и тип транзакции.
//   createTransaction(amount, type) {
//     const newTransaction = {
//       id: this.transactions.length + 1,
//       type,
//       amount,
//     };

//     return newTransaction;
//   },

//   // * Метод отвечающий за добавление суммы к балансу.
//   // * Принимает сумму танзакции.
//   // * Вызывает createTransaction для создания объекта транзакции
//   // * после чего добавляет его в историю транзакций
//   deposit(amount) {
//     const { transactions } = this;

//     this.balance += amount;

//     transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
//   },

//   // * Метод отвечающий за снятие суммы с баланса.
//   // * Принимает сумму танзакции.
//   // * Вызывает createTransaction для создания объекта транзакции
//   // * после чего добавляет его в историю транзакций.

//   // * Если amount больше чем текущий баланс, выводи сообщение
//   // * о том, что снятие такой суммы не возможно, недостаточно средств.
//   withdraw(amount) {
//     const { transactions } = this;

//     if (amount > this.balance) {
//       return 'Недостаточно средств на счету!';
//     }

//     this.balance -= amount;

//     transactions.push(this.createTransaction(amount, Transaction.WITHDRAW));
//   },

//   // * Метод возвращает текущий баланс
//   getBalance() {
//     return this.balance;
//   },

//   // * Метод ищет и возвращает объект транзации по id
//   getTransactionDetails(id) {
//     const { transactions } = this;

//     for (const item of transactions) {
//       if (item.id === id) {
//         return item;
//       }
//     }
//     return 'Номер id не найден';
//   },

//   // * Метод возвращает количество средств
//   // * определенного типа транзакции из всей истории транзакций
//   getTransactionTotal(type) {
//     const { transactions } = this;
//     let totalType = 0;

//     for (const item of transactions) {
//       if (item.type === type) {
//         totalType += item.amount;
//       }
//     }
//     return totalType;
//   },
// };

// console.log(account.deposit(400));

// console.log(account.transactions);

// console.log(account.deposit(500));

// console.log(account.withdraw(100));

// console.log(account.getTransactionDetails(3));

// console.log(account.getTransactionTotal('deposit'));

// console.log(account.getBalance(100));
