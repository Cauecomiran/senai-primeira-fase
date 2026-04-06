programa {
  funcao inicio() {

real ordem = 1
real peso = 20
real distancia = 650
real volume = 1

real frete = 15 + (2 * peso) + (0.05 * distancia) + (10 * volume)


      escreva("O frete do caso " + ordem + " é R$" + frete + "\n")

 ordem = 2
 peso = 60
 distancia = 1000
 volume = 0.5

 frete = 15 + (2 * peso) + (0.05 * distancia) + (10 * volume)


      escreva("O frete do caso " + ordem + " é R$" + frete + "\n")

 ordem = 3
 peso = 3
 distancia = 1200
 volume = 0.2
 
 frete = 15 + (2 * peso) + (0.05 * distancia) + (10 * volume)


      escreva("O frete do caso " + ordem + " é R$" + frete)



  }
}
