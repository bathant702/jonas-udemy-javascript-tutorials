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

//random number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//number of tries/score
let score = 20;
//user guess
document.querySelector('.number').textContent = secretNumber;

//using quesrySelector to get the value of the guess input whenever a class with 'check' is clicked
//event listener works like this .addEventListener ('action-performed', function of deciding result(){});
document.querySelector('.check').addEventListener('click', function () {
  //console.log proves that the function works in console
  console.log(document.querySelector('.guess').value);

  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //!guess means "if guess is 0/false, then do a thing"
  if (!guess) {
    //if there is no number
    document.querySelector('.message').textContent = 'No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      '🎉🎉🎉 Correct!!! 🎉🎉🎉 To play again, guess a new number.';
    //reset game
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = secretNumber;
    score = 20;
    //if it is the correct number
    document.querySelector('.score').textContent = score;
  } else if (guess > secretNumber) {
    if (score > 0) {
      //if it is too high
      document.querySelector('.message').textContent = 'Too high!';
      //minus your score
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //if score is 0
      document.querySelector('.message').textContent = 'You lost the game.';
      //reset game
      secretNumber = Math.trunc(Math.random() * 20) + 1;
      document.querySelector('.number').textContent = secretNumber;
      score = 20;
      document.querySelector('.score').textContent = score;
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      //if it is too low
      document.querySelector('.message').textContent = 'Too low!';
      //minus your score
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //if score is 0
      document.querySelector('.message').textContent =
        'You lost the game. To play again, guess a new number.';
      //reset game
      secretNumber = Math.trunc(Math.random() * 20) + 1;
      document.querySelector('.number').textContent = secretNumber;
      score = 20;
      document.querySelector('.score').textContent = score;
    }
  }
});
