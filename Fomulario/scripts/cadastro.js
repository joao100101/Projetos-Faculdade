var isFirefox = typeof InstallTrigger !== 'undefined';
var storage = localStorage;

if(isFirefox){
    storage = sessionStorage
}


var alunos = []
var totalAlunos = 0;
function cadastro() {
    let nome = document.getElementById('nome').value;
    let ra = parseInt(document.getElementById('ra').value);
    let idade = parseInt(document.getElementById('idade').value);
    let media = Number(document.getElementById('media').value);

    let sexoRadios = document.getElementsByName('sexo');
    let resRadios = document.getElementsByName('resultado');
    let sexo;
    let resultado;

    for (let r of resRadios) {
        if (r.checked) {
            resultado = r.value;
        }
    }
    for (let s of sexoRadios) {
        if (s.checked) {
            sexo = s.value;
        }
    }
    if (isValido(nome) && isValido(ra) && isValido(idade) && isValido(media) && isValido(sexo) && isValido(resultado)) {
        if (ra > 0 && idade > 0 && media >= 0) {
            var aluno = {
                NOME: nome,
                RA: ra,
                IDADE: idade,
                MEDIA: media,
                SEXO: sexo,
                RESULTADO: resultado
            }
            inserirAluno(aluno);

        } else {
            ativar("Verifique os valores e tente novamente.", "error");
        }
    } else {
        ativar("Verifique os valores e tente novamente.", "error");
    }
}

function resetarCampos() {
    document.getElementById('nome').value = "";
    document.getElementById('ra').value = "";
    document.getElementById('idade').value = "";
    document.getElementById('media').value = "";

    let sexoRadios = document.getElementsByName('sexo');
    let resRadios = document.getElementsByName('resultado');

    for (let r of resRadios) {
        r.checked = false;
    }

    for (let s of sexoRadios) {
        s.checked = false;
    }
}

function isValido(valor) {
    if (valor != null && valor != " " && valor != "") {
        return true;
    }
    return false;
}

function getVetorAlunos() {
    if (storage.getItem('alunos') != null && storage.getItem('alunos') != []) {
        alunos = JSON.parse(storage.getItem('alunos'));
    }
    totalAlunos = alunos.length;
    return alunos;
}


function inserirAluno(aluno) {
    alunos = getVetorAlunos();
    if (totalAlunos < 50) {
        alunos.push(aluno);
        storage.setItem('alunos', JSON.stringify(alunos));
        resetarCampos();
        ativar("CADASTRADO COM SUCESSO", "message");
    } else {
        ativar("Limite de alunos atingido.", "error");
    }
}


//Elementos da pagina
function voltar() {
    location.href = "index.html";
}

var btnCad = document.getElementById('btn_cadastrar');
var btnVoltar = document.getElementById('btn_voltar');

btnCad.addEventListener('click', cadastro);
btnVoltar.addEventListener('click', voltar);




const divMessage = document.querySelector(".alert");

function ativar(msg, classe) {
    const message = document.createElement("div");
    message.classList.add(classe);
    message.innerText = msg;
    divMessage.appendChild(message);

    setTimeout(() => {
        message.style.display = "none";
    }, 3000);
}
