const menuCheck = document.getElementById('menu-check');
const navLinks = document.querySelectorAll('.nav-links a');

// Fecha o menu ao clicar em um link (Início, Coleções, etc)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuCheck.checked = false;
    });
});

// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if(this.getAttribute('href').startsWith("#")) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
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
