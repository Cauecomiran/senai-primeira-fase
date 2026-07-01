let produtos = ["meia", "pa de corte", "manga", "leite"]
let precos = [12, 120, 5, 6]


function verProduto(){
  for(let i = 0; i<produtos.length; i++){

  let j = i+1

  document.getElementById("listaDeProdutos").innerHTML +=
   "<p>" + j + "° produto: " + produtos[i] + " Valor R$" + precos[i] + "</p>"

  }
}

function rmvUltimoProduto(){

  let ultimoProd = produtos.pop()

  document.getElementById("listaDeProdutos").innerHTML += 
    "<p>" + "Ultimo produto removido: " + ultimoProd + " foi removido!!!" + "</p>"


}

function precoX4(){

    for(let i = 0; i<precos.length; i++){
        precos[i] = precos[i]*4
    }
    verProduto()

}

function addProduto(){
  
  let produto, preco, i = 0

  do{
    produto = prompt("Digite o nome do produto:")
  }while(produto == "")

  do{
    preco = Number(prompt("Digite o valor do produto:"))
  }while(preco == "")

    produtos.push(produto)
    precos.push(preco)

    verProduto()
}

const dias = ["segunda", "terça", "quarta", "quinta", "sexta", "sabado", "domingo"]

function diasDaSemana(){

  let dia = prompt("Digite feriado")

  dias.push(dia)
  document.getElementById("respostaDias").innerHTML = dias
}

function remover(){

  dias.pop()

  document.getElementById("respostaDias").innerHTML = dias

}

function(){}




// const nomes = [
//   "Lúcio Fernando",
//   "Rivaldo Jesus",
//   "Mônica",
//   "Capitão Ganso",
//   "Peba",
//   "Gill Bates",
//   "Dona Bete",
//   "Kowalski",
//   "Heitor Tuga",
//   "Junin",
//   "Padre Ernan Buco",
//   "GENéZio",
//   "Bilu",
//   "Waldisney",
//   "Tião"
// ];