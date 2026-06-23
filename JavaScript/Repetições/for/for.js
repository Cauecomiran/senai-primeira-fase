function atv1(){

    for( let i = 1; i <= 10; i++){
        document.getElementById("resposta").innerHTML += i + "<br> "
    }
}

function atv2(){

    for(let i = 0; i <= 10; i++){

        let conta = i * 5 

        document.getElementById("resposta").innerHTML += i + " x 5 = " + conta + "<br>"
    }
}

function atv3(){

    for(let i = 0; i <= 10; i++){

        let conta = i*i 

        document.getElementById("resposta").innerHTML += i + "^2 = " + conta + "<br>"
    }
}

function atv4(){

let palavra = "javascript"
let qtdLetras = palavra.length


for(let i = 0; i < qtdLetras; i++ ){

    document.getElementById("resposta").innerHTML += palavra[i] + "<br>"
}
}

function atv5(){
    for(let i = 0; i <= 30; i += 3){

        document.getElementById("resposta").innerHTML += i + "<br>"
    }
}

function atv6(){
    for(let i = 1; i<=10; i++){

        document.getElementById("resposta").innerHTML += "*"


    }
}

function atv7(){

    let conta = 0

    for(let i = 0; i<=20; i+=2){

        
        conta = conta + i

        document.getElementById("resposta").innerHTML = "A soma dos números pares de 1 a 20 é: " + conta

    }



}

function atv8(){
    for(let i = 0; i<=50; i +=5 ){
        document.getElementById("resposta").innerHTML += i + "<br>"}

}

function atv9(){
    for(let i = 0; i< 8; i++)
        document.getElementById("resposta").innerHTML += "Olá "

}

function atv10(){
    let conta = 0
    for(let i = 1; i<=15; i+=2){
        conta = conta + i
        
        document.getElementById("resposta").innerHTML = "Resultado: " + conta
    }

}

function atv11(){

    for(let i=0; i<=12345; i++){

        if(i==1|| i==12 || i==123 || i==1234 || i==12345){
            document.getElementById("resposta").innerHTML += i + "<br>"
        }
    }
}

function atv12(){
   
    let fatorial = 1
    for(let i = 1; i<=5; i++){
      fatorial = i*fatorial  

      document.getElementById("resposta").innerHTML = "Resultado: " + fatorial
    }
}

function atv13(){

    let palavra = prompt("Digite uma palavra qualquer: ")
    let palavraMinuscula = palavra.toLowerCase()
    let qtdO = 0

    for(let i = 0; i<=palavraMinuscula.length; i++ ){
        if(palavraMinuscula[i] == "o" || palavraMinuscula[i]== "ó" || palavraMinuscula[i]== "ò"){
            qtdO ++
        }

        document.getElementById("resposta").innerHTML = "Quantidade de ''O'' na palavra: " + qtdO 
    }


}