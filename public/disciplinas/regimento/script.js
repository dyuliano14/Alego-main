// 🚀 CONFIGURAÇÃO DO CONTENTFUL
const client = contentful.createClient({
  space: 'cvwlultzovzs',
  accessToken: 'XRc8tJn8Mplu0wDlQeLjJsOdc_HeFtLgkKGdxPE2rp0'
});
console.log("✅ Contentful client inicializado");

// 📦 COMPONENTES DINÂMICOS
async function carregarComponentes() {
  const componentes = [
    ["header", "../../modulos/header.html"],
    ["progressao", "../../modulos/progressao.html"],
    ["planejamento", "./planejamento.html"],
    ["aulas", "./aulas.html"],
    ["resumos", "./resumos.html"],
    ["flashcard-container", "./flashcards.html"],
    ["apresentacoes", "./apresentacoes.html"],
    ["mapas", "./mapa_mental.html"],
    ["footer", "../../modulos/footer.html"]
  ];

  for (const [id, url] of componentes) {
    try {
      const resposta = await fetch(url);
      if (!resposta.ok) throw new Error(`Erro ao carregar ${url}: ${resposta.status}`);
      const html = await resposta.text();
      const container = document.getElementById(id);
      if (container) {
        container.innerHTML = html;
        if (id === "planejamento") window.carregarPlanejamento?.();
        if (id === "aulas") window.carregarAulas?.();
        if (id === "resumos") window.carregarResumos?.();
        if (id === "mapas") window.carregarMapas?.();
        if (id === "apresentacoes") window.carregarApresentacoes?.();
        
      }
    } catch (erro) {
      console.error(`❌ Falha ao carregar componente ${id} de ${url}`, erro);
    }
  }
}

// 📘 PLANEJAMENTO
async function carregarPlanejamento() {
  try {
    console.log("🔄 Buscando planejamento...");
    const response = await client.getEntries({
      content_type: 'disciplina',
      'fields.categoria': 'regimento',
      'fields.tipo': 'planejamento',
      order: 'fields.ordem'
    });

    window.carregarPlanejamento = carregarPlanejamento;

    const container = document.getElementById('lista-tarefas');
    if (!container) {
      console.warn("⚠️ Container #lista-tarefas não encontrado");
      return;
    }

    container.innerHTML = '';
    response.items.forEach((item, idx) => {
      const { titulo } = item.fields;
      container.innerHTML += `
        <li>
          <input type="checkbox" id="tarefa-${idx}" class="tarefa" aria-label="${titulo}">
          <label for="tarefa-${idx}">${titulo}</label>
        </li>
      `;
    });

    iniciarPlanejamento();
  } catch (erro) {
    console.error('❌ Erro ao carregar planejamento:', erro);
  }
}

// 🔁 LOCALSTORAGE DO PLANEJAMENTO
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

// 📄 AULAS
async function carregarAulas() {
  try {
    console.log("🔄 Buscando aulas...");
    const response = await client.getEntries({
      content_type: 'disciplina',
      'fields.categoria': 'regimento',
      'fields.tipo': 'aula',
      order: 'fields.ordem'
    });
    window.carregarAulas = carregarAulas;

    console.log(`📚 ${response.items.length} aulas recebidas`);
    renderizarAulas(response.items);
  } catch (erro) {
    console.error('❌ Erro ao buscar aulas:', erro);
  }
}


function renderizarAulas(aulas) {
  const container = document.getElementById('lista-aulas');
  if (!container) {
    console.warn("⚠️ Container #lista-aulas não encontrado");
    return;
  }

  container.innerHTML = aulas.length
    ? aulas.map(({ fields }) => {
      const titulo = fields.titulo;
      const descricao = fields.descricao?.content?.[0]?.content?.[0]?.value || "Descrição não disponível.";
      const urlArquivo = fields.pdfoulink?.fields?.file?.url
        ? `https:${fields.pdfoulink.fields.file.url}`
        : "#";

      return `
          <div class="aula-bloco">
            <h3>${titulo}</h3>
            <p>${descricao}</p>
            <a href="${urlArquivo}" target="_blank"><button class="botao bt_aula">📄 Acessar PDF</a></button>
          </div>
        `;
    }).join('')
    : '<p>Nenhuma aula encontrada.</p>';
}


