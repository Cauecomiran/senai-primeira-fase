programa {
  funcao inicio() {
    inteiro idade
    cadeia sabeNadar, temRecomendacao

    escreva("Digite sua idade: ")
    leia(idade)

    escreva("Sabe nadar? ")
    leia(sabeNadar)


    se(idade >= 16 e sabeNadar == "sim"){
      escreva("Aprovado para o navio, aventuras o esperam!!!")
    }senao{
    escreva("Tem recomendação? ")
    leia(temRecomendacao)

    se(idade >= 14 e temRecomendacao == "sim"){
      escreva("Aprovado sob recomendação, está em experiência!")
    }senao{
      escreva("Reprovado, volte quando estiver mais")
    }
    }
    






















  }
}
