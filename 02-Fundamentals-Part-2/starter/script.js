

// // lecture: learning about and using strict mode
// strict mode forbids us to do certain things, helping us avoid in bugs. it also creates visible errors while we write code
'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// // if (passTest) hasDriveLicense = true;
// // if (hasDriversLicense) console.log('I can drive now.');
// // vs
// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive now.');
// strict mode will catch the error, stopping the code and pointing out the issue in console


// // lecture: functions

// function logger(){
//     console.log('My name is Tim')
// }
// //calling/running/invoking the function
// logger();

// function fruitProcessor( apples, oranges){
//     console.log(apples, oranges); //stating the variables
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`; //making the juice variable
//     return juice;
// }

// const fruitJuice = fruitProcessor(3,4); //capturing the juice variable into something readable
// console.log(fruitJuice);//record

// const appleJuice = fruitProcessor(5,0);
// console.log(appleJuice);


// // lecture: function declaration vs expression

// example of function declaration
// function calcAge1(year, birthYear){
//     const age = year - birthYear;
//     return age;
// }
// let realAge = calcAge1(2023, 1986);
// console.log(`Your age is ${realAge}.`);

// example of function expression
// const calcAge2 = function(currentYear, birthYear){
//     return currentYear - birthYear;
// }
// const realAge2 = calcAge2(2042, 1986);
// console.log(`This is your age using an anonymous function: ${realAge2}.`);

// // lecture: arrow functions
// example of arrow function
// const calcAge3 = birthYear => 2020 - birthYear;
// const age3 = calcAge3(1986);
// console.log(`This is the use of an arrow function: ${age3}`);

// example of arrow function with multiple variables
// const yearsUntilRetirement = (currentYear2, birthYear) =>{
//     const age = currentYear2 - birthYear;
//     const retirement = 65 - age;
//     return `You will retire in ${retirement} years.`;
// }
// console.log(yearsUntilRetirement(2023, 1986));


// // lecture: functions calling functions
/*
function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor( apples, oranges){
    const applePieces = cutFruitPieces(apples); //turning a called function into a variable to be used. in order to call other fucntions, you need to convert their end process into a variable.
    console.log(applePieces);
    const orangePieces = cutFruitPieces(oranges);
    console.log(orangePieces);
    let howManyApples = ''; //keep the variable flexible. needs to be called in the function before being used.
    let howManyOranges = '';
    
    if (apples >= 2){
        howManyApples = "apples";
    } else{
        howManyApples = "apple";
    }
    console.log(howManyApples);

    if (oranges >= 2){
        howManyOranges = "oranges";
    } else{
        howManyOranges = "orange";
    }
    console.log(howManyOranges);

    console.log(apples, oranges); //stating the variables
    const juice = `Juice is made with ${apples} whole ${howManyApples}, cut into ${applePieces} pieces,and ${oranges} whole ${howManyOranges}, cut into ${orangePieces} pieces. Pressed and served. MMMM juice.`; //making the juice variable
    return juice;
}
console.log(fruitProcessor(3,1));
*/

// // lecture: function review
/*
const calcAge = function(currentYear, birthYear){
    return currentYear - birthYear;
}

const yearsUntilRetirement = function(currentYear, birthYear){
    const age = calcAge(currentYear, birthYear);
    const retirement = 65 - age;

    if (retirement <= 0){
        return `You are already retired.`;
    }else{
        return `You will retire in ${retirement} years.`;
    }
}
console.log(yearsUntilRetirement(2023, 1990));
console.log(yearsUntilRetirement(2023, 1980));
console.log(yearsUntilRetirement(2023, 2000));
console.log(yearsUntilRetirement(2023, 1954));
*/

// notes
// function declaration: can be used before they are declared
// function expression: a function value stored as a variable
// arrow function: great, quick one-liner functions. does not use "this" keyword
// 14:44 is useful as a diagram


// // Javascript fundamentals pt2: Challenge #1
/* CHALLENGE #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently. Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team). A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

Your tasks:
Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).
Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).
Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).
Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.
Ignore draws this time. Instead, log No team wins... to the console if there is no winner.

TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.
TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.
*/

// my solution
/*
const calcAvg = (score1,score2, score3) =>{
    return ((score1 + score2 + score3)/3);
}

function checkWinner(d1,d2, d3, k1, k2, k3){
    const avgDolphins = calcAvg(d1, d2, d3);
    const avgKoalas = calcAvg(k1, k2, k3);
    console.log(avgDolphins);
    console.log(avgKoalas);

  if(avgDolphins > avgKoalas){
    console.log("Dolphins are the winner.")
  }else if(avgKoalas > avgDolphins){
    console.log("Koalas take the win.")
  }else{
    console.log("Looks like we need a tiebreaker.")
  }
    return avgDolphins & avgKoalas;
}

checkWinner(1,2,3,1,2,4);

// tutorial solution
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));
 
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);
 
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
};
 
checkWinner(scoreDolphins, scoreKoalas);
*/


// // lecture: learning about arrays
/*
const friend1 = 'Tim';
const friend2 = 'Jay';
const friend3 = 'Hugo';

const friends = ['Tom', 'Jay', 'Hugo', 'Tony'];
console.log(friends);
console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]); // its 3 - 1 = 2. with 2 being the value, it calculates as Hugo, due to 0, 1, 2

friends[2] = 'Tom'
console.log(friends[2]);

const fullName = 'Timothy Bathan';
const tim = [fullName, 2023 - 1986, 'dev', friends];
console.log(`My bio as Tim: ${tim}`)

// const years = new Array(1991, 1984, 2002);
// console.log(years);

const calcAge = function (birthYear){
  return 2023 - birthYear;
}

const years = [1999, 2020, 2000, 1986, 1945];

const year1 = calcAge(years[0]); //1999
const year2 = calcAge(years[1]); //2020
const year3 = calcAge(years[years.length - 1]);//calcs at position 3, 1945

console.log(`${year1}, ${year2}, ${year3}`); //displaying age

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]; //calling function use for certain parts of an array
console.log(ages);
*/


// // lecture: array methods
/*
const friends =  ['Hugo', 'Tom', 'Alex', 'Tony', 'Jay'];
console.log(friends); //current array

// adding to an array
const newLength = friends.push('Adam', 'Tammy'); //adds to the end of the array
console.log(friends);
console.log(newLength); //calculate new size of array
const closeFriends = friends.unshift('Ada');//adds to the beginning
console.log(friends);
console.log(closeFriends); //calculate new size of array

// removing from an array
const popped = friends.pop(); //remove from the end
console.log(popped);
console.log(friends);
const shifted = friends.shift(); //remove from the beginning
console.log(shifted);
console.log(friends);

console.log(friends.indexOf('Steve')); //checks what spot it's in.
console.log(friends.indexOf('Jay')); //4ths spot

console.log(friends.includes('Steve')); //checks for true/false. this is false
console.log(friends.includes('Hugo')); //true
*/


// // challenge #2: a better tip calculator
/*
CHALLENGE #2
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:
Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
And now let's use arrays! So, create an array called bills containing the test data below.
Create an array called tips containing the tip value for each bill, calculated from the function you created before.

TEST DATA: 125, 555, and 44.

BONUS: Create an array totals containing the total values, so the bill + tip.

*/
// my solution - incomplete
// const bills = [125, 555, 44];
// const bills = [100, 200]
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// const tips = [calcTip(bills[0]), calcTip(bills[1])];
// console.log(tips);

// official solution
// // written as regular function expression
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
 
// console.log(bills, tips);

// //written as an arrow function
// const calcTipArrow = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// //with bonus challenge
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
 
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
 
// console.log(bills, tips, totals);


// // lecture: introduction to objects
/*
const timArray = [
  'Tim',
  'Bathan',
  2023 - 1986,
  'aspiring web developer',
  ['Matt', 'Sara', 'Andrew']
];

const tim = {
  firstName: 'Tim',
  lastName: 'Bathan',
  age: 2023 - 1986,
  job: 'aspring web developer',
  family: ['Matt', 'Sara', 'Andrew'],
  friendGroup: ['Jay', 'Christian', 'Hugo', 'Tom', 'Tony']
};

console.log(timArray);
console.log(tim.family); //retrieving data as an object
console.log(tim['family']);//retrieving data as an object with brackets. we can add an expression to it

const nameKey = 'Name'; // this is connecting a stated name part + the var requested, in this case nameKey.this then brings the requested variable from the array due to the combination of the var and word. kinda weird, but i guess it makes sense if you're being super literal
console.log(tim['first' + nameKey]);
console.log(tim['last' + nameKey]);
console.log(nameKey);

const interestedIn = prompt("What are you interested in knowing about Tim? Choose between firstName, lastName, age, job, and family.")
// asking a question and an if/else response
if (tim[interestedIn]){
  console.log(tim[interestedIn]);
}else{
  console.log('Wrong answer. Try again.');
}

tim.location = 'Las Vegas, NV, US';
tim['twitter'] = '@somethingsomethingidk';
console.log(tim);

//Challenge
//"Tim" has 3 friends, and his best friend is "Christian".

tim.numberOfFriends = 3;
tim.bestFriend = "Christian";
console.log(tim);
console.log(`tim has ${tim.numberOfFriends} friends. his best friend is ${tim.bestFriend}.`)

//or if we're referencing the tim array directly
console.log(`tim has ${tim.friendGroup.length} friends. his best friend is ${tim.friendGroup[1]}.`)
*/


// // lecture: object methods
/*
const tim = {
  firstName: 'Tim',
  lastName: 'Bathan',
  birthYear: 2015,
  job: 'teaching an afterschool program',
  friends: ['Hugo', 'Tony', 'Jay', 'Christian', 'Tom'],
  hasDriversLicense: false,

  // calcAge: function(birthYear){ //stanard calling. however, anything put in 'birthYear will be considered the birthYear
  //   return 2023 - birthYear;
  // }

  // calcAge: function(){
  //   console.log(this); //referencing this year
  //   return 2023 - this.birthYear; //this references the array's birthYear
  // }

  calcAge: function(){
    console.log(this);
    this.age = 2023 - this.birthYear;
    return this.age;
  },

  getSummary: function(){
    return `${this.firstName} is a ${this.calcAge()}-years old. He is ${tim.job} and has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
  } //in above ?/: is an if/else statement

};

