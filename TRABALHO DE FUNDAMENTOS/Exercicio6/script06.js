let cliente = document.querySelector("#cliente");
let btcalculo = document.querySelector("#btcalculo");
let resultado = document.querySelector("#resultado");

function calculokg (){
    let pratocliente = Number(cliente.value);

    let pagarkg = (pratocliente * 12.00);

    resultado.innerHTML =
    "O cliente paga-rá pelo seu prato, " + pagarkg + " Reais." ;
}

btcalculo.onclick = function (){
    calculokg();
}