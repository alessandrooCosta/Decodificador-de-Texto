function criptografar(texto){
    var texto = document.getElementById("textarea").value;
       texto = texto.replaceAll("e", "enter");
       texto = texto.replaceAll("i", "imes");
       texto = texto.replaceAll("a", "ai"); 
       texto = texto.replaceAll("o", "ober"); 
       texto = texto.replaceAll("u", "ufat"); 
       document.getElementById("ladoDireito").style.visibility = "none";
       var campo = document.getElementById("conteudo");
       campo.innerHTML = texto;
}

function descriptografar(texto){
    var texto = document.getElementById("textarea").value;
       texto = texto.replaceAll("enter", "e");
       texto = texto.replaceAll("imes", "i");
       texto = texto.replaceAll("ai", "a"); 
       texto = texto.replaceAll("ober", "o"); 
       texto = texto.replaceAll("ufat", "u"); 
       document.getElementById("ladoDireito").style.visibility = "none";
       var campo = document.getElementById("conteudo");
       campo.innerHTML = texto;
}

function copiar(){
    let copyText = document.querySelector("#conteudo").innerText;
    navigator.clipboard.writeText(copyText);
}
document.querySelector("#botaoCopiar").addEventListener("click", copiar);

function limpar(){
  
}
  
 