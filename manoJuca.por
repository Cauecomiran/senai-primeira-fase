programa {
  funcao inicio() {

real salario
real moradia
real agua
real luz
real internet
real gasolina
real stream
real telefone
real outros
real poupanca

escreva("Qual o seu salário? \n")
  leia(salario)

escreva("Quanto você paga de aluguel mensalmente? ")
leia(moradia)

escreva("Qual o valor da sua fatura de água? ")
  leia(agua)

escreva("Qual o valor da sua fatura de luz? ")
  leia(luz)

escreva("Quanto você gasta de internet por mês? ")
  leia(internet)

escreva("Quanto você gasta de combustível por mês? ")
leia(gasolina)  

escreva("Quanto você gasta em streamings? ")
  leia(stream)

escreva("Quanto você gasta em telefone mensalmente? ")
  leia(telefone)

escreva("Quantos você gasta com coisas diversas ao mês? ")
  leia(outros)

poupanca = salario -(moradia + agua + luz + internet + gasolina + stream + telefone + outros )

escreva("Você consegue guardar " + poupanca + " reais por mês!")

  }
}
