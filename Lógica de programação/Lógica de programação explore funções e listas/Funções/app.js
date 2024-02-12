// Guardar numero aleatorio
let numeroSecreto = gerarNumAleatorio();

// Manipular H1
// document = pegar do HTML
// querySelector = selecionar um pedaço com o nome da TAG

// let titulo = document.querySelector("h1");

// Alterar o título

// titulo.innerHTML = "Jogo do número secreto";

// let paragrao = document.querySelector("p");
// paragrao.innerHTML = "Escolha um número entre 1 e 10";

// Diminuindo os códigos. Função com parametro
function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

//Substituir para H1
exibirTextoNaTela("h1", "Jogo do número secreto");

//Substituir para P
exibirTextoNaTela("p", "Escolha um número entre 1 e 10");

// Função
function verificarChute() {
  // Comparar numero (valor) do input (entrada do usuario) com o numero aleatorio
  let chute = document.querySelector("input").value;
  console.log(numeroSecreto);
  console.log(chute == numeroSecreto);
}

// Função com retorno
function gerarNumAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}
