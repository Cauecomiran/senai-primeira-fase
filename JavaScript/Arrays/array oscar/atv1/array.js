const array = ["lucio", "tiao", "bilu", "ronaldo", "heitor"];

const lista = document.getElementById("lista");
const seletor = document.getElementById("seletor");


array.forEach((nome, i) => {

    const celula = document.createElement("div");

    // document.createElement("div").className = "celula";
    celula.className = "celula";
    // document.createElement("div").id = item + i 
    celula.id = "item"+i;
    // document.createElement("div").innerHTML = `<p class="valor"> ${nome} </p> <p class="idx">[${i}]</p>`;
    celula.innerHTML = `<span class="valor">${nome}</span><class="idx">[${i}]</span>`;
    
    lista.appendChild(celula);
////////////
    const opt = document.createElement("option");
    opt.value = nome;
    opt.textContent = nome;
    document.getElementById("seletor").appendChild(opt);


});

function buscarIndice() {

    document.querySelectorAll(".celula").forEach(c=>c.classList.remove("destaque"));
    
    const nomeEscolhido = seletor.value

    const indice = array.indexOf(nomeEscolhido);

    document.getElementById("resultado").innerHTML =
    
    `"${nomeEscolhido}" esta no ${indice + 1}° lugar`
   
 

}
