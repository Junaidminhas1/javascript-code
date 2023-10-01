'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

// console.log(flights.split('+'));

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flights.split(';');
  // console.log(ty/pe);/
  const output = `${type.startsWith('_Delayed') ? '😡' : ''} ${type.replaceAll(
    '_',
    ' '
  )} from ${from.slice(0, 3).toUpperCase()} to ${to
    .slice(0, 3)
    .toUpperCase()} (${time})`;
  console.log(output);
}

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderdeliver({ starterIndex = 1, mainIndex = 0, time = '20:00' }) {
    console.log(this.starterMenu[starterIndex], this.mainMenu[mainIndex], time);
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`here is your past with ${ing1}, ${ing2} and ${ing3}`);
  },
};

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
// const text = document.querySelector('textarea').value;

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');
//   for (const [i, row] of rows.entries()) {
//     const [first, last] = row.toLowerCase().trim().split('_');
//     const output = `${first}${last.replace(last[0], last[0].toUpperCase())}`;
//     console.log(`%${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
//   }
// });

// const converter = function (value) {
//   const camelcase = value.trim().split('_');
//   const after_ = camelcase[1];
//   const corr = [];
//   for (const l of after_) {
//     corr.push(l[0].toUpperCase() + l.slice(1));
//   }
//   return corr;
// };
// console.log(converter(' first_name'));

/*console.log('a+ver+nice+strinf'.split('+'));
console.log('Mr. Jonas Schmedtmaan');

const [fname, lName] = 'Jonas Schmedtmaan'.split(' ');

const newName = ['Mr.', fname, lName.toUpperCase()].join(' ');
console.log(newName);

const passenger = function (name) {
  const names = name.split(' ');
  const nameU = [];
  for (const n of names) {
    // nameU.push(n[0].toUpperCase() + n.slice(1));
    nameU.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(nameU.join(' '));
};

passenger('jonas schmedtmaan');
passenger('jessica ann davis smith');

const message = 'go to gate 24';
console.log(message.padStart(25, '+').padEnd(35, '+'));
console.log('jonas'.padStart(25, '+').padEnd(35, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard('0246121641684'));
console.log(maskCreditCard(2461216555555401684));
console.log(maskCreditCard('241684'));

const message2 = 'due to bad weather flight delayed  ';
console.log(message2.repeat(5));*/

/* const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = 'jOnAs';
const pLower = passenger.toLowerCase();
const pCorrect = pLower[0].toUpperCase() + pLower.slice(1);
console.log(pCorrect);

const email = 'hello@jonas.io';
const logemail = '   Hello@jonas.IO  \n';

const emaillower = logemail.toLowerCase();
const emailTrim = emaillower.trim();
console.log(emailTrim);
console.log(email === emailTrim);

const emailC = logemail.toLowerCase().trim();
console.log(emailC);

const priceGb = '234,56$';
const priceUS = priceGb.replace(',', '.');
console.log(priceUS);

const annoucement =
  'All the paseneger come to boarding door 23, boarding door 23!';
console.log(annoucement.replaceAll('door', 'gate'));
console.log(annoucement.replace(/door/g, 'gate'));

const plane = 'Airbus A320 neo';
console.log(plane.includes('320'));
console.log(plane.includes('432'));
console.log(plane.startsWith('Air'));

const checkBaggege = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('gun') || baggage.includes('knife')) {
    console.log(`you're not allowed on aboard`);
  } else {
    console.log(`you're allowed on board`);
  }
};

checkBaggege('food, laptop, Cloths');
checkBaggege('Camera, knife');
checkBaggege('shoe, cloths');
checkBaggege('Gun, food ');n */

/*
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log(airline.indexOf('A'));
console.log(airline.lastIndexOf('A'));
console.log(airline.lastIndexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(0, airline.indexOf(' ')));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const middleseat = function (seat) {
  let s = seat.slice(-1);
  if (s === 'b' || s === 'e') {
    console.log('you got middle seat 😣');
  } else {
    console.log('you got lucky😊');
  }
};
middleseat('11b');
middleseat('23c');
middleseat('2e'); */

