document.addEventListener('DOMContentLoaded', () => {
    const barraBusqueda = document.getElementById('barraBusqueda');
    const buscarBtn = document.getElementById('buscarBtn');
    const resultadosLista = document.getElementById('resultadosLista');

    const productos = [
        { Nombre: 'Producto 1', Descripcion: 'Descripción del producto con número 123' },
        { Nombre: 'Producto 2', Descripcion: 'Descripción del producto 456' }
    ];

    buscarBtn.addEventListener('click', () => {
        const valorBusqueda = barraBusqueda.value.trim().toLowerCase();

        // Limpia resultados anteriores
        resultadosLista.innerHTML = '';

        if (valorBusqueda === '') {
            const li = document.createElement('li');
            li.textContent = 'No se encontraron resultados.';
            resultadosLista.appendChild(li);
        } else {
            // Realizar la búsqueda solo si hay un término de búsqueda
            const resultados = productos.filter(producto =>
                producto.Nombre.toLowerCase().includes(valorBusqueda) ||
                producto.Descripcion.toLowerCase().includes(valorBusqueda) ||
                producto.Descripcion.includes(parseInt(valorBusqueda))
            );

            if (resultados.length === 0) {
                const li = document.createElement('li');
                li.textContent = 'No se encontraron resultados.';
                resultadosLista.appendChild(li);
            } else {
                mostrarResultados(resultados);
            }
        }
    });

    function mostrarResultados(resultados) {
        resultados.forEach(resultado => {
            const li = document.createElement('li');
            li.textContent = `Nombre: ${resultado.Nombre}, Descripción: ${resultado.Descripcion}`;
            resultadosLista.appendChild(li);
        });
    }
});
