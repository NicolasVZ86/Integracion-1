document.addEventListener("DOMContentLoaded", function() {
    const parrafosContainer = document.getElementById('aqui va lo que se quiere mostrar o donde');

    fetch('') 
        .then(response => {
            if (!response.ok) {
                throw new Error('La solicitud Fetch no fue exitosa');
            }
            return response.json();
        })
        .then(data => {
            parrafosContainer.innerHTML = '';

            if (Array.isArray(data)) {
                data.forEach(parrafo => {
                    const p = document.createElement('p');
                    p.textContent = parrafo;
                    parrafosContainer.appendChild(p);
                });
            } else {
                console.error('La respuesta del servidor no es un JSON válido.');
            }
        })
        .catch(error => console.error('Error en la solicitud Fetch:', error));
});
