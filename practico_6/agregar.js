const productos = require('./dataBase.js');
const fs = require('fs');

function agregarProducto(id, nombre, descripcion, categoria, precio) {
  const nuevoProducto = {
    id: id,
    nombre: nombre,
    descripcion: descripcion,
    categoria: categoria,
    precio: precio
  };
  productos.push(nuevoProducto);
  console.log(`Se ha agregado el siguiente producto a la base de datos: ${JSON.stringify(nuevoProducto)}`);

  // Gauardar el nuevo archivo
  fs.writeFile('./dataBase.js', `module.exports = ${JSON.stringify(productos)};`, function(err) {
    if (err) throw err;
    console.log('La base de datos ha sido actualizada.');
  });
}

// Definir todos los parametros en los argumentos 

const args = process.argv.slice(2);
const id = parseInt(args[0]);
const nombre = args[1];
const descripcion = args[2];
const categoria = args[3];
const precio = parseFloat(args[4]);

agregarProducto(id, nombre, descripcion, categoria, precio);

//Ejemplo de uso en la console: node agregar.js 12 Papas "bolsa x 500g" 'Snacks' 510