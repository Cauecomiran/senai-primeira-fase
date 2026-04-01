programa {
  funcao inicio() {


// entrada
    real doacao
    real dizimo

// saida

    real custos
    real dividaRestante

    escreva("Quais são os custos operacionais que a igreja tem por mês? \n")
    leia(custos)


    escreva("Qual o total de doações de hoje? \n")
    leia(doacao)

    escreva("Qual o total de dízimos de hoje? \n")
    leia(dizimo)

    dividaRestante = custos - doacao - dizimo

    escreva("Faltam R$" + dividaRestante + " para paga a dívida da igreja!")
    


    
  }
}
