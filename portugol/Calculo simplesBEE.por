programa {
  funcao inicio() {


inteiro peca1Qtd, peca2Qtd
inteiro peca1Cdg, peca2Cdg
real peca1Prc, peca2Prc, valorTotal, parcial1, parcial2


escreva("Digite o codigo da camiseta:\n ")
leia(peca1Cdg)

escreva("Digite a quantidade de camisetas:\n ")
leia(peca1Qtd)

escreva("Digite o preço de cada camiseta: R$\n")
leia(peca1Prc)
//===================================================================
escreva("Digite o codigo da calça:\n ")
leia(peca2Cdg)

escreva("Digite a quantidade de calças:\n ")
leia(peca2Qtd)

escreva("Digite o preço de cada calça: R$\n")
leia(peca2Prc)


parcial1 = peca1Qtd * peca1Prc
parcial2 = peca2Qtd * peca2Prc

valorTotal = parcial1 + parcial2

escreva("Valor total a pagar: R$" + valorTotal)


  }
}
