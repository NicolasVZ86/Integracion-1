$(document).ready(function () {
    function obtenerCarrito() {
      try {
        const carritoJSON = localStorage.getItem('carrito');
        return carritoJSON ? JSON.parse(carritoJSON) : [];
      } catch (error) {
        console.error('Error al obtener el carrito desde el almacenamiento local:', error);
        return [];
      }
    }
  
    function agregarAlCarrito(producto) {
      try {
          var carrito = obtenerCarrito();
  
          var existente = carrito.find(p => p.ID === producto.ID);
  
          if (existente) {
              existente.Cantidad++; // Ajustar la propiedad Cantidad en lugar de cantidad
          } else {
              carrito.push({ ...producto, Cantidad: 1 }); // Utilizar producto.Imagen en lugar de null
          }
  
          localStorage.setItem('carrito', JSON.stringify(carrito));
  
          actualizarTotal(carrito);
  
          console.log('Producto agregado con éxito al carrito');
          console.log('Carrito actualizado:', carrito);
      } catch (error) {
          
          con
  console.error('Error al agregar al carrito:', error);
      }
  }
  
    function actualizarTotal(carrito) {
      console.log('Actualizando el total...');
      try {
        if (!Array.isArray(carrito)) {
          console.error('El carrito no es válido:', carrito);
          return;
        }
  
        var totalSinDescuento = carrito.reduce((total, producto) => total + (producto.Precio * producto.Cantidad), 0);
        var descuento = 0.1;
        var totalConDescuento = totalSinDescuento * (1 - descuento);
  
        $('#total-sin-descuento').text('$' + totalSinDescuento.toFixed(2));
        $('#total-con-descuento').text('$' + totalConDescuento.toFixed(2));
  
        mostrarContenidoCarrito(carrito);
      } catch (error) {
        console.error('Error al actualizar el total:', error);
      }
    }
  
    function eliminarDelCarrito(productoID) {
      try {
        var carrito = obtenerCarrito();
    
        var indice = carrito.findIndex(p => p.ID === productoID);
    
        if (indice !== -1) {
          carrito.
     
    splice(indice, 1); // Elimina el producto del carrito
          localStorage.setItem('carrito', JSON.stringify(carrito));
          actualizarTotal(carrito);
          mostrarContenidoCarrito(carrito);
          
         
    console.log('Producto eliminado con éxito del carrito');
        } else {
          console.error('Producto no encontrado en el carrito');
        }
      } catch (error) {
        console.error('Error al eliminar del carrito:', error);
      }
    }
    
    $(document).on('click', '.btn_eliminar_producto', function () {
      var productoID = $(this).data('id');
      eliminarDelCarrito(productoID);
    });
    
  
  function mostrarContenidoCarrito(carrito) {
    console.log('Mostrando contenido del carrito...');
    try {
      if (!Array.isArray(carrito)) {
        console.error('El carrito no es válido:', carrito);
        return;
      }
  
      var carritoContenido = $('.carrito-contenido');
  
      carritoContenido.empty();
  
      carrito.forEach(producto => {
        var productoHTML = `
        <article class="col">
          <div class="card">
            <div class="card-body">
              <div class="contenido-producto">
                <div class="info-producto">
                  <h5 class="card-title">${producto.Nombre}</h5>
                  <p class="card-text">${producto.Descripcion}</p>
                  <p class="card-text">Precio: $${(producto.Precio * producto.Cantidad).toFixed(2)}</p>
                  <p class="card-text">Cantidad: ${producto.Cantidad}</p>
                  <button class="btn_eliminar_producto" data-id="${producto.ID}">Eliminar del carrito</button>
                </div>
                <img src="${producto.Imagen}" class="card-img-top imagen-carrito">
              </div>
            </div>
          </div>
        </article>`;    
        carritoContenido.append(productoHTML);
        console.log('Producto agregado al DOM:', productoHTML);
      });
    } catch (error) {
      console.error('Error al mostrar el contenido del carrito:', error);
    }
  }
  
    // Delegación de eventos para manejar el clic en el botón "Comprar"
    $(document).on('click', '.btn_producto', function () {
      var index = $('.btn_producto').index(this);
      var producto = productosGlobal[index];
  
      if (producto) {
        agregarAlCarrito(producto);
        mostrarMensaje('Producto agregado con éxito al carrito');
      } else {
        console.error('Producto no encontrado');
      }
    });
  
    // Evento para manejar el clic en el botón "Agregar al carrito"
    $('.btn-agregar-carrito').on('click', function () {
      var productoID = $(this).data('id');
      var producto = productosGlobal.find(p => p.ID === productoID);
  
      if (producto) {
        agregarAlCarrito(producto);
        mostrarMensaje('Producto agregado con éxito al carrito');
      } else {
        console.error('Producto no encontrado');
      }
    });
  
    function mostrarMensaje(mensaje) {
      var mensajeElemento = document.getElementById('mensaje');
      if (mensajeElemento) {
        mensajeElemento.textContent = mensaje;
      } else {
        console.log('Elemento con id "mensaje" no encontrado');
      }
    }
  
    // Asegurar que la actualización del carrito se realice después de que el DOM esté completamente cargado
    actualizarTotal(obtenerCarrito());
  });
  