let primeiroNumero = document.querySelector ("#primeiroNumero");
let btCalcular = document.querySelector ("#btCalcular");
let resultado = document.querySelector ("#resultado");

function verificarSeParOuImpar(){
    let valor1 = Number(primeiroNumero.value);

    if( valor1 % 2 == 0 ){
        resultado.innerHTML =
        "\u00c9 par!";
    }else if( valor1 % 2 == 1 ){
        resultado.innerHTML =
        "\u00c9 \u00edmpar!";
    }

};

btCalcular.onclick = function (){
    verificarSeParOuImpar();

};