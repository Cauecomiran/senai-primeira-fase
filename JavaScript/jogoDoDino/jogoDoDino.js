let lucro = 0, valorAposta = 0, premio = 0

function aposta(dino){
    let numeroSorteado
        numeroSorteado = Math.ceil(Math.random()*10)

        valorAposta = Number(document.getElementById("inputAposta").value)
        premio = valorAposta * 2

    
    if(numeroSorteado == dino && premio <= lucro*0.2 )
        {
            document.getElementById("dinoSorteado").innerHTML = "Você ganhou!"

            lucro = lucro - premio
            alert(lucro)

            //====
            if(dino == 1){
                document.getElementById("dinoEscolhido").innerHTML = "Seu dino = T-Rex"
            } else if



        } else {
            document.getElementById("dinoSorteado").innerHTML = "Você perdeu!"
        
            lucro += valorAposta
            alert(lucro)
        }

    
  

}