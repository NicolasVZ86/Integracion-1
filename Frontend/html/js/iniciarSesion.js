document.addEventListener('DOMContentLoaded', () => {
	const botonInicioSesion = document.querySelector('#botonIniciarSesion')
	botonInicioSesion.addEventListener('click', async (event) => {
		
		// evita que el boton recargue la pagina
		event.preventDefault()
		
		//   const nombre = document.getElementById('nombre').value;
		const Correo = document.querySelector('#CorreoI').value
		const Contraseña = document.querySelector('#ContraseñaI').value

		if (Correo === '' || Contraseña === '') {
			alert('Por favor, llene todos los campos')
			return
		}

		const body = {
			//   nombre,
			Correo,
			Contraseña
		}

		const req = await fetch(`http://localhost:3000/api/iniciarSesion`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		})
		try {
			const data = await req.json()
			localStorage.setItem('token', data.token)
			const llaves = Object.keys(localStorage)
			const valores = []
			llaves.forEach( key => {
				valores[key] = localStorage.getItem(key)})
			console.log(valores)
			alert(data.message)

		} catch (error) {
			console.error('Error al iniciar sesión : ', error)
			// alert('Error al iniciar sesión')
		}
		//   .then(response => response.json())
		//   .then(data => {
		//       alert(data.message);
		//   })
		//   .catch(error => {
		//       console.error('Error al editar los datos: ', error);
		//       alert('Error al editar los datos');
		//   });
	})
})
