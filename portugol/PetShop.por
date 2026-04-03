programa {
  funcao inicio() {
// indentificar e criar variaveis

real racaoQtd
real valorRacao, valorGrama
//leitura 

escreva("Qual o valor da ração? ")
leia(valorRacao)

escreva("Quantos gramas de ração vai precisar?")
leia(racaoQtd)

// processar

valorGrama = valorRacao * (racaoQtd/1000)

// apresentar

escreva("Você deve pagar: " + valorGrama + " reais")

    
  }
}
