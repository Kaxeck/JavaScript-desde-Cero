// Practica 4 : Funciones en JavaScript

// Array de Libros Leidos
let librosLeidos = ['Cien Años de Soledad', 'La Guerra de Los Mundos', 'It', 'El arte de la Guerra']

// Funcion Agregar Libros
function agregarLibro(titulo) {
    // bloque de código a ejecutar para agregar un libro a la lista de libros leidos
    librosLeidos.push(titulo);
}

// Funcion Mostrar Libros Leidos
function mostrarLibrosLeidos() {
    // bloque de código a ejecutar para mostrar los libros leidos
    // Se aplica un ciclo for para recorrer el array de libros leidos y mostrar cada libro
    for (let i = 0; i < librosLeidos.length; i++) {
    console.log(librosLeidos[i]); // Imprime cada libro leido
    }
}

// Mostrar los libros leidos antes de agregar nuevos libros
console.log('Libros Leidos ----------');
mostrarLibrosLeidos()

// Agregar nuevos libros a la lista de libros leidos
console.log('Se Agregan Libros ----------');
agregarLibro('El Señor de los Anillos');
agregarLibro('El Hobbit');
// Mostrar los libros leidos después de agregar nuevos libros
mostrarLibrosLeidos()

// Se vuelve a agregar un libro a la lista de libros leidos
console.log('Se Agrega Otro Libro ----------');
agregarLibro('Don Quijote de la Mancha');
mostrarLibrosLeidos()