document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    searchButton.addEventListener('click', function () {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            // Realiza la acción de búsqueda aquí, por ejemplo, redirige a una página de resultados
            window.location.href = `/buscar?query=${encodeURIComponent(searchTerm)}`;
        }
    });

    // También puedes agregar una función para manejar la búsqueda cuando se presiona Enter en el campo de búsqueda
    searchInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                window.location.href = `/buscar?query=${encodeURIComponent(searchTerm)}`;
            }
        }
    });
});