console.log(tim.calcAge(1991)); //dot notation
console.log(tim['calcAge'](2000)); //bracket notation
console.log(tim.calcAge(tim.birthYear)); //calling information from the table

console.log(tim.calcAge()); //calling the birthyear without the need to call it
console.log(tim.age); //and due to previous calling it, it now knows tim.age as the actual age


// Challenge
// "Tim is a 37 year old teacher and has a driver's license."
// Prove the above statement by writing a method, similar to what we have been doing.

console.log(tim.getSummary());

//so i totally did this wrong. but i still got it to be proven
if (tim.age >= 17 && tim.hasDriversLicense === true){
  console.log(`Tim is ${tim.age}. He is definitely older than 30 and can drive.`)
} else if (tim.age >= 17 && tim.hasDriversLicense === false){
  console.log(`Tim is ${tim.age}. He can drive but still needs his license.`)
} else if (tim.age <= 17 && tim.hasDriversLicense === true){
  console.log(`Tim is ${tim.age}. How do you have a driver's license??`)
} else {
  console.log(`Tim is ${tim.age}. He's till too young to drive, but he's really good at Burnout.`)
};
*/


// //Challenge #3: using an array and method to have automated calculations.
/*
CHALLENGE #3
Let's go back to Mark and John comparing their BMIs!
This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:
1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.
2. Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".
TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

👋 OPTIONAL: You can watch my solution in video format in the next lecture
IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).

*/
//my solution/right solution
/*
const mark = {
  fullName: "Mark Miller",
  height: 1.69,
  mass: 78,

  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
}
mark.calcBMI();

const john = {
  fullName: "John Smith",
  height: 1.95,
  mass: 92,

  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
}
john.calcBMI();

//answer
console.log(`${mark.fullName}'s BMI is ${mark.bmi}.`);
console.log(`${john.fullName}'s BMI is ${john.bmi}.`);
console.log(`${john.bmi > mark.bmi ? `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})!` : `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})!`}`);
*/


