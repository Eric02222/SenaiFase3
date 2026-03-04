//DESAFIO 7 — Bandos Avançados do Papa-Léguas
function adicionarCoiote(personagens) {
    if (personagens.length % 2 !== 0) {
        personagens.push('Coiote');
    }
    return personagens;
}

function filtrarVogaisConsecutivas(personagens) {
    const Vogais = /[aeiouáéíóúãõâêîôû][aeiouáéíóúãõâêîôû]/i;
    return personagens.filter(nome => Vogais.test(nome));
}

function concatenarEquipe(personagens) {
    if (personagens.length < 4) {
        personagens.push(...["Pernalonga", "Taz"]);
    }
    return personagens;
}

function adicionarPatolino(personagens) {
    let temLetraL_DuasVezes = personagens.some(nome => {
        let letrasEncontradas = nome.match(/l/gi) || [];
        
        return letrasEncontradas.length >= 2;
    });

    if (temLetraL_DuasVezes) {
        personagens.push('Patolino');
    }
    return personagens;
}

function encontrarCoiote(personagens) {
    return personagens.findIndex(nome => nome.toLowerCase() === 'coiote');
}

function executarFusao(personagens) {
    adicionarCoiote(personagens);
    personagens = filtrarVogaisConsecutivas(personagens);
    
    concatenarEquipe(personagens);
    adicionarPatolino(personagens);

    let indice = encontrarCoiote(personagens);

    console.log('Fusão Final:', personagens);
    console.log('Índice do Coiote:', indice !== -1 ? indice : 'Coiote não está na lista');
}

executarFusao(['Ligeirinho', 'Frajola', 'Gaguinho']);