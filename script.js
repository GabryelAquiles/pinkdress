// 1. Fechar menu mobile ao clicar em um link
const menuCheck = document.getElementById('menu-check');
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
    link.addEventListener('click', () => {
        if(menuCheck) menuCheck.checked = false;
    });
});

// 2. Banco de Dados dos Produtos
const database = {
    "imperial-gold": {
        titulo: "Vestido Imperial Gold",
        preco: "R$ 1.800,00",
        desc: "Uma obra-prima em dourado. Este vestido conta com bordados manuais e um caimento imperial que exala luxo.",
        imagem: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800"
    },
    "silk-blue": {
        titulo: "Vestido Silk Blue",
        preco: "R$ 950,00",
        desc: "Leveza e frescor em seda azul. Perfeito para festas de debutantes ou eventos ao pôr do sol.",
        imagem: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800"
    },
    "black-velvet": {
        titulo: "Vestido Black Velvet",
        preco: "R$ 1.200,00",
        desc: "O poder do preto absoluto. Veludo premium que abraça a silhueta com sofisticação inigualável.",
        imagem: "https://www.deliriyou.com.br/app-deliriyou/assets/images/dinamica/produto/457/cor_0/03062-vestido-black-longo-210120-e95854.jpg"
    }
};



// 3. LÓGICA DA PÁGINA DE DETALHES (produto.html)
// Executa apenas se estivermos na página de produto
if (window.location.pathname.includes('produto.html')) {
    const params = new URLSearchParams(window.location.search);
    const itemKey = params.get('item');

    if (itemKey && database[itemKey]) {
        const item = database[itemKey];
        
        // Preenche os campos da página com os dados do "banco"
        document.getElementById('product-title').innerText = item.titulo;
        document.getElementById('product-price').innerText = item.preco;
        document.getElementById('product-desc').innerText = item.desc;
        document.getElementById('main-img').src = item.imagem;
        document.getElementById('main-img').alt = item.titulo;
        
        // Configura o botão do WhatsApp com mensagem personalizada
        const whatsappBtn = document.getElementById('whatsapp-btn');
        if (whatsappBtn) {
            const numeroTelefone = "5500000000000"; // SUBSTITUA PELO SEU NÚMERO
            const mensagem = encodeURIComponent(`Olá! Vi no site e tenho interesse no ${item.titulo}. Poderia me passar mais informações?`);
            whatsappBtn.href = `https://wa.me/${numeroTelefone}?text=${mensagem}`;
        }
    } else {
        // Se o produto não existir, volta para a vitrine
        window.location.href = "index.html";
    }
}

// 4. SCROLL SUAVE
// Faz a página deslizar suavemente ao clicar em links como "#vitrine"
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.startsWith("#") && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// 5. EFEITO DE NAVBAR AO ROLAR
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 4px 15px rgba(0,0,0,0.05)";
    } else {
        navbar.style.boxShadow = "none";
    }
});

console.log("Pink Dress Fest: Sistema carregado.");
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
