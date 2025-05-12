// script.js

function iniciarPlanejamento() {
  const checkboxes = document.querySelectorAll(".tarefa");
  const progresso = document.getElementById("progresso");

  if (!checkboxes.length || !progresso) return;

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
  if (progressoSalvo) progresso.value = progressoSalvo;
}
// Código dos flashcards
(function () {
    const flashcards = [
        { pergunta: "Qual é o objetivo principal do Regimento Interno?", resposta: "Estabelecer normas para o funcionamento da instituição." },
        { pergunta: "Quem é responsável por modificar o Regimento Interno?", resposta: "A Assembleia Geral, mediante votação." },
        { pergunta: "Com que frequência o Regimento Interno deve ser revisado?", resposta: "A cada dois anos ou quando necessário." },
        // Adicione mais flashcards conforme necessário
    ];

    let indiceAtual = 0;
    const flashcard = document.getElementById("flashcard");
    const pergunta = document.getElementById("pergunta");
    const resposta = document.getElementById("resposta");

    function exibirFlashcard(indice) {
        const card = flashcards[indice];
        pergunta.textContent = card.pergunta;
        resposta.textContent = card.resposta;
        flashcard.classList.remove("flipped");
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

    flashcard.addEventListener("click", () => {
        flashcard.classList.toggle("flipped");
    });

    document.getElementById("proximo").addEventListener("click", proximoFlashcard);
    document.getElementById("anterior").addEventListener("click", flashcardAnterior);
    document.getElementById("embaralhar").addEventListener("click", embaralharFlashcards);

    // Navegação via teclado
    document.addEventListener("keydown", (event) => {
        switch (event.key) {
            case "ArrowRight":
                proximoFlashcard();
                break;
            case "ArrowLeft":
                flashcardAnterior();
                break;
            case "Enter":
                flashcard.classList.toggle("flipped");
                break;
        }
    });

    // Inicialização
    exibirFlashcard(indiceAtual);
})();

function myFunction() {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}
const spaceId = 'SEU_SPACE_ID';
const accessToken = 'SEU_ACCESS_TOKEN';

async function fetchContent() {
  const res = await fetch(`https://cdn.contentful.com/spaces/${spaceId}/entries?access_token=${accessToken}`);
  const data = await res.json();
  console.log(data); // Verifique o que vem da API
}

fetchContent();

// contefull

// Configuração inicial da API do Contentful
const client = contentful.createClient({
  space: 'cvwlultzovzs', // ← substitua aqui
  accessToken: 'XRc8tJn8Mplu0wDlQeLjJsOdc_HeFtLgkKGdxPE2rp0' // ← substitua aqui
});

// Função que busca as aulas do Contentful
async function carregarAulas() {
  try {
    const response = await client.getEntries({
      content_type: 'disciplina',
      'fields.categoria': 'regimento',
      order: 'fields.ordem' // organiza por ordem crescente
    });

    renderizarAulas(response.items);
  } catch (erro) {
    console.error('Erro ao carregar disciplinas:', erro);
  }
}

function renderizarAulas(aulas) {
  const container = document.getElementById('aulas'); // usa o ID correto da página
  container.innerHTML = '';

  if (aulas.length === 0) {
    container.innerHTML = '<p>Nenhuma aula encontrada.</p>';
    return;
  }

  aulas.forEach(item => {
    const { titulo, descricao, pdfoulink } = item.fields;

    // Se descrição for Rich Text (caso ainda esteja assim no Contentful)
    const descricaoTexto = descricao?.content?.[0]?.content?.[0]?.value || 'Sem descrição.';

    const urlArquivo = pdfoulink?.fields?.file?.url
      ? `https:${pdfoulink.fields.file.url}`
      : '#';

    const bloco = document.createElement('div');
    bloco.classList.add('aula-bloco');

    bloco.innerHTML = `
      <h2>${titulo}</h2>
      <p>${descricaoTexto}</p>
      <a href="${urlArquivo}" target="_blank">📄 Acessar PDF</a>
    `;

    container.appendChild(bloco);
  });
}
// Chamar a função quando a página carregar
document.addEventListener('DOMContentLoaded', carregarAulas);
