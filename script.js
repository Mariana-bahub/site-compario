// Função para buscar preços da Amazon
async function buscarPrecoAmazon(asin) {
    const accessKey = process.env.AMAZON_ACCESS_KEY; // Acessa a variável de ambiente
    const afiliadoId = process.env.AMAZON_AFILIADO_ID; // Acessa a variável de ambiente

    if (!accessKey || !afiliadoId) {
        console.error("Chaves de API da Amazon não configuradas.");
        return null;
    }
    
    const url = https://api.amazon.com/produtos?asin=${asin}&access_key=${accessKey};

    try {
        const resposta = await fetch(url);
        if (!resposta.ok) {
            throw new Error(Erro na API da Amazon: ${resposta.status});
        }
        const dados = await resposta.json();
        return {
            preco: dados.preco,
            linkAfiliado: https://www.amazon.com/dp/${asin}?tag=${afiliadoId}
        };
    } catch (erro) {
        console.error("Erro ao buscar preço da Amazon", erro);
        return null;
    }
}

// Função para buscar preços do AliExpress via Admitad
async function buscarPrecoAliExpress(produtoId) {
    const admitadToken = process.env.ADMITAD_TOKEN; // Acessa a variável de ambiente
    const afiliadoId = process.env.ALIEXPRESS_AFILIADO_ID; // Acessa a variável de ambiente

    if (!admitadToken || !afiliadoId) {
        console.error("Tokens da Admitad/AliExpress não configurados.");
        return null;
    }
    
    const url = https://api.admitad.com/aliexpress/products/${produtoId}?token=${admitadToken};

    try {
        const resposta = await fetch(url);
        if (!resposta.ok) {
            throw new Error(Erro na API da Admitad/AliExpress: ${resposta.status});
        }
        const dados = await resposta.json();
        return {
            preco: dados.preco,
            linkAfiliado: https://aliexpress.com/item/${produtoId}?aff=${afiliadoId}
        };
    } catch (erro) {
        console.error("Erro ao buscar preço do AliExpress", erro);
        return null;
    }
}

// Função para buscar preços na Shopee
async function buscarPrecoShopee(itemId) {
    const shopeeToken = process.env.SHOPEE_TOKEN; // Acessa a variável de ambiente

    if (!shopeeToken) {
        console.error("Token da Shopee não configurado.");
        return null;
    }
    
    const url = https://partner.shopeemobile.com/api/v2/product/get?item_id=${itemId}&access_token=${shopeeToken};

    try {
        const resposta = await fetch(url);
        if (!resposta.ok) {
            throw new Error(Erro na API da Shopee: ${resposta.status});
        }
        const dados = await resposta.json();
        return {
            preco: dados.preco,
            linkAfiliado: https://shopee.com.br/product/${itemId}
        };
    } catch (erro) {
        console.error("Erro ao buscar preço na Shopee", erro);
        return null;
    }
}

// Função para buscar preços no Mercado Livre
async function buscarPrecoMercadoLivre(produtoId) {
    const url = https://api.mercadolibre.com/items/${produtoId};

    try {
        const resposta = await fetch(url);
        if (!resposta.ok) {
            throw new Error(Erro na API do Mercado Livre: ${resposta.status});
        }
        const dados = await resposta.json();
        return {
            preco: dados.price,
            linkAfiliado: https://produto.mercadolivre.com.br/${produtoId}
        };
    } catch (erro) {
        console.error("Erro ao buscar preço no Mercado Livre", erro);
        return null;
    }
}
.ofertas-empresas {
  text-align: center;
  margin: 20px 0;
}

.empresas-lista-container {
  overflow-x: hidden;
  position: relative;
}

.empresas-lista {
  display: flex;
  transition: transform 0.3s ease;
  white-space: nowrap;
}

.empresa {
  margin: 0 10px;
  text-align: center;
  flex-shrink: 0;
}

.empresa img {
  width: 60px;
  height: 60px;
  object-fit: contain;
}

.indicadores {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.indicador {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #ccc;
  margin: 0 4px;
  cursor: pointer;
}

.indicador.ativo {
  background-color: #007bff;
}

.ver-todos {
  margin: 0 10px;
  padding: 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 50%; /* Garante o formato circular */
  cursor: pointer;
  font-size: 14px;
  min-width: 80px;
  flex-shrink: 0;
}

/* Responsividade */
@media (max-width: 768px) {
  .empresas-lista {
    overflow-x: auto; /* Permite rolagem em telas menores */
  }
}
