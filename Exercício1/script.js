let valorDolar = document.querySelector ("#valorDolar");
let btCalcular = document.querySelector ("#btCalcular");
let valorVariado = document.querySelector ("#valorVariado");

function verificarValorDorlar(){
    let valor = Number(valorDolar.value);

    let taxa1 = (1/100);
    let taxa2 = (2/100);
    let taxa3 = (5/100);
    let taxa4 = (10/100);

    let resultadoVariado1 = (( valor * taxa1 )+( valor ));
    let resultadoVariado2 = (( valor * taxa2 )+( valor ));
    let resultadoVariado3 = (( valor * taxa3 )+( valor ));
    let resultadoVariado4 = (( valor * taxa4 )+( valor ));

    valorVariado.innerHTML = 
    "Varia\u00e7\u00e3o de 1%: " + resultadoVariado1 + "<br>" +
    "Varia\u00e7\u00e3o de 2%: " + resultadoVariado2 + "<br>" +
    "Varia\u00e7\u00e3o de 5%: " + resultadoVariado3 + "<br>" +
    "Varia&ccedil;&atilde;o de 10%: " + resultadoVariado4;
    // teste para ver qual codigo ele aceitava como acento

};

btCalcular.onclick = function (){
    verificarValorDorlar();

};