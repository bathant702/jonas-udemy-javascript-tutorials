'use strict';

//random number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//number of tries/score
let score = 20;

//high score
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);

  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //!guess means "if guess is 0/false, then do a thing"
  if (!guess) {
    document.querySelector('.message').textContent = '🛑 No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      '🎉🎉🎉 Correct!!! 🎉🎉🎉 To play again, guess a new number.';

    //celebration highlights
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.score').textContent = score;

    //highscore display
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //if guess is wrong
  } else if (guess !== secretNumber) {
    if (guess > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too high!' : 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'Game over. You lose. Try again?';
      document.querySelector('.score').textContent = 0;
    }
  }
});

/* Again/Reset Button */
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  /*reset values*/
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  /*reset look of game*/
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
