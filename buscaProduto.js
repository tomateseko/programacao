// Função para buscar um produto pelo nome
function buscarProduto(lista, nomeProduto) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].nome === nomeProduto) {
      return lista[i]; // Retorna o objeto encontrado
    }
  }
  return null; // Se não achar, retorna null
}

// ----- Exemplo de uso -----
const produtos = [
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 120 },
  { nome: "Monitor", preco: 900 }
];

// Buscando um produto existente
const resultado1 = buscarProduto(produtos, "Teclado");
console.log(resultado1);
// Resultado esperado:
// { nome: "Teclado", preco: 120 }

// Buscando um produto inexistente
const resultado2 = buscarProduto(produtos, "Notebook");
console.log(resultado2);
// Resultado esperado:
// null
