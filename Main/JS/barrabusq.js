document.addEventListener('DOMContentLoaded', () => {
    const barraBusqueda = document.getElementById('barraBusqueda');
    const buscarBtn = document.getElementById('buscarBtn');


    const productos = [
        {
            Nombre: 'anillo',
            Imagen: 'productos/producto4.png',
            Descripcion: 'anillo de plata hecho en italia'
        },
        {
            Nombre: 'aro de oro ',
            Imagen: 'productos/producto1.png',
            Descripcion: 'aro de oro hecho en grecia,1kg'
            
        },
        {
            Nombre: 'collar de zafiro  ',
            Imagen: 'productos/producto2.png',
            Descripcion: 'collar de zafiro bañado en oro hecho en chile con minerales del espacio '
            
        },
        {
            Nombre: 'collar de perla  ',
            Imagen: 'productos/producto3.png',
            Descripcion: 'collar de perla hecho en chile con minerales del espacio de GOATlexis '
            
        },
        {
            Nombre: 'collar de carmesi  ',
            Imagen: 'productos/productos4.png',
            Descripcion: 'collar carmesi hecho en francia con minerales del espacio de GOATlexis '
            
        },
        {
            Nombre: 'collar de oro  ',
            Imagen: 'productos/producto5.png',
            Descripcion: 'collar bañado en oro hecho en chile con minerales del espacio de GOATlexis '
            
        },
        {
            Nombre: 'collar de plata  ',
            Imagen: 'productos/producto6.png',
            Descripcion: 'collar bañado en plata hecho en chile con minerales del espacio de GOATlexis '
            
        },
        {
            Nombre: 'collar de oro diamante  ',
            Imagen: 'productos/producto7.jpg',
            Descripcion: 'collar de oro con un diamante que cuelga hecho en argentina con minerales del espacio de GOATlexis '
            
        },
        {
            Nombre: 'collar de oro ligero  ',
            Imagen: 'productos/producto8.jpg',
            Descripcion: 'collar bañado en oro hecho en españa con minerales del espacio de GOATlexis '
            
        },
        {
            Nombre: 'anillo  ',
            Imagen: 'productos/producto9.jpg',
            Descripcion: 'anillo de oro con diamante hecho en italia con minerales del extraido de las islas caribeñas '
            
        }
    ];

    
    
    
        buscarBtn.addEventListener('click', (event) => {
            event.preventDefault();  // Evita que el formulario se envíe
    
            const valorBusqueda = barraBusqueda.value.trim().toLowerCase();
    
            if (valorBusqueda === '') {
                alert('Por favor, ingrese un término de búsqueda.');
            } else {
                const resultadosFiltrados = productos.filter(producto =>
                    producto.Nombre.toLowerCase().includes(valorBusqueda) ||
                    producto.Descripcion.toLowerCase().includes(valorBusqueda) ||
                    producto.Descripcion.includes(parseInt(valorBusqueda))
                );
    
                if (resultadosFiltrados.length === 0) {
                    alert('No se encontraron resultados.');
                } else {
                    const parametrosBusqueda = encodeURIComponent(JSON.stringify(resultadosFiltrados));
                    window.location.href = 'resultados.html?resultados=' + parametrosBusqueda;
                }
            }
        });
    });
    

