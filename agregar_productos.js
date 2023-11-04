function calcularPrecioTotal(carrito) {
  let precioTotal = 0;
  carrito.forEach(producto => {
    precioTotal += producto.precio;
  });
  return precioTotal;
}

function agregarAlCarrito(nombreProducto, precioProducto, imagenProducto, descripcionProducto) {
  // Verifica si ya hay productos en el carrito en localStorage
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // Agrega el nuevo producto al carrito
  carrito.push({
    nombre: nombreProducto,
    precio: precioProducto,
    imagen: imagenProducto,
    descripcion: descripcionProducto
  });

  // Ordena los productos por nombre de forma ascendente
  carrito.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);

  // Actualiza el carrito en localStorage
  localStorage.setItem("carrito", JSON.stringify(carrito));

  // Muestra un mensaje de éxito (esto es opcional, puedes personalizarlo)
  alert("Producto agregado al carrito!");

  // Redirige al usuario a la página del carrito
  window.location.href = "carrito.html";
}

document.addEventListener("DOMContentLoaded", function() {
  // Obtiene los productos del carrito desde localStorage
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // Obtiene el contenedor donde se mostrarán los productos en el carrito
  let carritoContainer = document.querySelector(".prod-carrito");

  // Recorre los productos del carrito y los muestra en la página
  carrito.forEach(producto => {
    // Crea elementos HTML para mostrar el producto
    let productoDiv = document.createElement("div");
    productoDiv.classList.add("prod-carrito", "row", "mt-4");

    // Estructura del producto
    productoDiv.innerHTML = `
      <div class="col-3 my-3">
        <img class="img-fluid" src="${producto.imagen}" alt="${producto.nombre}">
      </div>
      <div class="col-8">
        <div class="row mt-3">
          <h4>${producto.nombre}</h4>
        </div>
        <div class="row">
          <p>${producto.descripcion}</p>
        </div>
        <div class="col-4 my-auto precio-prod">
          <p>$${producto.precio.toFixed(2)}</p>
        </div>
      </div>
    `;

    // Agrega el producto al contenedor del carrito
    carritoContainer.appendChild(productoDiv);
  });

  // Calcula y muestra el precio total del carrito
  let precioTotal = calcularPrecioTotal(carrito);
  let precioTotalContainer = document.querySelector(".precio-total");
  precioTotalContainer.textContent = `$${precioTotal.toFixed(2)}`;

  let continuarComprandoBtn = document.getElementById("continuar-comprando");

  // Agrega un evento de clic al botón
  continuarComprandoBtn.addEventListener("click", function(event) {
    // Evita que el enlace se abra (comportamiento predeterminado)
    event.preventDefault();

    // Llama a la función agregarAlCarrito utilizando los datos del producto seleccionado
    agregarAlCarrito(productoSeleccionado.nombre, productoSeleccionado.precio, productoSeleccionado.imagen, productoSeleccionado.descripcion);
  });
});
