const productos = require('./dataBase');

function listarProductosPorCategoria(categoria) {
  const productosFiltrados = [];

  for (let i = 0; i < productos.length; i++) {
    if (productos[i].categoria === categoria) {
      productosFiltrados.push(productos[i]);
    }
  }

  for (let i = 0; i < productosFiltrados.length; i++) {
    console.log(productosFiltrados[i]);
  }
}
// Sacamos la categoría 
const categoria = process.argv[2]; 

listarProductosPorCategoria(categoria);

//Ejemplo en la termina;l: node listar.js Bebidas
