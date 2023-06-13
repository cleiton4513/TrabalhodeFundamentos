let largura = document.querySelector("#largura");
let comprimento = document.querySelector("#comprimento");
let btcalculo = document.querySelector("#btcalculo");
let resultado = document.querySelector("#resultado");

function calculoarea (){
    let callar = Number( largura.value );
    let calcom = Number( comprimento.value );

    let vlrarea = ( callar * calcom );

    resultado.innerHTML =
    "A área do terreno será de:" + vlrarea + "m" + "<br>" ;

}

btcalculo.onclick = function (){
    calculoarea();
}
