'use strict';

const elementList = document.querySelector('.list');
elementList.classList.add('js-list');

const kittenData_1 = {
  image: 'https://dev.adalab.es/gato-siames.webp',
  name: 'anastacio',
  desc: `Porte elegante, su patrón de color tan característico y sus  ojos de un azul intenso, pero su historia se remonta a Asía al menos
  hace 500 años, donde tuvo su origen muy posiblemente.`,
  race: '',
};
const kittenData_2 = {
  image: 'https://dev.adalab.es/sphynx-gato.webp',
  name: 'fiona',
  desc: `Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
  hasta con pinta de alienígena han llegado a definir a esta raza
  gatuna que se caracteriza por la «ausencia» de pelo.`,
  race: 'Sphynx',
};
const kittenData_3 = {
  image: 'https://dev.adalab.es/maine-coon-cat.webp',
  name: 'Cielo',
  desc: `Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
  bella mirada se ha convertido en una de sus señas de identidad.
  Sus ojos son grandes y las orejas resultan largas y en punta.`,
  race: 'Maine Coon',
};
const kittenData = [kittenData_1, kittenData_2, kittenData_3];

//crear cards con gatitos
const kittenOne = renderKitten(kittenData[0]);
const kittenTwo = renderKitten(kittenData[1]);
const kittenThree = renderKitten(kittenData[2]);

elementList.innerHTML = kittenOne + kittenTwo + kittenThree;

function renderKitten(cat) {
   return `<li class="card">
            <article>
              <img
                class="card_img"
                src= ${cat.image}
                alt="siames-cat"
              />
              <h3 class="card_title">${cat.name.toUpperCase()}</h3>
              <h4 class="card_race">${cat.race}</h4>
              <p class="card_description">
                ${cat.desc}
              </p>
            </article>
          </li>`;
}

//Buscar/filtrar
const input_search_desc = document.querySelector('.js_in_search_desc');
const input_search_raza = document.querySelector('.js_in_search_raza');
const cardRace = document.querySelector('.js__race');

const filterKitten = (event) => {
  event.preventDefault();
  elementList.innerHTML = '';
  const descrSearchText = input_search_desc.value;
  const raceSearchText = input_search_raza.value;
  if (descrSearchText != '' || raceSearchText != '') {
    if (kittenData[0].desc.includes(descrSearchText)) {
      if (kittenData[0].race != '') {
        elementList.innerHTML += renderKitten(
          kittenData[0].image,
          kittenData[0].name,
          kittenData[0].race,
          kittenData[0].desc
        );
      } else {
        elementList.innerHTML += kittenOne;
        const cardRace = document.querySelector('.card_race');
        cardRace.innerHTML = 'Uy que despiste, no sabemos su raza';
      }
    }
    if (kittenData[1].desc.includes(descrSearchText)) {
      if (kittenData[1].race != '') {
        elementList.innerHTML += kittenTwo;
      } else {
        elementList.innerHTML += kittenTwo;
        const cardRace = document.querySelector('.card_race');
        cardRace.innerHTML = 'Uy que despiste, no sabemos su raza';
      }
    }
    if (kittenData[2].desc.includes(descrSearchText)) {
      if (kittenData[2].race != '') {
        elementList.innerHTML += kittenThree;
      } else {
        elementList.innerHTML += kittenThree;
        const cardRace = document.querySelector('.card_race');
        cardRace.innerHTML = 'Uy que despiste, no sabemos su raza';
      }
    }
  }
};

const buttonSearch = document.querySelector('.js-button-search');
buttonSearch.addEventListener('click', filterKitten);

const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMessageError = document.querySelector('.js-label-error');

const btnForm = document.querySelector('.js-btn-add');
const btncancel = document.querySelector('.js-btn-cancel');
const sectionForm = document.querySelector('.js-new-form');

let valueDesc = inputDesc.value;
let valuePhoto = inputPhoto.value;
let valueName = inputName.value;
const addButton = document.querySelector('.js_add-button');
//añadir nuevo gatito
function addNewKitten(ev) {
  ev.preventDefault();
  console.log('¡Uy! parece que has olvidado algo');

  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMessageError.innerHTML = '¡Uy! parece que has olvidado algo';
  } else {
    labelMessageError.innerHTML = '';
  }
}
btnForm.addEventListener('click', addNewKitten);
// botón cancelar del formulario add
btncancel.addEventListener('click', (ev) => {
  ev.preventDefault();
  sectionForm.classList.toggle('collapsed');
  inputDesc.value = '';
  inputPhoto.value = '';
  inputName.value = '';
});
//ocultar o mostrar formulario add
function showNewCatForm() {
  sectionForm.classList.remove('collapsed');
}

function hideNewCatForm() {
  sectionForm.classList.add('collapsed');
}
// mostrar y ocultar menu Adakitten
addButton.addEventListener('click', handleClickNewCatForm);

function handleClickNewCatForm(event) {
  event.preventDefault();
  if (sectionForm.classList.contains('collapsed')) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
}
