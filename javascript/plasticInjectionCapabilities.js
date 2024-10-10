const galleryImages = [
    { img: "./imagens/pecasplasticas/PeçaPlastica1.png" },
    { img: "./imagens/pecasplasticas/PeçaPlastica2.png" },
    { img: "./imagens/pecasplasticas/PeçaPlastica3.png" },
    { img: "./imagens/pecasplasticas/PeçaPlastica4.png" },
    { img: "./imagens/pecasplasticas/PeçaPlastica5.png" },
    { img: "./imagens/pecasplasticas/PeçaPlastica6.png" },
    { img: "./imagens/pecasplasticas/PeçaPlastica7.png" },
    { img: "./imagens/pecasplasticas/PeçaPlastica8.png" },
];

let slideNumber = 0;
let openModal = false;

const plasticSliderWrap = document.getElementById("plasticSliderWrap");
const FullScreenImage = document.getElementById("fullScreenImage");
const plasticGalleryWrap = document.getElementById("plasticGalleryWrap");
const btnClose = document.getElementById("plasticBtnPrevBtnClose");
const btnPrev = document.getElementById("plasticBtnPrev");
const btnNext = document.getElementById("plasticBtnNext");

// Abre o modal
function handleOpenModal(index) {
    slideNumber = index;
    openModal = true;
    updateModal();
    plasticSliderWrap.style.display = "flex";
    document.addEventListener('keydown', handleKeyDown);
}

// Fecha o modal
function handleCloseModal() {
    openModal = false;
    plasticSliderWrap.style.display = "none";
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
