document.addEventListener('DOMContentLoaded', () => {
  const editarButton = document.getElementById('editarButton');
  editarButton.addEventListener('click', () => {
      const nombre = document.getElementById('nombre').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      const newData = {
          nombre,
          email,
          password
      };

      fetch(`http://localhost:3000/api/login`, { 
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(newData)
      })
      .then(response => response.json())
      .then(data => {
          alert(data.message);
      })
      .catch(error => {
          console.error('Error al editar los datos: ', error);
          alert('Error al editar los datos');
      });
  });
});
