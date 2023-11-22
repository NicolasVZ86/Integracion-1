let productosGlobal = [];

document.addEventListener('DOMContentLoaded', (event) => {
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
            // Renderizamos los productos inicialmente
            renderizarProductos(productosGlobal);
        } catch (error) {
            console.error('Error al cargar los productos:', error);
        }
    };

    const filtrarProductos = () => {
        const textoBusqueda = document.getElementById('barraBusqueda').value.toLowerCase();
        // Utilizamos la variable global de productos para el filtro
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

    cargarProductos();
});