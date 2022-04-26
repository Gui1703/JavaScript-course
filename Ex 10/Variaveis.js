// Variaveis simples so consegue armazenar um valor por vez

// Variaveis compostas devem ser capazes de armazenar varios valores em uma mesma estruta

let num = [5, 8, 4]; // => variavel composta
num[3] = 6;
num.push(7);
num.indexOf(7);
num.sort();
console.log(`o vetor tem ${num.length} posições`);
console.log(`o primeiro valor do vetor é ${num[0]}`);
console.log(num);

for (let pos = 0; pos < num.length; pos++) {
  console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}

for (const pos in num) {
  console.log(num[pos]);
}
