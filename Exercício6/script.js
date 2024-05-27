// nota for menor que 6 e maior que 4, exiba “precisa fazer prova substitutiva”. Se for maior que 6 exiba “aprovado”. Senão, exiba “reprovado”.

let valorNota = document.querySelector ("#valorNota");

let btCalcular = document.querySelector ("#btCalcular");

let totalCompra = document.querySelector ("#totalCompra");

function verificarTotal(){
    let nota = Number(valorNota.value);
    
    if( nota >= 6 ){
        total.innerHTML =
        "Voc&ecirc; foi aprovado! :D";

    }else if( nota >= 4 && nota < 6 ){
        total.innerHTML =
        "Voc&ecirc; precisa fazer prova subistitutiva :/";

    }else{
        total.innerHTML =
        "Voc&ecirc; foi reprovado ;-;"
    };
};

btCalcular.onclick = function (){
    verificarTotal();

};