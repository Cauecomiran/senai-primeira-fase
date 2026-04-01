programa {
  funcao inicio() {

    real caminhaoJare
    real caminhaoPreco 
    real jare
    real lucro
    real lucroTotal
    real quantidadeCaminhao

      escreva("Qual o valor gasto de frete para cada caminhão? \n")
        leia(caminhaoPreco)

      escreva("Qual o valor ganho em cima de cada Jaré vendido?\n")
        leia(jare)
      
      escreva("Quantos Jarés cabem em cada caminhão? \n")
        leia(caminhaoJare)

    lucro = caminhaoJare * jare - caminhaoPreco

      escreva("Por caminhão você ganha " + lucro + "\n")

      escreva("Quantos caminhões você vai vender de Jarés?")
        leia(quantidadeCaminhao)

    lucroTotal = quantidadeCaminhao * lucro

      escreva("Seu lucro total é de: R$" + lucroTotal + " Reais.")
      













    
  }
}
