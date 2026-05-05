let resposta = document.getElementById("resultado")

function kowaskiRelatorios(){
    let relatorioPF, tempoPF, valorPF
let relatorioPJ, tempoPJ, valorPJ
let totalRelatorio, tempoTotal, totalRecebido, mediaPF, mediaPJ, mediaTempoPF, mediaTempoPJ

relatorioPF = Number(prompt("Digite a quantidade de relatórios PF:"))
tempoPF = Number(prompt("Digite o tempo gasto em relatórios PF:"))
valorPF = Number(prompt("Digite o fatutamento em relatórios PF"))

relatorioPJ = Number(prompt("Digite a quantidade de relatórios PF:"))
tempoPJ = Number(prompt("Digite o tempo gasto em relatórios PF:"))
valorPJ = Number(prompt("Digite o fatutamento em relatórios PF"))

totalRelatorio = relatorioPF + relatorioPJ
tempoTotal = tempoPF + tempoPJ
totalRecebido = valorPF + valorPJ

mediaPF = valorPF / relatorioPF
mediaPJ = valorPJ / relatorioPJ

mediaTempoPF = tempoPF / relatorioPF
mediaTempoPJ = tempoPJ / relatorioPJ

alert(
"Quantidade total de relatórios: " + totalRelatorio + 
"\nTempo total trabalhado: " + tempoTotal +
"\nValor total recebido: " + totalRecebido +

"\n\n Média de valor recebido por cada relatório PF: R$" + mediaPF.toFixed(2)+
"\n Média de valor recebido por cada relatório PJ: R$" + mediaPJ.toFixed(2)+

"\n\n Média de tempo trabalhado para cada relatório PF: " + mediaTempoPF +
"\n Média de tempo trabalhado para cada relatório PF: " + mediaTempoPJ
)

}

function juninFreeLancer(){

let horasEstimadas, consultor = Number(500), valorHora = Number(350), faturamento, lucro

horasEstimadas = Number(prompt("Qual o total de horas estimasdas?"))

faturamento = Number(500 + horasEstimadas * valorHora)
lucro = faturamento - consultor

alert("Valor total a cobrar: R$" + faturamento.toFixed(2)+
"\nSeu lucro vai de de: R$" + lucro.toFixed(2))
}

function iaPrompt(){
    
let qtdLetras, custoTokensPorMSG, valorEmReais, valorPorToken


qtdLetras = Number(prompt("Digite a quantidade de caracteres sua mensagem tem: "))
valorPorToken = Number(prompt("Qual o valor para cada token?"))

custoTokensPorMSG = Number(5 + qtdLetras)
valorEmReais = valorPorToken * custoTokensPorMSG

alert("Sua mensagem vai custar " + custoTokensPorMSG + " tokens!" +
    "\nSua mensagem vai custar R$" + valorEmReais.toFixed(2))
}

function gaelJares(){
    let qtdCaminhao, caminhaoFrete, qtdJarePorCaminhao, qtdJareTotal
let valorJare, lucro, gasto, faturamento

qtdJarePorCaminhao = Number(prompt("Digite a quantidade de Jarés por caminhão:"))
valorJare = Number(prompt("Digite o valor de cada Jaré:"))
caminhaoFrete = Number(prompt("Digite o valor gasto por caminhão: "))
qtdCaminhao = Number(prompt("Digite a quantidade de caminhões:"))


qtdJareTotal = Number(qtdJarePorCaminhao * qtdCaminhao)
gasto = Number(qtdCaminhao * caminhaoFrete)
faturamento = Number( qtdJareTotal * valorJare )
lucro = faturamento - gasto 

alert("Cada Jaré vale R$" + valorJare.toFixed(2) +
    "\nVocê vai vender " + qtdJareTotal + " Jarés." +
    "\nSeu faturamento bruto vai ser de: R$" + faturamento.toFixed(2) +
    "\n\nPara isso vai precisar de " + qtdCaminhao + " caminhões." +
    "\nCom isso vai gastar um total de R$" + gasto.toFixed(2) + " de frete." +
    "\n==========================" +
    "\nSeu lucro total vai ser de: R$" + lucro.toFixed(2) )

}

