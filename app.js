import { setStorage, getSingleHero, deleteHero } from './js/useInternalStorage.js';
import { toTitleCase } from './js/titleCase.js';
import { crearCartas } from './js/card.js';

const imagen = document.getElementById("imagenHeroe");
const botonAgregar = document.querySelector("#botonAgregar");
const botonEliminarHeroe = document.querySelector("#botonEliminarHeroe");
const nombreEliminar = document.querySelector("#nombreEliminar")
const nombre = document.querySelector("#nombreHeroe");
const edad = document.querySelector("#edadHeroe");
const secreto = document.querySelector("#nombreSecretoHeroe");
const longitud = document.querySelector("#longitud");
const latitud = document.querySelector("#latitud");

botonAgregar.addEventListener("click", (event) => {
  event.preventDefault();
  if (!!nombre.value) {
    const hero = {
      nombre: nombre.value,
      edad: edad.value,
      codName: secreto.value || nombre.value,
      latitud: latitud.value,
      longitud: longitud.value,
      imagen: imagen.value,
    };
    setStorage(hero);
    location.reload();
  } else {
    alert("No puedes inciar un heroe sin nombre");
  }
})

nombre.addEventListener("change", ({ target }) => {
  const nombreMin = target.value?.toLowerCase();
  let hero = getSingleHero(nombreMin);
  if (!!hero) {
    nombre.value = toTitleCase(hero.nombre);
    edad.value = hero.edad;
    secreto.value = hero.codName;
    latitud.value = hero.latitud;
    longitud.value = hero.longitud;
  }
})

botonEliminarHeroe.addEventListener("click", () => {
  deleteHero(nombreEliminar.value);
  location.reload();
})

document.addEventListener("DOMContentLoaded", (event) => {
  crearCartas();
})
