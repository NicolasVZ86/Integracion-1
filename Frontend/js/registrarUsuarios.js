document.addEventListener('DOMContentLoaded', () => {
    const registrarButton = document.getElementById('registrarButton');

    registrarButton.addEventListener('click', () => {
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const email = document.getElementById('email').value;
        const usuario = document.getElementById('usuario').value;
        const contraseña = document.getElementById('contraseña').value;

        const nuevaCuenta = {
            Nombre: nombre,
            Apellido: apellido,
            Correo: email,
            Contraseña: contraseña
        };

        fetch('http://localhost:3000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevaCuenta)
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
        })
        .catch(error => {
            console.error('Error al registrar la cuenta: ', error);
            alert('Error al registrar la cuenta');
        });
    });
});
