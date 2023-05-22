'use strict';

const catName1 = 'anastacio'
const catRace1 = 'Siamés'
const catDescription1 = `Porte elegante, su patrón de color tan característico y sus ojos
                de un azul intenso, pero su historia se remonta a Asía al menos
                hace 500 años, donde tuvo su origen muy posiblemente.`
const catImage1 = "https://dev.adalab.es/gato-siames.webp";

const catName2 = "fiona";
const catRace2 = "Sphynx";
const catDescription2 = `Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
              hasta con pinta de alienígena han llegado a definir a esta raza
              gatuna que se caracteriza por la «ausencia» de pelo.`;
const catImage2 = "https://dev.adalab.es/sphynx-gato.webp";

const catName3 = 'Cielo';
const catRace3 = 'Maine Coon';
const catDescription3 = `Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
              bella mirada se ha convertido en una de sus señas de identidad.
              Sus ojos son grandes y las orejas resultan largas y en punta.`;
const catImage3 = "https://dev.adalab.es/maine-coon-cat.webp";
const elementList = document.querySelector('.list');
elementList.classList.add('js-list');

const kittenOne = `<li class="card">
            <article>
              <img
                class="card_img"
                src= ${catImage1}
                alt="siames-cat"
              />
              <h3 class="card_title">${catName1.toUpperCase()}</h3>
              <h4 class="card_race">${catRace1}</h4>
              <p class="card_description js_in_search_desc">
                ${catDescription1}
              </p>
            </article>
          </li>`;

const kittenTwo = `<li class="card">
            <img
              class="card_img"
              src=${catImage2}
              alt="sphynx-cat"
            />
            <h3 class="card_title">${catName2.toUpperCase()}</h3>
            <h4 class="card_race">${catRace2}</h4>
            <p class="card_description js_in_search_desc">
              ${catDescription2}
            </p>
          </li>`;

const kittenThree = `<li class="card">
            <img
              class="card_img"
              src=${catImage3}
              alt="maine-coon-cat"
            />
            <h3 class="card_title">${catName3.toUpperCase()}</h3>
            <h4 class="card_race">${catRace3}</h4>
            <p class="card_description js_in_search_desc">
              ${catDescription3}
            </p>
          </li>`;

elementList.innerHTML = kittenOne + kittenTwo +  kittenThree;

const input_search_desc = document.querySelector('.js_in_search_desc');
const descrSearchText = input_search_desc.value;

if (catDescription1.includes(descrSearchText) ) {
  elementList.innerHTML = kittenOne;
}
else if ( catDescription2.includes(descrSearchText) ) {
  elementList.innerHTML = kittenTwo;
}
else if ( catDescription3.includes(descrSearchText) ) {
  elementList.innerHTML = kittenThree;
} else {
  elementList.innerHTML = '';
}