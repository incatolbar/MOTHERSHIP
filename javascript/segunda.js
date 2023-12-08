//para el menu en responsive

document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navList = document.getElementById('nav-list');
  
    menuIcon.addEventListener('click', function () {
        navList.classList.toggle('show');
    });
  });


// Para actualizar la historia con el ID
const historyId = obtenerHistoryIdDesdeURL();

document.getElementById('submitBtn2').addEventListener('click', function () {
  // obtiene el nuevo storytelling editado por el usuario desde el textarea
  const editedStorytelling = document.querySelector('#storytelling').value;

  if (historyId) {
    fetch(`https://mothership-back.onrender.com/api/storytelling/${historyId}/openai-response`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ responseAI: editedStorytelling }),  // envia la edición del usuario
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Respuesta de OpenAI actualizada en la base de datos:', data);
      })
      .catch((error) => {
        console.error('Error en la solicitud:', error);
      });
  } else {
    console.error('No se encontró un historyId válido en la URL');
  }
});

// para obtener el historyId desde la URL
function obtenerHistoryIdDesdeURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('historyId');
}