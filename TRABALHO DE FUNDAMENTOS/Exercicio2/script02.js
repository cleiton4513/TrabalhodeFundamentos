let cavalos = document.querySelector("#cavalos");
let btcalculo = document.querySelector("#btcalculo");
let resultado = document.querySelector("#resultado");

function calcularfer (){

    let qntdcavalos = Number( cavalos.value );

    let qntdfer = (qntdcavalos * 4 );

    resultado.innerHTML =
    " No total serão " + qntdfer + " ferraduras" + "<br>";

}

btcalculo.onclick = function (){
    calcularfer();
}
