let primeiroSabor = document.querySelector ("#primeiroSabor");
let segundoSabor = document.querySelector ("#segundoSabor");
let terceiroSabor = document.querySelector ("#terceiroSabor");
let quartoSabor = document.querySelector ("#quartoSabor");
let qntRefrigerantes = document.querySelector ("#qntRefrigerantes");

let btCalcular = document.querySelector ("#btCalcular");

let totalCompra = document.querySelector ("#totalCompra");

function verificarTotalCompra(){
    let sabor1 = String(primeiroSabor.value);
    let sabor2 = String(segundoSabor.value);
    let sabor3 = String(terceiroSabor.value);
    let sabor4 = String(quartoSabor.value);

    let valorPizza = (57);

    let qnrRefri = Number(qntRefrigerantes.value);

    resultadoRefri = ( qnrRefri * 7 )

    valorTotal = (57 + resultadoRefri )


    totalCompra.innerHTML = 
    "Uma pizza dos sabores " + sabor1 + ", " + sabor2 + ", " + sabor3 + " e " + sabor4 + "." + "<br>" +
    "Total: R$ " + valorPizza + " ,00 + R$ " + resultadoRefri + ",00 = R$" + valorTotal + ",00." + "<br>";
};

btCalcular.onclick = function (){
    verificarTotalCompra();

};