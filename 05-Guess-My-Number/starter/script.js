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

    //if not the right number
  } else if (guess > secretNumber) {
    //if it is too high
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game.';
    }
  } else if (guess < secretNumber) {
    //if it is too low
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You lost the game. To play again, guess a new number.';
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
