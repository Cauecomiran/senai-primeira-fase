let lucro = 0, valorAposta = 0, premio = 0

function aposta(dino){
    let numeroSorteado
        numeroSorteado = Math.ceil(Math.random()*10)

        valorAposta = Number(document.getElementById("inputAposta").value)
        premio = valorAposta * 2

    
    if(numeroSorteado == dino && premio <= lucro*0.2 )
        {
         document.getElementById("resultado").innerHTML = "Você ganhou R$" + premio.toFixed(2) + "!!!"

         

        }else{
            document.getElementById("resultado").innerHTML = "Você perdeu!!!"
            lucro += valorAposta
        }

}
  

