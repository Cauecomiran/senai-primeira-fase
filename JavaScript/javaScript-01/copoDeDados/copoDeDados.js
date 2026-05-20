let numeroAleatorio, resultado, resultadoTotal

function d2(){
    numeroAleatorio = Math.random()

   let dd2 = numeroAleatorio * 2
    
    resultado = Math.ceil(dd2)

  document.getElementById('resultado').innerHTML = "Resultado do D2: " + resultado
}

function  d4(){
let dd4, resultado

numeroAleatorio = Math.random()*4

dd4 = Math.ceil(numeroAleatorio)

resultado = dd4

document.getElementById('resultado').innerHTML = ('Resultado do D4: ' + dd4)

}

function d6(){

let dd6

    numeroAleatorio = Math.random()*4

    dd6 = Math.ceil(numeroAleatorio)

    document.getElementById('resultado').innerHTML = "Resultado do D6: " + dd6


}

function d8(){

numeroAleatorio = Math.random()*8

let dd8 = Math.ceil(numeroAleatorio)
resultado = dd8

document.getElementById('resultado').innerHTML = "Resultado do D8: " + dd8


}

function d10(){
let dd10

numeroAleatorio = Math.random()*10

    dd10 = Math.ceil(numeroAleatorio)

    resultado = dd10

document.getElementById('resultado').innerHTML = "Resultado do D10: " + dd10


}

function d12(){

    let dd12

numeroAleatorio = Math.random()*12

dd12 = Math.ceil(numeroAleatorio)

document.getElementById('resultado').innerHTML = "Resultado do D12: " + dd12
}

function d20(){



}

function d100(){
}

