//para el menu en responsive

document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navList = document.getElementById('nav-list');
  
    menuIcon.addEventListener('click', function () {
        navList.classList.toggle('show');
    });
  });

  
//para traer los resultados de base de datos de chatgpt

  document.addEventListener('DOMContentLoaded', function () {
    const storytellingTextarea = document.getElementById('storytelling');
    const copyTextarea = document.getElementById('copy');

    fetch('http://localhost:3000/api/users')
        .then(response => response.json())
        .then(data => {

            // Suponiendo que los datos de la base de datos se llaman "storytelling" y "copy"
            const storytellingContent = data.storytelling || '';
            const copyContent = data.copy || '';

            storytellingTextarea.value = storytellingContent;
            copyTextarea.value = copyContent;
        })
        .catch(error => console.error('Error al obtener datos:', error));
});