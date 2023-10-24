import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import path from 'path';

const app = express();
app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  database: 'bylanpdxjlmrw2ixoud8'
});

app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, 'public', 'index.html');
  res.sendFile(indexPath);
});

app.get('/buscar-producto/:valorBusqueda', (req, res) => {
  const valorBusqueda = req.params.valorBusqueda.toLowerCase().trim();
  const query = 'SELECT Nombre, Descripcion FROM Productos WHERE Descripcion LIKE ?';
  const searchTerm = `%${valorBusqueda}%`;

  pool.query(query, [searchTerm], (error, results) => {
    if (error) {
      console.error('Error al realizar la consulta: ' + error.stack);
      res.status(500).json({ error: 'Error al buscar productos.' });
      return;
    }
    res.json(results);
  });
});

app.post('/simular-suma-productos', (req, res) => {
  const productosSeleccionados = req.body.productos; // Array de IDs de productos seleccionados

  // Simulación de precios de productos (reemplaza esto con datos reales de la base de datos)
  const preciosProductos = {
    1: 10,
    2: 20,
    // ...otros productos y sus precios
  };

  // Calcular la suma de precios de los productos seleccionados
  const precioTotal = productosSeleccionados.reduce((total, productoId) => {
    if (preciosProductos[productoId]) {
      return total + preciosProductos[productoId];
    }
    return total;
  }, 0);

  res.json({ precioTotal });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
