// Mostrar na tela
alert("Boas vindas ao jogo do número secreto!");

// Numero maximo de chutes
let numeroMaximo = 100;

// Math.random = Número pseudo-aleatório, maior que 0 e menor que 1. Multiplicando por 0, fica um numero maior que 1.
// parseInt = pega somente a parte inteira, entre 1 e o numero maximo com +1
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

// Mostrar no console
console.log(numeroSecreto);

// Contador de tentativas
let tentativas = 1;

// Número escolhido
let chute;

// Enquanto for diferente
while (chute != numeroSecreto) {
  //Pedir um número para o usuário
  chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}: `);
  console.log(`Número escolhido ${chute}`);

  // Se for igual
  if (chute == numeroSecreto) {
    // Para a execução do IF
    break;
  } else {
    //   console.log(`Valor do número secreto ${numeroSecreto}`);
    //   alert(`Você errou :(`);

    // Se maior
    if (chute > numeroSecreto) {
      alert(`O número secreto é menor que ${chute}`);
    } else {
      alert(`O número secreto é maior que ${chute}`);
    }
    tentativas++;
  }
}

// Se maior que 1, senão
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(
  `Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`
);

// if (tentativas > 1) {
//   alert(
//     `Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`
//   );
// } else {
//   alert(
//     `Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`
//   );
// }
