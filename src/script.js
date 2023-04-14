function criptografar() {
  var mess1 = document.getElementById("mess1").value
  var mess_criptografada = converterTexto(mess1)

  document.getElementById("mess2").value = mess_criptografada 
  document.getElementById("mess1").value = ''

  mostar_resposta()
}


function descriptografar() {
  var mess1 = document.getElementById("mess1").value
  var mess_descriptografada = reverterTexto(mess1)

  document.getElementById("mess2").value = mess_descriptografada 
  document.getElementById("mess1").value = ''

  mostar_resposta()
}

function converterTexto(texto) {
  var novoTexto = texto.replace(/e/g, "enter")
                      .replace(/i/g, "imes")
                      .replace(/a/g, "ai")
                      .replace(/o/g, "ober")
                      .replace(/u/g, "ufat")
  return novoTexto;
}

function reverterTexto(texto) {
  var novoTexto = texto.replace(/enter/g, "e")
                      .replace(/imes/g, "i")
                      .replace(/ai/g, "a")
                      .replace(/ober/g, "o")
                      .replace(/ufat/g, "u")
  return novoTexto;
}

function copiarTexto() {
  var mess2 = document.getElementById("mess2");
  mess2.select();
  document.execCommand("copy");
  document.getElementById("mess2").value = ''

  mostrar_vazio()
}

function mostar_resposta() {
  var resposta = document.getElementsByClassName("resposta")
  resposta[0].style.display = "flex"

  var vazio = document.getElementsByClassName("vazio")
  vazio[0].style.display = "none"
}

function mostrar_vazio() {
  var resposta = document.getElementsByClassName("resposta")
  resposta[0].style.display = "none"

  var vazio = document.getElementsByClassName("vazio")
  vazio[0].style.display = "flex"
}
