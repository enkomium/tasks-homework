// Напиши скрипт управления личным кабинетом интернет банка.
// Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

// использовать деструктуризацию для чтения свойств объекта, но лучше избегать ее в тех местах, 
// где вы собираетесь изменять свойства объекта.

// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
// const Transaction = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
//   };
  
//   /*
//    * Каждая транзакция это объект со свойствами: id, type и amount
//    */
  
//   const account = {
//     // Текущий баланс счета
//     balance: 0,
  
//     // История транзакций
//     transactions: [],
  
//     /*
//      * Метод создает и возвращает объект транзакции.
//      * Принимает сумму и тип транзакции.
//      */
//     createTransaction(amount, type) {
//         return {
//             id: this.transactions.length + 1,
//             amount,
//             type,
//         }
//     },
  
//     /*
//      * Метод отвечающий за добавление суммы к балансу.
//      * Принимает сумму танзакции.
//      * Вызывает createTransaction для создания объекта транзакции
//      * после чего добавляет его в историю транзакций
//      */
//     deposit(amount) {
//         this.balance += amount;
//         this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
//     },
  
//     /*
//      * Метод отвечающий за снятие суммы с баланса.
//      * Принимает сумму танзакции.
//      * Вызывает createTransaction для создания объекта транзакции
//      * после чего добавляет его в историю транзакций.
//      *
//      * Если amount больше чем текущий баланс, выводи сообщение
//      * о том, что снятие такой суммы не возможно, недостаточно средств.
//      */
//     withdraw(amount) {
//         if(this.balance < amount){
//             return 'Cнятие такой суммы не возможно, недостаточно средств.';
//         }

//         this.balance -= amount;
//         this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW));
//     },
  
//     /*
//      * Метод возвращает текущий баланс
//      */
//     getBalance() {
//         return this.balance;
//     },
  
//     /*
//      * Метод ищет и возвращает объект транзации по id
//      */
//     getTransactionDetails(id) {
//         for (const transaction of this.transactions) {
//             if(transaction.id === id){
//                 return transaction;
//             }
//         }
//         return 'id транзакции не найден.';
//     },
  
//     /*
//      * Метод возвращает количество средств
//      * определенного типа транзакции из всей истории транзакций
//      */
//     getTransactionTotal(type) {
//         let totalTransactionType = 0;

//         for (const transaction of this.transactions) {
//             if(transaction.type === type){
//                 totalTransactionType += transaction.amount;
//             }
//         }
        
//         if(totalTransactionType === 0){
//             return 'Такой транзакции нет!';
//         }

//         return totalTransactionType;
//     },
//   };

// console.log(account.deposit(400));

// console.log(account.transactions);

// console.log(account.deposit(500));

// console.log(account.withdraw(100));

// console.log(account.getTransactionDetails(3));

// console.log(account.getTransactionTotal('deposit'));

// console.log(account.getBalance(100));
