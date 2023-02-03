//Criptografa Mensagem
var botaoCriptografa = document.querySelector("button#btnCriptografar");
var botaoDescriptografa = document.querySelector("button#btnDescriptografar");
var botaoCopia = document.getElementById("button#btnCopiar");
var entradaMensagem = document.querySelector("textarea#textInput");
var saidaMensagem = document.querySelector("textarea#textOutput");

function criptografaMensagem() {
  let text = entradaMensagem.value;
  if (/[A-Z-À-Ú-à-ù]/.test(text)) {
    saidaMensagem.innerHTML = 'Opaa, não é permitido letras maiúsculas ou acentos.'
  } else if (/[0-9]/.test(text)) {
    saidaMensagem.innerHTML = 'Infelizmente números não são permitidos.'
  } else if (entradaMensagem.value === '') {
    saidaMensagem.innerHTML = 'Parece que você ainda não escreveu nenhuma mensagem.'
  } else {
    var txt = text.replace(/e/g, "enter");
    var txt = txt.replace(/i/g, "imes");
    var txt = txt.replace(/a/g, "ai");
    var txt = txt.replace(/o/g, "ober");
    var txt = txt.replace(/u/g, "ufat");

    saidaMensagem.innerHTML = `${txt}`;
  }
}

//Descriptografa Mensagem
function descriptografaMensagem() {
  let text = entradaMensagem.value;
  if (/[A-Z-À-Ú-à-ù]/.test(text)) {
    saidaMensagem.innerHTML = 'Opaa, não é permitido letras maiúsculas ou acentos.'
  } else if (/[0-9]/.test(text)) {
    saidaMensagem.innerHTML = 'Infelizmente números não são permitidos.'
  } else if (entradaMensagem.value === '') {
    saidaMensagem.innerHTML = 'Parece que você ainda não escreveu nenhuma mensagem.'
  } else {
    var txt = text.replace(/enter/g, "e");
    var txt = txt.replace(/imes/g, "i");
    var txt = txt.replace(/ai/g, "a");
    var txt = txt.replace(/ober/g, "o");
    var txt = txt.replace(/ufat/g, "u");

    saidaMensagem.innerHTML = `${txt}`;
  }
}

//Copia Mensagem
function copiarMensagem() {
    let text = entradaMensagem.value;
    if (/[A-Z-À-Ú-à-ù]/.test(text)) {
        saidaMensagem.innerHTML = 'Não é possível copiar palavras com letras maiúsculas ou acentuação.'
    } else if (entradaMensagem.value.length === 0) {
        saidaMensagem.innerHTML = "Opaa, é preciso escrever algo para copiar!";
    } else {
        const copyText = saidaMensagem.innerHTML;
        navigator.clipboard.writeText(copyText).then(() => {
            saidaMensagem.innerHTML = "Sua mensagem foi copiada. Aproveite!";
        });
    }
}

//Apaga Mensagem
function apagarMensagem() {
  if (entradaMensagem.value.length === 0) {
    saidaMensagem.innerHTML = "Escreva alguma coisa antes de apagar!";
  } else {
    entradaMensagem.value = "";
    saidaMensagem.innerHTML = "Apagado! Gostaria de escrever algo novamente?";
  }
}