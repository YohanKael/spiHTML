document.addEventListener("DOMContentLoaded", function () {
    const closeBtn = document.getElementById('closeBtn');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    const areas = document.querySelectorAll('.map-area');
    const imageRef = document.getElementById('mapImageElement'); 
    const originalMapImage = './imagens/worldMap/mapaMundi (2).png'; 

    const originalCoords = {
        EUA: "150,220,320,120",
        Spain: "550,200,400,10",
        Brazil: "270,350,390,240"
    };

   
    const updateCoords = () => {
        const img = imageRef;
        if (img && img.naturalWidth > 0 && img.naturalHeight > 0) { 
            const widthRatio = img.offsetWidth / img.naturalWidth;
            const heightRatio = img.offsetHeight / img.naturalHeight;
    
            for (let area in originalCoords) {
                const coords = originalCoords[area].split(',').map(Number);
                const newCoords = coords.map((coord, index) => (
                    index % 2 === 0 ? Math.round(coord * widthRatio) : Math.round(coord * heightRatio)
                ));
                document.querySelector(`area[alt="${area}"]`).coords = newCoords.join(',');
            }
        }
    };


    window.addEventListener('resize', updateCoords);
    window.addEventListener('load', updateCoords);

  
    areas.forEach(area => {
        area.addEventListener('click', (e) => {
            e.preventDefault(); 
            const imagePath = area.dataset.image; 
            modalImage.src = imagePath; 
            modal.style.display = 'flex'; 
        });

        area.addEventListener('mouseenter', () => {
            const hoverImagePath = area.dataset.hoverImage; 
            const originalWidth = imageRef.offsetWidth; 
            const originalHeight = imageRef.offsetHeight; 
            imageRef.src = hoverImagePath; 
            imageRef.style.width = originalWidth + 'px';
            imageRef.style.height = originalHeight + 'px';
        });
        
        area.addEventListener('mouseleave', () => {
            imageRef.src = originalMapImage;
        
            imageRef.style.width = '';
            imageRef.style.height = '';
        });
    });


    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });


    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            modal.style.display = 'none';
        }
    });
});