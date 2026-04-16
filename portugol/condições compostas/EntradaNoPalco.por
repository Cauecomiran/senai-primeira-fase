programa {
  funcao inicio() {

    cadeia somFuncionando, figurinoCompleto

    escreva("O Som está fuincionando? ")
    leia(somFuncionando)

    escreva("O figurino está completo? ")
    leia(figurinoCompleto)


    se( figurinoCompleto == "sim" e somFuncionando == "sim"){
      escreva("Palco liberado para o Sarumano!\n Luzes, camera, ilusão!!!")
    }senao se(figurinoCompleto == "sim" e somFuncionando == "nao"){
  
      escreva("Sem som. Realizar apresentação alternativa no salão!!!")
  
    }senao se(figurinoCompleto == "nao" e somFuncionando == "sim"){

      escreva("Faltando parte do figurino, te vira no improviso!")
    
    }senao{
      escreva("Apresentação cancelada. Hora de desaparecer!")
    }
  




    




















  }
}
