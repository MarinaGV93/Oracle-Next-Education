// Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
cont = 1;

console.log("Contagem de 1 a 10");

while (cont <= 10) {
  console.log(cont);
  cont++;
}

// Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
cont1 = 10;

console.log("Contagem de 10 a 0");

while (cont1 >= 0) {
  console.log(cont1);
  cont1--;
}

// Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
num = prompt("Digite um número");

console.log(`De ${num} a 0`);

while (num >= 0) {
  console.log(num);
  num--;
}

// Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
num1 = prompt("Digite um número");

console.log(`De 0 a ${num1}`);

while (num <= 10) {
  console.log(num1);
  num++;
}