function shopRonBernardo(){
    let valorPorQuilo, qtdPorQuilo, qtdPorGrama, valorTotal

valorPorQuilo = Number(prompt("Digite o valor do quilo (Kg) da ração:"))
qtdPorGrama = Number(prompt("Digite a quantidade que vai precisar em gramas (g): "))

qtdPorQuilo = Number(qtdPorGrama / 1000)
valorTotal = qtdPorQuilo * valorPorQuilo

alert(
    "Você pegou " + qtdPorQuilo.toFixed(3) + " quilos de ração!!!" +
    "\nValor a pagar: R$" + valorTotal.toFixed(2))

}

function calcularPrecoBrique(){
   let precoVenda, precoCompra

    precoCompra = Number(prompt("Qual o valor foi pago?"))

    precoVenda = precoCompra * 3

    alert("valor de venda: R$" + precoVenda.toFixed(2))

    document.getElementById("resultado").innerHTML = "Valor de venda: R$" + precoVenda.toFixed(2)



}

function manoJuca(){
    let moradia, agua, luz, net, gasolina, streaming, telefone, outros, despezas, salario, poupanca

salario = Number(prompt("Digite seu salário: "))

moradia = Number(prompt("Digite o valor do aluguel: "))
agua = Number(prompt("Digite o valor da conta de água: "))
luz = Number(prompt("Digite o valor da conta de luz: "))
net = Number(prompt("Digite o valor da conta de internet: "))
gasolina = Number(prompt("Digite o valor gasto em combustível: "))
streaming = Number(prompt("Digite o valor gasto em plataformas de streaming: "))
telefone = Number(prompt("Digite o valor gasto em telefonia: "))
outro = Number(prompt("Digite o valor gasto em outras despezas: "))

despezas = Number(moradia + agua + luz + net + gasolina + streaming + telefone + outro)
poupanca = salario - despezas

alert("Esse mês você conseguirá economizar um total de: R$" + poupanca.toFixed(2))
}

function sarumanoMago(){
    let qtdShow, bombaPorShow, qtdBombas, valorPorBomba, valorGastoTotal

qtdShow = Number(prompt("Digite a quantidade de shows na temporada: "))
bombaPorShow = Number(prompt("Digite a quantidade de bombas usadas por show: "))
valorPorBomba = Number(prompt("Digite o valor gasto por bomba: "))

qtdBombas = Number(qtdShow * bombaPorShow)

valorGastoTotal = qtdBombas * valorPorBomba


alert("Sarumano vai usar essa quantidade de bombas: " + qtdBombas)
console.log("Sarumano vai usar essa quantidade de bombas: " + qtdBombas)

alert("Vai ser gasto um total de: R$" + valorGastoTotal.toFixed(2))
console.log("Vai ser gasto um total de: R$" + valorGastoTotal.toFixed(2))

}

function capitaoGanso(){
    let gastoSuprimento, vendaIngresso, vendaItens, lucro, lucroPer100

gastoSuprimento =  Number(prompt("Digite o valor gasto em suprimentos: "))

vendaIngresso = Number(prompt("Digite o fatuuramento em ingressos: "))
vendaItens =  Number(prompt("Digite o faturamento em itens vendidos: "))

lucro = Number(vendaIngresso + vendaItens - gastoSuprimento)
lucroPer100 = lucro/gastoSuprimento * 100

alert("Seu lucro foi de: R$" + lucro +
    "\n Seu percentual de lucro foi: " + lucroPer100 + "%")

console.log("Seu lucro foi de: R$" + lucro +
    "\n Seu percentual de lucro foi: " + lucroPer100 + "%")

}

function donaBet(){
    let faturamento, premiacao, presente, salario, lucro

faturamento = Number(prompt("Digite o faturamento de hoje:"))
premiacao = Number(prompt("Digite o valor gasto em premiações:"))
presente = Number(prompt("Digite o valor gasto em presentes: "))
salario = Number(prompt("Digite o valor gasto em salários com funci"))

lucro = faturamento - premiacao - presente - salario

alert("O lucro da DonaBet foi de: R$" + lucro )
console.log("O lucro da DonaBet foi de: R$" + lucro)

}

function monicaRecrutadora(){

let chance, vzsNoCelular

vzsNoCelular = Number(prompt("Quantas vezes o candidato pegou o celular:"))

chance = (0.1 / (1 + 500 * vzsNoCelular)) * 100

alert("A chance do candidato passar no teste é de: " + chance.toFixed(4) + "%")
console.log("A chance do candidato passar no teste é de: " + chance.toFixed(4) + "%")

}

