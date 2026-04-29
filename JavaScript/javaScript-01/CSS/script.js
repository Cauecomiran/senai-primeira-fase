function calcularPrecoBrique(){
   let precoVenda, precoCompra

    precoCompra = Number(prompt("Qual o valor foi pago?"))

    precoVenda = precoCompra * 3

    alert("valor de venda: R$" + precoVenda.toFixed(2))

    document.getElementById("resultado").innerHTML = "Valor de venda: R$" + precoVenda.toFixed(2)



}