/*
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const eventarr = [...gameEvents.values()];
const events = [...new Set(eventarr)];
console.log(events);
gameEvents.delete(64);
console.log(gameEvents);

const tIntervals = [...gameEvents.keys()];
console.log(
  `an event happen, on average every ${90 / tIntervals.length} minutes`
);
for (const [time, event] of gameEvents) {
  console.log(
    `${time <= 45 ? '[first half]' : '[SECOND HALF]'} ${time}: ${event}`
  );
} */

/*
const question = new Map([
  ['question', 'which programing language is best in the world'],
  [1, 'c'],
  [2, 'java'],
  [3, 'javaScript'],
  ['correct', 3],
  [true, 'Correct answer'],
  [false, 'try again'],
]);

console.log(question);
// convert an object to map:

const time = new Map(Object.entries(openingHours));
console.log(time);

console.log(question.get('question'));
for (const [key, option] of question) {
  if (typeof key === 'number') console.log(option);
}
// const ans = Number(prompt('your answer'));
const ans = 3;
console.log(ans);
console.log(question.get(ans === question.get('correct')));

//covserting map to array
console.log([...question]);
console.log(question.keys());
console.log([...question.values()]);
*/
/*
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon Portugal');
rest
  .set('Catgories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open')
  .set(false, 'we are close');

console.log(rest.get(2));
console.log(rest.get('open'));
console.log(rest);

const time = 20;
console.log(rest.get(time >= rest.get('open') && time <= rest.get('close')));

console.log(rest.has(1));
rest.delete(2);

console.log(rest);
console.log(rest.size);
// rest.clear();

const arr = [1.2];
rest.set(arr, 'test');
rest.set(document.querySelector('h1'), 'heading');
console.log(rest);
console.log(rest.size);
*/
/*
const orderSet = new Set([
  'Focaccia',
  'Risotto',
  'Bruschetta',
  'Garlic Bread',
  'Focaccia',
  'Risotto',
]);
console.log(orderSet);
console.log(new Set('jonas'));
console.log(orderSet.size);
orderSet.add('jonas');
orderSet.delete('Risotto');
console.log(orderSet.has('Risotto'));
// orderSet.clear();
console.log(orderSet);

for (const order of orderSet) {
  console.log(order);
}

const staff = ['chef', 'waiter', 'Manager', 'waiter', 'chef'];
const staffUniq = [...new Set(staff)];
console.log(staffUniq);
console.log(new Set(['chef', 'waiter', 'Manager', 'waiter', 'chef']).size);*/

/*
const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`on ${day} we open at ${open} and close at ${close}. `);
}
*/
/*
//optional chaining
const properties = Object.keys(openingHours);
let opnString = `we open ${properties.length} days`;

for (const day of properties) {
  opnString += ` ${day} `;
}
console.log(opnString);


if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

console.log(restaurant.openingHours.mon?.open);

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of weekdays) {
  const open = restaurant.openingHours[day]?.open;
  console.log(`the timing for ${day} is ${open}`);
}

console.log(restaurant.order?.(0, 1) ?? 'function not found');
console.log(restaurant.orderpozza?.(0, 1) ?? 'function not found');

// const users = [{ name: 'john', age: 27 }];
const users = [];

console.log(users[0]?.name ?? 'arry empty');



const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

console.log([...menu.entries()]);*/
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// const playerS = Object.entries(game.scored);
const playerS = [...game.scored];

// const playerS = Object.values(game.scored);

for (const [i, player] of playerS.entries()) {
  console.log(`goal ${i + 1}: ${player}`);
}
let add = 0;
let t = 0;
let average;

const val = Object.values(game.odds);
console.log(val);
for (const [i, values] of Object.entries(game.odds)) {
  // let add = 0;
  add = add + values;
  // i = i + 1;
  // console.log(add);
  t++;

  average = add / t;
  // console.log(average);

  // console.log(add);
}
console.log(average);
// console.log(add, t);
// console.log(average);
// const { team1: Bayern, x: draw, team2: Borrussia } = game.odds;?

