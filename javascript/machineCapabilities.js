const galleryImages = [
    { img: "./imagens/machine/machine.png" },
    { img: "./imagens/machine/machine2.png" },
    { img: "./imagens/machine/machine3.png" },
    { img: "./imagens/machine/machine4.png" },
    { img: "./imagens/machine/machine5.png" },
    { img: "./imagens/machine/machine6.png" },
    { img: "./imagens/machine/machine7.png" },
    { img: "./imagens/machine/machine8.png" },
    { img: "./imagens/machine/machine9.png" },
    { img: "./imagens/machine/machine10.png" },
    { img: "./imagens/ssa/ssa2.png" },
];

let slideNumber = 0;
let openModal = false;

const machineSliderWrap = document.getElementById("machineSliderWrap");
const fullScreenImage = document.getElementById("fullScreenImage");
const machineGalleryWrap = document.getElementById("machineGalleryWrap");
const btnClose = document.getElementById("machineBtnClose");
const btnPrev = document.getElementById("machineBtnPrev");
const btnNext = document.getElementById("machineBtnNext");

// Abre o modal
function handleOpenModal(index) {
    slideNumber = index;
    openModal = true;
    updateModal();
    machineSliderWrap.style.display = "flex";
    document.addEventListener('keydown', handleKeyDown);
}

// Fecha o modal
function handleCloseModal() {
    openModal = false;
    machineSliderWrap.style.display = "none";
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