let dia = document.querySelector("#dia");
let mes = document.querySelector("#mes");
let btcalculo = document.querySelector("#btcalculo");
let resultado = document.querySelector("#resultado");

function diaspassados (){
    let numdias = Number(dia.value);
    let nummes = Number(mes.value);

    let menosdias =( 30 - numdias);

    let caldias =( 30 - menosdias);
    let calmes = ( nummes * 30 ) -30;

    let totaldias = ( calmes + caldias )
    
    resultado.innerHTML = 
    "Este ano já se passaram, " + totaldias + " dias.";
}

btcalculo.onclick = function(){
    diaspassados();
}