//DESAFIO 9 — Liga Anti-Bagunça da Vovó (versão avançada)
const gatos = ['frajola', 'sylvester', 'tom'];
const aves = ['piu-piu', 'patolino', 'papa-léguas'];

function adicionarPiuPiu(personagens) {
    if (personagens.length === 0) {
        personagens.push('Piu-Piu');
    }
    return personagens;
}

function adicionarFrajolaInicio(personagens) {
    personagens.unshift('Frajola');
    return personagens;
}

function moverFrajolaProFinal(personagens) {
    if (personagens.length > 2) {
        let indiceFrajola = personagens.findIndex(nome => nome.toLowerCase() === 'frajola');
        
        if (indiceFrajola !== -1) {
            let [frajolaRemovido] = personagens.splice(indiceFrajola, 1);
            
            personagens.push(frajolaRemovido);
        }
    }
    return personagens;
}

function verificarLetrasRepetidas(personagens) {
    if (personagens.length === 0) return false;

    return personagens.every(nome => {
        let letras = nome.toLowerCase().replace(/[^a-z]/g, '');
        return new Set(letras).size !== letras.length;
    });
}

function filtrarOutrasEspecies(personagens) {
    return personagens.filter(nome => {
        let nomeMin = nome.toLowerCase();
        let ehGato = gatos.includes(nomeMin);
        let ehAve = aves.includes(nomeMin);
        
        return !ehGato && !ehAve;
    });
}

function gerenciarEpisodio(personagens) {
    console.log('Elenco Inicial:', [...personagens]);

    adicionarPiuPiu(personagens);
    adicionarFrajolaInicio(personagens);
    moverFrajolaProFinal(personagens);

    let todosTemRepetida = verificarLetrasRepetidas(personagens);
    let outrasEspecies = filtrarOutrasEspecies(personagens);

    console.log('Elenco Atualizado:', personagens);
    console.log('Todos têm letras repetidas?:', todosTemRepetida ? 'Sim!' : 'Não.');
    console.log('Nem gato, nem ave:', outrasEspecies);
}


gerenciarEpisodio([]);