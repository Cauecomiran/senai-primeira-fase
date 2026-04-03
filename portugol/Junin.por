programa {
  funcao inicio() {

    real salario
    real diasTrabalhados = 30
    real dia
    real semana

    escreva("Qual o seu salário? \n")
      leia(salario)

    dia = salario / diasTrabalhados
    semana = 7 * dia




    escreva("Seu dia de trabalho vale: " + dia )
    
    escreva("E sua semana equivale á: " + semana)
    
  }
}
