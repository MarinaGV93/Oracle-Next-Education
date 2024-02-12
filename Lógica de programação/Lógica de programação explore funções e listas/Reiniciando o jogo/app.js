let numeroSecreto = gerarNumAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function mensagemInicial() {
  exibirTextoNaTela("h1", "Jogo do número secreto");
  exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

mensagemInicial();

function verificarChute() {
  let chute = document.querySelector("input").value;

  if (chute == numeroSecreto) {
    // Mudar a palavra tentativa se for plural
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

    exibirTextoNaTela("h1", "Acertou!");

    // Aparecer numero de tentativas
    let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;

    exibirTextoNaTela("p", mensagemTentativa);

    // Ativar o botão Novo jogo
    // Pegar pelo ID
    // Remover o atributo que está sendo desativado (disabled)
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    // Verificar se é maior ou menor
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "O número é menor");
    } else {
      exibirTextoNaTela("p", "O número é maior");
    }

    tentativas++;

    // Limpar campo em cada tentativa
    limparCampo();
  }
}

function gerarNumAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
  // Pegar o campo
  chute = document.querySelector("input");

  // Colocar o campo vazio
  chute.value = "";
}

function reiniciarJogo() {
  // Número secreto é sorteado
  numeroSecreto = gerarNumAleatorio();

  // Campo fica vazio
  limparCampo();

  // Reiniciar tentativas
  tentativas = 1;

  // Mudar mensagens
  mensagemInicial();

  // Desabilitar o botao Novo jogo (colocar um atributo novo), setar o atributo "disabled" e o status, como "true"
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
