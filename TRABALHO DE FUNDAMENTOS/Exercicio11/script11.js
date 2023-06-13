let salario = document.querySelector("#salario");
let btcalculo = document.querySelector("#btcalculo");
let resultado = document.querySelector("#resultado");

function calculosalario (){
    let vlrsalario = Number(salario.value);
    
    let vlrajuste = ( (vlrsalario * 15) / 100 ) + vlrsalario;
    let cal8porc = ( ( vlrajuste * 8 ) / 100 );
    let vlrdesconto = ( vlrajuste - cal8porc);

    resultado.innerHTML = 
    "Seu salário inicial é de " + vlrsalario + " Reais." + "<br>"+
    "Reajustado em 15%, irá para " + vlrajuste + " Reais." + "<br>"+
    "E descontando 8% de impostos irá receber, " + vlrdesconto + " Reais liquido. ";    
}

btcalculo.onclick = function(){
    calculosalario();
}