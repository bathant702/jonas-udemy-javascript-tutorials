// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

// console.log("Tim");
// console.log(22);

// let firstName = "Jonas";
// console.log(firstName);

// //lecture: values and variables assignment
// const country = "TimLand";
// const continent = "Deep Blue";
// const population = "Big 3";

// let nation = country + continent + population;
// console.log(nation);

// //lecture: data types
// const isIsland = false;
// const language = "";

// nation = isIsland + language + country + continent + population;
// console.log(nation);

// console.log("List like this: " + isIsland + ", " + language + ", " + country + ", " + continent + ", " + population +".")

// console.log(typeof isIsland);
// console.log(typeof language);

// //lecture: basic operators
// let x = 10 + 5;
// x += 10;
// x -= 4;
// x *= 5;
// x ++;
// x --;
// x --;
// x --;
// console.log(x)

// //lecture: strings and template literals

// const firstName ='Tim';
// const job = 'unemployed';
// const birthYear = 1986;
// const year = 2023;

// const personIntro = 'Hello. My name is ' + firstName + '. I am ' + (year - birthYear) + ' years old. My current job is ' + job + '.';
// console.log(personIntro)

// const nameIntro = `This is new. Hello ${firstName}. You are ${year-birthYear} years old. Currently, you are ${job}. Sorry about that.`;
// console.log(nameIntro)

// console.log(`Did you know you can use $ with backticks to insert variables? Like this: "${firstName}". Cool, ya?`)

// console.log(`This is an example of multi-lines \n\
// here,\n\
// here,\n\
// and here.\n\
// Tahdah!`)

// console.log(`But then again,
// if you do it with back ticks,
// it does it on its own.
// so thats convenient.`)


// // lecture: if/else statements

// const age = 14;

// if(age >= 18){
//     console.log("You're old enough to drive.");
// }else{
//     const yearsLeft = 18 - age;
//     console.log(`You're too young. You have ${yearsLeft} years left till you can drive.`)
// }

// const birthYear = 1996;

// let century;

// if(birthYear <= 2000){
//     century = 20;
// }else{
//     century = 21;
// }

// console.log(century)


// // lecture: type conversion and coercion
// type conversion
// const inputYear = '1991';
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);
// console.log(`${inputYear} & 18`);
// console.log(Number('tim'));
// console.log(String(18), 18);

// // type coercion
// console.log('I am ' + 23 + ' years old.');
// console.log('23' + '13' + 3); //adds everything as a string
// console.log('23' - '13' - 3); //resolves everything as an equation

// //example
// let n = '1' + 1; //converts to 11
// n = n - 1; //reads as 11-1
// console.log(n) //n=10

// // lecture: truthy & falsy
// the 5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('tim'));
// console.log(Boolean({}));

// let money = "a";
// if(money){
//     console.log("Don't spend it all.")
// }else{
//     console.log("You need a job.")
// }

// // lecture: equality operators: == vs ===

// const age = 18;
// // === example of exact equal
// if(age === 18){
//     console.log(`You're legal now.`)
// }else{
//    yearsLeft = 18 - age;
//    console.log(`You have ${yearsLeft} years left till you're 18.`)
// }

// // == example of loose equal. it has too many weird rules that can cause bugs for a variety of reasons. avoid using if possible
// if (age == 18) console.log(`You're an adult:D (loose)`);


// const favorite = Number(prompt("What's your favorite number?"));

// console.log(`${favorite} is your favorite number.`);
// console.log(typeof favorite);

// if(favorite === (Number(favorite))){
//     console.log(`Nice. ${favorite} is a number.`);
// } else {
//     console.log(`That wasn't a number dude.`)
// }

// if(favorite === 23){
//     console.log(`Nice. 23 is a number.`);
// } else if (favorite === 7){
//     console.log(`7 is also a cool number`);
// } else if (favorite === (Number(favorite))) {
//     console.log(`I guess ${favorite} is an okay number`);
// } else{
//     console.log(`${favorite} is not a number. Try again.`)
// }

// if (favorite !== 23) prompt("Why not 23?")


// //lecture: operators
// A: Age is greater than or equal to 20 = false
// B: Age is less than 30 = true

// !A = false == true
// A and B = true and false == false
// A or B = true or false == true
// !A and B = true and true == true
// A or !B = false or false == false

// // lecture: logical operators

const hasDL = true // A
const hasGoodVis = true // B

console.log(hasDL && hasGoodVis); // this "and both"
console.log(hasDL || hasGoodVis); // this " either or"

if(hasDL && hasGoodVis){
    console.log(`Person is able to drive.`)
} else {
    console.log(`Someone else should drive.`)
}

const isTired = true // C
console.log(hasDL && hasGoodVis && isTired);

if (hasDL && hasGoodVis && !isTired){ //take note of ! in !isTired to be false
    console.log(`You're good to drive.`)
} else {
    console.log(`You should have someone else drive.`)
}