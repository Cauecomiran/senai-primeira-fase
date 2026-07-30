    // C >> CRIAR

    // R >> Read = ler

    // U >> updat = atualizar

    // D >> delete = excluir

    

    let dinos = [
        {
          id: 1234,
          nome: "T-Rex",
          altura: 0.25,
          custo: 49.90,
          cor: "Verde Musgo"
        },
        {
          id: 5678,
          nome: "Triceratops",
          altura: 0.15,
          custo: 35.00,
          cor: "Azul"
        },
        {
          id: 91011,
          nome: "Velociraptor",
          altura: 0.20,
          custo: 59.90,
          cor: "Marrom Cinzento"
        }
    ];

    const mostrar = document.getElementById("mostrar-dinos")

    function salvarDados(){
      localStorage.setItem("dinos", JSON.stringify(dinos))
    }

    function carregarDados(){
      localStorage.getItem("dinos")

      console.log(dinos[3])
    }


    function adicionar(){
        localStorage.setItem("mostrar", 45)
        
        let testeDeLeitura = localStorage.getItem("mostrar")

        console.log(testeDeLeitura)

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
        salvarDados()
    }
    
    function mostrarDinos(){

        dinos = JSON.parse(localStorage.getItem("dinos"))
        mostrar.innerHTML =""
       dinos.forEach((dino, i) =>{
        
            const div = document.createElement("div");

            div.className = "celula";
            div.id = "item" + i;
            div.innerHTML = `<span> 
            <h2>${dino.nome}</h2>
            <p>altura: ${dino.altura} </p>
            <p>Cor: ${dino.cor}</p>
            <p>Custo: ${dino.custo} </p> </span>`


            

        mostrar.appendChild(div)

        
        
        
    })}
        



    
        