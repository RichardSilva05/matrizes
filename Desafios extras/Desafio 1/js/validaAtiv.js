function procDesafioExtra1(){
const matriz = [];
const tamanho = 4;

for (let i = 0; i < tamanho; i++) {
  matriz[i] = [];
  for (let j = 0; j < tamanho; j++) {
    const valor = prompt(`Digite o valor para a posição [${i + 1}][${j + 1}]:`);
    matriz[i][j] = parseInt(valor);
  }
}

const diagonalPrincipal = [];
const diagonalSecundaria = [];

for (let i = 0; i < tamanho; i++) {
  diagonalPrincipal.push(matriz[i][i]);
  diagonalSecundaria.push(matriz[i][tamanho - 1 - i]);
}

console.log("Matriz:");
matriz.forEach(linha => console.log(linha.join('\t')));

console.log("Diagonal Principal:", diagonalPrincipal.join(', '));
console.log("Diagonal Secundária:", diagonalSecundaria.join(', '));
return false;

}