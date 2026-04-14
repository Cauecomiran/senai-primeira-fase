programa {
  funcao inicio() {
    
real combustivelGasto, autonomia
inteiro distanciaPercorrida

escreva("Digite quantos quilosmetros o carro percorreu: ")
leia(distanciaPercorrida)

escreva("Digite qual foi a quantidade de combustível usada em litros: ")
leia(combustivelGasto)

autonomia = distanciaPercorrida / combustivelGasto

escreva("Seu carro tem a autonomia de: " + autonomia +  "km/l" )








  }
}
