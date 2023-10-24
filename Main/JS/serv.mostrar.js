document.addEventListener('DOMContentLoaded', () => {
    const parametrosBusqueda = new URLSearchParams(window.location.search);
    const resultadosJSON = parametrosBusqueda.get('resultados');
    const resultadosFiltrados = JSON.parse(decodeURIComponent(resultadosJSON));

    // Ordena los productos por nombre antes de mostrarlos en el DOM
    resultadosFiltrados.sort((a, b) => a.Nombre.localeCompare(b.Nombre));

    const contenedorResultados = document.getElementById('contenedorResultados');

    // Limpia el contenedor antes de agregar los productos ordenados
    contenedorResultados.innerHTML = '';

    // Itera sobre los productos y agrégales un botón de compra
    resultadosFiltrados.forEach((producto, index) => {
        if (index % 3 === 0) {
            // Crea una nueva fila para cada conjunto de 3 productos
            const fila = document.createElement('div');
            fila.className = 'row';

            // Crea columnas para los productos en la fila
            for (let i = 0; i < 3 && index + i < resultadosFiltrados.length; i++) {
                const productoActual = resultadosFiltrados[index + i];

                const columna = document.createElement('div');
                columna.className = 'col-md-4 producto';

                const cardDiv = document.createElement('div');
                cardDiv.className = 'card';

                const imagen = document.createElement('img');
                imagen.src = productoActual.Imagen;
                imagen.className = 'card-img-top';
                imagen.alt = productoActual.Nombre;

                const cardBodyDiv = document.createElement('div');
                cardBodyDiv.className = 'card-body';

                const titulo = document.createElement('h5');
                titulo.className = 'card-title';
                titulo.textContent = productoActual.Nombre;

                const descripcion = document.createElement('p');
                descripcion.className = 'card-text';
                descripcion.textContent = productoActual.Descripcion;

                cardBodyDiv.appendChild(imagen);
                cardBodyDiv.appendChild(titulo);
                cardBodyDiv.appendChild(descripcion);
                cardDiv.appendChild(cardBodyDiv);
                columna.appendChild(cardDiv);

                // Crea un botón de compra para cada producto
                const botonCompra = document.createElement('button');
                botonCompra.className = 'btn btn-primary';
                botonCompra.textContent = 'Comprar';

                // Agrega un evento al botón de compra si es necesario
                // botonCompra.addEventListener('click', () => {
                //     // Lógica para el evento de compra
                // });

                cardBodyDiv.appendChild(botonCompra);

                fila.appendChild(columna);
            }

            // Agrega la fila al contenedor de resultados
            contenedorResultados.appendChild(fila);
        }
    });
});
