let valorVendido = document.querySelector ("#valorVendido");
let metaPretendida = document.querySelector ("#metaPretendida");
let metaMinima = document.querySelector ("#metaMinima");

let btCalcular = document.querySelector ("#btCalcular");

let resultado = document.querySelector ("#resultado");


function verificarSalas(){
    let valorVend = Number(valorVendido.value);
    let metaPret = parseInt(metaPretendida.value);
    let metaMin = parseInt(metaMinima.value);


    if( valorVend >= metaPret ){

        let percentualMeta = ( valorVend / metaPret * 100 )

        resultado.innerHTML =
        "Valor da Meta foi alcançada! :D" + "<br>" + "<br>" +
        "O percentual da meta atingida foi de: " + percentualMeta + "%";

    }else if( valorVend < metaMin ){

        resultado.innerHTML =
        "Valor Mínimo não foi alcançado. ;-;";

    }else if( valorVend = metaMin ){

        let percentualMetaMin = ( valorVend / metaMin * 100 )

        resultado.innerHTML =
        "Valor da Meta Mínima foi atiginda! :)" + "<br>" + "<br>" +
        "O percentual da meta atingida foi de: " + percentualMetaMin;
}
 

};

btCalcular.onclick = function (){
    verificarSalas();

};