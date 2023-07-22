

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
function calcAge1(year, birthYear){
    const age = year - birthYear;
    return age;
}
let realAge = calcAge1(2023, 1986);
console.log(`Your age is ${realAge}.`);

// example of function expression
const calcAge2 = function(currentYear, birthYear){
    return currentYear - birthYear;
}
const realAge2 = calcAge2(2042, 1986);
console.log(`This is your age using an anonymous function: ${realAge2}.`);


// // lecture: arrow functions
// example of arrow function
const calcAge3 = birthYear => 2020 - birthYear;
const age3 = calcAge3(1986);
console.log(`This is the use of an arrow function: ${age3}`);

// example of arrow function with multiple variables
const yearsUntilRetirement = (currentYear2, birthYear) =>{
    const age = currentYear2 - birthYear;
    const retirement = 65 - age;
    return `You will retire in ${retirement} years.`;
}
console.log(yearsUntilRetirement(2023, 1986));


// // lecture: functions calling functions