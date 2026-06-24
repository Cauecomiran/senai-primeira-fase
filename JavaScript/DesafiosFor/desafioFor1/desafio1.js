function desafio1(){

    let dia = Number(prompt("Digite quantos dias tem a spring:"))
    let tarefasConcluida = 0
    let totalTarefas = 0

    document.getElementById("d1").innerHTML = " "

    for(let i = 1; i<=dia; i++){

        tarefasConcluida = Number(prompt("Digite a quantidade de tarefas concluidas no: " + i + "° dia:"))

        document.getElementById("d1").innerHTML += "No dia " + i + " foram feitas " + tarefasConcluida + " tarefas!!!<br>"

        totalTarefas += tarefasConcluida
    }

    document.getElementById("d1").innerHTML += "<br> ___________________________________________________________ <br> <br> tarefas feitas na sprint: " + totalTarefas

}

function desafio2(){
    let dia = Number(prompt("Digite a quantidade de dias da Sprint:"))
    
    let bugTotal = 0, media = 0, bugMaior = 0, bugMenor = 0; diaMenor = 0; diaMaior = 0; diaCriticoMais = 0; diaCriticoMenos = 0;

    for(let i = 1; i<= dia; i++){

        let bugDia = Number(prompt("Digite a quantidade de bugs do " + i + "° dia: "))

            bugTotal += bugDia
            media = bugTotal / dia

        if( i == 1){
            //=======
            bugMaior = bugDia
            bugMenor = bugDia

            diaMaior = i
            diaMenor = i

            document.getElementById("resposta2").value = "Dia " + i + " ocooreu " + bugDia + " bugs!!! " 
            //=======
        }else if(bugDia > bugMaior){
            //=======
            bugMaior = bugDia
            diaMaior = i

            document.getElementById("resposta2").value += "\nDia " + i + " ocooreu " + bugDia + " bugs!!! " 
            //=======
        }else if(bugDia < bugMenor ){
            //=======
            bugMenor = bugDia
            diaMenor = i

            document.getElementById("resposta2").value += "\nDia " + i + " ocooreu " + bugDia + " bugs!!! " 
            //=======
        }else{
            //=======
            document.getElementById("resposta2").value += "\nDia " + i + " ocooreu " + bugDia + " bugs!!! "  
            //=======
        }
        
        if(bugDia >= 10){
            //=======
            document.getElementById("resposta2").value += " DIA CRÍTICO"
            diaCriticoMais++
            //=======
        }else if(bugDia == 0 ){
            //=======
            diaCriticoMenos++
        }
    }
            
        document.getElementById("resposta2").value += "\n---------------------"
        document.getElementById("resposta2").value += "\nTotal de BUGs na sprint: " + bugTotal
        document.getElementById("resposta2").value += "\nMédia diária de bugs: " + media
        document.getElementById("resposta2").value += "\nO " + diaMenor + "° dia teve menos BUGs com um total de: " + bugMenor + " bug(s)"
        document.getElementById("resposta2").value += "\nO " + diaMaior + "° dia teve menos BUGs com um total de: " + bugMaior + " bug(s)"
        document.getElementById("resposta2").value += "\nDias com mais de 10 BUGs: " + diaCriticoMais
        document.getElementById("resposta2").value += "\nDias com 0 BUGs: " + diaCriticoMenos
    



}