function tellesTransportes(){
    let frete, peso, distancia, volume

peso = Number(prompt("Digite o peso total: "))
volume = Number(prompt("Digite o volume total: "))
distancia = Number(prompt("Digite a distância total: "))

frete = 15+(2*peso)+(0.05*distancia)+(10*volume)

alert("O frete é de: R$" + frete.toFixed(2) + " reais!")
console.log("O frete é de: R$" + frete.toFixed(2) + " reais!")
}

function juninSalarioDiario(){
    let salarioMensal, diasTrabalhados, salarioSemanal, salarioDia


salarioMensal = Number(prompt("Digite seu salário mensal: "))
diasTrabalhados = Number(prompt("Digite a quantidade de dias trabalhados"))

salarioDia = Number(salarioMensal / diasTrabalhados)

salarioSemanal = Number(salarioDia * 5)


alert("O salário que recebe por dia é de: R$" + salarioDia.toFixed(2) + " Reais!" )
console.log("O salário que recebe por dia é de: R$" + salarioDia.toFixed(2) + " Reais!" )


alert("O salário que recebe por semana é de: R$" + salarioSemanal.toFixed(2) + " Reais!" )
console.log("O salário que recebe por semana é de: R$" + salarioSemanal.toFixed(2) + " Reais!" )

}

function perNamBuco(){
    let custos, dizimo, oferta, totalRecebido, faltaPagar

custos = Number(prompt("Digite os custos totais mensais: "))

dizimo = Number(prompt("Digite o valor de dizimos de hoje: "))
oferta = Number(prompt("Digite o total de ofertas de hoje: "))

Number(totalRecebido = oferta + dizimo)

faltaPagar = totalRecebido - custos

alert("Faltam pagar: " + faltaPagar.toFixed(2) + " Reais!")
}

function trajetoPomar(){
    let qtdIncial, qtdFinal, vendas

qtdIncial = Number(prompt("Digite a quantidade de laranjas inicialmente: "))
qtdFinal = Number(prompt("Digite a quantidade final de laranjas: "))

vendas = qtdIncial - qtdFinal

console.log("Suas vendas são de: " + vendas.toFixed(2) + " laranjas")
}

function guilhermePortoes(){
    let clt, pj, totalDevs

clt = Number(prompt("Digite a quantidade de CLTs que tem na empresa: "))
pj = Number(prompt("Digite a quantidade de PJs que tem na empresa: "))

totalDevs = clt + pj 

alert("Na empresa tem " + totalDevs + " devs na empresa!")
}

function pePequeno(){
    let valorPar, quantidadePar, valeTroca

quantidadePar = Number(prompt("Digite quantos pares a empresa precisa trocar: "))
valorPar = Number(prompt("Digite o valor pago em cada par: "))

valeTroca = quantidadePar * valorPar

alert("Seu vale trocas é de: " + valeTroca + " reais")

document.getElementById("resultado").innerHTML = "Seu vale trocas é de:" + valeTroca + " reais!"

}

function campeonatoPeba(){

let vitoria, empates
let pontos, vitoriaPonto

vitoria = prompt("Digite a quantidade de vitórias:")
vitoria = Number(vitoria)

empates =  prompt("Digite a quantidade de empates:")
empates = Number(empates)

vitoriaPonto = vitoria * 3
pontos = vitoriaPonto + empates
alert("Seu time tem: " + pontos + " pontos")

document.getElementById("resultado").innerHTML = "<br>Seu time tem: " + pontos + " pontos!"

}

function mediaNota(){
let nota1, nota2, nota3, media

nota1 = prompt("Digite o valor da nota 1: ")
nota1 = Number(nota1)

nota2 = prompt("Digite o valor da nota 2: ")
nota2 = Number(nota2)

nota3 = prompt("Digite o valor da nota 3: ")
nota3 = Number(nota3)

media = (nota1 + nota2 + nota3)/3

alert("Nota 1: " + nota1 + "\nNota 2: " + nota2 + "\nNota 3: " + nota3 )
alert("A média entre as três notas é: " + media)

document.getElementById("resultado").innerHTML = (
    "<br>Nota 1: " + nota1 + 
    "<br>Nota 2: " + nota2 +
    "<br>Nota 3: " + nota3 +
    "<br>A média entre as três notas é: " + media 
)

}
