let camisetaP = document.querySelector("#camisetaP");
let camisetaM = document.querySelector("#camisetaM");
let camisetaG = document.querySelector("#camisetaG");
let btcalculo = document.querySelector("#btcalculo");
let resultado = document.querySelector("#resultado");

function calcamisetas (){

    let peitaP = Number(camisetaP.value);
    let peitaM = Number(camisetaM.value);
    let peitaG = Number(camisetaG.value);
     
    let totalP = (peitaP * 10);
    let totalM = (peitaM * 12);
    let totalG = (peitaG * 15);

    let total = (totalP + totalM + totalG);

    resultado.innerHTML =
    "O valor recebido pelas vendas será de " + total + " Reais" ;
}

btcalculo.onclick = function(){
    calcamisetas();
}