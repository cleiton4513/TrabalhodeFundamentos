let xa = document.querySelector("#xa");
let xb = document.querySelector("#xb");
let ya = document.querySelector("#ya");
let yb = document.querySelector("#yb");
let btcalculo = document.querySelector("#btcalculo");
let resultado = document.querySelector("#resultado");

function calculoCartesiano (){
    let x1 = Number( xa.value );
    let x2 = Number( xb.value );
    let y1 = Number( ya.value );
    let y2 = Number( yb.value );

    var total = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    resultado.innerHTML =
    "A distância entre os dois pontos será de: " + total + " cm.";
    
}

btcalculo.onclick = function (){
    calculoCartesiano();
}