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

  cta.classList.toggle('show');
  hamNav.classList.toggle('show');
});
