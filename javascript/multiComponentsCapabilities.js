const galleryImages = [
    { img: "./imagens/moldes/molde.png" },
    { img: "./imagens/moldes/molde2.png" },
    { img: "./imagens/moldes/molde3.png" },
    { img: "./imagens/moldes/molde4.png" },
    { img: "./imagens/moldes/molde5.png" },
    { img: "./imagens/moldes/molde6.png" },
    { img: "./imagens/moldes/molde7.png" },
    { img: "./imagens/moldes/molde8.png" },
    { img: "./imagens/moldes/molde9.png" },
];

let slideNumber = 0;
let openModal = false;

const moldesSliderWrap = document.getElementById("moldesSliderWrap");
const FullScreenImage = document.getElementById("fullScreenImage");
const moldesGalleryWrap = document.getElementById("moldesGalleryWrap");
const btnClose = document.getElementById("moldesBtnPrevBtnClose");
const btnPrev = document.getElementById("moldesBtnPrev");
const btnNext = document.getElementById("moldesBtnNext");

// Abre o modal
function handleOpenModal(index) {
    slideNumber = index;
    openModal = true;
    updateModal();
    moldesSliderWrap.style.display = "flex";
    document.addEventListener('keydown', handleKeyDown);
}

// Fecha o modal
function handleCloseModal() {
    openModal = false;
    moldesSliderWrap.style.display = "none";
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
