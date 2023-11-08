document.addEventListener('DOMContentLoaded', () => {
    const editarButton = document.getElementById('editarButton');
    editarButton.addEventListener('click', () => {
      const nombre = document.getElementById('nombre').value;
      const apellido = document.getElementById('apellido').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, apellido, email, password }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message === 'Usuario editado exitosamente') {
            alert('Usuario editado exitosamente');
          } else {
            alert('Error al editar usuario');
          }
        })
        .catch((error) => {
          console.error(error);
          alert('Error al realizar la solicitud');
        });
    });
  });
  