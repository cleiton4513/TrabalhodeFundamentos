let dias = document.querySelector("#dias");
let btcalculo = document.querySelector("#btcalculo");
let resultado = document.querySelector("#resultado");

function calculardias (){
    let vlrdias = Number( dias.value);

    let converteranos =( vlrdias / 360);
    let qntdanos = (parseInt( converteranos ));

    let multianos = (qntdanos * 360);
    let calcularmeses = vlrdias - multianos;
    let multimeses = calcularmeses / 30;
    let convertermeses = (parseInt (multimeses) );

    let multidias = ( convertermeses * 30 );
    let converterdias = ( calcularmeses - multidias );
    
    resultado.innerHTML = 
    "Na conversão teremos, " + qntdanos + " anos, " + convertermeses + " meses e " + converterdias + " dias. ";
}

btcalculo.onclick = function(){
    calculardias();
}