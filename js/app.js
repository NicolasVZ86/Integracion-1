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
app.get('/buscar-producto', (req, res) => {
    // Obtiene el valor de búsqueda del parámetro de consulta
    const valorBusqueda = req.query.busqueda;

    // Simula resultados de búsqueda (aquí puedes usar un array de objetos que representen productos)
    const resultados = [
        { nombre: 'Producto 1', descripcion: 'Descripción del producto 1' },
        { nombre: 'Producto 2', descripcion: 'Descripción del producto 2' }
        // Agrega más productos simulados según sea necesario
    ];

    res.json(resultados);
});

connection.connect(err => {
  if (err) {
    console.error('Error al conectar a la base de datos: ' + err.stack);
    return;
  }
  console.log('Conexión a la base de datos establecida como ID ' + connection.threadId);
});

app.use(express.json());

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
