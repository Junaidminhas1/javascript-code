'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displaymovement = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = ` <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    
    <div class="movements__value">${mov}€</div>
  </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// displaymovement(account1.movements);

const calcdisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} €`;
};
// calcdisplayBalance(account1.movements);€

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const intrest = acc.movements
    .filter(mov => mov > 0)
    .map(mov => (mov * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${intrest}€`;
};
// calcDisplaySummary(account1.movements);

const creatUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
creatUserNames(accounts);
// console.log(accounts);

const updateUI = function (acc) {
  displaymovement(acc.movements);

  calcdisplayBalance(acc);

  calcDisplaySummary(acc);
};

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // displaymovement(currentAccount.movements);

    // calcdisplayBalance(currentAccount);

    // calcDisplaySummary(currentAccount);

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);

    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('ss');

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    // console.log('close account');
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    accounts.splice(index, 1);

    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displaymovement(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*
let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice());
console.log([...arr]);

//SPLICE
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE

arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

//concat

console.log(arr.concat(arr2));
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

//JOIN

console.log(arr.join(' - '));
*/

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: you have deposit ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: you have withdraw ${Math.abs(movement)}`);
  }
}

console.log('------------foreach------------');
movements.forEach(function (movement, i, arr) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: you have deposit ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: you have withdraw ${Math.abs(movement)}`);
  }
});
*/
/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
*/
/*
const JuliaD = [3, 5, 2, 12, 7];
const kateD = [4, 1, 15, 8, 3];

// const juliaC = JuliaD.slice(2, -1);
// console.log(juliaC, JuliaD);

const checkDogs = function (dogsJulia, dogsKate) {
  const juliaC = dogsJulia.slice();
  juliaC.splice(-2);
  juliaC.splice(0, 1);
  console.log(juliaC);

  const arr = juliaC.concat(dogsKate);
  console.log(arr);
  arr.forEach(function (dogAge, i) {
    if (dogAge >= 3) {
      console.log(`Dog number ${i + 1} is an adult and is ${dogAge} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
};

// checkDogs(JuliaD, kateD);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUSD = 1.1;
// const movementsUSD = movements.map(function (value) {
//   return value * eurToUSD;
// });
const movementsUSD = movements.map(value => value * eurToUSD);

console.log(movementsUSD);
console.log(movements);

const movementDisc = movements.map(
  (value, i) =>
    `Movement: ${i + 1} you ${value > 0 ? 'deposit' : 'withdrawal'} ${Math.abs(
      value
    )}`
);

console.log(movementDisc);
*/

/*
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);

const withdrawal = movements.filter(function (mov) {
  return mov < 0;
});

console.log(withdrawal);
*/

/*
const balance = movements.reduce(function (acc, value, i, arr) {
  console.log(`acc at ${i} is: ${acc}`);
  return acc + value;
}, 0);
console.log(balance);

const maximum = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(maximum);
*/

/*
const testD1 = [5, 2, 4, 1, 15, 8, 3];
const kateD = [4, 1, 15, 8, 3];

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));

  console.log(humanAges);

  const adultAges = humanAges.filter(function (age) {
    if (age >= 18) {
      return age;
    }
  });
  console.log(adultAges);

  const avgAge =
    adultAges.reduce((avg, age) => avg + age, 0) / adultAges.length;
  // {
  //   return (avg + age) / (i + 1);
  // }, 0);

  return avgAge;
};

console.log(calcAverageHumanAge(testD1));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
*/
// .map(age =>
//   age <= 2 ? 2 * age : 16 + age * 4
// );

// {
//   // const humanage;
//   if (age <= 2) {
//     return 2 * age;
//   } else {
//     return 16 + age * 4;
//   }
//   // return humanage;
// });
/*
const calcAverageHumanAge = function (ages) {
  const average = ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  console.log(average);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
*/
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawal = movements.find(mov => mov < 0);

console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const accf = accounts.find(acc => acc.owner === 'Jessica Davis');

