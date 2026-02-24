//DESAFIO 8 — O Circo Complexo do Gaguinho
function adicionarLola(artistas) {
    let ninguemTemO = !artistas.some(nome => nome.toLowerCase().includes('o'));

    if (ninguemTemO) {
        artistas.push('Lola');
    }
    return artistas;
}

function inserirPernalonga(artistas) {
    if (artistas.length === 2) {
        artistas.unshift('Pernalonga');
    }
    return artistas;
}

function adicionarPatolino(artistas) {
    let todosTerminamComVogal = artistas.length > 0 && artistas.every(nome => {
        return /[aeiouáéíóúãõâêîôû]$/i.test(nome); 
    });

    if (todosTerminamComVogal) {
        artistas.push('Patolino');
    }
    return artistas;
}

function criarListaPares(artistas) {
    let nomeArtistas = artistas.filter(nome => nome.length % 2 === 0);
    return nomeArtistas;
}

function filtrarConsoanteE_SeisLetras(artistas) {
    return artistas.filter(nome => {
        let comecaComConsoante = /^[bcdfghjklmnpqrstvwxyz]/i.test(nome);
        let temSeisOuMais = nome.length >= 6;
        
        return comecaComConsoante && temSeisOuMais;
    });
}

function gerenciarCirco(artistas) {
    console.log('Circo Inicial:', [...artistas]);

    adicionarLola(artistas);
    inserirPernalonga(artistas);
    adicionarPatolino(artistas);

    let nomeArtistas = criarListaPares(artistas);
    let artistasFiltrados = filtrarConsoanteE_SeisLetras(artistas);

    console.log('Circo Atualizado:', artistas);
    console.log('Nomes com letras pares:', nomeArtistas);
    console.log('Filtro :', artistasFiltrados);
}

gerenciarCirco(['Taz', 'Piu-Piu']);