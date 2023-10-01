'use strict';
/* let hasDriverslicense = false
const drvingTestpass = true
if (drvingTestpass) hasDriverslicense = true;
if (hasDriverslicense) console.log('i can drive');


function logger() {
    console.log('my name is junaid');
}
logger();
logger();
logger();
function fruitJuice(apple, mango){
    const juice = (`juice with ${apple} apples and ${mango} mangoes`);
    return juice;
}
const order1= fruitJuice(2,3);
console.log(order1); 


function calcAge (birthyear) {
    return 2023 - birthyear;
}
const age = calcAge(1996);
console.log(age);
const calcage2 = function (birthyear) {
    return 2023-birthyear;
}
// const age2 = calcage2(2002);
// console.log(age2);
console.log(calcage2(2006));
c
// arrow function
const calcage3 = birthyear => 2023 - birthyear;
const age3 = calcage3(1998);
console.log(age3);
 
const retimentAge = (birthyear, fname) => {
    const age= 2023- birthyear;
    const retirement = 65 - age;
    return (`${fname} will retire in ${retirement} years.`);
}
const yearInRetirment = retimentAge(1996, 'John');
console.log(yearInRetirment);


function cutpeices(fruit){
    return fruit*4;
}
function fruitJuice(apple, mango){
    const applepeices = cutpeices(apple);
    const mangoPeices = cutpeices(mango);
    const juice = (`juice with ${applepeices} apple peices and ${mangoPeices} mangoe peices.`);
    return juice;
}
console.log(fruitJuice(3,4));


const calcAverage = (score1, score2, score3) => (score1+score2+score3)/3;
let dolphinsAverage = calcAverage(44, 23, 71);
console.log(`Dolphins average is ${dolphinsAverage}`);
let koalasAverage = calcAverage(65, 54, 49);
console.log(`koalas average is ${koalasAverage}`);
console.log('aa')

function checkWinner(avgDolphins, avgKoalas) {

    if (avgDolphins >= 2*avgKoalas){
        
         console.log(`dolphine are winner`);
         
    } else if (avgKoalas >= avgDolphins*2) {

        console.log(`kolas are winner`);
        

    } else {
        console.log('Draw')
        
    }
}
checkWinner(dolphinsAverage, koalasAverage);
checkWinner(222,111)
dolphinsAverage = calcAverage(85, 54, 41);
koalasAverage = calcAverage(23, 34, 27);
console.log(dolphinsAverage, koalasAverage);
checkWinner(dolphinsAverage, koalasAverage);
    

const friends = ['alex', 'micheal', 'john'];
console.log(friends);
const age = new Array (20, 26, 25);
console.log(age);
console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length-1]);
friends[0] = 'jay';
console.log(friends);

function calcAge (birthyear) {
    return 2023 - birthyear;
}
const years =[1991, 1972, 2002];
const ages =[calcAge(years[0]), calcAge(years[1]), calcAge(years[2])];
console.log(ages);

const friends = ['alex', 'micheal', 'john', 'steven','jay'];
friends.push('dave');
console.log(friends);
friends.unshift('tyler');
console.log(friends);
friends.pop();
console.log(friends);
friends.shift();
console.log(friends);
console.log(friends.indexOf('john'));
console.log(friends.includes('jay'));
friends.push(21);
console.log(friends);
console.log(friends.includes(21));

function calcTip(bill){
    return bill >= 50 && bill <= 300 ? (15*bill)/100 : (20*bill)/100;
    
  
}
const bills =[125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
const totals = [bills[0] + tips[0], bills[1] + tips[1],bills[2] + tips[2]];
console.log(bills, tips, totals);

       
// Objects:

 const jonas = {
    fName : 'jonas',
    lName : 'schmdtmaan',
    job : 'teacher',
    age : 2023 -1991,
    friends : ['john', 'mike', 'jay']
 }

console.log(jonas);
console.log(jonas.fName);
console.log(jonas['age']);

// const intrestedIn = prompt('what do you want to know about jonas? choose between fName, lName, job, age, friends');



// if(jonas[intrestedIn]){
//     console.log(jonas[intrestedIn]);
// }
// else{
//     console.log('enter the right value');
// }

jonas.location = 'portugal';
console.log(jonas.location);
jonas['twitter'] = 'leon';
console.log(jonas.twitter);

console.log(`${jonas.fName} has ${jonas.friends.length} friends. ${jonas.friends[0]} is his best friend.`)



const jonas = {
    fName : 'jonas',
    lName : 'schmdtmaan',
    job : 'teacher',
    birthYear : 1991,
    friends : ['john', 'mike', 'jay'],
    hasDrivingLicense : false,

    // calcAge : function(birthyear){
    //     return 2023-birthyear;
    // }
    
    // calcAge:function(){
    //     console.log(this);
    //     // console.log(2023-this.birthYear);
    //     return 2023-this.birthYear
    // }

    calcAge: function(){
        this.age = 2023 - this.birthYear;
        return this.age;
    },

    getSummary : function(){
        return (`${jonas.fName} is a ${jonas.age} years old ${jonas.job} and he has ${jonas.hasDrivingLicense ? 'a' : 'not'} driving license`);
    }

 }

 console.log(jonas.calcAge());
console.log(jonas.age);

// jonas.calcAge();
console.log(jonas.getSummary());


const markData = {
    fullName : 'Mark Miller',
    mass : 78,
    height : 1.69,

    getBMI: function(){
        this.BMI= this.mass/(this.height*this.height);
        return this.BMI;
    }
}

const JohnData ={
    fullName:'John Smith',
    mass : 92,
    height : 1.95,
    getBMI: function(){
        this.BMI= this.mass/(this.height*this.height);
        return this.BMI;
    }
}
console.log(JohnData.getBMI());
console.log(markData.getBMI());

if(JohnData.BMI > markData.BMI){
    console.log(`${JohnData.fullName}'s has higher BMI ${JohnData.BMI} then ${markData.fullName}'s BMI ${markData.BMI}.`);
} else {
    console.log(`${markData.fullName}'s has higher BMI ${markData.BMI} then ${JohnData.fullName}'s BMI ${JohnData.BMI}.`);
}


// LOOPS:

for(let rep=1; rep<=10; rep++) {
    console.log(`Lifting weights repititon ${rep} `)
}

const jonas = [
    'jonas',
    'schmdtmaan',
    'teacher',
    2023 -1991,
    ['john', 'mike', 'jay'],
    true
]

const types=[];

 for(let i=0; i<jonas.length; i++){
    console.log(jonas[i], typeof jonas[i]);
    // types[i]=typeof jonas[i];
    types.push(typeof jonas[i]);
 }
 console.log(types);

const years=[ 1991, 1996, 2002];
 const ages=[];
 for(let i=0; i<years.length; i++) {
    ages.push(2023-years[i]);
 }
 console.log(ages);

// CONTINUE AND BREAK:

 for(let i=0; i<jonas.length; i++){
    if(typeof jonas[i] !== 'string') continue;
    console.log(jonas[i], typeof jonas[i]);
    
 }
 for(let i=0; i<jonas.length; i++){
    
    console.log(jonas[i], typeof jonas[i]);
    if(typeof jonas[i] === 'number') break;
 }



const jonas = [
    'jonas',
    'schmdtmaan',
    'teacher',
    2023 -1991,
    ['john', 'mike', 'jay'],
    true
]

for( let i=jonas.length-1; i>=0; i--){
    console.log(i, jonas[i]);
}

for(let exercise=1; exercise<4; exercise++){
    console.log(`starting exercise ${exercise}`);
for(let i=1; i<6; i++){
    console.log(`Exercise ${exercise} repetion ${i}`);
}
}


for(let rep=1; rep<=10; rep++) {
    console.log(`Lifting weights repititon ${rep} `)
}


// WHILE LOOP:
// let rep = 1;
// while(rep<=10){
//     console.log(`WHILE -- Lifting weights repititon ${rep} `)
//     rep++;
// }

let dice = Math.trunc(Math.random() * 6) +1;
while(dice !==6){
    console.log(`You rolle a ${dice}`);
    dice = Math.trunc(Math.random() * 6) +1;
    if(dice===6)
{
    console.log('loop is about to end')
}
}


const bills=[22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];


function calcTip(bill){
    return bill >= 50 && bill <= 300 ? (15*bill)/100 : (20*bill)/100;
    
}
for(let i=0; i<bills.length; i++){
    calcTip(bills[i])
    console.log(`the bill is ${bills[i]}`);
    tips.push(calcTip(bills[i]));
    const tb= bills[i] + tips[i];
    totals.push(tb);
    // let tip=0;
    // while(tip<=tips.length)
    // {
        console.log(`the tip is ${tips[i]}`);
        // tip++;
    // }
    

    // for( let tip=1; tip<=i; tip++){
        
    //     tips.push(calcTip(bills[i]));

    //     console.log(`the tip is ${tips[i]}`);
    // }

        console.log(`the total is ${totals[i]}`);
        // total++;
   
    
    

}
console.log(tips);
console.log(totals);

*/
const number =[10, 23, 17];
const calcAverage = function (arr) {

    let sum = 0;
    for ( let i=0; i<arr.length; i++){
       sum += arr[i];
    }
   
return sum / arr.length;
}
console.log(calcAverage(number));