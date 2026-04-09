programa {
  funcao inicio() {

real salario, salarioTotal
real comissaoFixa = 0.15, comissao, venda


escreva("Digite seu salário fixo: R$")
leia(salario)

escreva("Digite o total em vendas no mês: R$")
leia(venda)

comissao = comissaoFixa * venda
salarioTotal = salario + comissao

escreva("Esse mês você vai receber: R$" + comissao + " de comissão!")

escreva("\nEsse mês seu salário total vai ser: R$" + salarioTotal + " Reais")




    
  }
}
