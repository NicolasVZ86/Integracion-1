document.addEventListener("DOMContentLoaded", function() {
    // Función para agregar productos al carrito
    function agregarProductoAlCarro(idProducto, nombreProducto, precioProducto) {
        // Lógica para agregar productos al carro (aquí puedes realizar operaciones con la base de datos)
        console.log('Producto agregado al carro - ID:', idProducto, ', Nombre:', nombreProducto, ', Precio:', precioProducto);
    }

    // Agregar evento de clic a los botones dentro de los elementos con la clase .contenido
    document.querySelectorAll('.contenido button').forEach(function (button) {
        button.addEventListener('click', function () {
            // Obtener información del producto desde el contenedor
            var contenedorProducto = this.parentNode;
            var idProducto = contenedorProducto.dataset.id; // Suponiendo que el ID del producto esté almacenado en un atributo de datos
            var nombreProducto = contenedorProducto.querySelector('h3').textContent;
            var precioProducto = parseFloat(contenedorProducto.querySelector('.precio').textContent.replace('$', '')); // Suponiendo que el precio esté en un elemento con la clase .precio

            // Llamar a la función para agregar el producto al carrito
            agregarProductoAlCarro(idProducto, nombreProducto, precioProducto);
        });
    });
});
