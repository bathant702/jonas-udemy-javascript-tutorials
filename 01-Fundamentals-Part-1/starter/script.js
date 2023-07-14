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

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('tim'));
console.log(Boolean({}));

let money = "empty";
if(money){
    console.log("Don't spend it all.")
}else{
    console.log("You need a job.")
}

// // lecture: equality operators: == vs ===
// furthermore. a test
// more tests are committing