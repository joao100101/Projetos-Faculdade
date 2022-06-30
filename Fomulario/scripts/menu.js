var isFirefox = typeof InstallTrigger !== "undefined";
var storage = localStorage;

if (isFirefox) {
  storage = sessionStorage;
}

function telaCad(){
    location.href = "cadastro.html";
}


var btnCad = document.getElementById('cadastro');
var btnRel1 = document.getElementById('relatorioNome')
var btnRel2 = document.getElementById('relatorioRa');
var btnRel3 = document.getElementById('relatorioNomeAprovados');
var btnReset = document.getElementById('reset');

btnCad.addEventListener('click', () => {
    location.href = "cadastro.html"
})

btnRel1.addEventListener('click', () => {
    location.href = "relatorioA.html"
})

btnRel2.addEventListener('click', () => {
    location.href = "relatorioB.html"
})

btnRel3.addEventListener('click', () => {
    location.href = "relatorioC.html"
})

btnReset.addEventListener('click', () => {
    storage.removeItem('alunos')
})

const btn = document.getElementById('reset')
const divMessage = document.querySelector(".alert");


function ativar(msg) {
    const message = document.createElement("div");
    message.classList.add("message");
    message.innerText = msg;
    divMessage.appendChild(message);

    setTimeout(() => {
        message.style.display = "none";
    }, 3000);
}

btn.addEventListener("click", () => {
    ativar("RESETADO COM SUCESSO");
});
