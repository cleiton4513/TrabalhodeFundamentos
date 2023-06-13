let paes = document.querySelector("#paes");
let broas = document.querySelector("#broas");
let btcalculo = document.querySelector("#btcalculo");
let resultado = document.querySelector("#resultado");

function calculopadaria (){
    let qntdpaes = Number( paes.value );
    let qntdbroas = Number( broas.value);

    let totalpaes = ( qntdpaes * 0.12);
    let totalbroas = ( qntdbroas * 1.50);

    let faturamento = ( totalpaes + totalbroas );
    let poupanca = ( faturamento * 10 ) /100 ;

    resultado.innerHTML = 
        "O faturamento com pães será de: " + totalpaes + " Reais" + "<br>"+
        "O faturamento com broas será de: " + totalbroas + " Reais" + "<br>"+
        "Deverá reservar " + poupanca + " Reais para poupança.";
}

btcalculo.onclick = function(){
    calculopadaria();
}

