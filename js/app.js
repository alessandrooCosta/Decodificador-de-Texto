document.getElementById("botaoDescript").setAttribute('disabled',true);
document.getElementById("botaoCopiar").style.display = "none";
document.getElementById("limpar").style.display = "none";
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
    var texto = document.getElementById("textarea").value.toString();
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
        document.getElementById("botaoDescript").removeAttribute('disabled');
        let test = document.querySelector('h6');
        test.style.color = "#65747D";
        texto = texto.replaceAll("e", "enter");
        texto = texto.replaceAll("i", "imes");
        texto = texto.replaceAll("a", "ai");
        texto = texto.replaceAll("o", "ober");
        texto = texto.replaceAll("u", "ufat");
        document.getElementById("campo").style.display = "none";
        document.getElementById("botaoCopiar").style.display = "block";
        document.getElementById("limpar").style.display = "block";
        let campo = document.querySelector("#conteudo");
        campo.innerHTML = `${texto}`;
        console.log(texto);
    }
}
function descriptografar(texto) {
    var texto = document.getElementById("textarea").value.toString();
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
        document.getElementById("campo").style.display = "none";
        document.getElementById("botaoCopiar").style.display = "block";
        document.getElementById("limpar").style.display = "block";
        var campo = document.querySelector("#conteudo");
        campo.innerHTML = `${texto}`;
    }
}
function copiar() {
    let copyText = document.querySelector("#conteudo").innerText;
    navigator.clipboard.writeText(copyText);
}
document.querySelector("#botaoCopiar").addEventListener("click", copiar);
function limpar() {
    document.getElementById("botaoDescript").setAttribute('disabled',true);
    campoTextarea = document.querySelector('textarea');
    campoTextarea.value = "";
    document.getElementById("campo").style.display = "block";
    document.getElementById("botaoCopiar").style.display = "none";
    document.getElementById("limpar").style.display = "none";
    let campoConteudo = document.querySelector("#conteudo");
    campoConteudo.innerHTML = "Digite um texto que você deseja Criptografar ou Descriptografar";
}