for (const [i, values] of Object.entries(game.odds)) {
  // console.log(game[i] ?? 'draw', values);
  const str = i === 'x' ? 'draw' : `victory ${game[i]}`;
  console.log(`odds of ${str}: ${values}`);
}

const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

/*
// const player1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [player1, player2] = game.players;
console.log(player1, player2);

const [gk, ...fieldPlayers] = player1;
console.log(gk, fieldPlayers);

const allPlayer = [...player1, ...player2];
console.log(allPlayer);

const player1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(player1Final);

// const { team1, draw, team2 } = game.odds{};  // ({ a, b } = obj);
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

const printGoals = function (...player) {
  console.log(
    `${player[0]}, ${player[1]}, ${player[2]}, ${player[3]} ${player.length} goals are scored`
  );
};

printGoals('davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

team1 < team2 && console.log('team1 is likely to win');
team2 < team1 && console.log('team2 is likely to win');



restaurant.numGuest = 0;
const guest2 = restaurant.numGuest || 10;
console.log(guest2);

const guestCorrect = restaurant.numGuest ?? 10;
console.log(guestCorrect);


console.log(13 || 'john');
console.log(0 || 'john');
console.log(true || undefined);
console.log(null || undefined);
console.log(undefined || 0 || '' || 18 || 'john');

restaurant.numGuest = 23;
const guest = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guest);

const guest2 = restaurant.numGuest || 10;
console.log(guest2);
console.log('-----AND-----');

console.log(13 && 'john');
console.log(0 && 'john');
console.log(true && undefined);
console.log(null && undefined);
console.log(18 && 'john' && null && 10);

restaurant.orderPasta && restaurant.orderPasta('mushroom', 'onion');


const [a, b, ...others] = [1, 3, 5, 7, 9];
console.log(a, b, others);

const [o1, , o2, ...remaining] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(o1, o2, remaining);

const { sat, ...weekday } = restaurant.openingHours;
console.log(weekday);

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 7, 9);
add(22, 56, 98, 3, 6);

const x = [23, 7, 9];
add(...x);



 //SPREAD 
const arr = [2, 3, 5];
const newarr = [...arr, 0, 1];
console.log(newarr);

console.log(...newarr);
const newmenu = [...restaurant.mainMenu, 'gnocci'];
console.log(newmenu);
console.log(...newmenu);

//COPY ARRAY
const mainmenuCopy = [...restaurant.mainMenu];

//join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// const ingredients = [
//   prompt('ingredient 1'),
//   prompt('ingredient 2'),
//   prompt('ingredient 3'),
// ];

// restaurant.orderPasta(...ingredients);

const newResturant = { foundedIn: 1999, ...restaurant, founder: 'jonas' };
console.log(newResturant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'italianno food';
console.log(restaurant.name);
console.log(restaurantCopy.name);


restaurant.orderdeliver({
  time: '11.00',
  starterIndex: 2,
  mainIndex: 0,
});
restaurant.orderdeliver({ starterIndex: 3 });

const { name, openingHours } = restaurant;
console.log(name, openingHours);

const {
  name: resturantName,
  openingHours: timing,
  categories: tags,
} = restaurant;
console.log(resturantName, timing, tags);

const { bill = [], starterMenu: starter = [] } = restaurant;
console.log(bill, starter);

let a = 990;
let b = 90;
const obj = { a: 4, b: 7, c: 11 };
({ a, b } = obj);
console.log(a, b);

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [primary, , secondary] = restaurant.categories;
console.log(primary, secondary);

const temp = primary;
primary = secondary;
secondary = temp;
console.log(primary, secondary);
[secondary, primary] = [primary, secondary];
console.log(primary, secondary);

const nested = [2, 3, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

const [a = 1, b = 1, c = 1] = [2];
console.log(a, b, c);
*/
