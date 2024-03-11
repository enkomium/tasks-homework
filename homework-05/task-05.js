// Напиши класс Car с указанными свойствами и методами.

// class Car {
//     /*
//      * Добавь статический метод `getSpecs(car)`,
//      * который принимает объект-машину как параметр и выводит
//      * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
//      */
//     static getSpecs(car) {
//         const { maxSpeed, speed, isOn, distance, price } = car;
//         console.log(`maxSpeed: ${maxSpeed}, speed: ${speed}, isOn: ${isOn}, distance: ${distance}, price: ${price}`);
//     }
  
//     /*
//      * Конструктор получает объект настроек.
//      *
//      * Добавь свойства будущеего экземпляра класса:
//      *  speed - текущая скорость, изначально 0
//      *  price - цена автомобиля
//      *  maxSpeed - максимальная скорость
//      *  isOn - заведен ли автомобиль, значения true или false. Изначально false
//      *  distance - общий киллометраж, изначально 0
//      */
//     constructor({speed = 0, price, maxSpeed, isOn = false, distance = 0,}) {
//         // ПРоверка что бы в переданном Объекте у свойств были числа!
//         if (typeof price !== 'number' || typeof maxSpeed !== 'number') {
//             console.log('Цена и максимальная скорость должны быть числами.');
//         }

//         this.speed = speed;
//         this._price = price;
//         this.maxSpeed = maxSpeed;
//         this.isOn = isOn;
//         this.distance = distance;
//     }
  
//     /*
//      * Добавь геттер и сеттер для свойства price,
//      * который будет работать с свойством цены автомобиля.
//      */
//     get price() {
//         return this._price;
//     }

//     set price(newPrice) {
//         if (typeof newPrice !== 'number' || newPrice <= 0) {
//             console.log('Цена должна быть числом и быть больше 0!');
//         }
//         this._price = newPrice;
//     }
  
//     /*
//      * Добавь код для того чтобы завести автомобиль
//      * Записывает в свойство isOn значение true
//      */
//     turnOn() {
//         this.isOn = true;
//     }
  
//     /*
//      * Добавь код для того чтобы заглушить автомобиль
//      * Записывает в свойство isOn значение false,
//      * и сбрасывает текущую скорость в 0
//      */
//     turnOff() {
//         this.isOn = false;
//         this.speed = 0;
//     }
  
//     /*
//      * Добавялет к свойству speed полученное значение,
//      * при условии что результирующая скорость
//      * не больше чем значение свойства maxSpeed
//      */
//     accelerate(value) {
//         if (value < 0) {
//             console.log('Значение ускорения должно быть положительным.');
//         }
//         if (this.speed + value <= this.maxSpeed) {
//             this.speed += value;
//         } else {
//             this.speed = this.maxSpeed;
//         }
//     }
//     // Более продвинутая запись метода "accelerate"
//     // accelerate = (value) => {
//     //     if (value <= 0) {
//     //         throw new Error('Значение ускорения должно быть положительным.');
//     //     }
//     //     this.speed = Math.min(this.speed + value, this.maxSpeed);
//     // }
  
//     /*
//      * Отнимает от свойства speed полученное значение,
//      * при условии что результирующая скорость не меньше нуля
//      */
//     decelerate(value) {
//         if (value < 0) {
//             console.log('Значение замедления должно быть положительным.');
//         }
//         if (this.speed - value >= 0) {
//             this.speed -= value;
//         } else {
//             this.speed = 0;
//         }
//     }

//     // Более продвинутая запись метода "decelerate"
//     // decelerate = (value) => {
//     //     if (value <= 0) {
//     //         throw new Error('Значение замедления должно быть положительным.');
//     //     }
//     //     this.speed = Math.max(this.speed - value, 0);
//     // }
  
//     /*
//      * Добавляет в поле distance киллометраж (hours * speed),
//      * но только в том случае если машина заведена!
//      */
//     drive(hours) {
//         if(this.isOn) {
//             this.distance += hours * this.speed;
//         }
//     }

//     // Более продвинутая запись метода "drive"
//     // drive = (hours) => {
//     //     if(this.isOn) {
//     //         this.distance += hours * this.speed;
//     //     }
//     // }
//   }
  
//   const mustang = new Car({ maxSpeed: 200, price: 2000 });
  
//   mustang.turnOn();
//   mustang.accelerate(50);
//   mustang.drive(2);
  
//   Car.getSpecs(mustang);
//   // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
  
//   mustang.decelerate(20);
//   mustang.drive(1);
//   mustang.turnOff();
  
//   Car.getSpecs(mustang);
//   // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
  
//   console.log(mustang.price); // 2000
//   mustang.price = 4000;
//   console.log(mustang.price); // 4000