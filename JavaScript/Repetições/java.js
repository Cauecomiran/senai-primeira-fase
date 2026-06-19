// let contador = 0

// while( contador<10

// ){
//     alert("Contador é menor que 10\n contador: " + contador)
//     contador++
// }// volta e testa novamente a condição

// let contagem = 0
// let total = 0

// while(contagem < 10){
// contagem++

//     let preco = Number(prompt("Digite o valor do " + contagem + "° produto"))

//     total = total + preco 

// }
 
// document.getElementById("teste").innerHTML = "O total é de: " + total


// ==============================================================
// let i = 1
// let quadrado

// while(i <= 10){

//     quadrado = i * i

//     i++

//     alert(quadrado)
// }

//=================================================================


// let contagem = 10

// while(contagem > 0){

//     alert(contagem)

//     contagem = contagem - 1

    
// }

//===================================================================

// let contagem = 0
// let total = 0

// while(contagem < 100){

//     contagem++

//     total += contagem


// }

// alert(total)

//=======================================================================

// let i = 0

// while(i < 10){

//     i++ 
//     let tabuada = 5*i

//     document.getElementById("tabuada").innerHTML += i + " x 5 = " + tabuada + "<br>"

// }

// let expoente = prompt("Digite a tabuada que quer saber:")
// let i = 0

// while(i < 10){

//     i++ 
//     let tabuada = expoente*i

//     document.getElementById("tabuada").innerHTML += i + " x " + expoente + " = " + tabuada + "<br>"

// }

// let i = 1

// while(i < 20){

//     document.getElementById("tabuada").innerHTML += i + "<br>"
//     i = i + 2

// }

// let i = 0

// while(i < 10){
//     i++
//     document.getElementById("teste").innerHTML += i + '<br>'
// }


// while(i > 0){
//     document.getElementById("teste").innerHTML += i + '<br>'
//     i = i-1 
// }


//============================

// let i = Number(prompt("Digite o numero a calcular o fatorial: "))
// let fatorial = 1

// while(i >= 1){



//     fatorial = fatorial * i
//     i = i - 1
// }

// document.getElementById("teste").innerHTML = "fatorial e: " + fatorial

// let i = 0

// let div3, div5

// while( i < 100){

//     i++

//     div3 = i % 3
//     div5 = i % 5


//     if(div3 == 0 && div5 == 0){
//         //algo 
//         document.getElementById("teste").innerHTML += " FizzBuzz<br>"

//     }else if(div3 == 0){
//         //algo
//         document.getElementById("teste").innerHTML += " Fizz<br>"
//     }else if(div5 == 0){
//         //algo
//         document.getElementById("teste").innerHTML += " Buzz<br>"
//     }else{
//         //algo
        
//         document.getElementById("teste").innerHTML += i + "<br>"
//     } 
// }
//================================================================================

// let i = 0
// let soma = 0

// while( i <10){

//         i++

//         let fracao = 1/i

//         soma = soma + fracao

        
// }


// document.getElementById("teste").innerHTML = "Resultado: " + soma.toFixed(5)

// ===================================================================================

// let i = -1
// let numeroUsuario = Number(prompt("Digite um valor:"))
// let par = 0, impar = 0


// while( i < numeroUsuario ){
//     i++

//     if( i%2 == 0 ){
//         par++

//     }else{
//         impar++
//     }

// }

// document.getElementById('teste').innerHTML = 
//     "Total de números pares: "  + par +
//     "<br>Total de números impares: " + impar

function atividade12(){
let numero1,numero2,numero3,numero4,numero5
let i = 0

numero1 = Number(document.getElementById("1").value)
numero2 = Number(document.getElementById("2").value)
numero3 = Number(document.getElementById("3").value)
numero4 = Number(document.getElementById("4").value)
numero5 = Number(document.getElementById("5").value)

while( i<numero1 || i<numero2 || i<numero3 || i<numero4 || i<numero5){
    i++
}

    document.getElementById("teste").innerHTML += i


while(i>numero1 || i>numero2 || i>numero3 || i>numero4 || i>numero5){
    i=i-1
}
    document.getElementById("teste2").innerHTML += i


}





































