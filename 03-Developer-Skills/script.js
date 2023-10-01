// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
// const x = '23';
// console.log(x);
// console.log('');
const tempratures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calctemp = function (t1, t2) {
  const temp = t1.concat(t2);

  console.log(temp);
  let max = temp[0];
  let min = temp[0];
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] > max) max = temp[i];
    if (temp[i] < min) min = temp[i];
  }
  console.log('Max is: ' + max);
  console.log('Min is: ' + min);
  return max - min;
};
const test = calctemp([2, 6, 18, 5], [9, 23, 4]);
console.log(`Temprature Amplitude is ${test}.`);
// const tempAmplitude = calctemp(tempratures);
// console.log(`Temprature Amplitude is ${tempAmplitude}.`);
*/
const forecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]} C in ${i + 1} days .... `;
  }
  console.log('... ' + str);
};
forecast([2, 7, 14]);
