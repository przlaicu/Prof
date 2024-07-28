var h1 = document.querySelector('h1');
var info = document.querySelector('.info');
var footer = document.querySelector('footer');
var description = document.querySelector('.description');

var rivers = ['Mrežnica', 'Korana', 'Kupa', 'Dobra', 'Karlovačko'];

h1.innerText = 'Karlovac';
description.innerHTML = 'Grad na <strong>5 rijeka</strong>';
info.innerText = 'Peta je piva.';

for (var i = 0; i < 5; i++) {
    footer.querySelectorAll('li')[i].innerText = rivers[i];
}

// Izračun: pageOffsetY - scrollTop - window.height
// Element nije vidljiv, viewport je iznad njega 370px
var elViewportOffset = 1300 - 200 - 730; // px
