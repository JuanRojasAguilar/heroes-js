const getAllHeroes = () => {
  const heroes = localStorage.
}

const getSingleHero = (nombre) => {
  const nombreMin = nombre.toLowerCase();
  const hero = localStorage.getItem(nombreMin);
  const heroObj = JSON.parse(hero);
  return heroObj;
}

const setStorage = (hero) => {
  const newHero = {
    nombre: hero.nombre,
    edad: hero.edad,
    codName: hero.nombreSecreto,
    latitud: hero.latitud,
    longitud: hero.longitud,
    imagen: hero.imagen,
  };
  let nombreMin = hero.nombre.toLowerCase();
  if (!!getSingleHero(nombreMin)) {
    localStorage.removeItem(nombreMin);
  }
  const heroeJSON = JSON.stringify(newHero);
  localStorage.setItem(nombreMin, heroeJSON);
}

export { setStorage, getSingleHero };

