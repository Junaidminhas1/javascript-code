//Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log('Importing module');
// addToCart('bread', 5);
// console.log(price, tq);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 6);

console.log(cart);

/*
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 234;
  const totalQuantity = 21;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart, shipping cost is ${shippingCost}`
    );
  };
  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} orderd from stock`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 5);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);
*/

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';
// import cloneDeep from 'lodash';

const state = {
  cart: [
    { product: 'bread', quantiy: 5 },
    { product: 'pizza', quantiy: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;

console.log(stateClone);
console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

import 'core-js/stable';

import 'regenerator-runtime/runtime';
