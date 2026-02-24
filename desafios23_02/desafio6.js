//DESAFIO 6 — Corrida Maluca Tática do Ligeirinho
const corredores = ['papa-léguas', 'ligeirinho', 'coiote'];

function adicionarVelocistas(personagens) {
    let temCorredor = personagens.some(membro => corredores.includes(membro.toLowerCase()));

    if (temCorredor) {
        personagens.push('Papa-Léguas', 'Frajola');
    }
    return personagens;
}

function ordenarParcialmente(personagens) {
    if (personagens.length > 1) {
        let restoDaLista = personagens.splice(1);
        restoDaLista.sort((a, b) => a.localeCompare(b));

        personagens.push(...restoDaLista);
    }
    return personagens;
}

function inverterArray(personagens) {
    if (personagens[0]?.length > 6) {
        personagens.reverse();
    }
    return personagens;
}

function pegarTop2(personagens) {
    personagens.sort((a, b) => a.localeCompare(b));
    personagens.splice(2);
    
    return personagens;
}

function removerSeConsoante(personagens) {
    let ultimo = personagens.at(-1);

    if (ultimo) {
        let comecaComConsoante = /^[bcdfghjklmnpqrstvwxyz]/i.test(ultimo);

        if (comecaComConsoante) {
            personagens.pop();
        }
    }
    return personagens;
}

function corridaMaluca(personagens) {
    console.log('Lista Inicial:', [...personagens]);

    adicionarVelocistas(personagens);
    ordenarParcialmente(personagens);
    inverterArray(personagens);
    pegarTop2(personagens);
    removerSeConsoante(personagens);

    console.log('Pódio Final:', personagens);
}

corridaMaluca(['Pernalonga', 'Patolino', 'Ligeirinho']);