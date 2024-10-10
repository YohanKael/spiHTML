const galleryImages = [
    { img: "./imagens/wireModules/chicote1.png" },
    { img: "./imagens/wireModules/chicote2.png" },
    { img: "./imagens/wireModules/chicote3.png" },
    { img: "./imagens/wireModules/chicote4.png" },
    { img: "./imagens/wireModules/chicote5.png" },
    { img: "./imagens/wireModules/chicote6.png" },
    { img: "./imagens/wireModules/chicote7.png" },
    { img: "./imagens/wireModules/chicote8.png" },
    { img: "./imagens/wireModules/chicote9.png" },
    { img: "./imagens/wireModules/chicote10.png" },
    { img: "./imagens/wireModules/chicote11.png" },
    { img: "./imagens/wireModules/chicote12.png" },
    { img: "./imagens/machine/machine.png" },
];

let slideNumber = 0;
let openModal = false;

const wireSliderWrap = document.getElementById("wireSliderWrap");
const fullScreenImage = document.getElementById("fullScreenImage");
const wireGalleryWrap = document.getElementById("wireGalleryWrap");
const btnClose = document.getElementById("wireBtnClose");
const btnPrev = document.getElementById("wireBtnPrev");
const btnNext = document.getElementById("wireBtnNext");

// Abre o modal
function handleOpenModal(index) {
    slideNumber = index;
    openModal = true;
    updateModal();
    wireSliderWrap.style.display = "flex";
    document.addEventListener('keydown', handleKeyDown);
}

// Fecha o modal
function handleCloseModal() {
    openModal = false;
    wireSliderWrap.style.display = "none";
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

