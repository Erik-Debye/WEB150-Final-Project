'use strict';

//Gallery Card Clicking
//Grab elements that need changing
const cardLinks = document.querySelectorAll('.card__link');

function clickOrToBeClicked() {
  cardLinks.forEach((el) => {
    el.addEventListener('click', (_) => {
      _.preventDefault();
      //grab next NEXT sibling element .card__out
      const cardOut = el.parentElement.parentElement.nextElementSibling.nextElementSibling;

      //check classes
      if (el.classList.contains('fa-chevron-down')) {
        el.classList.remove('fa-chevron-down');
        el.classList.add('fa-xmark');
        el.ariaLabel = 'Click to close the longer description';
        cardOut.classList.remove('removed');
      } else {
        el.classList.remove('fa-xmark');
        el.classList.add('fa-chevron-down');
        el.ariaLabel = 'Click to open the longer description';
        cardOut.classList.add('removed');
      }
    });
  });
}

window.onload = function (e) {
  e.preventDefault();
  clickOrToBeClicked();
};
