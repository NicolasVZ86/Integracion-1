document.addEventListener('DOMContentLoaded', () => {
    const registrarButton = document.getElementById('registrarButton'); // Obtiene un botón con el id 'registrarButton'

    registrarButton.addEventListener('click', () => { // Agrega un event listener para el clic en el botón
        // Obtiene los valores de los campos de entrada
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const usuario = document.getElementById('usuario').value;
        const contraseña = document.getElementById('contraseña').value;

        const nuevaCuenta = {
            Nombre: nombre,
            Correo: email,
            ID: usuario,
            Contraseña: contraseña
        };

        // Realiza una solicitud POST al servidor con los datos de la nueva cuenta
        fetch(`http://localhost:3000/api/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevaCuenta)
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message); // Muestra un mensaje basado en la respuesta del servidor
        })
        .catch(error => {
            console.error('Error al registrar la cuenta: ', error);
            alert('Error al registrar la cuenta');
        });
    });
});
