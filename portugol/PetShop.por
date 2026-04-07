programa {
  funcao inicio() {
// indentificar e criar variaveis

real racaoQtd
real valorKg, valorGrama, valorTotal
//leitura 

escreva("Digite o valor da ração: ")
leia(valorKg)

escreva("Digite quantos quilos vai precisar: ")
leia(racaoQtd)

// processar

valorGrama = valorKg / 1000

valorTotal = valorGrama * racaoQtd

// apresentar

escreva("Você deve pagar: " + valorTotal + " reais")

    
  }
}
