document.addEventListener('DOMContentLoaded', () => {
    const registrarButton = document.getElementById('registrarButton');

    registrarButton.addEventListener('click', () => {
        const nombre = document.getElementById('Nombre').value;
        const apellido = document.getElementById('Apellido').value;
        const correo = document.getElementById('Correo').value;
        const usuario = document.getElementById('Usuario').value;
        const contraseña = document.getElementById('Contraseña').value;

        const nuevaCuenta = {
            Nombre: nombre,
            Apellido: apellido,
            Correo: correo,
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
