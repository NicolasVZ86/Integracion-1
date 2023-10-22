const express = require('express');
const mysql = require('mysql2');
const app = express();
app.use(express.json());

const dbConfig = {
  host: 'bylanpdxjlmrw2ixoud8-mysql.services.clever-cloud.com',
  user: 'uofv0bbpla2jv4cg',
  password: 'ZCY0AtinSfje5DtFrfDk',
  port: 3306,
  database: 'bylanpdxjlmrw2ixoud8',
  connectTimeout: 100000,
};
const connection = mysql.createConnection(dbConfig);

app.put('/editar/:id', (req, res) => {
  const id = req.params.id;
  const newData = req.body; // Los datos que deseas actualizar // nuevo dato

  connection.query('UPDATE Usuario SET ? WHERE ID = ?', [newData, id], (error, results) => {
    if (error) {
      console.error('Error al editar los datos: ', error);
      res.status(500).json({ error: 'Error al editar los datos' });
    } else {
      res.json({ message: 'Datos actualizados con éxito' });
    }
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
