'use strict';

/// DEFAULT VALUES
/*const bookings = [];

const createBooking = function (
  flight,
  numberofPassengers = 1,
  price = 199 * numberofPassengers
) {
  const booking = {
    flight,
    numberofPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('lhr123');
createBooking('lhr123', 5);
createBooking('lhr123', undefined, 5);

console.log(bookings);*/

// PASS AS VALVE AND FUNCTION
/*
const flight = 'LHR121';
const jonas = {
  name: 'Jonas Schmedtmaan',
  passport: 4516484315,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LHR909';
  passenger.name = 'Mr.' + passenger.name;
  if (passenger.passport === 4516484315) {
    alert('Chevk IN');
  } else {
    alert('wrng paspord ID');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};
newPassport(jonas);
checkIn(flight, jonas);*/

// HIGH LEVEL FUNCTION TAKING ANOTHER FUNCTION or CALL BAK FUNCTION
/*const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const worduUppercase = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`orignal sting : ${str}`);
  console.log(`transfomed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('javascript is the best', worduUppercase);
transformer('javascript is the best', oneWord);

const high = function () {
  console.log('✋');
};
document.body.addEventListener('click', high);
['jonas', 'adam', 56].forEach(high);*/

//FUNCTION RETURNING OTHE FUNCTION
/*
const greet = function (greting) {
  return function (name) {
    console.log(`${greting} ${name}`);
  };
};

const grettings = greet('hi!');
grettings('jonas');

greet('hi!')('jonas');

const grt = greeting => name => console.log(`${greeting} ${name}`);
grt('hey!')('jon');*/

/*const lufthunsa = {
  airline: 'Lufthunsa',
  iotacode: 'LH',
  bookings: [],

  book(flightNum, name) {
    console.log(
      `${name} has booked a ticket in ${this.airline} ${this.iotacode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iotacode}${flightNum}`, name });
  },
};
lufthunsa.book(737, 'jonas');
console.log(lufthunsa.bookings);

const eurowings = {
  airline: 'Eurowings',
  iotacode: 'EW',
  bookings: [],
};
const book = lufthunsa.book;

// book(223, "john");
// CALL METHOD
book.call(eurowings, 987, 'alex');
console.log(eurowings);
book.call(lufthunsa, 333, 'mike');
console.log(lufthunsa);

// APPLY METHOD
const flightData = [583, 'george'];
book.apply(eurowings, flightData);
console.log(eurowings);

book.call(lufthunsa, ...flightData);

// BIND METHOD:

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthunsa);

const bookEW23 = book.bind(eurowings, 23);

bookEW(23, 'jon');
bookLH(99, 'jon');

bookEW23('jonas');
bookEW23('sarah');

lufthunsa.planes = 300;
lufthunsa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthunsa.buyPlane.bind(lufthunsa));

const addtax = (rate, value) => value + value * rate;
console.log(addtax(0.1, 200));

const vatTax = addtax.bind(null, 0.23);
console.log(vatTax(500));
// const greet = function (greting) {
//   return function (name) {
//     console.log(`${greting} ${name}`);
//   };
// };
const addtax2 = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addvat2 = addtax2(0.23);
console.log(addvat2(200));*/
/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question} \n ${this.options.join(
          '\n'
        )} \n (Write option number)`
      )
    );
    console.log(answer);
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    // console.log(this.answers);
    this.dispplayReslts();
    // this.dispplayReslts('string');
  },
  dispplayReslts(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`pool results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
// console.log(poll.answers);

poll.dispplayReslts.call({ answers: [5, 2, 3] });
poll.dispplayReslts.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');*/

/*const runOnce = function () {
  console.log('this function will not runn again');
  // const private = 23;
};
runOnce();
// console.log(private);

(function () {
  console.log('this function will not run again');
})();

(() => console.log('this will also not run again'))();
{
  const priate1 = 23;
  let private2 = 89;
  var nPrivate = 88;
  console.log(priate1, private2);
}
// console.log(private2);*/

// CLOSURES:
/*const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
console.dir(booker);*/

/*let f;

const g = function () {
  const a = 27;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 342;
  f = function () {
    console.log(b * 3);
  };
};

g();
f();
console.dir(f);

h();
f();
console.dir(f);

const boardingPassengers = function (n, wait) {
  const perGroup = n / 4;
  setTimeout(function () {
    console.log(`we are now borading all ${n} passengers`);
    console.log(`there are 4 groups with each ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`we will start boarding in ${wait} seconds`);
};
const perGroup = 100;
boardingPassengers(1000, 5);*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.body.addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
