const contenedorDiv = document.querySelector('.contenedor');
const menuOculto = document.querySelector('.menu-oculto');

contenedorDiv.addEventListener('mouseenter', () => {
    menuOculto.classList.add('activo');
});

contenedorDiv.addEventListener('mouseleave', () => {
    menuOculto.classList.remove('activo');
});