let totaContador = 0

function add1() {
    let add1 = 1
    totaContador = totaContador + add1
        document.getElementById("contador").innerHTML = totaContador

    }

function add2(){
    let add2 = 2
    totaContador = totaContador + add2
        document.getElementById("contador").innerHTML = totaContador    

}

function add10(){
    let add10 = 10
    totaContador = totaContador + add10
        document.getElementById("contador").innerHTML = totaContador
}

function diminui1(){
    let diminui1 = 1
    totaContador = totaContador - diminui1
        document.getElementById("contador").innerHTML = totaContador
}

function zerar(){
   
    totaContador = 0
        document.getElementById("contador").innerHTML = totaContador
}