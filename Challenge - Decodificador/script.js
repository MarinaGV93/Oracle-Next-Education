const texto = document.querySelector(".conteudo_texto_comum_area");
const convertido = document.querySelector(".conteudo_texto_convertido_area");
texto.focus();

// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnEncriptar() {
  // Pegar o valor
  const textoEncriptado = encriptar(texto.value);

  // Apresentar o valor
  convertido.value = textoEncriptado;

  // Apagar imagem
  convertido.style.backgroundImage = "none";

  // Limpar
  texto.value = "";
}

function encriptar(encriptada) {
  let codigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  //   Atribuir parâmetro para ele mesmo com letra minuscula
  encriptada = encriptada.toLowerCase();

  //   Percorrer a matriz
  for (let i = 0; i < codigo.length; i++) {
    // Verificar quais letras estao entranddo no campo [qual vai procurar][posiçao da busca]
    if (encriptada.includes(codigo[i][0])) {
      // Substituiçao das vogais pelas chaves (coluna como referencia para comparaçao, matriz que quer fazer a substituiçao
      encriptada = encriptada.replaceAll(codigo[i][0], codigo[i][1]);
    }
  }

  // Retornar a variavel
  return encriptada;

  // Imprimir
  console.table(codigo);
}

function btnDesencriptar() {
  const textoDesencriptado = desencriptar(texto.value);

  convertido.value = textoDesencriptado;

  texto.value = "";
}

function desencriptar(desencriptada) {
  let codigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  desencriptada = desencriptada.toLowerCase();

  for (let i = 0; i < codigo.length; i++) {
    if (desencriptada.includes(codigo[i][1])) {
      desencriptada = desencriptada.replaceAll(codigo[i][1], codigo[i][0]);
    }
  }

  return desencriptada;

  console.table(codigo);
}

function btnCopiar() {
  convertido.select();
  document.execCommand("copy");
  alert("Texto copiado!");
}

function btnLimpar() {
  convertido.value = "";
}
