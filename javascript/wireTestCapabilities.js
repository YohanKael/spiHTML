const galleryImages = [
    { img: "./imagens/imagensTestes/testeSpi.png" },
    { img: "./imagens/imagensTestes/testeSpi2.png" },
    { img: "./imagens/imagensTestes/testeSpi3.png" },
    { img: "./imagens/imagensTestes/testeSpi5.png" },
    { img: "./imagens/imagensTestes/testeSpi6.png" },
    { img: "./imagens/imagensTestes/wireTest.png" },
];

let slideNumber = 0;
let openModal = false;

const wireTestSliderWrap = document.getElementById("wireTestSliderWrap");
const fullScreenImage = document.getElementById("fullScreenImage");
const wireTestGalleryWrap = document.getElementById("wireTestGalleryWrap");
const btnClose = document.getElementById("wireTestBtnClose");
const btnPrev = document.getElementById("wireTestBtnPrev");
const btnNext = document.getElementById("wireTestBtnNext");

// Abre o modal
function handleOpenModal(index) {
    slideNumber = index;
    openModal = true;
    updateModal();
    wireTestSliderWrap.style.display = "flex";
    document.addEventListener('keydown', handleKeyDown);
}

// Fecha o modal
function handleCloseModal() {
    openModal = false;
    wireTestSliderWrap.style.display = "none";
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
