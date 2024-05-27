// comparar idade e mostrar nome

let nome1 = document.querySelector ("#nome1");
let nome2 = document.querySelector ("#nome2");
let nome3 = document.querySelector ("#nome3");

let idade1 = document.querySelector ("#idade1");
let idade2 = document.querySelector ("#idade2");
let idade3 = document.querySelector ("#idade3");

let anoAtual = (2024);

let btCalcular = document.querySelector ("#btCalcular");

function verificarIdade(){
    let nomeUm = String(nome1.value);
    let nomeDois = String(nome2.value);
    let nomeTres = String(nome3.value);

    let idadeUm = Number(anoAtual - idade1.value);
    let idadeDois = Number(anoAtual - idade2.value);
    let idadeTres = Number(anoAtual - idade3.value);

    //  1 > 2 > 3
    if( idadeUm > idadeDois && idadeUm > idadeTres && idadeDois > idadeTres ){
        total.innerHTML = 
        "A primeira pessoa mais velha &eacute; " + nomeUm + ", com " + idadeUm + "anos." + "<br>" +
        "A segunda pessoa mais velha &eacute; " + nomeDois + ", com " + idadeDois + "anos." + "<br>" +
        "A pessoa mais jovem &eacute; " + nomeTres + ", com " + idadeTres + "anos.";
    
    // 1 > 3 > 2
    }else if( idadeUm > idadeDois && idadeUm > idadeTres && idadeTres > idadeDois ){
        total.innerHTML = 
        "A primeira pessoa mais velha &eacute; " + nomeUm + ", com " + idadeUm + "anos." + "<br>" +
        "A segunda pessoa mais velha &eacute; " + nomeTres + ", com " + idadeTres + "anos." + "<br>" +
        "A pessoa mais jovem &eacute; " + nomeDois + ", com " + idadeDois + "anos.";
    
    // 2 > 1 > 3
    }else if( idadeDois > idadeUm && idadeDois > idadeTres && idadeUm > idadeTres ){
        total.innerHTML = 
        "A primeira pessoa mais velha &eacute; " + nomeDois + ", com " + idadeDois + "anos." + "<br>" +
        "A segunda pessoa mais velha &eacute; " + nomeUm + ", com " + idadeUm + "anos." + "<br>" +
        "A pessoa mais jovem &eacute; " + nomeTres + ", com " + idadeTres + "anos.";
    
    // 2 > 3 > 1
    }else if( idadeDois > idadeUm && idadeDois > idadeTres && idadeTres > idadeUm ){
        total.innerHTML = 
        "A primeira pessoa mais velha &eacute; " + nomeDois + ", com " + idadeDois + "anos." + "<br>" +
        "A segunda pessoa mais velha &eacute; " + nomeTres + ", com " + idadeTres + "anos." + "<br>" +
        "A pessoa mais jovem &eacute; " + nomeUm + ", com " + idadeUm + "anos.";
    
    // 3 > 2 > 1
    }else if( idadeTres > idadeUm && idadeTres > idadeDois && idadeDois > idadeUm ){
        total.innerHTML = 
        "A primeira pessoa mais velha &eacute; " + nomeTres + ", com " + idadeTres + "anos." + "<br>" +
        "A segunda pessoa mais velha &eacute; " + nomeDois + ", com " + idadeDois + "anos." + "<br>" +
        "A pessoa mais jovem &eacute; " + nomeUm + ", com " + idadeUm + "anos.";
    
    // 3 > 1 > 2
    }else{
        total.innerHTML = 
        "A primeira pessoa mais velha &eacute; " + nomeTres + ", com " + idadeTres + "anos." + "<br>" +
        "A segunda pessoa mais velha &eacute; " + nomeUm + ", com " + idadeUm + "anos." + "<br>" +
        "A pessoa mais jovem &eacute; " + nomeDois + ", com " + idadeDois + "anos.";
    };

};

btCalcular.onclick = function (){
    verificarIdade();

};