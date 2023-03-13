// Ej1. Dados 2 arrays ["Juan", "Dani"] y ["Leo", "Monica", "Juliana"], escribir una función que concatene "unifique" los dos array y devuelva un solo array ["Juan", "Dani", "Leo", "Monica", "Juliana"].

console.log("Ej1. Dados 2 arrays escribir una función que concatene unifique los dos array y devuelva un solo array.")
console.log("") 
function unificarArrays(array1, array2) {
    const arrayUnificado = [];
  
    for (let i = 0; i < array1.length; i++) {
      arrayUnificado.push(array1[i]);
    }
  
    for (let i = 0; i < array2.length; i++) {
      arrayUnificado.push(array2[i]);
    }
  
    return arrayUnificado;
  }
  
// Aqui llamo la funcion:
const array1 = ["Juan", "Dani"];
const array2 = ["Leo", "Monica", "Juliana"];

const arrayUnificado = unificarArrays(array1, array2);
console.log(arrayUnificado); // ["Juan", "Dani", "Leo", "Monica", "Juliana"]
console.log("") 

// Ej2. Escriba una función con el nombre de esVocal() que tome un carácter , devuelva True si es vocal (no importa si es mayúscula o minúscula), y devuelva False en caso contrario.
console.log("Ej2. Escriba una función con el nombre de esVocal() que tome un carácter , devuelva True si es vocal (no importa si es mayúscula o minúscula), y devuelva False en caso contrario.")
console.log("")
function esVocal(caracter) {
    // Convertir el carácter a minúscula para compararlo con las vocales
    const mi_caracter = caracter.toLowerCase();
  
    // Comprobar si el carácter es una vocal
    if (mi_caracter === 'a' || mi_caracter === 'e' || mi_caracter === 'i' || mi_caracter === 'o' || mi_caracter === 'u') {
      return true;
    } else {
      return false;
    }
  }
  
console.log(esVocal('a')); // true
console.log(esVocal('E')); // true
console.log(esVocal('b')); // false
console.log("") 

//Ej.3 Crea una función llamada generar_caracteres() que tome como parámetro un número entero (n) y un carácter, retornar el carácter multiplicado por n. Por ejemplo, generar_caracteres(5,x), debería retornar «xxxxx».
console.log("Ej.3 Crea una función llamada generar_caracteres() que tome como parámetro un número entero (n) y un carácter, retornar el carácter multiplicado por n. Por ejemplo, generar_caracteres(5,x), debería retornar «xxxxx»")
console.log("")
function generar_caracteres(n, caracter) {
    let cadena = '';
    for (let i = 0; i < n; i++) {
      cadena += caracter;
    }
    return cadena;
  }
  
console.log(generar_caracteres(234, '+^')); // "xxxxx"
console.log("")

//Ej.4 Crear una función sumaArreglo() que tome como parámetro un arreglo de números, retornar la suma de todos los números del arreglo.
console.log("Ej.4 Crear una función sumaArreglo() que tome como parámetro un arreglo de números, retornar la suma de todos los números del arreglo.")
console.log("")
function sumaArreglo(arreglo) {
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
      suma += arreglo[i];
    }
    return suma;
  }
  
const numeros = [2, 4, 6, 8, 89, 354, 989];
console.log("El array es: ", numeros )
console.log("La suma del array es: ", sumaArreglo(numeros));
console.log("")

//Ej.5 Crea una función llamada numeroMayor() que toma tres números como entrada y retornar el numero mayor de ellos, si son iguales devolver un String «son iguales»
console.log("Ej.5 Crea una función llamada numeroMayor() que toma tres números como entrada y retornar el numero mayor de ellos, si son iguales devolver un String «son iguales»")
console.log("")

function numeroMayor(num1, num2, num3) {
    if (num1 === num2 && num2 === num3) {
      return "son iguales";
    } else {
      let max = num1;
      if (num2 > max) {
        max = num2;
      }
      if (num3 > max) {
        max = num3;
      }
      return max;
    }
  }
  
console.log(numeroMayor(56, 5678, 2895)); 
console.log(numeroMayor(56, 56, 123));
console.log(numeroMayor(56, 56, 56));

