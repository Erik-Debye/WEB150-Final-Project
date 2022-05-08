'use strict';

//Code to activate hamburger menu
//entire section
const header = document.querySelector('.header');

const hamburgerIcon = document.querySelector('.hamburger');
const hamNav = document.querySelector('.ham__nav');
const hamLine1 = document.querySelector('.line--1');
const hamLine2 = document.querySelector('.line--2');
const hamLine3 = document.querySelector('.line--3');
const cta = document.querySelector('.cta__group');

hamburgerIcon.addEventListener('click', (e) => {
  e.preventDefault();
  hamLine1.classList.toggle('change--1');
  hamLine2.classList.toggle('change--2');
  hamLine3.classList.toggle('change--3');

  if(cta.style.display = 'flex'){
    cta.style.display = 'none';
  } else{
    cta.style.display = 'flex';
  }
 
  hamNav.classList.toggle('show');
});

//set a JS media query
//Checks if window size is resized to +768px && if hamburger menu is open.
//if open, it will remove show class and auto close the hamburger menu in favor for the normal menu (which is reactivated in a CSS media query)
//This is done in JS because seeked bahavior is depandent on a conditional (if window size is above 768px)
const mediaQuery = window.matchMedia('(min-width: 769px)');

//set event listener to listen for size check
mediaQuery.addEventListener('change', resizeCheck);

function resizeCheck(e) {
  if (e.matches && hamNav.classList.contains('show')) {
    e.preventDefault();
    hamLine1.classList.toggle('change--1');
    hamLine2.classList.toggle('change--2');
    hamLine3.classList.toggle('change--3');
    hamNav.classList.toggle('show');
  }
}

resizeCheck(mediaQuery);
