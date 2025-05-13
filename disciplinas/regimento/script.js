const CONTENTFUL_SPACE_ID = 'cvwlultzovzs';
const CONTENTFUL_ACCESS_TOKEN = 'XRc8tJn8Mplu0wDlQeLjJsOdc_HeFtLgkKGdxPE2rp0';

const client = contentful.createClient({
  space: CONTENTFUL_SPACE_ID,
  accessToken: CONTENTFUL_ACCESS_TOKEN
});

console.log('✅ Contentful client inicializado');

// Função genérica para buscar dados do Contentful
async function fetchContentfulEntries(contentType, query = {}) {
  try {
    const response = await client.getEntries({
      content_type: contentType,
      ...query
    });
    console.log(`✅ ${response.items.length} entradas de "${contentType}" encontradas`);
    return response.items;
  } catch (error) {
    console.error(`❌ Erro ao buscar "${contentType}":`, error);
    return []; // Retorna um array vazio para evitar erros em chamadas subsequentes
  }
}

// Carregar Aulas
async function loadAulas() {
  const aulas = await fetchContentfulEntries('aula', { // Use o Content Type ID correto aqui
    'fields.categoria': 'regimento',
    'fields.tipo': 'aula',
    order: 'fields.ordem'
  });
  renderAulas(aulas);
}

function renderAulas(aulas) {
  const container = document.getElementById('aulas');
  if (!container) {
    console.warn('⚠️ Container #aulas não encontrado');
    return;
  }

  container.innerHTML = '';

  if (aulas.length === 0) {
    container.innerHTML = '<p>Nenhuma aula encontrada.</p>';
    return;
  }

  aulas.forEach(aula => {
    const { titulo, descricao, pdfoulink } = aula.fields;
    const descricaoTexto = descricao?.content?.[0]?.content?.[0]?.value || 'Descrição não disponível.';
    const urlArquivo = pdfoulink?.fields?.file?.url ? `https:${pdfoulink.fields.file.url}` : '#';

    const bloco = document.createElement('div');
    bloco.className = 'aula-bloco';
    bloco.innerHTML = `
      <h3>${titulo}</h3>
      <p>${descricaoTexto}</p>
      <a href="${urlArquivo}" target="_blank">📄 Acessar PDF</a>
    `;
    container.appendChild(bloco);
  });
}

// Carregar Planejamento
async function loadPlanejamento() {
  const planejamentoItens = await fetchContentfulEntries('planejamento', { // Use o Content Type ID correto aqui
    'fields.categoria': 'regimento',
    'fields.tipo': 'planejamento',
    order: 'fields.ordem'
  });
  renderPlanejamento(planejamentoItens);
}

function renderPlanejamento(planejamentoItens) {
  const container = document.getElementById('lista-tarefas');
  if (!container) {
    console.warn('⚠️ Container #lista-tarefas não encontrado');
    return;
  }

  container.innerHTML = '';

  if (planejamentoItens.length === 0) {
    container.innerHTML = '<p>Nenhum item de planejamento encontrado.</p>';
    return;
  }

  planejamentoItens.forEach((item, index) => {
    const { titulo } = item.fields;
    const li = document.createElement('li');
    li.innerHTML = `
      <input type="checkbox" id="tarefa-${index}" class="tarefa" aria-label="${titulo}">
      <label for="tarefa-${index}">${titulo}</label>
    `;
    container.appendChild(li);
  });

  initPlanejamento();
}

// Planejamento com LocalStorage
function initPlanejamento() {
  const checkboxes = document.querySelectorAll('.tarefa');
  const progresso = document.getElementById('progresso');
  const percentualElement = document.getElementById('percentual');

  if (!checkboxes.length || !progresso || !percentualElement) {
    console.warn('⚠️ Planejamento não iniciado: elementos ausentes.');
    return;
  }

  function updateProgress() {
    const total = checkboxes.length;
    const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
    const percentage = total === 0 ? 0 : Math.round((checkedCount / total) * 100);

    progresso.value = percentage;
    percentualElement.textContent = `${percentage}%`;

    localStorage.setItem('progresso_regimento', percentage);
    checkboxes.forEach((cb, index) => {
      localStorage.setItem(`tarefa_regimento_${index}`, cb.checked);
    });
  }

  checkboxes.forEach((cb, index) => {
    cb.checked = localStorage.getItem(`tarefa_regimento_${index}`) === 'true';
    cb.addEventListener('change', updateProgress);
  });

  const savedProgress = localStorage.getItem('progresso_regimento');
  if (savedProgress) {
    progresso.value = savedProgress;
    percentualElement.textContent = `${savedProgress}%`;
  }

  updateProgress();
  console.log('✅ Planejamento carregado');
}

// Flashcards (estático por enquanto)
function initFlashcards() {
  const flashcards = [
    { pergunta: 'Qual é o objetivo principal do Regimento Interno?', resposta: 'Estabelecer normas para o funcionamento da instituição.' },
    { pergunta: 'Quem é responsável por modificar o Regimento Interno?', resposta: 'A Assembleia Geral, mediante votação.' },
    { pergunta: 'Com que frequência o Regimento Interno deve ser revisado?', resposta: 'A cada dois anos ou quando necessário.' }
  ];

  let currentCardIndex = 0;
  const questionElement = document.getElementById('pergunta');
  const answerElement = document.getElementById('resposta');
  const flashcardElement = document.getElementById('flashcard');
  const nextButton = document.getElementById('proximo');
  const prevButton = document.getElementById('anterior');
  const shuffleButton = document.getElementById('embaralhar');

  function showCard(index) {
    if (!questionElement || !answerElement || !flashcardElement) return;
    questionElement.textContent = flashcards[index].pergunta;
    answerElement.textContent = flashcards[index].resposta;
    flashcardElement.classList.remove('flipped');
  }

  function showNextCard() {
    currentCardIndex = (currentCardIndex + 1) % flashcards.length;
    showCard(currentCardIndex);
  }

  function showPrevCard() {
    currentCardIndex = (currentCardIndex - 1 + flashcards.length) % flashcards.length;
    showCard(currentCardIndex);
  }

  function shuffleCards() {
    for (let i = flashcards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [flashcards[i], flashcards[j]] = [flashcards[j], flashcards[i]];
    }
    currentCardIndex = 0;
    showCard(currentCardIndex);
  }

  if (nextButton) nextButton.addEventListener('click', showNextCard);
  if (prevButton) prevButton.addEventListener('click', showPrevCard);
  if (shuffleButton) shuffleButton.addEventListener('click', shuffleCards);
  if (flashcardElement) {
    flashcardElement.addEventListener('click', () => flashcardElement.classList.toggle('flipped'));

    document.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'ArrowRight': showNextCard(); break;
        case 'ArrowLeft': showPrevCard(); break;
        case 'Enter': flashcardElement.classList.toggle('flipped'); break;
      }
    });
  }

  showCard(currentCardIndex);
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  initFlashcards(); // Inicializa os flashcards

  // Carrega os dados do Contentful e renderiza
  loadAulas();
  loadPlanejamento();
});
