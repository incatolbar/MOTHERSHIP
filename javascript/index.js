//Para la entrada de texto de los inputs

// Obtén una lista de todos los campos de entrada
const inputs = document.querySelectorAll('input[type="text"]');

// Agrega un evento de escucha input a cada campo de entrada
inputs.forEach(input => {
    input.addEventListener('input', function () {
        // Verifica el ID del campo de entrada actual
        if (this.id !== 'input2') {
            // Aplica la lógica para permitir solo letras, punto y coma
            this.value = this.value.replace(/[^a-zA-Z.,]/g, '');
        }
    });
});

//Para la selección de los arquetipos

const buttons = document.querySelectorAll('.arquetipos img');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
    
        buttons.forEach((btn) => {
            btn.classList.remove('selected');
        });

   
        button.classList.add('selected');
    });
});

//Para el boton de zoom, ponerle clase enlarge a lo que se agrandaria. En proceso.

const zoomIcon = document.getElementById("zoom");
const elementsToEnlarge = document.querySelectorAll(".enlarge");

zoomIcon.addEventListener("click", function() {
    elementsToEnlarge.forEach(function(element) {
        element.style.fontSize = "4em"; 
    });
});

//Para redirigir a la segunda pantalla de manera sencilla, modificar con cambios de post

document.getElementById('submitBtn').addEventListener('click', function() {
    window.location.href = './html/segunda.html';
});

