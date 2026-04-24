// alert("Olá mundo!")
// alert("hello world")
// let nome
// alert("Meu nome é: " + nome)

// let idade
// alert("Minha idade é: " + idade)

//

// alert("Nome: " + nome + "\nIdade: " + idade)


// nome = prompt("Digite seu nome: ")
// idade = prompt("Digite sua idade: ")
// alert("Seu nome é: " + nome + "\nSua idade é: " + idade)

//let nota1, nota2, nota3, media

//nota1 = prompt("Digite o valor da nota 1: ")
//nota1 = Number(nota1)

//nota2 = prompt("Digite o valor da nota 2: ")
//nota2 = Number(nota2)

//nota3 = prompt("Digite o valor da nota 3: ")
//nota3 = Number(nota3)

//media = (nota1 + nota2 + nota3)/3

//alert("Nota 1: " + nota1 + "\nNota 2: " + nota2 + "\nNota 3: " + nota3 )
//alert("A média entre as três notas é: " + media)


// ==============================================
//Atividade peba e o campeonato


// let vitoria, empates
// let pontos, vitoriaPonto

// vitoria = prompt("Digite a quantidade de vitórias:")
// vitoria = Number(vitoria)

// empates =  prompt("Digite a quantidade de empates:")
// empates = Number(empates)

// vitoriaPonto = vitoria * 3
// pontos = vitoriaPonto + empates
// alert("Seu time tem: " + pontos + " pontos")

// ===============================================

/////// PE PEQUENO 

// let valorPar, quantidadePar, valeTroca

// quantidadePar = Number(prompt("Digite quantos pares a empresa precisa trocar: "))
// valorPar = Number(prompt("Digite o valor pago em cada par: "))

// valeTroca = quantidadePar * valorPar

// alert("Seu vale trocas é de: " + valeTroca + " reais")

// =================================================

/////// GUILHERME PORTOES

// let clt, pj, totalDevs

// clt = Number(prompt("Digite a quantidade de CLTs que tem na empresa: "))
// pj = Number(prompt("Digite a quantidade de PJs que tem na empresa: "))

// totalDevs = clt + pj 

// alert("Na empresa tem " + totalDevs + " devs na empresa!")

// =================================================

/////// TRAJETO POMAR

// let qtdIncial, qtdFinal, vendas

// qtdIncial = Number(prompt("Digite a quantidade de laranjas inicialmente: "))
// qtdFinal = Number(prompt("Digite a quantidade final de laranjas: "))

// vendas = qtdIncial - qtdFinal

// console.log("Suas vendas são de: " + vendas.toFixed(2) + " laranjas")

// =================================================
/////// PERNAMBUCO PASTOR

// let custos, dizimo, oferta, totalRecebido, faltaPagar

// custos = Number(prompt("Digite os custos totais mensais: "))

// dizimo = Number(prompt("Digite o valor de dizimos de hoje: "))
// oferta = Number(prompt("Digite o total de ofertas de hoje: "))

// Number(totalRecebido = oferta + dizimo)

// faltaPagar = totalRecebido - custos

// alert("Faltam pagar: " + faltaPagar.toFixed(2) + " Reais!")


// ====================================================

/////// JUNIN E O SALARIO DIARIO

// let salarioMensal, diasTrabalhados, salarioSemanal, salarioDia


// salarioMensal = Number(prompt("Digite seu salário mensal: "))
// diasTrabalhados = Number(prompt("Digite a quantidade de dias trabalhados"))

// salarioDia = Number(salarioMensal / diasTrabalhados)

// salarioSemanal = Number(salarioDia * 5)


// alert("O salário que recebe por dia é de: R$" + salarioDia.toFixed(2) + " Reais!" )
// console.log("O salário que recebe por dia é de: R$" + salarioDia.toFixed(2) + " Reais!" )


// alert("O salário que recebe por semana é de: R$" + salarioSemanal.toFixed(2) + " Reais!" )
// console.log("O salário que recebe por semana é de: R$" + salarioSemanal.toFixed(2) + " Reais!" )


// ========================================================


let frete, peso, distancia, volume

peso = Number(prompt("Digite o peso total: "))
volume = Number(prompt("Digite o volume total: "))
distancia = Number(prompt("Digite a distância total: "))

frete = 15+(2*peso)+(0.05*distancia)+(10*volume)

alert("O frete é de: R$" + frete.toFixed(2) + " reais!")
console.log("O frete é de: R$" + frete.toFixed(2) + " reais!")