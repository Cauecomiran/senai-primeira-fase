programa {
  funcao inicio() {
    
    real altura, peso, imc

    escreva("Digite seu peso: ")
    leia(peso)

    escreva("Digite sua altura: ")
    leia(altura)

    imc = peso / (altura * altura)

    se( imc < 25 ){
      escreva("Seu IMC esta a baixo de 25!" + "\n Seu IMC é de: " + imc)
    }senao{
      escreva("Seu IMC está acima de 25, hora de emagrecer!" + "\n Seu IMC é de: " + imc)

    }





  }
}
