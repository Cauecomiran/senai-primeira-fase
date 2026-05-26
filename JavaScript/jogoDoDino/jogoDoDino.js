let lucro, valorAposta, premio

function aposta(dino){
    let numeroSorteado
        numeroSorteado = Math.ceil(Math.random()*10)

        valorApostaposta = Number(document.getElementById("inputAposta").value)
        premio = valorAposta * 2

    if(numeroSorteado == dino && valorDeAposta <= lucro*0.2 )
        {
            document.getElementById("dinoSorteado").innerHTML = "Você ganhou!"
        } else {
            document.getElementById("dinoSorteado").innerHTML = "Você perdeu!"
        }

    


}