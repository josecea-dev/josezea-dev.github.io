
const saludoConsola = () => {
    console.log("%c🏎️ ¡Bienvenido a la sección de Biografía de José Cea!", "color: #e17400; font-size: 16px; font-weight: bold;");
    console.log("Desarrollo Web I - Entorno cargado correctamente.");
};

const efectoBrilloImagenes = () => {
    const imagenes = document.querySelectorAll('.bio-media img');
    
    imagenes.forEach(img => {
        // Guardamos el filtro original que ya tiene tu CSS para no romper nada
        const filtroOriginal = window.getComputedStyle(img).filter;

        img.addEventListener('mouseenter', () => {
            img.style.filter = 'brightness(1.25) contrast(1.1)';
            img.style.transition = 'filter 0.3s ease';
        });

        img.addEventListener('mouseleave', () => {
            img.style.filter = filtroOriginal === 'none' ? '' : filtroOriginal;
        });
    });
};

// Ejecutar ambas funciones al cargar el documento
document.addEventListener('DOMContentLoaded', () => {
    saludoConsola();
    efectoBrilloImagenes();
});