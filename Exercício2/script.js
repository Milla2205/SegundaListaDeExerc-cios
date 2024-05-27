let qntPessoas = document.querySelector ("#qntPessoas");
let btCalcular = document.querySelector ("#btCalcular");
let qntIngredientes = document.querySelector ("#qntIngredientes");

function verificarQntIngredientes(){
    let valor = Number(qntPessoas.value);

    let ovos = (2);
    let queijo = (50);

    let resultadoOvos = ( valor * ovos );
    let resultadoQueijo = ( valor * queijo );

    qntIngredientes.innerHTML = 
    "Ser&aacute; usado " + resultadoOvos + " ovos, e " + resultadoQueijo + " grama de queijo."
    
};

btCalcular.onclick = function (){
    verificarQntIngredientes();

};