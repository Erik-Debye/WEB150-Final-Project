'use strict';

//MAP
const map = L.map('map').setView([42.082070730638286, -87.98075412989978], 18);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([42.082070730638286, -87.98075412989978]).addTo(map).bindPopup('The Home of Althai').openPopup();
