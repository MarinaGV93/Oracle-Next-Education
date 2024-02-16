// Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
diaDaSemana = prompt("Qual é o dia da semana?");
console.log(diaDaSemana);

if (diaDaSemana == "Sábado") {
  alert("Bom fim de semana!");
} else if (diaDaSemana == "Domingo") {
  alert("Bom fim de semana!");
} else {
  alert("Boa semana!");
}

// Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
num = prompt("Digite um número");
console.log(num);

if (num > 0) {
  alert("Número positivo!");
} else {
  alert("Número negativo");
}

// Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
pontuacao = 100;
console.log(`Pontuação ${pontuacao}`);

if (pontuacao >= 100) {
  alert("Parabéns, você venceu!");
} else {
  alert("Tente novamente para ganhar.");
}

// Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
saldoConta = 300;

alert(`Saldo da conta é R$${saldoConta}`);

// Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
nome = prompt("Digite seu nome");

alert(`Boas vindas ${nome}`);
