document.getElementById('limpar').setAttribute('disabled',true);

function criptografar(texto) {
    var texto = document.getElementById("textarea").value;
    texto = texto.replaceAll("e", "enter");
    texto = texto.replaceAll("i", "imes");
    texto = texto.replaceAll("a", "ai");
    texto = texto.replaceAll("o", "ober");
    texto = texto.replaceAll("u", "ufat");
    document.getElementById("ladoDireito").style.visibility = "none";
    document.getElementById("botaoCopiar").style.visibility = "visible";
    var campo = document.getElementById("conteudo");
    campo.innerHTML = texto;
    document.getElementById('limpar').removeAttribute('disabled');
}

function descriptografar(texto) {
    var texto = document.getElementById("textarea").value;
    texto = texto.replaceAll("enter", "e");
    texto = texto.replaceAll("imes", "i");
    texto = texto.replaceAll("ai", "a");
    texto = texto.replaceAll("ober", "o");
    texto = texto.replaceAll("ufat", "u");
    document.getElementById("ladoDireito").style.visibility = "none";
    document.getElementById("botaoCopiar").style.visibility = "visible";
    var campo = document.getElementById("conteudo");
    campo.innerHTML = texto;
    document.getElementById('limpar').removeAttribute('disabled');
}

function copiar() {
    let copyText = document.querySelector("#conteudo").innerText;
    navigator.clipboard.writeText(copyText);
}
document.querySelector("#botaoCopiar").addEventListener("click", copiar);

function limpar() {
    campoTextare = document.querySelector('textarea');
    campoTextare.value = "";
    let campoConteudo = document.querySelector("#conteudo");
    campoConteudo.innerHTML = "Digite um texto que você deseja Criptografar ou Descriptografar.";
}