console.log(accf);
*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/*
console.log(movements);
console.log(movements.includes(-130));

// Some
const anydeposit = movements.some(mov => mov > 0);
console.log(anydeposit);

// Every

console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

//  Seprate callback;
const deposit = mov => mov > 0;

console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
*/

/*
const arr = [1, [2, 3], [4, [5, 6]], [7, [8, 9]]];

console.log(arr.flat(2));

const overallMovements = accounts.map(acc => acc.movements);

console.log(overallMovements);

const allMovements = overallMovements.flat();
console.log(allMovements);

const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

//FLAT
const totalbalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalbalance);

// FLATMAP
const totalbalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalbalance2);
*/
/*
const owners = ['jonas', 'zach', 'mike', 'Adam'];
console.log(owners.sort());

// console.log(movements.sort());
console.log(movements);
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });

movements.sort((a, b) => a - b);
console.log(movements);

// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });

movements.sort((a, b) => b - a);
console.log(movements);
*/

/*
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);
console.log(x);

x.fill(1, 4, 6);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (ar, i) => i + 1);
console.log(z);

const randomDice = Array.from(
  { length: 100 },
  (_, i) => Math.trunc(Math.random() * 6) + 1
);

console.log(randomDice);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );

  console.log(movementsUI);

  const movUI = [...document.querySelectorAll('.movements__value')];
  console.log(movUI);
});
*/

/*
const bankdepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(bankdepositSum);

// 2.

const numDeposit1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
// .filter(mov => mov >= 1000).length;

console.log(numDeposit1000);

// 3.

const sums = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sum, cur) => {
      cur > 0 ? (sum.deposit += cur) : (sum.withdrawal += cur);
      return sum;
    },
    { deposit: 0, withdrawal: 0 }
  );

console.log(sums);

const convertTitleCase = function (title) {
  const captilize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleC = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : captilize(word)))
    .join(' ');

  return captilize(titleC);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an expample'));
*/

// const creatUserNames = function (accs) {
//   accs.forEach(function (acc) {
//     acc.username = acc.owner
//       .toLowerCase()
//       .split(' ')
//       .map(name => name[0])
//       .join('');
//   });

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(
  dog => (dog.recomendedFoodP = Math.trunc(dog.weight ** 0.75 * 28))
);

console.log(dogs);

const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));

// .reduce((acc, cur) => {
//   if (
//     cur.curFood > cur.recomendedFoodP * 0.9 &&
//     cur.curFood < cur.recomendedFoodP * 1.1
//   ) {
//     console.log(`IT is fine`);
//   } else if (cur.curFood > cur.recomendedFoodP * 0.9) {
//     console.log(`it is eating les`);
//   } else if (cur.curFood < cur.recomendedFoodP * 1.1) {
//     console.log('it is eating more');
//   }
// }, false);
console.log(sarahDog);

const eatingTooMuch = dogs
  .filter(dog => dog.curFood > dog.recomendedFoodP * 1.1)
  .flatMap(dog => dog.owners);

console.log(eatingTooMuch);

const eatingLess = dogs
  .filter(dog => dog.curFood < dog.recomendedFoodP * 0.9)
  .flatMap(dog => dog.owners);
console.log(eatingLess);

console.log(`${eatingTooMuch.join(', ')} dog's are  aeting to much`);
console.log(`${eatingLess.join(', ')} dog's are  aeting to less`);

const eatingFine = dogs.filter(
  dog =>
    dog.curFood > dog.recomendedFoodP * 0.9 &&
    dog.curFood < dog.recomendedFoodP * 1.1
);
console.log(eatingFine);

const tF = dogs.reduce(
  (acc, cur) =>
    cur.curFood > cur.recomendedFoodP * 0.9 &&
    cur.curFood < cur.recomendedFoodP * 1.1
      ? true
      : false,
  false
);
console.log(tF);

const arrangeDogs = dogs
  .slice()
  .sort((dog1, dog2) => dog1.recomendedFoodP - dog2.recomendedFoodP);
console.log(arrangeDogs);
