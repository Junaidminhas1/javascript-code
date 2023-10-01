'use strict';
/*
const fName = 'matlida';
const jonas = {
  fName: 'jonas',
  year: 1991,
  calcage: function () {
    console.log(2023 - this.year);
    const self = this;

    const isMallenial = function () {
      console.log(self.year >= 1981 && self.year <= 1996);

      //   console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMallenial();
  },
  greet: () => console.log(`hey ${this.fName}`),
};
jonas.calcage();

const addexpresion = function (a, b) {
  console.log(arguments);
  return a + b;
};
// addexpresion(2, 5);
console.log(addexpresion(2, 5, 8, 12));*/

let lastName = 'williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

const jessica = {
  fName: 'jessica',
  lname: 'williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lname = 'Davis';
console.log('before marrirage', jessica);
console.log('after marriage', marriedJessica);

const jessica2 = {
  fName: 'jessica',
  lname: 'williams',
  age: 27,
  famiy: ['alice', 'bob'],
};
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lname = 'davis';

jessicaCopy.famiy.push('mary');
jessicaCopy.famiy.push('john');

console.log('before marrirage', jessica2);
console.log('after marriage', jessicaCopy);
