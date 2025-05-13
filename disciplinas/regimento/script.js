// 🚀 CONFIGURAÇÃO DO CONTENTFUL
const client = contentful.createClient({
  space: 'cvwlultzovzs',
  accessToken: 'XRc8tJn8Mplu0wDlQeLjJsOdc_HeFtLgkKGdxPE2rp0'
});

console.log("✅ Contentful client inicializado");

// ✅ FUNÇÃO: Carregar Aulas
async function carregarAulas() {
  try {
    console.log("🔄 Buscando aulas...");
    const response = await client.getEntries({
      content_type: 'disciplina',
      'fields.categoria': 'regimento',
      'fields.tipo': 'aula',
      order: 'fields.ordem'
    });

    console.log(`📚 ${response.items.length} aulas recebidas`);
    renderizarAulas(response.items);
  } catch (erro) {
    console.error('❌ Erro ao buscar aulas:', erro);
  }
}

// ✅ RENDERIZAÇÃO: Aulas
function renderizarAulas(aulas) {
  const container = document.getElementById('aulas');
  if (!container) {
    console.warn("⚠️ Container #aulas não encontrado");
    return;
  }

  container.innerHTML = '';

  if (!aulas.length) {
    container.innerHTML = '<p>Nenhuma aula encontrada.</p>';
    return;
  }

  aulas.forEach(item => {
    const { titulo, descricao, pdfoulink } = item.fields;

    const descricaoTexto = descricao?.content?.[0]?.content?.[0]?.value || 'Descrição não disponível.';
    const urlArquivo = pdfoulink?.fields?.file?.url
      ? `https:${pdfoulink.fields.file.url}`
      : '#';

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

// ✅ FUNÇÃO: Carregar Planejamento
async function carregarPlanejamento() {
  try {
    console.log("🔄 Buscando planejamento...");
    const response = await client.getEntries({
      content_type: 'disciplina',
      'fields.categoria': 'regimento',
      'fields.tipo': 'planejamento',
      order: 'fields.ordem'
    });

    console.log(`✅ ${response.items.length} tarefas encontradas`);
    const container = document.getElementById('lista-tarefas');
    if (!container) {
      console.warn("⚠️ Container #lista-tarefas não encontrado");
      return;
    }

    container.innerHTML = '';

    response.items.forEach((item, idx) => {
      const { titulo } = item.fields;

      const li = document.createElement('li');

      const input = document.createElement('input');
      input.type = 'checkbox';
      input.className = 'tarefa';
      input.id = `tarefa-${idx}`;
      input.setAttribute('aria-label', titulo);

      const label = document.createElement('label');
      label.setAttribute('for', `tarefa-${idx}`);
      label.textContent = titulo;

      li.appendChild(input);
      li.appendChild(label);
      container.appendChild(li);
    });

    iniciarPlanejamento();
  } catch (erro) {
    console.error('❌ Erro ao carregar planejamento:', erro);
  }
}

// ✅ FUNÇÃO: Planejamento com LocalStorage
function iniciarPlanejamento() {
  const checkboxes = document.querySelectorAll(".tarefa");
  const progresso = document.getElementById("progresso");

  if (!checkboxes.length || !progresso) {
    console.warn("⚠️ Planejamento não iniciado: elementos ausentes.");
    return;
  }

  function atualizarProgresso() {
    const total = checkboxes.length;
    const marcadas = Array.from(checkboxes).filter(c => c.checked).length;
    const percentual = Math.round((marcadas / total) * 100);

    progresso.value = percentual;
    document.getElementById("percentual").textContent = `${percentual}%`;

    localStorage.setItem("progresso_regimento", percentual);
    checkboxes.forEach((cb, idx) => {
      localStorage.setItem(`tarefa_regimento_${idx}`, cb.checked);
    });
  }

  checkboxes.forEach((cb, idx) => {
    cb.checked = localStorage.getItem(`tarefa_regimento_${idx}`) === "true";
    cb.addEventListener("change", atualizarProgresso);
  });

  const progressoSalvo = localStorage.getItem("progresso_regimento");
  if (progressoSalvo) {
    progresso.value = progressoSalvo;
    document.getElementById("percentual").textContent = `${progressoSalvo}%`;
  }

  atualizarProgresso();
  console.log("✅ Planejamento carregado");
}

// ✅ FLASHCARDS (estático por enquanto)
(function () {
  const flashcards = [
    { pergunta: "Qual é o objetivo principal do Regimento Interno?", resposta: "Estabelecer normas para o funcionamento da instituição." },
    { pergunta: "Quem é responsável por modificar o Regimento Interno?", resposta: "A Assembleia Geral, mediante votação." },
    { pergunta: "Com que frequência o Regimento Interno deve ser revisado?", resposta: "A cada dois anos ou quando necessário." }
  ];

  let indiceAtual = 0;

  function exibirFlashcard(indice) {
    const card = flashcards[indice];
    const pergunta = document.getElementById("pergunta");
    const resposta = document.getElementById("resposta");
    const flashcard = document.getElementById("flashcard");

    if (pergunta && resposta && flashcard) {
      pergunta.textContent = card.pergunta;
      resposta.textContent = card.resposta;
      flashcard.classList.remove("flipped");
    }
  }

  function proximoFlashcard() {
    indiceAtual = (indiceAtual + 1) % flashcards.length;
    exibirFlashcard(indiceAtual);
  }

  function flashcardAnterior() {
    indiceAtual = (indiceAtual - 1 + flashcards.length) % flashcards.length;
    exibirFlashcard(indiceAtual);
  }

  function embaralharFlashcards() {
    for (let i = flashcards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [flashcards[i], flashcards[j]] = [flashcards[j], flashcards[i]];
    }
    indiceAtual = 0;
    exibirFlashcard(indiceAtual);
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("proximo")?.addEventListener("click", proximoFlashcard);
    document.getElementById("anterior")?.addEventListener("click", flashcardAnterior);
    document.getElementById("embaralhar")?.addEventListener("click", embaralharFlashcards);
    document.getElementById("flashcard")?.addEventListener("click", () => {
      document.getElementById("flashcard").classList.toggle("flipped");
    });

    document.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowRight": proximoFlashcard(); break;
        case "ArrowLeft": flashcardAnterior(); break;
        case "Enter": document.getElementById("flashcard")?.classList.toggle("flipped"); break;
      }
    });

    exibirFlashcard(indiceAtual);
  });
})();
