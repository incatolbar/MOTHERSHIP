const contenedorDiv = document.querySelector('.contenedor');
const menuOculto = document.querySelector('.menu-oculto');

contenedorDiv.addEventListener('mouseenter', () => {
    menuOculto.classList.add('activo'); // Agrega la clase 'activo' para mostrar el menú
});

contenedorDiv.addEventListener('mouseleave', () => {
    menuOculto.classList.remove('activo'); // Quita la clase 'activo' para ocultar el menú
});