const galleryImages = [
    { img: "./imagens/stamping/stamping.png" },
    { img: "./imagens/stamping/stamping2.png" },
    { img: "./imagens/stamping/stamping3.png" },
    { img: "./imagens/stamping/stamping4.png" },
    { img: "./imagens/stamping/stamping5.png" },
];

let slideNumber = 0;
let openModal = false;

const stampingSliderWrap = document.getElementById("stampingSliderWrap");
const fullScreenImage = document.getElementById("fullScreenImage");
const stampingGalleryWrap = document.getElementById("stampingGalleryWrap");
const btnClose = document.getElementById("stampingTestBtnClose");
const btnPrev = document.getElementById("stampingTestBtnPrev");
const btnNext = document.getElementById("stampingTestBtnNext");

// Abre o modal
function handleOpenModal(index) {
    slideNumber = index;
    openModal = true;
    updateModal();
    stampingSliderWrap.style.display = "flex";
    document.addEventListener('keydown', handleKeyDown);
}

// Fecha o modal
function handleCloseModal() {
    openModal = false;
    stampingSliderWrap.style.display = "none";
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
