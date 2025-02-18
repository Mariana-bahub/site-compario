// Função para buscar preços da Amazon
async function buscarPrecoAmazon(asin) {
    let accessKey = "SUA_ACCESS_KEY"; // Substitua pela sua chave
    let afiliadoId = "SEU_ID_AFILIADO";
    
    let url = `https://api.amazon.com/produtos?asin=${asin}&access_key=${accessKey}`;

    try {
        let resposta = await fetch(url);
        let dados = await resposta.json();
        return {
            preco: dados.preco,
            linkAfiliado: `https://www.amazon.com/dp/${asin}?tag=${afiliadoId}`
        };
    } catch (erro) {
        console.error("Erro ao buscar preço da Amazon", erro);
        return null;
    }
}

// Função para buscar preços do AliExpress via Admitad
async function buscarPrecoAliExpress(produtoId) {
    let admitadToken = "SEU_ACCESS_TOKEN"; // Gere no Admitad API
    let afiliadoId = "SEU_ID_AFILIADO";
    
    let url = `https://api.admitad.com/aliexpress/products/${produtoId}?token=${admitadToken}`;

    try {
        let resposta = await fetch(url);
        let dados = await resposta.json();
        return {
            preco: dados.preco,
            linkAfiliado: `https://aliexpress.com/item/${produtoId}?aff=${afiliadoId}`
        };
    } catch (erro) {
        console.error("Erro ao buscar preço do AliExpress", erro);
        return null;
    }
}

// Função para buscar preços na Shopee
async function buscarPrecoShopee(itemId) {
    let shopeeToken = "SEU_ACCESS_TOKEN"; // Token gerado no Shopee Partners
    
    let url = `https://partner.shopeemobile.com/api/v2/product/get?item_id=${itemId}&access_token=${shopeeToken}`;

    try {
        let resposta = await fetch(url);
        let dados = await resposta.json();
        return {
            preco: dados.preco,
            linkAfiliado: `https://shopee.com.br/product/${itemId}`
        };
    } catch (erro) {
        console.error("Erro ao buscar preço na Shopee", erro);
        return null;
    }
}

// Função para buscar preços no Mercado Livre
async function buscarPrecoMercadoLivre(produtoId) {
    let url = `https://api.mercadolibre.com/items/${produtoId}`;

    try {
        let resposta = await fetch(url);
        let dados = await resposta.json();
        return {
            preco: dados.price,
            linkAfiliado: `https://produto.mercadolivre.com.br/${produtoId}`
        };
    } catch (erro) {
        console.error("Erro ao buscar preço no Mercado Livre", erro);
        return null;
    }
}
