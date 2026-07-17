    // C >> CRIAR

    // R >> Read = ler

    // U >> updat = atualizar

    // D >> delete = excluir

    

    const dinos = []
    const mostrar = document.getElementById("mostrar-dinos")

    function adicionar(){

        const novoDino = {

            id: Date.now(),
            nome: document.getElementById("input-nome").value,
            altura: Number(document.getElementById("input-altura").value),
            cor: document.getElementById("input-cor").value,
            custo: Number(document.getElementById("input-custo").value),

        }

        document.getElementById("input-nome").value = ""
        document.getElementById("input-altura").value = ""
        document.getElementById("input-cor").value = ""
        document.getElementById("input-custo").value = ""

        document.getElementById("input-nome").focus()


       dinos.push(novoDino)

    }
    
    function mostrarDinos(){

       dinos.forEach((dino, i) =>{
        
            const celula = document.createElement("div");

            celula.className = "celula";
            celula.id = "item" + i;
            celula.innerHTML = `<span> O nome do dino  ${dino.nome} </span>`

            

        mostrar.appendChild(celula)

        //console.log(dinos[0].nome)
        console.log(dinos)
        
    })}
        



    
        