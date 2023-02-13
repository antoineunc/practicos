// 1) Escribir una función a la que se le pase una cadena "nombre" y muestre por pantalla el saludo ¡hola nombre!.
console.log("Ejercicio 1:")
const readlineSync = require("readline-sync")
const nombre = readlineSync.question("Nombre: ")
console.log("¡hola ", nombre, "!" )
console.log("")

//2) Escribir un programa que le pida al usuario que ingrese su nombre apellido edad y muestre un objeto con los datos ingresados.
console.log("Ejercicio 2:")
const name = readlineSync.question("Nombre: ")
const apellido = readlineSync.question("Apellido: ")
const edad = readlineSync.question("Edad: ")
const mi_obj={
    name,
    apellido,
    edad,
}
console.log(mi_obj)
console.log("")

//3) Escribir una funcion que espere dos parámetros, uno de los cuales deberá ser un array, y el otro parámetro debe ser el elemento a buscar en el array. Si lo encuentra debera devoler "Elemento encontrado en la posicion (posición)"
console.log("Ejercicio 3:")
const elemento= readlineSync.question("Elemento a buscar: ")
const array = ["Leche", "Café", "Chocolate",2, "Eric", "Jarra"]
buscarElemento(array, elemento)

function buscarElemento(array, elemento) {
  // aqui defino la funcion
  for (var i = 0; i < array.length; i++) {
    if (array[i] === elemento) {
        console.log("Elemento encontrado en la posición " ,i)
    }
}
console.log("Elemento no encontrado en el array")
}


