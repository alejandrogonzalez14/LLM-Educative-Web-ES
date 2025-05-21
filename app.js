// Boton de mostrar/ocultar comparativa
document.getElementById('toggleButton').addEventListener('click', () => {
  const comparativa = document.getElementById('comparativa');
  comparativa.style.display =
    comparativa.style.display === 'none' ? 'block' : 'none';
});

// Mensaje emergente
document.getElementById('alertButton').addEventListener('click', () => {
  alert('Això només és la opinió personal dels desenvolupadors');
});

// Canvi de tema/color
let temaActual = 0;
const temes = ['tema-clar', 'tema-rosa', 'tema-beix'];

document.getElementById('themeButton').addEventListener('click', () => {
  // Elimina la classe anterior
  document.body.classList.remove(...temes);
  // Calcula el nou tema
  temaActual = (temaActual + 1) % temes.length;
  // Afegeix la nova classe
  document.body.classList.add(temes[temaActual]);
});

document.getElementById('themeButton').addEventListener('click', () => {
  temaActual = (temaActual + 1) % temes.length;
  const tema = temes[temaActual];
  document.body.style.backgroundColor = tema.backgroundColor;
  document.body.style.color = tema.color;
});
