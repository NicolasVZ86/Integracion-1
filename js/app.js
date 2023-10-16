import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import path from 'path';

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'bylanpdxjlmrw2ixoud8'
});

app.use(cors());

// Ruta para servir el archivo index.html
app.get('/', (req, res) => {
  const indexPath = path.join(process.cwd(), 'public', 'index.html');
  res.sendFile(indexPath);
});

// Ruta para simular productos en la base de datos
app.get('/simular-productos', (req, res) => {
  const productos = [
    { Nombre: 'Producto 1', Descripcion: 'Descripción del producto 1' },
    { Nombre: 'Producto 2', Descripcion: 'Descripción del producto 2' },
  ];

  // Insertar los productos simulados en la base de datos
  connection.query('INSERT INTO Productos (Nombre, Descripcion) VALUES ?', [productos.map(p => [p.Nombre, p.Descripcion])], (error, results) => {
    if (error) {
      console.error('Error al simular productos: ' + error.stack);
      res.status(500).json({ error: 'Error al simular productos.' });
      return;
    }
    res.json({ message: 'Productos simulados correctamente.' });
  });
});

app.use(express.json());

// Ruta para buscar productos por valor de búsqueda
app.get('/buscar-producto/:valorBusqueda', (req, res) => {
  const valorBusqueda = req.params.valorBusqueda.toLowerCase().trim();
  const query = `SELECT Nombre, Descripcion FROM Productos WHERE Descripcion LIKE '%${valorBusqueda}%'`;

  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error al realizar la consulta: ' + error.stack);
      res.status(500).json({ error: 'Error al buscar productos.' });
      return;
    }
    res.json(results);
  });
});

// Ruta para simular la suma de productos en el carrito de compra
app.post('/simular-suma-productos', (req, res) => {
  const productosSeleccionados = req.body.productos; // Array de IDs de productos seleccionados

  // Calcular la suma de precios de los productos seleccionados
  const precioTotal = productosSeleccionados.reduce((total, productoId) => {
    if (productos[productoId]) {
      return total + productos[productoId].precio;
    }
    return total;
  }, 0);

  res.json({ precioTotal });
});


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
