// Lógica de Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const menuCheck = document.getElementById('menu-check');
const navLinks = document.querySelectorAll('.nav-links li a');

// Fecha o menu mobile quando clica em qualquer link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuCheck.checked = false;
    });
});

// Efeito de opacidade na Navbar ao rolar (Dá um ar luxuoso)
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.padding = '10px 8%'; // Dá uma leve "encolhida"
    } else {
        navbar.style.background = '#fff';
        navbar.style.padding = '15px 8%';
    }
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
