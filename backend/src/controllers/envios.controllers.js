// Configura el middleware de bodyParser para analizar los datos del formulario
app.use(bodyParser.urlencoded({ extended: false }));

// Ruta para servir archivos estáticos, como CSS y JavaScript
app.use(express.static('public'));

// Ruta para mostrar el formulario
app.get('/', (req, res) => {
  res.sendFile(__dirname + "../envios.html");
});

// Ruta para manejar la solicitud POST del formulario
app.post('/enviar', (req, res) => {
  // Aquí puedes manejar la lógica para procesar los datos del formulario
  const nombre = req.body.nombre;
  const pais = req.body.Pais;
  const ciudad = req.body.Ciudad;
  const direccion = req.body.direccion;
  const telefono = req.body.telefono;
  const comentario = req.body.Comentario;

  // Realiza alguna acción con los datos, como guardarlos en una base de datos
  // En este ejemplo, solo los mostraremos en la consola
  console.log(`Nombre: ${nombre}`);
  console.log(`Pais: ${pais}`);
  console.log(`Ciudad: ${ciudad}`);
  console.log(`Dirección: ${direccion}`);
  console.log(`Teléfono: ${telefono}`);
  console.log(`Comentario: ${comentario}`);

  // Redirige a una página de confirmación o realiza alguna otra acción
  res.send('Pedido enviado con éxito');
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
