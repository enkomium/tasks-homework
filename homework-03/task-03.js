// Напиши функцию findBestEmployee(employees),
// которая принимает объект сотрудников и возвращает имя самого продуктивного(который выполнил больше всех задач).
// Сотрудники и кол - во выполненых задач содержатся как свойства объекта в формате "имя": "кол-во задач".

// const findBestEmployee = function (employees) {
//   const values = Object.values(employees);
//   const max = Math.max(...values);

//   const keys = Object.keys(employees);

//   for (const key of keys) {
//     if (employees[key] === max) {
//       return key;
//     }
//   }
// };

// Еще решение!!!
// const findBestEmployee = function(employees) {
//     let bestEmployees = '';
//     let maxTasks = 0;

//     for (const [name, task] of Object.entries(employees)) {
//         if(task > maxTasks) {
//             maxTasks = task;
//             bestEmployees = name;
//         }
//     }
//     return `У ${bestEmployees} лучший результат - ${maxTasks} задач.`
//   };

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }),
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }),
// ); // lux
