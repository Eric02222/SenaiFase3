//DESAFIO 3 — Lista de Caça Inteligente do Hortelino

function ehUmaAve(nome) {
    const aves = ['patolino', 'piu-piu', 'papa-léguas', 'falcão'];
    return aves.includes(nome.toLowerCase());
}

function adicionarPernalonga(personagens) {
    let primeiro = personagens.at(0)?.toLowerCase();
    
    if (primeiro !== 'pernalonga') {
        personagens.push('Pernalonga');
    }
    return personagens;
}

function adicionarPatolino(personagens) {
    if (!personagens.some(membro => ehUmaAve(membro))) {
        personagens.unshift('Patolino');
    } else {
        personagens.push('Patolino');
    }
    return personagens;
}

function removerPatolino(personagens) {
    let indicePatolino = personagens.findIndex(membro => membro.toLowerCase() === 'patolino');
    if (indicePatolino > 2) {
        personagens.splice(indicePatolino, 1);
    }
    return personagens;
}

function adicionarFrajola(personagens) {
    if (personagens.length >= 2) {
        personagens.push('Frajola');
    }
    return personagens;
}

function filtrarP(personagens) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    
    return personagens.filter(membro => {
        let nome = membro.toLowerCase();
        let comecaComP = nome.startsWith('p');
        let terminaComVogal = vogais.includes(nome.at(-1));
        
        return comecaComP && terminaComVogal;
    });
}

function montarLooneyTunes(personagens) {
    adicionarPernalonga(personagens);
    adicionarPatolino(personagens);
    removerPatolino(personagens);
    adicionarFrajola(personagens);

    let comP_eVogal = filtrarP(personagens);

    console.log('Gangue Final:', personagens);
    console.log('Filtro (Começa com P, termina com vogal):', comP_eVogal);
}

montarLooneyTunes(['Taz', 'Piu-Piu']);