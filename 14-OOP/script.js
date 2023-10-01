'use strict';

//Constructor Function
// const Person = function (firstName, birthYear) {
//   this.fName = firstName;
//   this.bYear = birthYear;

//   //   this.calcAge = function () {
//   //     console.log(2023 - this.bYear);
//   //   };
// };

// new {} is creaated
// function is call , this = {}
// {} is linked to Prototype
// function automatically return {}

// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// Person.hey = function () {
//   console.log('hey there');
//   console.log(this);
// };
// Person.hey();

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);
// console.log(matilda, jack);

// console.log(jonas instanceof Person);

/*
// Prototypes

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2023 - this.bYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(jonas);
console.log(jonas.species);

console.log(jonas.hasOwnProperty('fName'));
console.log(jonas.hasOwnProperty('species'));

console.log(jonas.__proto__);
// objet prototype is top of prototype chain
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);

const arr = [1, 2, 6, 7, 8, 8, 1, 2];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.log(h1);

//CODING TEST

const Car = function (make, Speed) {
  this.make = make;
  this.Speed = Speed;
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

Car.prototype.accelrate = function () {
  this.Speed += 10;
  console.log(`${this.make} is going at ${this.Speed} km/h`);
};

bmw.accelrate();
bmw.accelrate();
mercedes.accelrate();

Car.prototype.brake = function () {
  this.Speed -= 5;
  console.log(`${this.make} is going at ${this.Speed} km/h`);
};

mercedes.brake();
mercedes.brake();
bmw.brake();
bmw.brake();

//
*/

// class expression

// const PersonC1 = class {

// }

// Class Declaration

// Test 2
/*
class PersonC1 {
  constructor(fullName, birthYear) {
    this._fullName = fullName;
    this.birthYear = birthYear;
  }

  // methods are added to the prototype property
  calcAge() {
    console.log(2023 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2023 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('hey there');
    console.log(this);
  }
}

const jonas = new PersonC1('Jonas Davis', 1991);
console.log(jonas);
jonas.calcAge();
console.log(jonas.age);

console.log(jonas.__proto__ === PersonC1.prototype);
PersonC1.hey();

// PersonC1.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

jonas.greet();

// classes are not hoisted
//classes are first class citizens
//classes are executed in strict mode

const account = {
  owner: 'Jonas',
  movements: [200, 340, 120, 200],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1974);
sarah.calcAge();

// test 2
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelrate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  break() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    this.speed /= 1.6;
    console.log(`Speed is mph is ${this.speed} mph`);
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new Car('Ford', 120);
ford.accelrate();
ford.break();

ford.speedUS;
ford.speedUS = 50;
console.log(ford);
ford.speedUS;
*/

/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduction = function () {
  console.log(`May name is ${this.firstName} and i study ${this.course} `);
};

const mike = new Student('Mike', 2002, 'Computer Science');
mike.introduction();
console.log(mike);
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

//test 3

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelrate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBettery = function (chargeTo) {
  this.charge = chargeTo;
};

const tesla = new EV('Tesla', 120, 23);
// tesla.chargeBettery(55);
tesla.accelrate();
*/

/////////////////////////
// Inhertence in classes
/*
class PersonCl {
  constructor(fullName, birthYear) {
    this._fullName = fullName;
    this.birthYear = birthYear;
  }

  // methods are added to the prototype property
  calcAge() {
    console.log(2023 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2023 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('hey there');
    console.log(this);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`I'm ${this.fullName} and i study ${this.course}`);
  }

  calcAge() {
    console.log(`i'm ${2023 - this.birthYear} old.`);
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
console.log(martha);
martha.introduce();
martha.calcAge();
*/

////////////////////////////////////////////
// Inhertence between Classes Object.create

/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`I'm ${this.firstName} and i study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();
*/

class Account {
  //public fields (instences)
  locale = navigator.language;

  // 2. private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //private value encapsulation
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3. public methods

  //Public interface
  getMovement() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdrawl(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan Approvved');
      return this;
    }
  }

  // 4) private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1.#movements.push(250);
// acc1.#movements.push(-250);
acc1.deposit(100);
acc1.withdrawl(67);
acc1.requestLoan(1000);
console.log(acc1);

// console.log(acc1.#pin);
console.log(acc1._approveLoan(1000));

// Chaining
acc1.deposit(700).deposit(789).withdrawl(678).requestLoan(700).withdrawl(400);
console.log(acc1.getMovement());

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  break() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  // get speedUS() {
  //   this.speed /= 1.6;
  //   console.log(`Speed is mph is ${this.speed} mph`);
  // }
  // set speedUS(speed) {
  //   this.speed = speed * 1.6;
  // }
}

class EV extends Car {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  accelrate() {
    this.speed += 10;
    this.#charge -= 1;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }

  chargeBettery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
}

const rivian = new EV('Rivian', 120, 23);
rivian.accelrate().chargeBettery(50).break();
console.log(rivian);
