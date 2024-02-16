// Criar uma função que exibe "Olá, mundo!" no console.
function exibir() {
  console.log("Olá mundo!");
  alert("Olá mundo!");
}

exibir();

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibirNome(nome) {
  //Aparecer o nome que o usuário colocar
  nome = prompt("Digite seu nome");
  console.log(`Olá, ${nome}`);
  alert(`Olá, ${nome}`);
}

exibirNome();

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function calcularDobro(num) {
  num = parseInt(prompt("Digite um número para calcular o dobro"));
  console.log(`O número escolhido é ${num}`);
  return num * 2;
}

let dobro = calcularDobro();
console.log(`O dobro é ${dobro}`);
alert(`O dobro é ${dobro}`);

// Criar uma função que recebe três números como parâmetros e retorna a média deles.
function calcularMedia(n1, n2, n3) {
  n1 = parseInt(prompt("Digite a nota 1"));
  console.log(`Nota 1: ${n1}`);
  n2 = parseInt(prompt("Digite a nota 2"));
  console.log(`Nota 2: ${n2}`);
  n3 = parseInt(prompt("Digite a nota 3"));
  console.log(`Nota 3: ${n3}`);
  return (n1 + n2 + n3) / 3;
}

let resMedia = calcularMedia();
console.log(`A média é ${resMedia}`);
alert(`A média é ${resMedia}`);

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function encontrarMaior(n1, n2) {
  n1 = parseInt(prompt("Digite o 1º número"));
  console.log(`O 1º número é ${n1}`);
  n2 = parseInt(prompt("Digite o 2º número"));
  console.log(`O 2º número é ${n2}`);
  return n1 > n2 ? n1 : n2;
}

let maior = encontrarMaior();
console.log(`O maior número é ${maior}`);
alert(`O maior número é ${maior}`);

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function quadrado(num) {
  num = parseInt(prompt("Digite um número"));
  console.log(`O número é ${num}`);
  return num * num;
}

let resQuadrado = quadrado();
console.log(`O quadrado é ${resQuadrado}`);
alert(`O quadrado é ${resQuadrado}`);
