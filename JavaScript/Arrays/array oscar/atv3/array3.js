
const arrayOriginal = ["Lúcio Fernando", "Mônica", "Capitão Ganso"];
const nomesArray = ["Lúcio Fernando", "Mônica", "Capitão Ganso"];

const containerPush = document.getElementById("container-push")
const respostaUnshift = document.getElementById("resposta-unshift")

function adicionarPush(){

    const addElemento = document.getElementById("addElemento")// variavel
    nomesArray.push(addElemento.value) // pega p valor do input
    addElemento.value = "" // muda o valor do input

    containerPush.innerHTML="" // muda o valor de onde vai as respostas
    nomesArray.forEach((nome,i) => { // tem que ter 2 ((parenteses))

    const div = document.createElement("div") // cria uma div
    div.className = "respostas"; /// coloca a class de "respostas"
    div.id = "R"+i; // coloca um id nele
    div.innerHTML = `<span> ${i+1}° objeto do array</span> ${nome}` // escreve dentro dessa pagina

    containerPush.appendChild(div) // envia tudo para a div de respostas
   });
}



function addPush(){


    const inputUnshift = document.getElementById("input-unshift")
    nomesArray.unshift(inputUnshift.value)
    inputUnshift.value = ""

    
    respostaUnshift.innerHTML = ""

    nomesArray.forEach((nome,i) => {

        const div = document.createElement("div")
        div.className = "resposta"
        div.id = "unshift"+i
        div.innerHTML = `<span> ${i+1}° objeto do array e ${nome}</span>`

        respostaUnshift.appendChild(div)

        

    });

}
















































