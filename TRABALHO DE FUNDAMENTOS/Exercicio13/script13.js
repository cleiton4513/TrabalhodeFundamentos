let raio = document.querySelector("#raio");
let btcalculo = document.querySelector("#btcalculo");
let resultado = document.querySelector("#resultado");

function calculoraio (){
    let vlrraio = Number(raio.value);

    let execuraio =( vlrraio * vlrraio) * 3.14 ;

    resultado.innerHTML = 
    " A área da pizza será de " + execuraio + " cm ";

}

btcalculo.onclick = function(){
    calculoraio();
}
