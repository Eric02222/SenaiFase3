//DESAFIO 1 — Equipe Estratégica do Pernalonga
function criarConjuntoPersonagens(personagens) {
    let conjunto = personagens.map(personagem => personagem.toLowerCase());
    console.log('Conjunto inicial: ', conjunto)

    return conjunto
}

function adicionarPersonagemPatolino(personagens) {
    if (personagens.length < 3 && !personagens.includes('Patolino')) {
        personagens.push('patolino')
        console.log('Patolino foi adicionado: ', personagens)
    } else {
        console.log('Patolino não foi adicionado.', personagens)
    }
}

function organizarOrdemAlfabetica(personagens) {
    personagens.sort();
    console.log('Lista ordenada: ', personagens)
}

function liderPrimeiraPosicao(personagens, lider) {

    if (lider) {
        lider = lider.toLowerCase()
    } else {
        lider = 'lanterna-verde'
    }
    for (i = 0; i < personagens.length; i++) {
        personagens[i] = personagens[i].toLowerCase()
    }

    if (personagens.includes(lider)) {
        personagens = personagens.filter(personagem => personagem !== lider);
    }
    personagens.unshift(lider)

    console.log('Líder definido: ', personagens)
    return personagens
}

function adicionarFrajola(personagens) {
    const existeComF = personagens.some(nome => nome.toLowerCase().startsWith('f'))

    if (!existeComF) {
        personagens.push("frajola")
        console.log("Frajola adicionado: ", personagens)
    } else {
        console.log('Frajola não adicionado, existe personagem com F.')
    }
    console.log(personagens)
}

function montarEquipe(personagens) {
    let conjunto = criarConjuntoPersonagens(personagens);

    adicionarPersonagemPatolino(conjunto);

    organizarOrdemAlfabetica(conjunto);

    conjunto = liderPrimeiraPosicao(conjunto, 'Taz')

    adicionarFrajola(conjunto)

    console.log('Conjunto depois da função', conjunto)
}

montarEquipe(['Taz', 'Miranha'])