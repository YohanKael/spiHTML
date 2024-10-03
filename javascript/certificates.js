// Lista de imagens da galeria
const galleryImages = [
    { img: "./imagens/certificates/certificate.png" },
    { img: "./imagens/certificates/certificate.png" },
];

let slideNumber = 0;
let openModal = false;

const certificatesSliderWrap = document.getElementById("certificatesSliderWrap");
const fullScreenImage = document.getElementById("fullScreenImage");
const galleryContainer = document.getElementById("galleryContainer");
const btnClose = document.getElementById("certificatesBtnClose");
const btnPrev = document.getElementById("certificatesBtnPrev");
const btnNext = document.getElementById("certificatesBtnNext");

// Abre o modal
function handleOpenModal(index) {
    slideNumber = index;
    openModal = true;
    updateModal();
    certificatesSliderWrap.style.display = "flex";
    document.addEventListener('keydown', handleKeyDown);
}

// Fecha o modal
function handleCloseModal() {
    openModal = false;
    certificatesSliderWrap.style.display = "none";
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

btnClose.onclick = handleCloseModal;
btnPrev.onclick = prevSlide;
btnNext.onclick = nextSlide;