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

const buttonsComportamiento = document.querySelectorAll('.arquetipos img');
let comportamientoSeleccionado = null;

buttonsComportamiento.forEach((button) => {
  button.addEventListener('click', () => {
    
    buttonsComportamiento.forEach((img) => {
      img.classList.remove('selected');
    });
    
    
    button.classList.add('selected');
    
    comportamientoSeleccionado = button.getAttribute('alt');
  });
});

//Para enviar los datos a la base de datos y redirigir si todo está ok

document.getElementById('submitBtn').addEventListener('click', function () {
  const nombre = document.querySelector('#nombre').value;
  const enlace = document.querySelector('#enlace').value;
  const genero = document.querySelector('#genero').value;
  const protagonista = document.querySelector('#protagonista').value;
  const objetivo = document.querySelector('#objetivo').value;
  const motivacion = document.querySelector('#motivacion').value;
  const malo = document.querySelector('#malo').value;
  const ayudante = document.querySelector('#ayudante').value;
  const actitud = document.querySelector('#actitud').value;
  const mensaje = document.querySelector('#mensaje').value;

  console.log('nombre:', nombre);
  console.log('enlace:', enlace);
  console.log('genero:', genero);
  console.log('protagonista:', protagonista);
  console.log('objetivo:', objetivo);
  console.log('motivacion:', motivacion);
  console.log('malo:', malo);
  console.log('ayudante:', ayudante);
  console.log('actitud:', actitud);
  console.log('mensaje:', mensaje);
  console.log('comportamientoSeleccionado:', comportamientoSeleccionado);

  if (nombre && enlace && genero && protagonista && objetivo && motivacion && malo && ayudante && actitud && mensaje && comportamientoSeleccionado) {
    fetch('URL_de_MARIANA', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombre: nombre,
        enlace: enlace,
        genero: genero,
        protagonista: protagonista,
        objetivo: objetivo,
        motivacion: motivacion,
        malo: malo,
        ayudante: ayudante,
        actitud: actitud,
        mensaje: mensaje,
        comportamiento: comportamientoSeleccionado,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'success') {
          window.location.href = './html/segunda.html';
        } else {
          alert('Error al guardar los datos.');
        }
      });
  } else {
    alert('Completa todos los campos requeridos.');
  }
});


  
//Para el boton de zoom, ponerle clase enlarge a lo que se agrandaria. En proceso.

const zoomIcon = document.getElementById("zoom");
const elementsToEnlarge = document.querySelectorAll(".enlarge");

zoomIcon.addEventListener("click", function() {
    elementsToEnlarge.forEach(function(element) {
        element.style.fontSize = "4em"; 
    });
});
