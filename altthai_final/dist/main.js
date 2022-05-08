'use strict';

//HOMEPAGE ******************************************************************************************

//Fixed (stickied) Header on scroll
//Grab elements that need changing
const navBar = document.querySelector('.nav__bar');
const logo = document.querySelector('.nav__bar__logo');
const nav = document.getElementById('main__nav');
const navLink = document.querySelectorAll('.nav__link');
const headerBtn = document.querySelector('.nav__btn');

//not always present
if(navBar){
  let sticky = navBar.offsetTop;
}

//create fucntion to run on scroll
function fixedHeader() {
  //if pixel offset (Y) is more than 10 pixels
  if (window.pageYOffset > 200) {
    logo.classList.add('on-scroll--logo');
  }
  if (window.pageYOffset > 740) {
    //add on-scroll class to each el
    navBar.classList.add('on-scroll--bar');
    nav.classList.add('on-scroll--nav');
    navLink.forEach((el) => {
      el.classList.add('on-scroll--link');
    });
    headerBtn.classList.add('on-sroll--btn');
  } else {
    navBar.classList.remove('on-scroll--bar');
    logo.classList.remove('on-scroll--logo');
    nav.classList.remove('on-scroll--nav');
    navLink.forEach((el) => {
      el.classList.remove('on-scroll--link');
    });
    headerBtn.classList.remove('on-sroll--btn');
  }
}

//Call function on scroll
window.onscroll = function (e) {
  e.preventDefault();
  fixedHeader();
};

//Fixing the z-index problem on homepage. Issue arises because the map uses incredibly high z-values requiring the scroll-bar to also use high numbers. This conflicts with the hamburger navigation on the mobile navigation menu.

//MAP
const map = L.map('map').setView([42.082070730638286, -87.98075412989978], 18);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([42.082070730638286, -87.98075412989978]).addTo(map).bindPopup('The Home of Althai').openPopup();

//##########################################################################################################################

//CONTACT PAGE**********************************************************************************************************************************

//This function auto-inserts todays date into the date category
//not always present
if(document.getElementById('date')){
  const today = new Date().toISOString().substring(0, 10);
document.getElementById('date').value = today;
}

//############################################################################################################################

//PARENT JS*********************************************************************************************************

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

  if ((cta.style.display = 'flex')) {
    cta.style.display = 'none';
  } else {
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

//#########################################################################################################################################

//GALLERY PAGE**************************************************************************************************

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

//##########################################################################################
