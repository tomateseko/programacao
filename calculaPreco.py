# Define função para calcular preço final
def calcular_preco_final(nome, preco, desconto=0):
    preco_final = preco - (preco * desconto / 100)

    # Linha adicionada: preço inicial
    print(f"Preço inicial de {nome}: R$ {preco:.2f}")

    # Linha original (copiada e mantida)
    print(f"Preço final de {nome}: R$ {preco_final:.2f}")


# Exemplo de uso com desconto alterado para 25%
calcular_preco_final("Fone de ouvido", 200, 25)
