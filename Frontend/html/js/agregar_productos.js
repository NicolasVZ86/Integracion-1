let productosGlobal = []; // Variable para almacenar la lista de productos
const carrito = []; // Variable para almacenar los productos en el carrito

document.addEventListener('DOMContentLoaded', async () => {
    const agregarProductoAlCarro = (idProducto, nombreProducto, precioProducto) => {
        const producto = {
            id: idProducto,
            nombre: nombreProducto,
            precio: precioProducto
        };

        const productoExistente = carrito.find(item => item.id === idProducto);

        if (productoExistente) {
            productoExistente.cantidad += 1;
        } else {
            producto.cantidad = 1;
            carrito.push(producto);
        }

        console.log('Producto agregado al carro - ID:', idProducto, ', Nombre:', nombreProducto, ', Precio:', precioProducto);
        console.log('Contenido del carrito:', carrito);
    };

    const renderizarProductos = (productos) => {
        const productosContainer = document.getElementById('productos-container');
        productosContainer.innerHTML = '';
        productos.forEach(producto => {
            const productoDiv = document.createElement('div');
            productoDiv.classList.add('col', 'card_container', 'product-item');
            productoDiv.setAttribute('category', producto.Categoria);
            productoDiv.innerHTML = `
                <div class="card ${producto.Categoria}"> 
                    <img src="${producto.Imagen}" class="card-img-top" alt="${producto.Nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${producto.Nombre}</h5>
                        <p class="card-text">${producto.Descripcion}</p>
                    </div>
                    <div class="mb-5 d-flex justify-content-around">
                        <h3>$${producto.Precio.toFixed(2)}</h3>
                        <button class="btn_producto">Comprar</button>
                    </div>
                </div>
            `;
            const btnComprar = productoDiv.querySelector('.btn_producto');
            btnComprar.addEventListener('click', () => {
                agregarProductoAlCarro(producto.id, producto.nombre, producto.precio);
            });

            productosContainer.appendChild(productoDiv);
        });
    };

    const cargarProductos = async () => {
        try {
            const response = await fetch('https://joyeria-2023-eebf0fde91ee.herokuapp.com/api/productos');
            if (!response.ok) {
                throw new Error('La solicitud no fue exitosa');
            }

            productosGlobal = await response.json();
            renderizarProductos(productosGlobal);
        } catch (error) {
            console.error('Error al cargar los productos:', error);
        }
    };

    const filtrarProductos = () => {
        const textoBusqueda = document.getElementById('barraBusqueda').value.toLowerCase();
        const productosFiltrados = productosGlobal.filter((producto) =>
            producto.Nombre.toLowerCase().includes(textoBusqueda) ||
            producto.Descripcion.toLowerCase().includes(textoBusqueda)
        );
        renderizarProductos(productosFiltrados);
    };

    document.getElementById('buscarBtn').addEventListener('click', (e) => {
        e.preventDefault(); 
        filtrarProductos();
    });

    document.getElementById('barraBusqueda').addEventListener('input', filtrarProductos);

    await cargarProductos();
});
