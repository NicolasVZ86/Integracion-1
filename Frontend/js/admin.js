async function agregarProducto() {
    const nombreProducto = document.getElementById('nombreProducto').value
    const precioProducto = document.getElementById('precioProducto').value
    const cantidadProducto = document.getElementById('cantidadProducto').value

    const body = {
        nombreProducto,
        precioProducto,
        cantidadProducto
    }

    const req = await fetch (`http://localhost:3000/api/agregarProducto`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })

    try {
        const data = await req.json()
        alert(data.message)
    } catch (error) {
        console.error('Error al agregar producto : ', error)
    }

}

async function actualizarCantidad() {
    const idProductoActualizar = document.getElementById('idProductoActualizar').value
    const nuevacantidad = document.getElementById('nuevacantidad').value

    const body = {
        idProductoActualizar,
        nuevacantidad
    }

    const req = await fetch (`http://localhost:3000/api/actualizarCantidad`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })

    try {
        const data = await req.json()
        alert(data.message)
    } catch (error) {
        console.error('Error al actualizar cantidad : ', error)
    }

}

async function eliminarProducto() {
    const idProductoEliminar = document.getElementById('idProductoEliminar').value

    body = {
        idProductoEliminar
    }

    const req = await fetch (`http://localhost:3000/api/eliminarProducto`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })

    try {
        const data = await req.json()
        alert(data.message)
    } catch (error) {     
        console.error('Error al eliminar producto : ', error)
    }
}