// // lecture: loops
/*
for(let i = 10; i >= 0; i = i - 2){
  console.log(`test ${i}`)
}
*/
// basic loop formula for JS. uses a for statement to trigger a conditional. from there, it requires 3 parts: the variable, the condition, and the result of execution. console log is there to show results. the results will keep looping until it no longer triggers the condition. from there, it ends 

// // lecture: loops continued
/*
const timsArray = [
  'Tim',
  'Bathan',
  2037 - 1986,
  'freelancer dev',
  ['Jay', 'Christian', 'the boys']
]
//mutating an array to fill with data
const types = [];

// loop code. by i being 0, through the condition of i = the array length, it add 1 to i and then perform the code below.
for(let i = 0; i < timsArray.length; i++){
  console.log(timsArray[i], typeof timsArray[i]);

  // // fills types array with data. also known as mutating.
  // types[i] = typeof timsArray[i];

  // mutates array by adding data to the end of the array
  types.push(typeof timsArray[i]);
}

console.log(types);

// practical example
// const years will be the data we are manipulating
const years = [2001, 1991, 1999, 1765, 1986, 2021];
// const ages will be the variable affected by const years
const ages = [];

for(let i = 0; i < years.length; i++){
  ages.push(2037 - years[i]);
  //console.log(ages);
  // by putting that in there, it will console.log each pass of the loop until finished.
}
console.log(ages);

//learning about continue and break for an array
console.log('--- ONLY STRINGS ---')

// example of continue
for(let i = 0; i < timsArray.length; i++){
  // example of using typeof to check the data in the array to see if its a string or not. if string, continue. if not, skip.
  if(typeof timsArray[i] !== 'string') continue;
  //print for proof
  console.log(timsArray[i], typeof timsArray[i]);
}

// example of break
console.log('--- BREAK WITH NUMBER ---')

// example of continue
for(let i = 0; i < timsArray.length; i++){
  // example of using typeof to check the data in the array to see if its a number or not. if string, continue. if not, break.
  if(typeof timsArray[i] === 'number') break;
  //print for proof
  console.log(timsArray[i], typeof timsArray[i]);

}


// overall, these are good for manipulating data, starting and stopping as you please.
// also, if you use "node" + the js script you want to execute, it will do it in the terminal instead of opening up console on a webpage.

*/

