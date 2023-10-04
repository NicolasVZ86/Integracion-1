const express = require('express');
const app = express();
const port = 3000; 

//maneja las solicitudes
app.use(express.json());

// Datos de productos
const productos = [
  { id: 1, nombre: 'Nombre del Producto 1', precio: 50 },
];

let carrito = [];

app.post('/agregar-al-carrito/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const producto = productos.find((p) => p.id === productId);

  if (!producto) {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }

  carrito.push(producto);
  res.status(200).json({ mensaje: 'Producto agregado al carrito' });
});

app.get('/calcular-total', (req, res) => {
  const total = carrito.reduce((acc, producto) => acc + producto.precio, 0);
  res.status(200).json({ total });
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
