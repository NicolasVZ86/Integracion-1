// TODO EL CODIGO COMENTADO ES BACKEND
// const mysql = require('mysql');

// // Configura los detalles de la conexión a la base de datos
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: ' bylanpdxjlmrw2ixoud8'
// });

// // Conécta a la base de datos
// connection.connect((err) => {
//   if (err) {
//     console.error('Error al conectar a la base de datos: ' + err.stack);
//     return;
//   }
//   console.log('Conexión exitosa a la base de datos con el ID ' + connection.threadId);

//   // Ejemplo
//   connection.query('SELECT * FROM Productos', (error, results, fields) => {
//     if (error) throw error;

//     // Resultados de la consulta
//     console.log('Productos:', results);
//   });

//   // Cierra la conexión después de realizar las consultas necesarias
//   connection.end((err) => {
//     if (err) {
//       console.error('Error al cerrar la conexión: ' + err.stack);
//       return;
//     }
//     console.log('Conexión cerrada.');
//   });
// });

document.addEventListener("DOMContentLoaded", function() {
    // Función para agregar productos al carrito
    function agregarProductoAlCarro(idProducto, nombreProducto, precioProducto) {
        // Lógica para agregar productos al carro (aquí puedes realizar operaciones con la base de datos)
        console.log('Producto agregado al carro - ID:', idProducto, ', Nombre:', nombreProducto, ', Precio:', precioProducto);
    }

    // Agregar evento de clic a los botones dentro de los elementos
    document.querySelectorAll('.contenido button').forEach(function (button) {
        button.addEventListener('click', function () {
            // Obtener información del producto desde el contenedor
            var contenedorProducto = this.parentNode;
            var idProducto = contenedorProducto.dataset.id; // Suponiendo que el ID del producto esté almacenado en un atributo de datos
            var nombreProducto = contenedorProducto.querySelector('h3').textContent;
            var precioProducto = parseFloat(contenedorProducto.querySelector('.precio').textContent.replace('$', ''));

            // Llamar a la función para agregar el producto al carrito
            agregarProductoAlCarro(idProducto, nombreProducto, precioProducto);
        });
    });
});
