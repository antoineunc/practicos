// 1) Escribir un programa que pida al usuario una palabra y la muestre por pantalla 10 veces.
console.log("Ejercicio 1:")
const readlineSync = require("readline-sync")

const palabra = readlineSync.question("Escriba una palabra: ")

for (n=0; n<10; n++){
    console.log(palabra)
}
console.log("")
// 2) Escribir un programa que pregunte al usuario su edad y muestre por pantalla todos los años que ha cumplido (desde 1 hasta su edad).
console.log("Ejercicio 2:")
const edad = readlineSync.question("Ingrese su edad: ")
for (let i = 1; i < edad;) {
    console.log("Edad # ", ++i)
}
console.log("")
//3) Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla todos los números impares desde 1 hasta ese número separados por comas.
console.log("Ejercicio 3:")
const num = readlineSync.question("Por favor, ingrese un número entero positivo:")

let result = "";
for (let i = 1; i <= num; i++) {
  if (i % 2 !== 0) {
    result += i + ", ";
  }
}

console.log(result.slice(0, result.length - 2));
console.log("")
// 4) Escribir un programa que pida al usuario un número entero y muestre por pantalla un triángulo rectángulo como el de más abajo, de altura el número introducido.
console.log("Ejercicio 4:")
const num2 = readlineSync.question("Por favor, ingrese un número entero:")

for (let i = 1; i <= num2; i++) {
  console.log("*".repeat(i));
}
console.log("")

//Escribir un programa que pida al usuario una palabra y luego muestre por pantalla una a una las letras de la palabra introducida empezando por la última.
console.log("Ejercicio 5:")
let palabra2 = readlineSync.question("Introduce una palabra:");
let longitud = palabra2.length;
let i = longitud - 1;

while (i >= 0) {
  console.log(palabra2.charAt(i));
  i--;
}
