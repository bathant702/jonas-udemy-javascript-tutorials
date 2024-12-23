'use strict';

//variables to use
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
//check to see if opening the modals works in console
console.log(btnOpenModal);

//created a loop to be able to apply function to all btns
for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', function () {
    console.log('Button Clicked'); //confirms button was clicked
    modal.classList.remove('hidden'); //no "." when targeting the class. that is only for the selector. in this case, we're just eliminating the class
    overlay.classList.remove('hidden'); //hides the menu behind, blurring it.
  });
//the above can be refactored exactly like the close modal function


//This was the original approach of creating a function to open and close a window. from there, it was replicated to both the modal window and overla
btnCloseModal.addEventListener('click', function () {\
  //to close modal window via "X"
  modal.classList.add('hidden');
  //to close modal window via "outside of window"
  overlay.classList.add('hidden');
});

//This is the above code, refractored to be more DRY. the operation of opening and closing the window was turned into a named function, simplifying the process and code block
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//by creating a function, you can refactor the code, making it easier and neater
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);


//event listener to use Escape to close modal
document.addEventListener('keydown', function (e) {
    console.log(e.key);
  
    if (e.key === 'Escape') {
      if (!modal.classList.contains('hidden')) {
        closeModal();
        console.log('Esc was pressed.');
      }
    }
  });

  //escape event listener refactored
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });