document.addEventListener('DOMContentLoaded', () => {
    const barraBusqueda = document.getElementById('barraBusqueda');
    const buscarBtn = document.getElementById('buscarBtn');

    buscarBtn.addEventListener('click', () => {
        const valorBusqueda = barraBusqueda.value;
         // Redirige a la página de resultados de búsqueda con el valor de búsqueda como parámetro de consulta
        window.location.href = `/resultados.html?busqueda=${encodeURIComponent(valorBusqueda)}`;
        fetch(`http://localhost:3001/buscar-producto/${valorBusqueda}`)
            .then(response => response.json())
            .then(resultados => {
                console.log('Resultados de la búsqueda:', resultados);
                // Llama a la función para mostrar los resultados
                mostrarResultados(resultados);
            })
            .catch(error => console.error('Error al buscar productos:', error));
    });

    function mostrarResultados(resultados) {
        // Código para mostrar los resultados en la interfaz de usuario
        // Por ejemplo, podrías crear elementos de DOM para mostrar los resultados en una lista.
        const resultadosLista = document.getElementById('resultadosLista');
        resultadosLista.innerHTML = ''; // Limpiar resultados anteriores

        resultados.forEach(resultado => {
            const li = document.createElement('li');
            li.textContent = `Nombre: ${resultado.Nombre}, Descripción: ${resultado.Descripcion}`;
            resultadosLista.appendChild(li);
        });
    }
});
