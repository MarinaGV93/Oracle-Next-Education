// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function calcularImc(altura, peso) {
  let imc = peso / (altura * altura);
}

// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calcularFatorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }

  let fatorial = 1;

  for (let i = 2; i < num; i++) {
    fatorial *= i;
  }

  return fatorial;
}

let num = 6;
let resultado = calcularFatorial(num);
console.log(`O fatorial de ${num} é ${resultado}`);

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function converteDolarParaReal(valorDolar) {
  let cotacao = 4.8;
  let valorReal = valorDolar * cotacao;
  return valorReal;
}

let valorDolar = 100;
let valorReal = converteDolarParaReal(valorDolar);
console.log(`${valorDolar} dolares equivalem a ${valorReal} reais`);

// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function calcularAreaEPerimetroRetangular(altura, largura) {
  let area = altura * largura;

  console.log(`A área da sala retangular tem ${area} metros quadrados`);

  let perimetro = 2 * (altura * largura);

  console.log(`O perímetro da sala retangular é de ${perimetro} metros`);
}

calcularAreaEPerimetroRetangular(2, 3);

// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function calcularAreaEPerimetroCircular(raio) {
  let area = Math.PI * raio;

  // 2 casas após a vírgula
  console.log(
    `A área da sala circular tem ${area.toFixed(2)} metros quadrados`
  );

  let perimetro = 2 * Math.PI * raio;

  console.log(
    `O perímetro da sala circular é de ${perimetro.toFixed(2)} metros`
  );
}

calcularAreaEPerimetroCircular(2);

// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuada(num) {
  for (let i = 1; i < 11; i++) {
    let resultado = num * i;
    console.log(`${num} X ${i} = ${resultado}`);
  }
}

tabuada(9);