// looping backwards and a loop within a loop
const timsArray = [
  'Tim',
  'Bathan',
  2037 - 1986,
  'freelancer dev',
  ['Jay', 'Christian', 'the boys']
];

/*
//loop in reverse
for(let i = timsArray.length - 1; i >= 0; i-- ){
  console.log(timsArray[i]);
}

//loop within a loop
//goes through one array, in this case, an exercise list
for(let exercise = 1; exercise < 4; exercise++){
  console.log(`------- Starting exercise ${exercise}`);
  //goes through a 2nd array, this time counting down reps
  for(let rep = 1; rep < 6; rep++){
    console.log(`Lifting weight repetition ${rep}!`);
  }
}
//prints each exercise, one at a time, with the requested reps
*/

// while loops
/*
for(let rep = 1; rep <= 10; rep++){
//  console.log(`Lifting weight repetition ${rep}!`);
}

let rep = 1;
while (rep<= 10){
//  console.log("ONE MORE ONE MORE!");
  rep++;
}

//d6 dice roller using while loop
let dice = Math.trunc(Math.random()* 6)  + 1;
console.log(dice);

while(dice !== 6){
  console.log(`You rolled a ${dice}.`);
  dice = Math.trunc(Math.random()* 6)  + 1;
  if (dice === 6) console.log(`You rolled a ${dice}. Betting is over.`);
}
*/