// Practica 3 : Arreglos y ciclos en JavaScript

// Array de frutas 
let frutas = ['Mango', 'Sandia', 'Naranja', 'Pera', 'Uva', 'Manzana', 'Fresa']; 
// Objeto inventario de frutas con sus cantidades
let cantidadFrutas = {
    Mango: 6,
    Sandia: 14,
    Naranja: 2,
    Pera: 7,
    Uva: 28,
    Manzana: 13,
    Fresa: 40
};

// Aplicando un ciclo con for
console.log('Usando for ----------');
// Recorriendo el array y mostrando cada fruta
// la variable i inicia en 0 y se incrementa hasta que sea menor que la longitud del array
// El metodo .length nos da la longitud del array
for (let i = 0; i < frutas.length; i++) {
    // Mostrando la fruta y su cantidad usando el objeto cantidadFrutas
    console.log(frutas[i], 'tiene', cantidadFrutas[frutas[i]], 'unidades');
}

// Aplicando un ciclo con while
console.log('Usando while ----------');
// Variable de control para el while
let j = 0;
// Recorriendo el array y mostrando cada fruta 
// El metodo .length nos da la longitud del array
// La condición del while es que j sea menor que la longitud del array
while (j < frutas.length) {
    // Mostrando la fruta y su cantidad usando el objeto cantidadFrutas
    console.log(frutas[j], 'tiene', cantidadFrutas[frutas[j]], 'unidades');
    j++;
}