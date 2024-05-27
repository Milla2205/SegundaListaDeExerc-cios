// valor inteiro, comparar com o segundo > = ou <

let valorInteiro1 = document.querySelector ("#valorInteiro1");
let valorInteiro2 = document.querySelector ("#valorInteiro2");

let btCalcular = document.querySelector ("#btCalcular");

function verificarTotal(){
    let valorInteiroUm = parceInt(valorInteiro1.value);
    let valorInteiroDois = parceInt(valorInteiro2.value);
    

    if( valorInteiroUm > valorInteiroDois ){
        total.innerHTML =
        valorInteiroUm + " &eacute; maior que " + valorInteiroDois;

    }else if( valorInteiroUm < valorInteiroDois ){
        total.innerHTML =
        valorInteiroUm + " &eacute; menor que" + valorInteiroDois;
    
    }else if( valorInteiroUm = valorInteiroDois ){
        total.innerHTML =
        valorInteiroUm + " &eacute; igual a " + valorInteiroDois;

    };

};

btCalcular.onclick = function(){
    verificarTotal();

};
