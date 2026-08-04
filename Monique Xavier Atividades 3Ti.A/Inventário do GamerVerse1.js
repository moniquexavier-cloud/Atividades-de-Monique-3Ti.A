
    const jsonJogadores = `[
    { "id": 1, "nickname": "ShadowNinja", "nivel": 42, "pontos": [1200, 1500, 1800], "equipamento": { "arma": "Katana Laser", "escudo": "Escudo de Plasma" }, "ativo": true },
    { "id": 2, "nickname": "CyberMage", "nivel": 15, "pontos": [400, 600, 500], "equipamento": { "arma": "Cajeto de Fogo", "escudo": null }, "ativo": false },
    { "id": 3, "nickname": "Valkyrie", "nivel": 58, "pontos": [2100, 2300, 2500], "equipamento": { "arma": "Lança Trovão", "escudo": "Escudo Divino" }, "ativo": true }
    ]`;


// ETAPA 2

// TRANSFORMANDO EM OBJETOS JAVASCRIPT

    const js_jogadores = JSON.parse(jsonJogadores);

    // 1. Filtrando apenas os jogadores com ativo: true
    const jogadoresAtivos = js_jogadores.filter(jogador => jogador.ativo);
    // O filter é um método javascript que cria uma nova lista com elementos que etendem os requistos exigidos, 
    // nesse caso, jogadores que tem ativo true


    // Processando cada jogador ativo
    jogadoresAtivos.forEach(jogador => {
        
    // 2. Cálculo da Média de pontos
    const somaPontos = jogador.pontos.reduce((total, ponto) => total + ponto, 0);
    const mediaPontos = somaPontos / jogador.pontos.length;


    // 3. Desestruturação (nickname, nivel e equipamento)
    const { nickname, nivel, equipamento } = jogador;

    // 4. Extração de Equipamento com Valor Padrão para o escudo (caso seja null ou undefined)
    const { arma, escudo = "Nenhum" } = equipamento;
    const escudoFinal = escudo || "Nenhum"; // Garante "Nenhum" quando o valor é explicitamente null

    // Exibindo os resultados processados:
    console.log( `jogador: ${nickname}` );
    console.log(`nivel: ${nivel}`);
    console.log(`Média de Pontos: ${mediaPontos.toFixed(2)}`);
    console.log(`arma: ${arma}`);
    console.log(`escudo: ${escudoFinal}`);
    });


    // ETAPA 3 - Formatação da Resposta para o Painel

    const relatoriosPainel = jogadoresAtivos.map(jogador => {
            
    // Cálculo da média

    const somaPontos = jogador.pontos.reduce((total, ponto) => total + ponto, 0);
            const mediaPontos = somaPontos / jogador.pontos.length;
    // o reduce percorre o array e soma todos os valores 
    // o lenght serve para o número de elementos, como o número de letras de uma palavra
    // Nesse caso ele serve para definirmos a média ao ser dividido pela soma de pontos

    // extraindo dados específicos
    const { nickname, nivel, equipamento } = jogador;
    const { arma, escudo } = equipamento;
    const escudoFinal = escudo || "Nenhum";
    // Para caso o jogador não tenha escudo

    // Criando o objeto com a propriedade relatorioFormatado usando Template String
    return {
        id: jogador.id,
        relatorioFormatado: `jogador ${nickname} (Nível ${nivel}) Média de Pontos: ${mediaPontos} | Arma: ${arma} | Escudo: ${escudoFinal}`
            };
        });

        relatoriosPainel.forEach(item => {
        console.log(item.relatorioFormatado);
        });


        // ETAPA 4 - Envio da Resposta ao Servidor

        // 1. Agrupando em um novo array chamado painelJogadores
        // Na Etapa 4, altere para:
        const painelJogadores = relatoriosPainel;

        // 2. Convertendo o array de volta para uma String JSON (com formatação legível)
        const jsonParaServidor = JSON.stringify(painelJogadores, null, 2);

        // 3. Imprimindo a string final no console (simulando retorno da API)
        console.log("RESPOSTA ENVIADA AO SERVIDOR (JSON)");
        console.log(jsonParaServidor);