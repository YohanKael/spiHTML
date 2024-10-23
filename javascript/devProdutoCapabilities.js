const galleryImages = [
    { img: "./imagens/devProduto/devProduto.png" },
    { img: "./imagens/devProduto/devProduto2.png" },
    { img: "./imagens/devProduto/devProduto3.png" },
    { img: "./imagens/devProduto/devProduto4.png" },
    { img: "./imagens/devProduto/devProduto5.png" },
    { img: "./imagens/devProduto/devProduto6.png" },
    { img: "./imagens/devProduto/devProduto7.png" },
    { img: "./imagens/devProduto/devProduto8.png" },
    { img: "./imagens/devProduto/devProduto9.png" },
    { img: "./imagens/devProduto/devProduto10.png" },
    { img: "./imagens/devProduto/devProduto11.png" },
    { img: "./imagens/devProduto/devProduto12.png" },
    { img: "./imagens/devProduto/devProduto13.png" },
    { img: "./imagens/devProduto/devProduto14.png" },
    { img: "./imagens/devProduto/devProduto15.png" },
    { img: "./imagens/devProduto/devProduto16.png" },
    { img: "./imagens/devProduto/devProduto17.png" },
    { img: "./imagens/devProduto/devProduto18.png" },
    { img: "./imagens/devProduto/devProduto19.png" },
    { img: "./imagens/devProduto/devProduto20.png" },
];

let slideNumber = 0;
let openModal = false;

const devProductSliderWrap = document.getElementById("devProductSliderWrap");
const fullScreenImage = document.getElementById("fullScreenImage");
const devProductGalleryWrap = document.getElementById("devProductGalleryWrap");
const btnClose = document.getElementById("devProductTestBtnClose");
const btnPrev = document.getElementById("devProductTestBtnPrev");
const btnNext = document.getElementById("devProductTestBtnNext");

// Abre o modal
function handleOpenModal(index) {
    slideNumber = index;
    openModal = true;
    updateModal();
    devProductSliderWrap.style.display = "flex";
    document.addEventListener('keydown', handleKeyDown);
}

// Fecha o modal
function handleCloseModal() {
    openModal = false;
    devProductSliderWrap.style.display = "none";
    document.removeEventListener('keydown', handleKeyDown);
}

// Atualiza a imagem no modal
function updateModal() {
    
    fullScreenImage.src = galleryImages[slideNumber].img;
}

// Slide anterior
function prevSlide() {
    slideNumber = slideNumber === 0 ? galleryImages.length - 1 : slideNumber - 1;
    updateModal();
}

// Próximo slide
function nextSlide() {
    slideNumber = (slideNumber + 1) % galleryImages.length;
    updateModal();
}

// Adiciona eventos de teclado
function handleKeyDown(event) {
    switch (event.key) {
        case 'Escape':
            handleCloseModal();
            break;
        case 'ArrowLeft':
            prevSlide();
            break;
        case 'ArrowRight':
            nextSlide();
            break;
        default:
            break;
    }
}
