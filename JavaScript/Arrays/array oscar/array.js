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
    celula.innerHTML = `<p class="valor"> ${nome} </p> <p class="idx">[${i}]</p>`;
    
    lista.appendChild(celula);
////////////
    const opt = document.createElement("option");
    opt.value = nome;
    opt.textContent = nome;
    seletor.appendChild(opt);


});
