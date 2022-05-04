'use strict';

//Fixed (stickied) Header on scroll
//Grab elements that need changing
const navBar = document.querySelector('.nav__bar');
const logo = document.querySelector('.nav__bar__logo');
const nav = document.getElementById('main__nav');
const navLink = document.querySelectorAll('.nav__link');
const headerBtn = document.querySelector('.nav__btn');

let sticky = navBar.offsetTop;
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

//MAP
const map = L.map('map').setView([42.082070730638286, -87.98075412989978], 18);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([42.082070730638286, -87.98075412989978]).addTo(map).bindPopup('The Home of Althai').openPopup();
