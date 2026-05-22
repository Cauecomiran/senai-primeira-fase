let numeroAleatorio, resultadoTotal = 0

function d2(){

    let dd2

numeroAleatorio = Math.random()* 2
dd2 = Math.ceil(numeroAleatorio)
    document.getElementById('resultado').innerHTML = "Resultado do D2: " + dd2

/////////

    resultadoTotal = resultadoTotal + dd2
    document.getElementById('resultadoTotal').innerHTML = "Resultado Total: " + resultadoTotal

///////////
 
    document.getElementById('rolagens').innerHTML += "Rolagem de d2: " + dd2 + '<br>'


}

function  d4(){
let dd4

numeroAleatorio = Math.random()*4
dd4 = Math.ceil(numeroAleatorio)

document.getElementById('resultado').innerHTML = ('Resultado do D4: ' + dd4)
//======
resultadoTotal = resultadoTotal + dd4
document.getElementById('resultadoTotal').innerHTML = "Resultado Total: " + resultadoTotal
//==========
document.getElementById('rolagens').innerHTML += "Rolagem de d4: " + dd4 + '<br>'
}

function d6(){

let dd6

    numeroAleatorio = Math.random()*6

    dd6 = Math.ceil(numeroAleatorio)

    document.getElementById('resultado').innerHTML = "Resultado do D6: " + dd6

    resultadoTotal = resultadoTotal + dd6
    document.getElementById('resultadoTotal').innerHTML = "Resultado Total: " + resultadoTotal

    document.getElementById('rolagens').innerHTML += "Rolagem de d6: " + dd6 + '<br>'
}

function d8(){

numeroAleatorio = Math.random()*8

let dd8 = Math.ceil(numeroAleatorio)
resultado = dd8

document.getElementById('resultado').innerHTML = "Resultado do D8: " + dd8

resultadoTotal = resultadoTotal + dd8
document.getElementById('resultadoTotal').innerHTML = "Resultado Total: " + resultadoTotal

document.getElementById('rolagens').innerHTML += "Rolagem de d8: " + dd8 + '<br>'


}

function d10(){
let dd10

numeroAleatorio = Math.random()*10

    dd10 = Math.ceil(numeroAleatorio)

document.getElementById('resultado').innerHTML = "Resultado do D10: " + dd10

resultadoTotal = resultadoTotal + dd10
document.getElementById('resultadoTotal').innerHTML = "Resultado Total: " + resultadoTotal

document.getElementById('rolagens').innerHTML += "Rolagem de d10: " + dd10 + '<br>'


}

function d12(){

    let dd12

numeroAleatorio = Math.random()*12

dd12 = Math.ceil(numeroAleatorio)

document.getElementById('resultado').innerHTML = "Resultado do D12: " + dd12

resultadoTotal = resultadoTotal + dd12
document.getElementById('resultadoTotal').innerHTML = "Resultado Total: " + resultadoTotal

document.getElementById('rolagens').innerHTML += "Rolagem de d12: " + dd12 + '<br>'

}

function d20(){

    let dd20

numeroAleatorio = Math.random()*20

dd20 = Math.ceil(numeroAleatorio)

document.getElementById('resultado').innerHTML = "Resultado do D20: " + dd20

resultadoTotal = resultadoTotal + dd20
document.getElementById('resultadoTotal').innerHTML = "Resultado Total: " + resultadoTotal

document.getElementById('rolagens').innerHTML += "Rolagem de d20: " + dd20 + '<br>'


}

function d100(){

    let dd100

numeroAleatorio = Math.random()*100
dd100 = Math.ceil(numeroAleatorio)


document.getElementById('resultado').innerHTML = "Resultado do D100: " + dd100
 
resultadoTotal = resultadoTotal + dd100
document.getElementById('resultadoTotal').innerHTML = "Resultado Total: " + resultadoTotal

document.getElementById('rolagens').innerHTML += "Rolagem de d100: " + dd100 + '<br>'
}

