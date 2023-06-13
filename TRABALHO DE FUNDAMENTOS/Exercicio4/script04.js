let nome = document.querySelector("#nome");
let idade = document.querySelector("#idade");
let btcalculo = document.querySelector("#btcalculo");
let resultado = document.querySelector("#resultado");

function calculodias (){
    let nomevlr = String(nome.value);
    let idadevlr = Number(idade.value);

    let calculodias = (idadevlr * 365);

    resultado.innerHTML= 
    nomevlr +", você já viveu " + calculodias + " dias. " ;

}

btcalculo.onclick = function(){
    calculodias();
}
