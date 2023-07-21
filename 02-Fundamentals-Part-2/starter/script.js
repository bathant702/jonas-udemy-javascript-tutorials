

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