var alunos = [];
var totalAlunos = 0;

var isFirefox = typeof InstallTrigger !== "undefined";
var storage = localStorage;

if (isFirefox) {
  storage = sessionStorage;
}

function montarTabela() {
  alunos = getVetorAlunos();
  bubbleSort(alunos, ordenar);

  for (let aluno of alunos) {
    if (getOrdenacao() == "Crescente Nome Aprovados") {
      if (aluno.RESULTADO.toLowerCase() == "aprovado") {
        loadAluno(aluno);
      }
    } else {
      loadAluno(aluno);
    }
  }
}

montarTabela();

function getOrdenacao() {
  let url = window.location.href.split("/");
  let page = url[url.length - 1];
  if (page == "relatorioA.html") {
    return "Crescente Nome";
  } else if (page == "relatorioB.html") {
    return "Descrescente RA";
  } else if (page == "relatorioC.html") {
    return "Crescente Nome Aprovados";
  }
}

function loadAluno(aluno) {
  const tabela = document.getElementById("table");
  let linha = document.createElement("tr");
  let nome = document.createElement("td");
  let ra = document.createElement("td");
  let idade = document.createElement("td");
  let sexo = document.createElement("td");
  let media = document.createElement("td");
  let resultado = document.createElement("td");

  nome.textContent = aluno.NOME;
  ra.textContent = aluno.RA;
  idade.textContent = aluno.IDADE;
  sexo.textContent = aluno.SEXO;
  media.textContent = aluno.MEDIA;
  resultado.textContent = aluno.RESULTADO;

  tabela.appendChild(linha);
  linha.appendChild(nome);
  linha.appendChild(ra);
  linha.appendChild(idade);
  linha.appendChild(sexo);
  linha.appendChild(media);
  linha.appendChild(resultado);
}

function bubbleSort(vetor, fnComp) {
  let ordenacao = getOrdenacao();
  let tam = vetor.length - 1;

  do {
    for (let i = 0; i < tam; i++) {
      if (fnComp(ordenacao, vetor[i], vetor[i + 1])) {
        [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]];
      }
    }
    tam--;
  } while (tam > 0);
}

function ordenar(ordernacao, aluno, aluno2) {
  if (ordernacao == "Crescente Nome") {
    return aluno.NOME > aluno2.NOME;
  } else if (ordernacao == "Descrescente RA") {
    return aluno.RA < aluno2.RA;
  } else if (ordernacao == "Crescente Nome Aprovados") {
    if (aluno.RESULTADO == "Aprovado") {
      return aluno.NOME > aluno2.NOME;
    }
  }
}

function getVetorAlunos() {
  if (storage.getItem("alunos") != null && storage.getItem("alunos") != []) {
    alunos = JSON.parse(storage.getItem("alunos"));
  }
  totalAlunos = alunos.length;
  return alunos;
}

var botao = document.getElementById("voltar");

botao.addEventListener("click", () => {
  location.href = "index.html";
});
