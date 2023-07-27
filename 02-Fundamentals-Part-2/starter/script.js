

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


// // lecture: function review

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