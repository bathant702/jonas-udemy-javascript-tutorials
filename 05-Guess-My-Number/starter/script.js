'use strict';

//random number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//number of tries/score
let score = 20;
//user guess
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);

  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //!guess means "if guess is 0/false, then do a thing"
  if (!guess) {
    //if there is no number
    document.querySelector('.message').textContent = '🛑 No number!';
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
    //if it is too high
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too high!';

      //minus your score
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //when your score is 0
      document.querySelector('.message').textContent = 'You lost the game.';

      //reset game
      secretNumber = Math.trunc(Math.random() * 20) + 1;
      document.querySelector('.number').textContent = secretNumber;
      score = 20;
      document.querySelector('.score').textContent = score;
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

      //reset game
      secretNumber = Math.trunc(Math.random() * 20) + 1;
      document.querySelector('.number').textContent = secretNumber;
      score = 20;
      document.querySelector('.score').textContent = score;
    }
  }
});

/* use an if/else statement for the highscore and compare it at the end of the function.
but how would i take the value of the score and turn it into a high score?

1. it depends if u win or lose. if you lose the game (score becomes 0), game resets and proceeds as usual.
2. if you win, your score is compared to the highscore. if score is > high score, it replaces the high score to become the new high score. if not, high score is maintained and game resets again.
3. 
*/
