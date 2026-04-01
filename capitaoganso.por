programa {
  funcao inicio() {


  real gastoSup
  real vendaIng
  real vendaItem

  real lucroPerc
  real lucro

    escreva("Quanto foi gasto em suprimentos? \n")
      leia(gastoSup)

//////////

    escreva("Vendas totais de ingresso: \n")
      leia(vendaIng)

    escreva("Vendas totais de Produtos: \n")
      leia(vendaItem)

////////////
    
  lucro = vendaIng + vendaItem - gastoSup
  lucroPerc = 100 * lucro / gastoSup 


    escreva("Seu lucro foi de: R$" + lucro + " Reais!!!\n")
    escreva("Seu percentual de lucro foi de: " + lucroPerc + "%!!!")
    



  }
}
