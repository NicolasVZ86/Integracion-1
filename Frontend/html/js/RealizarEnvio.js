document.addEventListener('DOMContentLoaded', () => {
    const enviarPedidoButton = document.querySelector('button[type="submit"]');
    enviarPedidoButton.addEventListener('click', (event) => {
        event.preventDefault(); 

        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const direccion = document.getElementById('direccion').value;
        const telefono = document.getElementById('telefono').value;
        const comentario = document.getElementById('comentario').value;

        const nuevoPedido = {
            nombre,
            apellido,
            direccion,
            telefono,
            comentario
        };

        fetch('http://localhost:3000/api/envios', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevoPedido)
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message); 
        })
        .catch(error => {
            console.error('Error al enviar el pedido: ', error);
            alert('Error al enviar el pedido');
        });
    });
});
