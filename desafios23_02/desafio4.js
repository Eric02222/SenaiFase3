//DESAFIO 4 — O Show Rigoroso do Patolino

function adicionarLolaGaguinho(convidados) {
    let nomes = convidados.map(nome => nome.toLowerCase());
    let temRepetidos = new Set(nomes).size !== nomes.length;

    if (!temRepetidos) {
        convidados.push('Lola', 'Gaguinho');
    }
    return convidados;
}

function exibirConvidados(convidados) {
    return convidados.join(" | ");
}

function removerGaguinhoNoFinal(convidados) {
    let ultimo = convidados.at(-1)?.toLowerCase();
    
    if (ultimo === 'gaguinho') {
        convidados.pop();
    }
    return convidados;
}

function filtrarLetrasRepetidas(convidados) {
    return convidados.filter(membro => {
        let letras = membro.toLowerCase().replace(/[^a-z]/g, ''); 
        let temLetraRepetida = new Set(letras).size !== letras.length;
        return temLetraRepetida;
    });
}

function contarDuasPalavras(convidados) {
    let comDuasPalavras = convidados.filter(membro => {
        let palavras = membro.trim().split(' ');
        return palavras.length === 2;
    });

    return comDuasPalavras.length;
}

function montarFesta(convidados) {
    adicionarLolaGaguinho(convidados);
    removerGaguinhoNoFinal(convidados);

    let textoLista = exibirConvidados(convidados);
    let repetemLetras = filtrarLetrasRepetidas(convidados);
    let totalDuasPalavras = contarDuasPalavras(convidados);

    console.log('Convidados separados por " | ":', textoLista);
    console.log('Nomes com letras que se repetem:', repetemLetras);
    console.log('Quantidade de convidados com 2 palavras:', totalDuasPalavras);
}

montarFesta(['Pernalonga', 'Marvin Marciano', 'Taz', 'Taz']); 