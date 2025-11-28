function verificarAprovacao(media) {
if (media >= 6.5) {
return "Aprovado";
} else {
return "Reprovado";
}
}
const resultado = verificarAprovacao(6.5);
console.log(`Resultado: ${resultado}`);
