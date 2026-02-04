// Tipos datos
// Ejemplos de cada tipo de dato

// Strings
// Representan datos textuales. Se pueden usar comillas simples, dobles o backticks
// Pueden contener letras, números, símbolos y espacios
// Ejemplos:
console.log(typeof "Esto es un string");
console.log(typeof "Veinticinco");
console.log(typeof "");

// Numbers
// Representan datos numéricos, como enteros, decimales positivos y negativos
// No hay distinción entre enteros y decimales en JavaScript
// Ejemplos:
console.log(typeof 42);
console.log(typeof -666);
console.log(typeof 0);
console.log(typeof 3.1434);

//Booleans
// Representan valores de verdad: true (verdadero) o false (falso)
// Se usan comúnmente en estructuras de control y comparaciones
// Ejemplos:
let estado = true;
console.log(typeof estado);
console.log(typeof true);
console.log(typeof false);
console.log(typeof (5 > 10));

// Null
// Representa la ausencia intencional de cualquier valor de objeto
// Aunque typeof null devuelve "object",
// object apararece por una peculiaridad histórica de JavaScript
// Ejemplo:
let direccion = null; 
console.log(typeof direccion);
console.log(typeof null);

// Undefined
// Indica que una variable no ha sido asignada a ningún valor
// Aunque typeof undefined devuelve "undefined",
// Ejemplos:
let variable
console.log(typeof variable);
console.log(typeof undefined);
console.log(typeof FALSE);
