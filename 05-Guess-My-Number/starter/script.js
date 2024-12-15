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
    //if there is no number
    document.querySelector('.message').textContent = '🛑 No number!';

    //if you have the correct number
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      '🎉🎉🎉 Correct!!! 🎉🎉🎉 To play again, guess a new number.';

    //correct number displays
    document.querySelector('.number').textContent = secretNumber;
    //color change for win
    document.querySelector('body').style.backgroundColor = '#60b347';
    //score highlight
    document.querySelector('.number').style.width = '30rem';
    //if it is the correct number
    document.querySelector('.score').textContent = score;

    //highscore display
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secretNumber) {
    //if it is too high
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too high!';

      //minus your score
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //when your score is 0
      document.querySelector('.message').textContent = 'You lost the game.';
    }
  } else if (guess < secretNumber) {
    //if it is too low
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too low!';
      //reduce your score
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //if score is 0
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

/* my attempt
/again button/
document.querySelector('.again').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);

  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // Generate a new secret number and store it, but don't reveal it
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = ' ? '; // Hides the new number

  // Reset score
  score = 20;
  document.querySelector('.score').textContent = score;

  document.querySelector('body').style.backgroundColor = '#333';
  document.querySelector('.number').style.width = '6rem';
});
*/

/*
Coding Challenge #1

Implement a game reset functionality so that the player can start a new game and make a new guess. Tasks:

1. Select the element with the “again” class and attach a click even handler.
2. In the handler function, restore initial values of the score and the secretNumber variables.
3. Restore the initial conditions of the message, number, score, and guess input field.
4. Restore the original background color (#222) and number width (15rem) to the text field.

Good luck. 
*/

/* this is partially right. it does reset the value, but it doesnt hide the new number nor does it reset the colors. i know how to reset the number, but how do i hide it from showing.*/

/* use an if/else statement for the highscore and compare it at the end of the function.
but how would i take the value of the score and turn it into a high score?

1. it depends if u win or lose. if you lose the game (score becomes 0), game resets and proceeds as usual.
2. if you win, your score is compared to the highscore. if score is > high score, it replaces the high score to become the new high score. if not, high score is maintained and game resets again.
3. 
*/