// 📝  RESUMOS
async function carregarResumos() {
  try {
    console.log("🔄 Buscando resumos...");
    const response = await client.getEntries({
      content_type: 'disciplina',
      'fields.categoria': 'regimento',
      'fields.tipo': 'resumos',
      order: 'fields.ordem'
    });
    window.carregarResumos = carregarResumos;

    console.log(`📚 ${response.items.length} resumos recebidas`);
    renderizarResumos(response.items);
  } catch (erro) {
    console.error('❌ Erro ao buscar aulas:', erro);
  }
}


function renderizarResumos(resumos) {
  const container = document.getElementById('listar-resumos');
  if (!container) {
    console.warn("⚠️ Container #listar-resumos não encontrado");
    return;
  }

  container.innerHTML = resumos.length
    ? resumos.map(({ fields }) => {
      const titulo = fields.titulo;
      const descricao = fields.descricao?.content?.[0]?.content?.[0]?.value || "Descrição não disponível.";
      const urlArquivo = fields.pdfoulink?.fields?.file?.url
        ? `https:${fields.pdfoulink.fields.file.url}`
        : "#";

      return `
          <div class="resumos-bloco">
            <h3>${titulo}</h3>
            <p>${descricao}</p>
            <a href="${urlArquivo}" target="_blank"><button class="botao bt_resumo">📄 Acessar PDF</a></button>
          </div>
        `;
    }).join('')
    : '<p>Nenhum resumo encontrada.</p>';
}

// 📄 Apresentação 
async function carregarApresentacoes() {
  try {
    console.log("🔄 Buscando apresentacoes...");
    const response = await client.getEntries({
      content_type: 'disciplina',
      'fields.categoria': 'regimento',
      'fields.tipo': 'apresentacoes',
      order: 'fields.ordem'
    });
    window.carregarApresentacoes = carregarApresentacoes;

    console.log(`📚 ${response.items.length} apresentacoes recebidas`);
    renderizarApresentacoes(response.items);
  } catch (erro) {
    console.error('❌ Erro ao buscar apresentacoes:', erro);
  }
}


function renderizarApresentacoes(apresentacoes) {
  const container = document.getElementById('lista-apresentacoes');
  if (!container) {
    console.warn("⚠️ Container #lista-apresentacoes não encontrado");
    return;
  }

  container.innerHTML = apresentacoes.length
    ? apresentacoes.map(({ fields }) => {
      const titulo = fields.titulo;
      const descricao = fields.descricao?.content?.[0]?.content?.[0]?.value || "Descrição não disponível.";
      const urlArquivo = fields.pdfoulink?.fields?.file?.url
        ? `https:${fields.pdfoulink.fields.file.url}`
        : "#";

      return `
          <div class="apresentacoes-bloco">
            <h3>${titulo}</h3>
            <p>${descricao}</p>
            <a href="${urlArquivo}" target="_blank"><button class="botao bt_apresentacoes">📄 Acessar PDF</a></button>
          </div>
        `;
    }).join('')
    : '<p>Nenhuma apresentacoes encontrada.</p>';
}

// 🧠 FLASHCARDS ESTÁTICOS
(function () {
  const flashcards = [
    { pergunta: "Qual é o objetivo principal do Regimento Interno?", resposta: "Estabelecer normas para o funcionamento da instituição." },
    { pergunta: "Quem é responsável por modificar o Regimento Interno?", resposta: "A Assembleia Geral, mediante votação." },
    { pergunta: "Com que frequência o Regimento Interno deve ser revisado?", resposta: "A cada dois anos ou quando necessário." }
  ];

  let indiceAtual = 0;

  function exibirFlashcard(indice) {
    const card = flashcards[indice];
    document.getElementById("pergunta").textContent = card.pergunta;
    document.getElementById("resposta").textContent = card.resposta;
    document.getElementById("flashcard").classList.remove("flipped");
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

// 🚀 INICIALIZAÇÃO
document.addEventListener("DOMContentLoaded", () => {
  carregarComponentes();
});
