"use strict";

const elementList = document.querySelector(".list");
elementList.classList.add("js-list");

const kittenData = {
  kittenData1: {
    image: 'https://dev.adalab.es/gato-siames.webp',
    name: 'anastacio',
    desc: `Porte elegante, su patrón de color tan característico y sus  ojos de un azul intenso, pero su historia se remonta a Asía al menos
    hace 500 años, donde tuvo su origen muy posiblemente.`,
    race: '',
  },
  kittenData2: {
    image: 'https://dev.adalab.es/sphynx-gato.webp',
    name: 'fiona',
    desc: `Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
    hasta con pinta de alienígena han llegado a definir a esta raza
    gatuna que se caracteriza por la «ausencia» de pelo.`,
  race: 'Sphynx',
  },
  kittenData3: {
    image: 'https://dev.adalab.es/maine-coon-cat.webp',
    name: 'Cielo',
    desc: `Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
    bella mirada se ha convertido en una de sus señas de identidad.
    Sus ojos son grandes y las orejas resultan largas y en punta.`,
  race: 'Maine Coon',
  }
}


//crear cards con gatitos
const kittenOne = renderKitten(kittenData.kittenData1.image, kittenData.kittenData1.name, kittenData.kittenData1.race, kittenData.kittenData1.desc,);
const kittenTwo = renderKitten(kittenData.kittenData2.image, kittenData.kittenData2.name, kittenData.kittenData2.race, kittenData.kittenData2.desc,);
const kittenThree = renderKitten(kittenData.kittenData3.image, kittenData.kittenData3.name, kittenData.kittenData3.race, kittenData.kittenData3.desc,);

elementList.innerHTML = kittenOne + kittenTwo + kittenThree;

function renderKitten(image, name, race, desc) {
  return `<li class="card">
            <article>
              <img
                class="card_img"
                src= ${image}
                alt="siames-cat"
              />
              <h3 class="card_title">${name.toUpperCase()}</h3>
              <h4 class="card_race">${race}</h4>
              <p class="card_description">
                ${desc}
              </p>
            </article>
          </li>`;
}




//Buscar/filtrar
const input_search_desc = document.querySelector(".js_in_search_desc");
const input_search_raza = document.querySelector(".js_in_search_raza");
const cardRace = document.querySelector(".js__race");

const filterKitten = (event) => {
  event.preventDefault();
  elementList.innerHTML = "";
  const descrSearchText = input_search_desc.value;
  const raceSearchText = input_search_raza.value;
  if (descrSearchText != "" || raceSearchText != "") {
    if (kittenData.kittenData1.desc.includes(descrSearchText)) {
      if(kittenData.kittenData1.race != ""){
        elementList.innerHTML += kittenOne;
      } else{
        elementList.innerHTML += kittenOne;
        const cardRace = document.querySelector('.card_race');
        cardRace.innerHTML = 'Uy que despiste, no sabemos su raza';
      }
    }
    if (kittenData.kittenData2.desc.includes(descrSearchText)) {
      if(kittenData.kittenData2.race != ""){
      elementList.innerHTML += kittenTwo;
    } else{
        elementList.innerHTML += kittenTwo;
        const cardRace = document.querySelector('.card_race');
        cardRace.innerHTML = 'Uy que despiste, no sabemos su raza';
      }
    }
    if (kittenData.kittenData3.desc.includes(descrSearchText)) {
      if(kittenData.kittenData3.race != ""){
      elementList.innerHTML += kittenThree;
    } else{
        elementList.innerHTML += kittenThree;
        const cardRace = document.querySelector('.card_race');
        cardRace.innerHTML = 'Uy que despiste, no sabemos su raza';
      }
  }
}
};

const buttonSearch = document.querySelector(".js-button-search");
buttonSearch.addEventListener("click", filterKitten);

const inputDesc = document.querySelector(".js-input-desc");
const inputPhoto = document.querySelector(".js-input-photo");
const inputName = document.querySelector(".js-input-name");
const labelMessageError = document.querySelector(".js-label-error");

const btnForm = document.querySelector(".js-btn-add");
const btncancel = document.querySelector(".js-btn-cancel");
const sectionForm = document.querySelector(".js-new-form");

let valueDesc = inputDesc.value;
let valuePhoto = inputPhoto.value;
let valueName = inputName.value;
const addButton = document.querySelector(".js_add-button");
//añadir nuevo gatito
function addNewKitten(ev) {
  ev.preventDefault();
  console.log("¡Uy! parece que has olvidado algo");

  if (valueDesc === "" || valuePhoto === "" || valueName === "") {
    labelMessageError.innerHTML = "¡Uy! parece que has olvidado algo";
  } else {
    labelMessageError.innerHTML = "";
  }
}
btnForm.addEventListener("click", addNewKitten);
// botón cancelar del formulario add
btncancel.addEventListener("click", (ev) => {
  ev.preventDefault();
  sectionForm.classList.toggle("collapsed");
  inputDesc.value = "";
  inputPhoto.value = "";
  inputName.value = "";
});
//ocultar o mostrar formulario add
function showNewCatForm() {
  sectionForm.classList.remove("collapsed");
}

function hideNewCatForm() {
  sectionForm.classList.add("collapsed");
}
// mostrar y ocultar menu Adakitten
addButton.addEventListener("click", handleClickNewCatForm);

function handleClickNewCatForm(event) {
  event.preventDefault();
  if (sectionForm.classList.contains("collapsed")) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
}
