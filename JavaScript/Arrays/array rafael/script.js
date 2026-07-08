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

const pares = []

function arrayPar(){

  for(let i = 2; i<=20; i+=2 ){

    pares.push(i)

  }

  alert(pares)

}

function substituir(){

 pares.splice(2, 1, 12)

  document.getElementById('respostaNumeros').innerHTML = pares

}

const frutas = ["manga", "banana", "uva"]

function adicionarFruta(){

  let fruta = prompt("Digite uma fruta:")
  frutas.push(fruta)

  document.getElementById("fruta").innerHTML = frutas

}

function removerFruta(){

  frutas.splice(1,1)
  document.getElementById("fruta").innerHTML = frutas
  console.log(frutas)

}


const nomes = ['Alice', 'Bob', 'Charlie', 'Dave', 'Eva', 'Frank']
const idades = [25, 30, 28, 22, 26, 24]


function somandoAmigos(){
  
  const arrayProv = ["caue", "luiz", "soares", "comiran"]
  
  for(let i = 0; arrayProv.length; i++  ){
    let nomeProv = arrayProv.pop()
    nomes.push(nomeProv)
  }
 console.log(nomes)
}


function calcularMediaIdade(){

  let media = 0

  for(let i = 0; i < idades.length; i++){

    let somaDeIdade = 0
    somaDeIdade = idades[i]

    media += somaDeIdade

  }
  
 media = media / idades.length

  document.getElementById("Amigos").innerHTML = `Média de idades: ${media}`

 
}



const compras = ["manga", "banana", "melao"]

function adicionarAoCarrinho(){}

























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