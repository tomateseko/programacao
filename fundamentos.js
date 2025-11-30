let idade = 30;
console.log(idade);


function soma(a, b) {
  return a + b;
}

let num = 7; // exemplo
if (num % 2 === 0) {
  console.log("O número é par");
} else {
  console.log("O número é ímpar");
}


for (let letra = 65; letra <= 90; letra++) {
  console.log(String.fromCharCode(letra));
}


let n1 = 10;
let n2 = 8;
let n3 = 6;

let media = (n1 + n2 + n3) / 3;
console.log(media);


console.log("Olá, mundo!");


let i = 5;
while (i >= 1) {
  console.log(i);
  i--;
}


function calcularProduto(a, b) {
  let resultado = a * b;
  debugger;
  return resultado;
}

calcularProduto(5, 10);
