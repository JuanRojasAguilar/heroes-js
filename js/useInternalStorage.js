const getSingleHero = (nombre) => {
  const nombreMin = nombre.toLowerCase();
  const hero = localStorage.getItem(nombreMin);
  const heroObj = JSON.parse(hero);
  return heroObj;
}

const setStorage = (hero) => {
  if (!!getSingleHero(hero.nombre)) {
    localStorage.removeItem(hero.nombre.toLowerCase());
  }
  const heroeJSON = JSON.stringify(hero);
  localStorage.setItem(hero.nombre.toLowerCase(), heroeJSON);
}

const deleteHero = (nombre) => {
  localStorage.removeItem(nombre.toLowerCase());
}

export { setStorage, getSingleHero, deleteHero };
