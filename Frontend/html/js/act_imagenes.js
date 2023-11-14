document.addEventListener('DOMContentLoaded', function() {
    const listaProductos = document.querySelector('.products-list');
    const imagenProducto = document.getElementById('imagenProducto');
  
    listaProductos.addEventListener('click', (event) => {
      if (event.target.classList.contains('btn_producto')) {
        const nombreProducto = event.target.closest('.product-item').querySelector('.card-title').textContent;
        const rutaImagen = `img/images/productos/${nombreProducto.toLowerCase().replace(/\s/g, '')}.png`;
  
        // Comprobar si el elemento de la imagen existe antes de intentar cambiar la fuente
        if (imagenProducto) {
          imagenProducto.src = rutaImagen;
        } else {
          console.error("No se encontró el elemento de imagen con el id 'imagenProducto'.");
        }
      }
    });
  });
  