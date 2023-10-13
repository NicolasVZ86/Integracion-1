const express = require('express');
const mysql = require('mysql');
const app = express();
const cors = require('cors');
const path = require('path');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'bylanpdxjlmrw2ixoud8'
});

app.use(cors());

// Ruta para servir el archivo index.html
app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, 'public', 'index.html');
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

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
