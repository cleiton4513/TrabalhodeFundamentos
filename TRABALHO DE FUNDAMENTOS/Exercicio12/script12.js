let numero = document.querySelector("#numero");
let btcalculo = document.querySelector("#btcalculo");
let resultado = document.querySelector("#resultado");

function calculonumero (){
    let vlrnumero = Number( numero.value);

    let vlrcentena = ( vlrnumero / 100);
    let centena = ( parseInt( vlrcentena));

    let multcentena = ( centena * 100 );
    let caldezena = vlrnumero - multcentena ;
    let pordezena = caldezena / 10 ;
    let dezena = (parseInt(pordezena));

    let calunidade = dezena * 10 ;
    let unidade = vlrnumero - multcentena -  calunidade ;

    resultado.innerHTML = 
    " A apresentação será Centena: " + centena + "<br>"+
    " Dezena será: " + dezena + "<br>"+
    " Unidade será: " + unidade ;

}

btcalculo.onclick = function(){
    calculonumero();
}