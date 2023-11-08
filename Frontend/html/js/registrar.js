document.addEventListener('DOMContentLoaded', () => {
    const botonRegistrar = document.querySelector('#botonRegistrar')
    botonRegistrar.addEventListener('click', async (event) => {

        // evita que el boton recargue la pagina al hacer click
        event.preventDefault()

        const Nombre = document.querySelector('#NombreR').value
        const Apellido = document.querySelector('#ApellidoR').value
        const Correo = document.querySelector('#CorreoR').value
        const Contraseña = document.querySelector('#ContraseñaR').value

        // creo que no se debe hacer en el front esta verificacion
        if (Nombre === '' || Correo === '' || Contraseña === '') {
            alert('Por favor, llene los campos obligatorios')
            return
        }

        const infoRegistrar = {
            Nombre,
            Apellido,
            Correo,
            Contraseña
        }

        const req = await fetch(`http://localhost:3000/api/registrar`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(infoRegistrar)
        })
        try {
            if (req.status !== 200) {
                alert('Hubo un problema al registrar la cuenta')
                setTimeout(() => {
                    location.reload()
                }, 3000)
            } else {
                console.log('se registro la cuenta correctamente')
                alert('Se registro la cuenta correctamente')
            }
        } catch(error) {
            console.error('Error al registrar la cuenta: ', error)
            // alert('Error al registrar la cuenta')
        }

        // .then(data => {
        //     alert(data.message);
        // })
        // .catch(error => {
        //     console.error('Error al registrar la cuenta: ', error);
        //     alert('Error al registrar la cuenta');
    })
})
