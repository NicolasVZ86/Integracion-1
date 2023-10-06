const inputBusqueda = document.getElementById('barraBusqueda'); // Obtener el elemento de entrada de búsqueda
const descripcionesProductos = document.querySelectorAll('.contenido h3'); // Obtener todas las descripciones de productos

// Agregar un evento de escucha al evento de entrada en la barra de búsqueda
inputBusqueda.addEventListener('input', function() {
    const valorBusqueda = inputBusqueda.value.toLowerCase().trim(); // Obtener el valor de la barra de búsqueda y convertirlo a minúsculas

    descripcionesProductos.forEach(function(descripcion) {
        const textoDescripcion = descripcion.textContent.toLowerCase();

        const producto = descripcion.closest('.producto'); // Encontrar el contenedor del producto

        // Verificar si el texto de la descripción incluye el valor de búsqueda
        if (textoDescripcion.includes(valorBusqueda)) {
            producto.style.display = 'block'; // Mostrar el producto si coincide con la búsqueda
        } else {
            producto.style.display = 'none'; // Ocultar el producto si no coincide con la búsqueda
        }
    });
});
