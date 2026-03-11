// Lógica de Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Exemplo de como você vai buscar os dados do Firebase depois:
/*
function carregarProdutos() {
    firebase.database().ref('produtos').on('value', (snapshot) => {
        const productList = document.getElementById('product-list');
        productList.innerHTML = ''; // Limpa a lista antes de carregar
        
        snapshot.forEach((item) => {
            const prod = item.val();
            productList.innerHTML += `
                <div class="product-card">
                    <div class="product-image">
                        <img src="${prod.imagemURL}" alt="${prod.nome}">
                    </div>
                    <div class="product-info">
                        <h3>${prod.nome}</h3>
                        <p class="price">R$ ${prod.preco}</p>
                        <a href="https://wa.me/SEUNUMERO?text=Tenho+interesse+no+${prod.nome}" class="btn-buy">Comprar via WhatsApp</a>
                    </div>
                </div>
            `;
        });
    });
}
*/

console.log("Vitrine Aquiles Streetwear carregada com sucesso.");