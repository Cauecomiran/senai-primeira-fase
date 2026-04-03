programa {
  funcao inicio() {

    real relatorioPf
    real relatorioPj

    real tempoPf
    real tempoPj

    real salarioPf
    real salarioPj

    real totalRel
    real totalTemp
    real totalSal

    real mediaTempoPf
    real mediaTempoPj

    real mediaSalarioPf
    real mediaSalarioPj


      escreva("Quantos relatórios da PF?\n")
      leia(relatorioPf)

      escreva("Quantos relatórios da PJ?\n")
      leia(relatorioPj)

      // quantidade de relatorios acaba aqui

      escreva("Quanto tempo gastou nos relatórios da PF?\n")
      leia(tempoPf)

      escreva("Quanto tempo gastou nos relatórios da PJ?\n")
      leia(tempoPj)

      // quantidade de tempo termina aqui

      escreva("Quantos ganhou pelos relatórios da Pf\n")
      leia(salarioPf)

      escreva("Quantos ganhou pelos relatórios da Pj\n")
      leia(salarioPj)

      // quantidade de dinheiro acabou 

     totalRel = relatorioPf + relatorioPj
     totalTemp = tempoPf + tempoPj
     totalSal = salarioPf + salarioPj

     mediaSalarioPf = salarioPf / relatorioPf
     mediaSalarioPj = salarioPj / relatorioPj
     
     mediaTempoPf = tempoPf / relatorioPf
     mediaTempoPj = tempoPj / relatorioPj



     escreva("Seu tempo disponibilizado para relatórios da PF foi de: " + tempoPf + "\n")
     escreva("Você fez " + relatorioPf + " Relatórios para a PF"  + "\n")
     escreva("Você ganhou da PF: R$" + salarioPf + "\n" )
     escreva("Você gasta em média " + mediaTempoPf + " por relatório da PF!" + "\n")
     escreva("Em média você ganha R$" + mediaSalarioPf + " por relatório da PF!" + "\n\n")

     escreva("Seu tempo disponibilizado para relatórios da PJ foi de: " + tempoPj + "\n")
     escreva("Você fez " + relatorioPj + " Relatórios para a PJ" + "\n")
     escreva("Você ganhou do PJ: R$" + salarioPj  + "\n")
     escreva("Você gasta em média " + mediaTempoPj + " por relatório da PJ!" + "\n")
     escreva("Em média você ganha R$" + mediaSalarioPj + " por relatório da PJ!" + "\n")




     






    
  }
}
