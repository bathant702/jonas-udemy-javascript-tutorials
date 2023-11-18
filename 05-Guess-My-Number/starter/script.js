'use strict';

/*
console.log(document.querySelector('.message').textContent);
// this piece of code selects the element with class="message". it starts with document.querySelector('.message'), with "." signifying class. If we wanted to do with an ID, we'd use "#" instead. the .textContent selects the text in that element.



console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
//rnd number
let score = 20;
let highscore;
document.querySelector('.number').textContent = secretNumber;
//user guessing

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
    //if there is no number
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    //if it is the correct number
    document.querySelector('.score').textContent = highscore;
    //records your high score
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too high!';
    //if it is too high
    score--;
    document.querySelector('.score').textContent = score;
    //minus your score
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too low!';
      //if it is too low
      score--;
      document.querySelector('.score').textContent = score;
      //minus your score
    } else {
      document.querySelector('.message').textContent = 'You lost the game.';
      //if score is 0
      let newSecretNumber = Math.trunc(Math.random() * 20) + 1;
      newSecretNumber = secretNumber;
      score = 20;
      document.querySelector('.score').textContent = score;
      //reset?
    }
  }
});
