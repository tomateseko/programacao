function calcularPrecoFinal(produto) {
  const desconto = produto.desconto ?? 0;

  const precoFinal = produto.preco - (produto.preco * desconto / 100);

  // Linha nova criada a partir da cópia da linha do preço final:
  console.log(`Preço inicial de ${produto.nome}: R$ ${produto.preco.toFixed(2)}`);

  // Linha original (copiada e mantida):
  console.log(`Preço final de ${produto.nome}: R$ ${precoFinal.toFixed(2)}`);
}

// Exemplo de uso
const produto1 = {
  nome: "Fone de ouvido",
  preco: 200,
  desconto: 25 // alterado de 15 para 25
};

calcularPrecoFinal(produto1);
