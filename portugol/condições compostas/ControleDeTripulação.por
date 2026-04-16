programa {
  funcao inicio() {
    
    real comida, comidaPorMarujo
    inteiro marujos

    escreva("Digite a quantidade de marujos: ")
    leia(marujos)

    escreva("Digite a quantidade de comida: ")
    leia(comida)

    comidaPorMarujo = comida / marujos

    se(marujos >= 10 e comidaPorMarujo >= 1.5){
      escreva("Provisões suficientes, rumo ao horizonte!")
    }senao{
      escreva("Algo está errado, posseidom não quer ninguém no mar hoje.")
    }


























  }
}
