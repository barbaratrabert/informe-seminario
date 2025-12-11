// CONFIGURA AQUÍ LA RUTA COMPLETA (src) DE CADA IMAGEN
const diagrams = [
    { 
        id: 1, 
        title: 'fig. 1 / DIAGRAMA DE PERSPECTIVA HISTÓRICA', 
        src: 'https://barbaratrabert.github.io/informe-seminario/img/diagrama-1.svg', 
        menuTitle: 'Perspectiva histórica' 
    },
    { 
        id: 2, 
        title: 'fig. 2 / DIAGRAMA DE IMPACTO DE LA PÉRDIDA', 
        src: 'https://barbaratrabert.github.io/informe-seminario/img/diagrama-2.webp', 
        menuTitle: 'Impacto de la pérdida' 
    },
    { 
        id: 3, 
        title: 'fig. 3 / DIAGRAMA DE DIMENSIONES DE LA PÉRDIDA', 
        src: 'https://barbaratrabert.github.io/informe-seminario/img/diagrama-3.svg', 
        menuTitle: 'Dimensiones de la pérdida' 
    },
    { 
        id: 4, 
        title: 'fig. 4 / DIAGRAMA DE PERFILAMIENTO DE USUARIO', 
        src: 'https://barbaratrabert.github.io/informe-seminario/img/diagrama-4.svg', 
        menuTitle: 'Perfilamiento de usuario' 
    },
    { 
        id: 5, 
        title: 'fig. 5 / DIAGRAMA DE DIMENSIONES DE PROYECTO', 
        src: 'https://barbaratrabert.github.io/informe-seminario/img/diagrama-5.svg', 
        menuTitle: 'Dimensiones de proyecto' 
    },
    { 
        id: 6, 
        title: 'fig. 6 / MAPA DE ECOSISTEMA', 
        src: 'https://barbaratrabert.github.io/informe-seminario/img/diagrama-6.svg', 
        menuTitle: 'Mapa de ecosistema' 
    },
    { 
        id: 7, 
        title: 'fig. 7 / MAPA DE SINCRONICIDADES', 
        src: 'https://barbaratrabert.github.io/informe-seminario/img/diagrama-7.svg', 
        menuTitle: 'Mapa de sincronicidades' 
    },
    { 
        id: 8, 
        title: 'fig. 8 / MAPA DE FASES DE PROYECTO Y AVANCE', 
        src: 'https://barbaratrabert.github.io/informe-seminario/img/diagrama-8.svg', 
        menuTitle: 'Fases de proyecto y avance' 
    }
];

let currentIndex = 0;

const menuButton = document.getElementById('menuButton');
const dropdownMenu = document.getElementById('dropdownMenu');
const menuList = document.getElementById('menuList');
const diagramTitle = document.getElementById('diagramTitle');
const diagramImage = document.getElementById('diagramImage');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

// Función para obtener el parámetro del diagrama de la URL
function getDiagramFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const diagramParam = urlParams.get('diagram');
    if (diagramParam) {
        const index = parseInt(diagramParam) - 1;
        if (index >= 0 && index < diagrams.length) {
            return index;
        }
    }
    return 0; // Por defecto el primer diagrama
}

// Toggle del menú desplegable
function toggleMenu() {
    menuButton.classList.toggle('active');
    dropdownMenu.classList.toggle('active');
}

// Actualizar el diagrama mostrado
function updateDiagram() {
    const diagram = diagrams[currentIndex];
    diagramTitle.textContent = diagram.title;
    diagramImage.src = diagram.src;
    diagramImage.alt = diagram.title;

    // Update menu active state
    const menuItems = menuList.querySelectorAll('li');
    menuItems.forEach((item, index) => {
        item.classList.toggle('active', index === currentIndex);
    });

    // Update navigation buttons URLs and disabled state
    if (currentIndex > 0) {
        prevButton.href = `?diagram=${currentIndex}`;
        prevButton.classList.remove('disabled');
    } else {
        prevButton.href = '#';
        prevButton.classList.add('disabled');
    }

    if (currentIndex < diagrams.length - 1) {
        nextButton.href = `?diagram=${currentIndex + 2}`;
        nextButton.classList.remove('disabled');
    } else {
        nextButton.href = '#';
        nextButton.classList.add('disabled');
    }
}

// Event listeners
menuButton.addEventListener('click', toggleMenu);

// Cerrar menú cuando se hace clic fuera
document.addEventListener('click', (e) => {
    if (!menuButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
        menuButton.classList.remove('active');
        dropdownMenu.classList.remove('active');
    }
});

// Cerrar menú al hacer clic en un enlace
menuList.addEventListener('click', () => {
    menuButton.classList.remove('active');
    dropdownMenu.classList.remove('active');
});

// Inicializar la página
currentIndex = getDiagramFromURL();
updateDiagram();

// Scroll al inicio al cargar
window.scrollTo({ top: 0, behavior: 'smooth' });