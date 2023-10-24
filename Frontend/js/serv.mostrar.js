document.addEventListener('DOMContentLoaded', () => {
    const parametrosBusqueda = new URLSearchParams(window.location.search);
    const resultadosJSON = parametrosBusqueda.get('resultados');
    const resultados = JSON.parse(decodeURIComponent(resultadosJSON));
    const resultadosLista = document.getElementById('resultadosLista');

    resultados.forEach(producto => {
        // Crear un div para cada producto
        const productoDiv = document.createElement('div');
        productoDiv.className = 'producto';

        // Crear una imagen
        const imagen = document.createElement('img');
        imagen.src = producto.Imagen;
        imagen.alt = producto.Nombre;
        productoDiv.appendChild(imagen);

        // Crear un párrafo para el nombre del producto
        const nombreProducto = document.createElement('p');
        nombreProducto.textContent = `Nombre: ${producto.Nombre}`;
        productoDiv.appendChild(nombreProducto);

        // Crear un párrafo para la descripción del producto
        const descripcionProducto = document.createElement('p');
        descripcionProducto.textContent = `Descripción: ${producto.Descripcion}`;
        productoDiv.appendChild(descripcionProducto);

        // Crear un botón de comprar
        const comprarBtn = document.createElement('button');
        comprarBtn.textContent = 'Comprar';
        productoDiv.appendChild(comprarBtn);

        // Agregar el productoDiv a la lista de resultados
        resultadosLista.appendChild(productoDiv);
    });
});
