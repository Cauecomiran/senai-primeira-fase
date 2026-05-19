let total = 0

function registrar(){

let valor = Number(document.getElementById('input').value)
total = total + valor


document.getElementById('totalDeVendas').innerHTML = 
"Total de Vendas: R$" + total.toFixed(2)

document.getElementById('input').value = ""
document.getElementById("input").focus()

document.getElementById('listaDeVenda').innerHTML += "R$" + valor.toFixed(2)
+ '<br>'


















}






