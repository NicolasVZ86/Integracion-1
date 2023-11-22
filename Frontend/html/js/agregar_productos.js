let productosGlobal = [];
const carrito = [];

// Función para agregar productos al carrito
const agregarProductoAlCarro = (idProducto, nombreProducto, precioProducto) => {
    const productoExistente = carrito.find(item => item.id === idProducto);

    if (productoExistente) {
        productoExistente.cantidad += 1;
        console.log('Cantidad actualizada en el carrito para el producto - ID:', idProducto);
    } else {
        const producto = {
            id: idProducto,
            nombre: nombreProducto,
            precio: precioProducto,
            cantidad: 1 // Inicializar la cantidad si el producto no existe en el carrito
        };
        carrito.push(producto);
        console.log('Producto agregado al carrito - ID:', idProducto, ', Nombre:', nombreProducto, ', Precio:', precioProducto);
    }

    console.log('Contenido del carrito:', carrito);
};

export const getCarrito = () => {
    console.log(carrito);
    return carrito;
};
// Función para renderizar productos en la página
export const renderizarProductos = (productos) => {
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
                    <button class="btn-agregar">Agregar al carrito</button>
                </div>
            </div>
        `;
        const btnComprar = productoDiv.querySelector('.btn-agregar');
        btnComprar.addEventListener('click', () => {
            agregarProductoAlCarro(producto.ID, producto.Nombre, producto.Precio);
            console.log('Producto agregado al carrito - ID:', producto.ID, ', Nombre:', producto.Nombre, ', Precio:', producto.Precio);
        });

        productosContainer.appendChild(productoDiv);
    });
};

// Función para cargar los productos desde la API
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

// Función para filtrar productos según la búsqueda
const filtrarProductos = () => {
    const textoBusqueda = document.getElementById('barraBusqueda').value.toLowerCase();
    const productosFiltrados = productosGlobal.filter((producto) =>
        producto.Nombre.toLowerCase().includes(textoBusqueda) ||
        producto.Descripcion.toLowerCase().includes(textoBusqueda)
    );
    renderizarProductos(productosFiltrados);
};

// Función que se ejecuta al cargar la página
document.addEventListener('DOMContentLoaded', async () => {
    const productosContainer = document.getElementById('productos-container');

    document.getElementById('buscarBtn').addEventListener('click', (e) => {
        e.preventDefault(); 
        filtrarProductos();
    });

    document.getElementById('barraBusqueda').addEventListener('input', filtrarProductos);

    await cargarProductos();
});