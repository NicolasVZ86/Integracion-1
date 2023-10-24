const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000; // Puerto


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor Express en ejecución en el puerto ${port}`);
});
