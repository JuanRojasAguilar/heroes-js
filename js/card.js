const cardContainer = document.getElementById("cardContainer");

const crearCartas = () => {
  const heroNames = Object.keys(localStorage);
  heroNames.forEach((heroName) => {
    const heroObject = localStorage.getItem(heroName);
    const hero = JSON.parse(heroObject);
    cardContainer.innerHTML += `
      <div class="card" style="width: 18rem;">
        <img src="${hero.imagen}" class="card-img-top" alt="Imagen de ${hero.nombre}">
        <div class="card-body">
          <h5 class="card-title">${hero.nombre}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><strong>Edad:</strong> ${hero.edad}</li>
          <li class="list-group-item">
            <strong>Longitud:</strong> ${hero.longitud}
          </li>
          <li class="list-group-item">
            <strong>Latitud:</strong> ${hero.latitud}
          </li>
          <li class="list-group-item">
            <strong>Nombre SECRETO:</strong>
            <span class="nombreRevelado">${hero.codName}</span>
          </li>
        </ul>
      </div>`
  })
}

export { crearCartas };
