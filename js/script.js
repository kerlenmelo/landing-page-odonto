// Animações de Scroll na página
function animarAoScroll() {
  const elementsText = document.querySelectorAll('.text-up');
  const elementsImg = document.querySelectorAll('.img-zoom');
  const windowHeight = window.innerHeight;

  elementsText.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    const bottom = el.getBoundingClientRect().bottom;

    if (top < windowHeight - 100 && bottom > 0) {
      el.classList.add('active-text-up');
    } else {
      el.classList.remove('active-text-up');
    }
  });

  elementsImg.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    const bottom = el.getBoundingClientRect().bottom;

    if (top < windowHeight - 100 && bottom > 0) {
      el.classList.add('active-img-zoom');
    } else {
      el.classList.remove('active-img-zoom');
    }
  });
}

window.addEventListener('scroll', animarAoScroll);
window.addEventListener('load', animarAoScroll);
window.addEventListener('hashchange', () => {
  setTimeout(animarAoScroll, 300);
});

// Carrossel de depoimentos
const depoimentos = [
  {
    nome: 'Monique Ribeiro',
    texto: 'Atendimento incrível, equipe maravilhosa!',
    cargo: 'Paciente Odonto Lins',
  },
  {
    nome: 'Silvia Maria',
    texto: 'Muito satisfeita com o tratamento. Excelente!',
    cargo: 'Paciente Odonto Lins',
  },
  {
    nome: 'Carlos Lima',
    texto: 'Profissionais atenciosos. Resultado foi além do esperado!',
    cargo: 'Paciente Odonto Lins',
  },
  {
    nome: 'Renata Oliveira',
    texto: 'Fui muito bem tratada do início ao fim!',
    cargo: 'Paciente Odonto Lins',
  },
  {
    nome: 'Marcos Paulo',
    texto: 'Ambiente limpo e confortável. Gostei bastante!',
    cargo: 'Paciente Odonto Lins',
  },
  {
    nome: 'Ana Beatriz',
    texto: 'Recomendo demais! Muito carinho no atendimento.',
    cargo: 'Paciente Odonto Lins',
  },
  {
    nome: 'Luan Rocha',
    texto: 'Tiraram todas minhas dúvidas com paciência!',
    cargo: 'Paciente Odonto Lins',
  },
  {
    nome: 'Isabela Santos',
    texto: 'Me senti muito segura durante o atendimento.',
    cargo: 'Paciente Odonto Lins',
  },
  {
    nome: 'Camila Prado',
    texto: 'Fui indicada e agora também indico!',
    cargo: 'Paciente Odonto Lins',
  },
  {
    nome: 'Fábio Ferreira',
    texto: 'Melhor clínica que já fui!',
    cargo: 'Paciente Odonto Lins',
  },
  {
    nome: "Joana D'arc",
    texto: 'Sorrindo muito depois do clareamento!',
    cargo: 'Paciente Odonto Lins',
  },
  {
    nome: 'Thiago Costa',
    texto: 'Equipe sensacional!',
    cargo: 'Paciente Odonto Lins',
  },
];

const container = document.getElementById('carouselDepoimentos');
let index = 0;

function renderizarDepoimento(inicio) {
  const novosCards = [];

  for (let i = 0; i < 3; i++) {
    const depoimento = depoimentos[(inicio + i) % depoimentos.length];
    const card = document.createElement('div');
    card.className = 'card p-4 fade-out';
    card.style.minWidth = '300px';
    card.style.flex = '1';
    card.style.transitionDelay = `${i * 0.2}`;

    card.innerHTML = `
      <p>${depoimento.texto}</p>
      <strong class="mt-2 d-block">${depoimento.nome}</strong>
      <span class="text-muted small">${depoimento.cargo}</span>
    `;

    novosCards.push(card);
  }

  container.classList.add('fade-out');
  setTimeout(() => {
    container.innerHTML = '';
    novosCards.forEach((card) => container.appendChild(card));

    void container.offsetWidth;

    container.classList.remove('fade-out');
    novosCards.forEach((card) =>
      setTimeout(() => card.classList.add('fade-in'), 100)
    );
  }, 800);
}

renderizarDepoimento(index);

setInterval(() => {
  index = (index + 1) % depoimentos.length;
  renderizarDepoimento(index);
}, 6000);
