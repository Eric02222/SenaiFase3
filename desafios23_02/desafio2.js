//DESAFIO 2 — A Gangue Controlada do Taz

function criarConjuntoGangue(personagens) {
    if (personagens.length === 0) {
        personagens.push('taz');
    }

    return personagens
}

function removerUltimoMembro(personagens) {
    ultimoMembro = personagens.at(-1);
    if (ultimoMembro.toLowerCase() !== 'taz') { 
        personagens.pop();
    }
    return personagens;
}

function removerPrimeiroMembro(personagens) {
    if (personagens.some((membro) => membro.length < 5)) {
        personagens.shift();
    }

    return personagens;
}


function adicionarTina(personagens) {
    if (personagens.some(membro => membro.toLowerCase().endsWith('a'))) {
        personagens.push("Tina"); 
    }

    return personagens;
}


function copiaMembros(personagens) {
    return personagens.filter(membro => membro.length >= 5 && membro.length <= 8);
}

function montarMembros(personagens) {
    let conjunto = criarConjuntoGangue(personagens);

    removerUltimoMembro(conjunto);
    removerPrimeiroMembro(conjunto);

    let copia = copiaMembros(conjunto);

    adicionarTina(conjunto);

    console.log('Conjunto Final:', conjunto);
    console.log('Cópia (5 a 8 letras):', copia);
}

montarMembros(['Taz', 'Miranha']);
