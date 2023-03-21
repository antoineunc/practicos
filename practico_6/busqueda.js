const productos = require('./dataBase.js');

function buscarProductoPorId(id) {
  id = parseInt(id)
  const productoEncontrado = productos.find(producto => producto.id === id);
  return productoEncontrado || null;
}

function buscarPorPrecio(precioMaximo) {
  precioMaximo = parseFloat(precioMaximo)
  const productosEncontrados = productos.filter(producto => producto.precio < precioMaximo);
  return productosEncontrados.length > 0 ? productosEncontrados : null;
}

const funcionBusqueda = process.argv[2]; 
const parametroBusqueda = process.argv[3];

let resultados;

switch (funcionBusqueda) {
  case 'buscarProductoPorId':
    resultados = buscarProductoPorId(parametroBusqueda);
    break;
  case 'buscarPorPrecio':
    resultados = buscarPorPrecio(parametroBusqueda);
    break;
}

if (resultados) {
  console.log(resultados);
} else {
  console.log(`No se encontraron resultados para la búsqueda de ${funcionBusqueda} con el parámetro ${parametroBusqueda}`);
}


//Ejemplos de uso en la console 
// "node busqueda.js buscarPorPrecio 250"
// "node busqueda.js buscarProductoPorId 13"