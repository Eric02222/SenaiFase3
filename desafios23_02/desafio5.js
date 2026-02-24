//DESAFIO 5 — O Clube Supersecreto do Frajola

const aves = ['piu-piu', 'patolino', 'papa-léguas'];
const roedores = ['ligeirinho', 'minnie'];

function adicionarPiuPiu(personagens) {

    let ninguemMenorQue5 = !personagens.some(membro => membro.length < 5);
    
    if (ninguemMenorQue5) {
        personagens.push('Piu-Piu');
    }
    return personagens;
}

function adicionarHector(personagens) {
    let temAveOuRoedor = personagens.some(membro => {
        let nome = membro.toLowerCase();
        return aves.includes(nome) || roedores.includes(nome);
    });

    if (temAveOuRoedor) {
        personagens.push('Hector');
    }
    return personagens;
}

function inserirLigeirinho(personagens) {
    let PiuPiu = personagens.findIndex(membro => membro.toLowerCase() === 'piu-piu');
    if (PiuPiu !== -1 && PiuPiu < personagens.length - 1) {
        personagens.splice(PiuPiu + 1, 0, 'Ligeirinho');
    }
    return personagens;
}

function removerHector(personagens) {
    let Hector = personagens.findIndex(membro => membro.toLowerCase() === 'hector');

    if (Hector !== -1) {
        let nomeHector = personagens[Hector];
        if (nomeHector.length % 2 !== 0) {
            personagens.splice(Hector, 1); 
        }
    }
    return personagens;
}

function filtrarMaiusculasComI(personagens) {
    return personagens
        .filter(membro => membro.toLowerCase().includes('i'))
        .map(membro => membro.toUpperCase());
}

function montarDesafio(personagens) {
    adicionarPiuPiu(personagens);
    adicionarHector(personagens);
    inserirLigeirinho(personagens);
    removerHector(personagens);

    let listaComI = filtrarMaiusculasComI(personagens);

    console.log('Gangue Final:', personagens);
    console.log('Filtro (Tem "i" e está Maiúsculo):', listaComI);
}

montarDesafio(['Frajola', 'Pernalonga']);