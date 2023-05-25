"use strict";

const catName1 = "anastacio";
const catRace1 = "";
const catDescription1 = `Porte elegante, su patrón de color tan característico y sus ojos
                de un azul intenso, pero su historia se remonta a Asía al menos
                hace 500 años, donde tuvo su origen muy posiblemente.`;
const catImage1 = "https://dev.adalab.es/gato-siames.webp";

const catName2 = "fiona";
const catRace2 = "Sphynx";
const catDescription2 = `Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
              hasta con pinta de alienígena han llegado a definir a esta raza
              gatuna que se caracteriza por la «ausencia» de pelo.`;
const catImage2 = "https://dev.adalab.es/sphynx-gato.webp";

const catName3 = "Cielo";
const catRace3 = "Maine Coon";
const catDescription3 = `Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
              bella mirada se ha convertido en una de sus señas de identidad.
              Sus ojos son grandes y las orejas resultan largas y en punta.`;
const catImage3 = "https://dev.adalab.es/maine-coon-cat.webp";
const elementList = document.querySelector(".list");
elementList.classList.add("js-list");

//crear cards con gatitos
const kittenOne = renderKitten(catImage1, catDescription1, catName1, catRace1);
const kittenTwo = renderKitten(catImage2, catDescription2, catName2, catRace2);
const kittenThree = renderKitten(
  catImage3,
  catDescription3,
  catName3,
  catRace3
);

elementList.innerHTML = kittenOne + kittenTwo + kittenThree;

function renderKitten(url, description, name, race) {
  return `<li class="card">
            <article>
              <img
                class="card_img"
                src= ${url}
                alt="siames-cat"
              />
              <h3 class="card_title">${name.toUpperCase()}</h3>
              <h4 class="card_race">${race}</h4>
              <p class="card_description">
                ${description}
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
    if (catDescription1.includes(descrSearchText)) {
      if(cardRace.value != ""){
        cardRace.value = "Uy que despiste, no sabemos su raza";
        elementList.innerHTML += kittenOne;
      } else{
        elementList.innerHTML += kittenOne;
      }
      
    }
    if (catDescription2.includes(descrSearchText)) {
      elementList.innerHTML += kittenTwo;
    }
    if (catDescription3.includes(descrSearchText)) {
      elementList.innerHTML += kittenThree;
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
