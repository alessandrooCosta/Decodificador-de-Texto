document.getElementById("botaoCopiar").style.visibility = "hidden";
document.getElementById("limpar").style.visibility = "hidden";
function temAcentoOuEspecial(texto) {
    var texto = document.getElementById("textarea").value;
    var acentosEspeciais = "áàãâäéèêëíìîïóòõôöúùûüçñÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÔÖÚÙÛÜÇÑ!@#$%^&*()_+\-=\[\]{};':\"\\|,.<>\/?1234567890";
    for (var i = 0; i < texto.length; i++) {
        if (acentosEspeciais.indexOf(texto[i]) !== -1) {
            return true;
        }
    }
    return false;
}
function criptografar() {
    var texto = document.getElementById("textarea").value;
    var v = temAcentoOuEspecial();
    if (v == true) {
        let test = document.querySelector('h6');
        test.style.color = "red";
    }
    else if (texto !== texto.toLowerCase()) {
        let test = document.querySelector('h6');
        test.style.color = "red";
    } else if (texto == "") {
        let test = document.querySelector('h6');
        test.style.color = "red";
    } else {
        let test = document.querySelector('h6');
        test.style.color = "#65747D";
        texto = texto.replaceAll("e", "enter");
        texto = texto.replaceAll("i", "imes");
        texto = texto.replaceAll("a", "ai");
        texto = texto.replaceAll("o", "ober");
        texto = texto.replaceAll("u", "ufat");
        document.getElementById("campo").style.visibility = "none";
        document.getElementById("botaoCopiar").style.visibility = "visible";
        document.getElementById("limpar").style.visibility = "visible";
        var campo = document.getElementById("conteudo");
        campo.innerHTML = texto;
    }
}
function descriptografar(texto) {
    var texto = document.getElementById("textarea").value;
    var v = temAcentoOuEspecial();
    if (v == true) {
        let test = document.querySelector('h6');
        test.style.color = "red";
    }
    else if (texto !== texto.toLowerCase()) {
        let test = document.querySelector('h6');
        test.style.color = "red";
    } else if (texto == "") {
        let test = document.querySelector('h6');
        test.style.color = "red";
    } else {
        let test = document.querySelector('h6');
        test.style.color = "#65747D";
        texto = texto.replaceAll("enter", "e");
        texto = texto.replaceAll("imes", "i");
        texto = texto.replaceAll("ai", "a");
        texto = texto.replaceAll("ober", "o");
        texto = texto.replaceAll("ufat", "u");
        document.getElementById("botaoCopiar").style.visibility = "visible";
        document.getElementById("limpar").style.visibility = "visible";
        var campo = document.getElementById("conteudo");
        campo.innerHTML = texto;
    }
}
function copiar() {
    let copyText = document.querySelector("#conteudo").innerText;
    navigator.clipboard.writeText(copyText);
}
document.querySelector("#botaoCopiar").addEventListener("click", copiar);
function limpar() {
    campoTextarea = document.querySelector('textarea');
    campoTextarea.value = "";
    document.getElementById("botaoCopiar").style.visibility = "hidden";
    document.getElementById("limpar").style.visibility = "hidden";
    let campoConteudo = document.querySelector("#conteudo");
    campoConteudo.innerHTML = "Digite um texto que você deseja Criptografar ou Descriptografar.";
}
