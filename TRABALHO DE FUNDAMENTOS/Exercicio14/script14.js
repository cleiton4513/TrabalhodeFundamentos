let conta = document.querySelector("#conta")
let btcalculo = document.querySelector("#btcalculo");
let resultado = document.querySelector("#resultado");

function pagarconta (){
let vlrconta = Number( conta.value );

let calculo1 = ( vlrconta / 3);
let calculo2 = (parseInt(calculo1));
let calculo3 = ( vlrconta - calculo2) - calculo2;

resultado.innerHTML = 
" Carlos pagará, " + calculo2+ " Reais da conta " + "<br>"+
" André pagará, " + calculo2 + " Reais da conta " + "<br>"+
" E Felipe pagará o restande, que será, " + calculo3 + " Reais da conta. ";

}

btcalculo.onclick = function(){
    pagarconta();
}