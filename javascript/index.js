//para la entrada de caracteres de los input

const inputs = document.querySelectorAll('input[type="text"]');

inputs.forEach(input => {
    input.addEventListener('input', function () {
        // Verifica el ID del campo de entrada actual
        if (this.id !== 'input2') {
            // Aplica la lógica para permitir solo letras, punto y coma
            this.value = this.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s.,'-]/g, '');
        }
    });
});

//para el menu en responsive

document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.getElementById('menu-icon');
  const navList = document.getElementById('nav-list');

  menuIcon.addEventListener('click', function () {
      navList.classList.toggle('show');
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


 // Para enviar los datos a la base de datos y redirigir si todo está ok

  const errorAlert = document.getElementById('error-alert');
  
 
  document.getElementById('submitBtn').addEventListener('click', function () {
  const nombre = document.querySelector('#nombre').value;
  const enlace = document.querySelector('#enlace').value;
  const empresa = document.querySelector('#empresa').value;
  const mision = document.querySelector('#mision').value;
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
  console.log('empresa:', empresa);
  console.log('mision:', mision);
  console.log('genero:', genero);
  console.log('protagonista:', protagonista);
  console.log('objetivo:', objetivo);
  console.log('motivacion:', motivacion);
  console.log('malo:', malo);
  console.log('ayudante:', ayudante);
  console.log('actitud:', actitud);
  console.log('mensaje:', mensaje);
  console.log('comportamientoSeleccionado:', comportamientoSeleccionado);



    if (nombre && enlace && empresa && mision && genero && protagonista && objetivo && motivacion && malo && ayudante && actitud && mensaje && comportamientoSeleccionado) {
        fetch('https://mothership-back.onrender.com/api/storytelling', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nombre: nombre,
                enlace: enlace,
                empresa: empresa,
                mision: mision,
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
          console.log(data);
          if (data.status === 'Creado') {
            // Si los datos se guardaron correctamente, redirigir a la siguiente página
            window.location.href = './html/segunda.html';
          } else {
            // Mostrar la alerta de error
            errorAlert.style.display = 'block';
          }
        })
        .catch((error) => {
          console.error('Error en la solicitud:', error);
          alert('Error en la solicitud. Consulta la consola para obtener más información.');
        });
    } else {
      // Mostrar la alerta de error
      errorAlert.style.display = 'block';
    }
  });

function closeErrorAlert() {
  // Oculta la alerta de error
  document.getElementById('error-alert').style.display = 'none';
}