// // let contador = 0

// // while( contador<10

// // ){
// //     alert("Contador é menor que 10\n contador: " + contador)
// //     contador++
// // }// volta e testa novamente a condição

// let total
// let i = 0
    
// while(i<3){
//     i++
//     let preco = Number(prompt("Digite o valor do " + i + "° produto:"))

//     document.get("total") += "<br>" + i + "° produto: R$" + preco.toFixed(2) + "<br>"

//     total = total + preco
// }

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

let i = 0

let div3, div5

while( i < 100){

    i++

    div3 = i % 3
    div5 = i % 5


    if(div3 == 0 && div5 == 0){
        //algo 
        document.getElementById("teste").innerHTML += " FizzBuzz<br>"

    }else if(div3 == 0){
        //algo
        document.getElementById("teste").innerHTML += " Fizz<br>"
    }else if(div5 == 0){
        //algo
        document.getElementById("teste").innerHTML += " Buzz<br>"
    }else{
        //algo
        
        document.getElementById("teste").innerHTML += i + "<br>"
    }



       
}












































