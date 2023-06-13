let cliente = document.querySelector("#cliente");
let preco = document.querySelector("#preco");
let btcalculo = document.querySelector("#btcalculo");
let resultado = document.querySelector("#resultado");

function calculogasolina (){
    let vlrcliente = Number(cliente.value);
    let vlrpreco = Number(preco.value);

    let callitro =(vlrcliente / vlrpreco);

    resultado.innerHTML = 
    "Com este montante, você abastece-rá, " + callitro + " Litros de Gasolina. ";

}

btcalculo.onclick = function(){
    calculogasolina();
}