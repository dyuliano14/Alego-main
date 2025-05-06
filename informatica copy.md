# 📘 Regimento Interno - ALEGO

## 📄 PDFs por Aula

- [Aula 00 - Introdução](pdfs/regimento/Aula00.pdf)
- [Aula 01 - Organização](pdfs/regimento/Aula01.pdf)
- [Aula 02 - Funcionamento da Assembleia](pdfs/regimento/Aula02.pdf)
- [Aula 03 - Atos e Procedimentos](pdfs/regimento/Aula03.pdf)
- [Aula 04 - Comissões](pdfs/regimento/Aula04.pdf)
- [Aula 05 - Sessões e Votações](pdfs/regimento/Aula05.pdf)
- [Aula 06 - Disposições Finais](pdfs/regimento/Aula06.pdf)

---

## 🧠 Recursos Complementares

- [📄 Resumos PDF](pdfs/regimento/Resumo_Geral_Regimento.pdf)
- [🧠 Flashcards](flashcards/regimento/index.html)
- [🎞️ Apresentação Interativa](apresentacoes/regimento/index.html)

---

## ✅ Progresso de Estudos

 <div id="study-progress">
    <h3>📘 Progresso de Estudos</h3>
    <ul id="study-checklist">
      <li>Aula 00:
        <label><input type="checkbox" data-id="reg-aula00-leitura"> Leitura</label>
        <label><input type="checkbox" data-id="reg-aula00-resumo"> Resumo</label>
        <label><input type="checkbox" data-id="reg-aula00-flash"> Flashcards</label>
      </li>
      <li>Aula 01:
        <label><input type="checkbox" data-id="reg-aula01-leitura"> Leitura</label>
        <label><input type="checkbox" data-id="reg-aula01-resumo"> Resumo</label>
        <label><input type="checkbox" data-id="reg-aula01-flash"> Flashcards</label>
      </li>
      <li>Aula 02:
        <label><input type="checkbox" data-id="reg-aula02-leitura"> Leitura</label>
        <label><input type="checkbox" data-id="reg-aula02-resumo"> Resumo</label>
        <label><input type="checkbox" data-id="reg-aula02-flash"> Flashcards</label>
      </li>
      <li>Aula 03:
        <label><input type="checkbox" data-id="reg-aula03-leitura"> Leitura</label>
        <label><input type="checkbox" data-id="reg-aula03-resumo"> Resumo</label>
        <label><input type="checkbox" data-id="reg-aula03-flash"> Flashcards</label>
      </li>
      <li>Aula 04:
        <label><input type="checkbox" data-id="reg-aula04-leitura"> Leitura</label>
        <label><input type="checkbox" data-id="reg-aula04-resumo"> Resumo</label>
        <label><input type="checkbox" data-id="reg-aula04-flash"> Flashcards</label>
      </li>
      <li>Aula 05:
        <label><input type="checkbox" data-id="reg-aula05-leitura"> Leitura</label>
        <label><input type="checkbox" data-id="reg-aula05-resumo"> Resumo</label>
        <label><input type="checkbox" data-id="reg-aula05-flash"> Flashcards</label>
      </li>
      <li>Aula 06:
        <label><input type="checkbox" data-id="reg-aula06-leitura"> Leitura</label>
        <label><input type="checkbox" data-id="reg-aula06-resumo"> Resumo</label>
        <label><input type="checkbox" data-id="reg-aula06-flash"> Flashcards</label>
      </li>
    </ul>
  </div>

  <div class="progress-container">
    <div class="progress-bar" id="progress-bar"></div>
  </div>
  </div>

  <style>
    #study-progress {
      margin: 20px 0;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 8px;
    }

    .progress-container {
      margin-top: 15px;
      width: 100%;
      background: #eee;
      height: 20px;
      border-radius: 10px;
      overflow: hidden;
    }

    .progress-bar {
      height: 100%;
      width: 0%;
      background: linear-gradient(to right, #4caf50, #8bc34a);
      transition: width 0.3s ease-in-out;
    }

    #study-checklist {
      list-style: none;
      padding-left: 0;
    }

    #study-checklist li {
      margin: 8px 0;
    }

    <style>#study-checklist li {
      margin: 8px 0;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 10px;
    }

    #study-checklist label {
      background: #eee;
      padding: 5px 10px;
      border-radius: 5px;
      font-size: 0.9rem;
      cursor: pointer;
      transition: background 0.3s;
    }

    #study-checklist label:hover {
      background: #ddd;
    }
  </style>

  <script>
    document.addEventListener("DOMContentLoaded", () => {
      const checkboxes = document.querySelectorAll("#study-checklist input[type='checkbox']");
      const progressBar = document.getElementById("progress-bar");

      function saveProgress() {
        let total = checkboxes.length;
        let done = 0;
        checkboxes.forEach(cb => {
          localStorage.setItem(cb.dataset.id, cb.checked);
          if (cb.checked) done++;
        });
        const percent = (done / total) * 100;
        progressBar.style.width = percent + "%";
      }

      checkboxes.forEach(cb => {
        cb.checked = localStorage.getItem(cb.dataset.id) === "true";
        cb.addEventListener("change", saveProgress);
      });

      saveProgress();
    });
  </script>

**Voltar ao [Início](../index.html)** 🔙
