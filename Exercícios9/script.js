let qntDeAlunos = document.querySelector ("#qntDeAlunos");
let qntDeTurmas = document.querySelector ("#qntDeTurmas");

let btCalcular = document.querySelector ("#btCalcular");

let resultado = document.querySelector ("#resultado");

function verificarSalas(){
    let valorAlunos = parseInt(qntDeAlunos.value);
    let valorTurmas = parseInt(qntDeTurmas.value);

    let maxTurma = ( 50 );


    if( valorAlunos % valorTurmas == 0 ){

        let valorInteiroTurma = ( valorAlunos / valorTurmas )   

        resultado.innerHTML =
        "Todos os alunos com turmas! Com " + valorInteiroTurma + " turmas cheias!";

    }else if( valorAlunos % valorTurmas != 0 ){

        let valorImparInteiro = ( (maxTurma * valorTurmas) - valorAlunos )

        if( valorImparInteiro < 0){

            valorImparInteiro = ( valorImparInteiro * -1 )

            resultado.innerHTML =
        "Teremos " + valorTurmas + " cheias e " + valorImparInteiro + " alunos sem turma. ;-;";
        
        }else if( valorImparInteiro > 0){

            valorImparInteiro = ( valorImparInteiro * 1 )

            valorTurmaMenos = ( valorTurmas - 1 )

            resultado.innerHTML =
        "Teremos " + valorTurmaMenos + " cheias e " + valorImparInteiro + " alunos sem turma. ;-;";
        }
 
    }
};

btCalcular.onclick = function (){
    verificarSalas();

};