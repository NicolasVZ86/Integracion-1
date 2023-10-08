const express = require('express');
const mysql = require('mysql');
const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'bylanpdxjlmrw2ixoud8'
});

// Establecer la conexión a la base de datos
connection.connect(err => {
  if (err) {
    console.error('Error al conectar a la base de datos: ' + err.stack);
    return;
  }
  console.log('Conexión a la base de datos establecida como ID ' + connection.threadId);
});

app.use(express.json());

// Ruta para manejar las solicitudes de búsqueda
app.get('/buscar-producto/:valorBusqueda', (req, res) => {
  const valorBusqueda = req.params.valorBusqueda.toLowerCase().trim();
  const query = `SELECT Nombre, Descripcion FROM Productos WHERE Descripcion LIKE '%${valorBusqueda}%'`;

  // Realizar la consulta a la base de datos
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error al realizar la consulta: ' + error.stack);
      res.status(500).json({ error: 'Error al buscar productos.' });
      return;
    }
    res.json(results);
  });
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
