document.addEventListener('DOMContentLoaded', () => {
    // Obtén el elemento contenedorResultados del DOM
    const contenedorResultados = document.getElementById('contenedorResultados');

    // Verifica si el elemento contenedorResultados existe en el DOM
    if (contenedorResultados) {
        // Obtén los parámetros de búsqueda de la URL
        const urlParams = new URLSearchParams(window.location.search);
        const resultadosParam = urlParams.get('resultados');

        // Decodifica los parámetros de búsqueda para obtener los resultados filtrados
        const resultadosFiltrados = JSON.parse(decodeURIComponent(resultadosParam));

        // Itera sobre los resultados filtrados y crea elementos HTML para cada uno
        resultadosFiltrados.forEach(producto => {
            // Crea un nuevo elemento div para el producto
            const divProducto = document.createElement('div');

            // Crea y añade un elemento h2 para el nombre del producto
            const h2Nombre = document.createElement('h2');
            h2Nombre.textContent = producto.Nombre;
            divProducto.appendChild(h2Nombre);

            // Crea y añade un elemento img para la imagen del producto
            const imgProducto = document.createElement('img');
            imgProducto.src = producto.Imagen;
            divProducto.appendChild(imgProducto);

            // Crea y añade un elemento p para la descripción del producto
            const pDescripcion = document.createElement('p');
            pDescripcion.textContent = producto.Descripcion;
            divProducto.appendChild(pDescripcion);

            // Añade el div del producto al contenedor de resultados
            contenedorResultados.appendChild(divProducto);
        });
    } else {
        console.error('El elemento contenedorResultados no existe en el DOM.');
    }
});
