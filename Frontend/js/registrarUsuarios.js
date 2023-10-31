document.addEventListener('DOMContentLoaded', () => {
    const registrarButton = document.getElementById('registrarButton');
    registrarButton.addEventListener('click', () => {
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const usuario = document.getElementById('usuario').value;
        const contrasena = document.getElementById('contrasena').value;

        const nuevaCuenta = {
            nombre,
            email,
            usuario,
            contrasena
        };

        fetch(`http://localhost:3000/api/register`, {
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
