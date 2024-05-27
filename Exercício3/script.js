let primeiroNumero = document.querySelector ("#primeiroNumero");
let segundoNumero = document.querySelector ("#segundoNumero");
let btCalcular = document.querySelector ("#btCalcular");
let operacoesDisponiveis = document.querySelector ("#operacoesDisponiveis");

function verificarOperacoesDisponiveis(){
    let valor1 = Number(primeiroNumero.value);
    let valor2 = Number(segundoNumero.value);

    let resultadoSoma = ( valor1 + valor2 );
    let resultadoSubtracao = ( valor1 - valor2 );
    let resultadoMultiplicacao = ( valor1 * valor2 );
    let resultadoDivisao = ( valor1 / valor2 );

    operacoesDisponiveis.innerHTML = 
    valor1 + " + " + valor2 + " = " + resultadoSoma + "<br>" +
    valor1 + " - " + valor2 + " = " + resultadoSubtracao + "<br>" +
    valor1 + " * " + valor2 + " = " + resultadoMultiplicacao + "<br>" +
    valor1 + " / " + valor2 + " = " + resultadoDivisao;
};

btCalcular.onclick = function (){
    verificarOperacoesDisponiveis();

};