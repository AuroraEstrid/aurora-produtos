const links = ["https://s.shopee.com.br/2LHSLXdDwA", "https://s.shopee.com.br/LWO4NX600",
    "https://s.shopee.com.br/7UzYcBcSJs", "https://s.shopee.com.br/9A7mbQs48y",
    "https://s.shopee.com.br/7pcP1821xk", "https://s.shopee.com.br/9Ukd0X4nlh"];

const carousel = document.querySelector('.corouselItems');
const container = document.querySelector('.carousel');
let isDown = false;
let startX;
let scrollLeft;

(() => {
    adicionarItens();
})();

carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    carousel.classList.add('active');
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('mouseleave', () => {
    isDown = false;
    carousel.classList.remove('active');
});

carousel.addEventListener('mouseup', () => {
    isDown = false;
    carousel.classList.remove('active');
});

carousel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 3; // Multiplica a quantidade de pixels para aumentar a velocidade do scroll
    carousel.scrollLeft = scrollLeft - walk;
});

function adicionarItens() {
    for (let i = 0; i < links.length; i++) {
        let novaDiv = document.createElement("div");
        novaDiv.classList.add("carouselItem", "item-" + i);

        let img = document.createElement("img");
        img.src = "./assets/img/fotoProdutos/Prod" + (i + 1) + ".png";
        img.alt = "Produto " + (i + 1);

        let texto = document.createElement("h3");
        texto.textContent = "Produto " + (i + 1);

        let figure = document.createElement("figure");
        figure.appendChild(img);
        figure.appendChild(texto);

        let anchor = document.createElement("a");
        anchor.href = links[i];
        anchor.target = "_blank";
        
        anchor.appendChild(figure);
        novaDiv.appendChild(anchor);
        carousel.appendChild(novaDiv);
    }
}
