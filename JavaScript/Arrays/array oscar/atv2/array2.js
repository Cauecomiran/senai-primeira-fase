

const linha = document.getElementById("linha")
const array = ["caue","luiz","murilo", "iuri", "antonio", "kowaski", "P. Ernan Buco"]

const respostas = document.getElementById("respostas")

array.forEach((nome, i) => {

    const div = document.createElement("div")

    div.className = "divLinha"
    div.id = "idLinha" + i

    div.innerHTML = `<span> ${i+1}° nome: ${nome}`

    linha.appendChild(div);
    
});

function exec1(){


    if(array.includes("kowaski")===false || array.includes("Kowaski")){
        respostas.innerHTML = "Kowaski não está na lista!"
    }else{
        respostas.innerHTML = "Kowaski está na lista!"
    }


}

function exec2(){

    let indice = array.indexOf("P. Ernan Buco")

    respostas.innerHTML = `Seu nome tem o INDICE ${indice}`
}

function exec3(){
    let removerNome = prompt("Digite o nome que quer remover:")

    for(i; i=array.length; i++){

        if(array[i]===removerNome){
            
            array.splice(i,0)

            respostas
        }

    }
}