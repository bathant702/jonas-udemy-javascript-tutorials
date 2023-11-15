'use strict';

/*
console.log(document.querySelector('.message').textContent);
// this piece of code selects the element with class="message". it starts with document.querySelector('.message'), with "." signifying class. If we wanted to do with an ID, we'd use "#" instead. the .textContent selects the text in that element.

document.querySelector('.message').textContent = 'Correct Number!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function () {
  //using quesrySelector to get the value of the guess input whenever a class with 'check' is clicked
  //event listener works like this .addEventListener ('action-performed', function of deciding result(){});
  console.log(document.querySelector('.guess').value);
  //console.log proves that the function works in console

  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    //!guess means "if guess is 0/false, then do a thing"
    document.querySelector('.message').textContent = 'No number!';
  }
});
