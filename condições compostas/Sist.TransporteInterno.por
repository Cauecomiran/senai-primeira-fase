programa {
  funcao inicio() {
    
cadeia emManutencao, emergenciaAtiva

escreva("O transporte está em manutenção? ")
leia(emManutencao)

escreva("O estado de emergência está ativo? ")
leia(emergenciaAtiva)

se( emergenciaAtiva e emManutencao == "nao") {
  escreva("Transporte liberado para uso.")
}senao{
  escreva("Transporte indisponível no momento por motivos de segurança!!!")
}













  }
}
