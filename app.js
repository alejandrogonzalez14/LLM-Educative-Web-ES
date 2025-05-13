//Boton de mostrar/ocultar comparativa
document.getElementById('toggleButton').addEventListener('click', () => {
    const comparativa = document.getElementById('comparativa');
    comparativa.style.display = comparativa.style.display === 'none' ? 'block' : 'none';
  });
  
//Mensaje emergente 
  document.getElementById('alertButton').addEventListener('click', () => {
    alert('Això només és la opinió personal dels desenvolupadors');
  });
  
// Canvi de tema/color
let temaActual = 0;
const temes = [
  { backgroundColor: '#f0f8ff', color: '#000080' }, // Tema clar (blau clar amb text blau marí)
  { backgroundColor: '#ffe4e1', color: '#8b0000' },  // Tema pastel (rosa pàl·lid amb text vermell fosc)
  { backgroundColor: '#ffefd5', color: '#8b4513' }  // Tema pastel (beix pàl·lid amb text marró)
];

document.getElementById('themeButton').addEventListener('click', () => {
  temaActual = (temaActual + 1) % temes.length;
  const tema = temes[temaActual];
  document.body.style.backgroundColor = tema.backgroundColor;
  document.body.style.color = tema.color;
});
  