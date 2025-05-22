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

// === TRIVIA GAME ===
const triviaQuestions = [
  {
    question: "Quin any es va publicar GPT-3?",
    options: ["2018", "2020", "2022", "2016"],
    answer: 1
  },
  {
    question: "Quina empresa desenvolupa Claude?",
    options: ["OpenAI", "Google", "Anthropic", "Meta"],
    answer: 2
  },
  {
    question: "Per a què serveix un LLM?",
    options: [
      "Generar text i comprendre llenguatge",
      "Fer càlculs matemàtics avançats",
      "Controlar robots físics",
      "Crear imatges 3D"
    ],
    answer: 0
  }
];

let triviaIndex = 0;
let triviaScore = 0;

function showTriviaQuestion() {
  const q = triviaQuestions[triviaIndex];
  document.getElementById('trivia-progress').innerHTML = 
    `<progress value="${triviaIndex + 1}" max="${triviaQuestions.length}" style="width:80%;height:18px;"></progress>
     <div style="margin-bottom:0.5rem;font-size:1rem;">Pregunta ${triviaIndex + 1} de ${triviaQuestions.length}</div>`;
  document.getElementById('trivia-question').textContent = q.question;
  const optionsDiv = document.getElementById('trivia-options');
  optionsDiv.innerHTML = '';
  document.getElementById('trivia-feedback').textContent = '';
  document.getElementById('trivia-next').style.display = 'none';

  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.onclick = () => checkTriviaAnswer(idx);
    btn.style.margin = '0.5rem 0.5rem 0 0';
    optionsDiv.appendChild(btn);
  });
}

function showFinalScore() {
  document.getElementById('trivia-question').innerHTML = `<span class="trivia-final">Has acabat el trivia!</span>`;
  document.getElementById('trivia-options').innerHTML = '';
  document.getElementById('trivia-feedback').innerHTML = `<span class="trivia-puntuacio">Puntuació final: <strong>${triviaScore} / ${triviaQuestions.length}</strong></span>`;
  document.getElementById('trivia-next').textContent = "Torna a començar";
  document.getElementById('trivia-next').style.display = 'block';
}

function checkTriviaAnswer(selected) {
  const q = triviaQuestions[triviaIndex];
  const feedback = document.getElementById('trivia-feedback');
  if (selected === q.answer) {
    feedback.innerHTML = `<span class="trivia-correcte">Correcte! 🎉</span>`;
    feedback.style.color = ""; // Reset color, use CSS
    triviaScore++;
  } else {
    feedback.innerHTML = `<span class="trivia-incorrecte">Incorrecte! 😅</span>`;
    feedback.style.color = ""; // Reset color, use CSS
  }
  // Deshabilita los botones
  Array.from(document.getElementById('trivia-options').children).forEach(btn => btn.disabled = true);
  document.getElementById('trivia-next').style.display = 'block';
  document.getElementById('trivia-next').textContent = 
    triviaIndex === triviaQuestions.length - 1 ? "Veure puntuació" : "Següent pregunta";
}

document.getElementById('trivia-next').onclick = () => {
  if (triviaIndex < triviaQuestions.length - 1) {
    triviaIndex++;
    showTriviaQuestion();
  } else {
    // Reiniciar para volver a jugar
    triviaIndex = 0;
    triviaScore = 0;
    showTriviaQuestion();
  }
};

// Inicializa la primera pregunta al cargar la página
if (document.getElementById('trivia-question')) {
  showTriviaQuestion();
}

// Observador de intersección para secciones
document.querySelectorAll('section').forEach(sec => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.2 });
  observer.observe(sec);
});
