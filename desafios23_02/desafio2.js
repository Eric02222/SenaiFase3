//DESAFIO 2 — A Gangue Controlada do Taz

function criarConjuntoGangue(personagens) {
    let gangue = personagens.map(personagens => personagens.toLowerCase());

    if (gangue.lenght === 0) {
        gangue.push('Taz');
    }

    return gangue
}

function removerUltimoMembro(personagens) {
    let gangue = personagens.map(personagens => personagens.toLowerCase());
    ultimoMembro = gangue.at(-1);
    if (ultimoMembro !== 'taz') {
        gangue.pop();
    }

    return gangue;
}

function removerPrimeiroMembro(personagens) {
    let gangue = personagens.map(personagens => personagens.toLowerCase());

    if (gangue.filter((membro) => membro.length < 5)) {
        gangue.shift();
    }

    return gangue;
}


function adicionarTina(personagens) {
    let gangue = personagens.map(personagens => personagens.toLowerCase());

     
    //fiz errado arrumar
    if (gangue.filter((membro) => membro.toLowerCase().includes('a'))) {
        gangue.push("Tina");
    }

    return gangue;
}

