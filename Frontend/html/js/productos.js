// Realizar una solicitud fetch para obtener todos los productos desde la URL
fetch('https://joyeria-2023-eebf0fde91ee.herokuapp.com/api/productos')
  .then(response => {
    if (!response.ok) {
      throw new Error('No se pudo obtener la lista de productos');
    }
    return response.json();
  })
  .then(data => {

    console.log(data);

    // Aquí puedes procesar los datos, por ejemplo, mostrarlos en una lista en tu página
    const productList = document.getElementById('product-list'); // Reemplaza 'product-list' con el ID de tu elemento HTML
    data.forEach(product => {
      const productItem = document.createElement('li');
      productItem.textContent = `${product.Nombre}: $${product.Precio.toFixed(2)}`;
      productList.appendChild(productItem);
    });
  })
  .catch(error => {
    console.error('Error al obtener los productos:', error);
  });
