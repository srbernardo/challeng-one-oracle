const mess1 = document.getElementById("mess1");

mess1.addEventListener("input", () => {
  const text = mess1.value;
  const criptografar = document.getElementById("criptografar")
  const descriptografar = document.getElementById("descriptografar")
  const regex = /^[a-z\s]*$/;

  if (regex.test(text)) {
    criptografar.disabled = false
    descriptografar.disabled = false
  } else {
    criptografar.disabled = true
    descriptografar.disabled = true
    alert("Apenas letras minúsculas e sem acento")
  }
});

const criptografar = () => {
  var mess1 = document.getElementById("mess1").value
  var mess_criptografada = converterTexto(mess1)

  document.getElementById("mess2").value = mess_criptografada 
  document.getElementById("mess1").value = ''

  mess1 != "" ?  mostar_resposta() : null
}

const descriptografar = () => {
  var mess1 = document.getElementById("mess1").value
  var mess_descriptografada = reverterTexto(mess1)

  document.getElementById("mess2").value = mess_descriptografada 
  document.getElementById("mess1").value = ''

  mess1 != "" ?  mostar_resposta() : null
}

const converterTexto = (texto) => {
  var novoTexto = texto.replace(/e/g, "enter")
                      .replace(/i/g, "imes")
                      .replace(/a/g, "ai")
                      .replace(/o/g, "ober")
                      .replace(/u/g, "ufat")
  return novoTexto;
}

const reverterTexto = (texto) => {
  var novoTexto = texto.replace(/enter/g, "e")
                      .replace(/imes/g, "i")
                      .replace(/ai/g, "a")
                      .replace(/ober/g, "o")
                      .replace(/ufat/g, "u")
  return novoTexto;
}

const copiarTexto = () => {
  var mess2 = document.getElementById("mess2");
  mess2.select();
  document.execCommand("copy");
  document.getElementById("mess2").value = ''

  mostrar_vazio()
}

const mostar_resposta = () => {
  var resposta = document.getElementsByClassName("resposta")
  resposta[0].style.display = "flex"

  var vazio = document.getElementsByClassName("vazio")
  vazio[0].style.display = "none"
}

const mostrar_vazio = () => {
  var resposta = document.getElementsByClassName("resposta")
  resposta[0].style.display = "none"

  var vazio = document.getElementsByClassName("vazio")
  vazio[0].style.display = "flex"
}
