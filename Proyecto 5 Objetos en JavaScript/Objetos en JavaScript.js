// Practica 5 : Objetos en JavaScript

// Clase Libro tipo objeto con sus propiedades y métodos
class Libro {
  // Constructor para inicializar las propiedades del libro
  constructor(titulo, autor, anio, estado) {
    this.titulo = titulo;
    this.autor = autor;
    this.anio = anio;
    this.estado = estado;
    this.capitulos = [];
  }
  // Método para describir el libro
  describirLibro() {
    console.log(`Título: ${this.titulo}, Autor: ${this.autor}, Año: ${this.anio}, Estado: ${this.estado}`);
  }
  // Método para mostrar los capítulos del libro
  mostrarCapitulos() {
    console.log(this.capitulos);
  }
  // Método para agregar un capítulo al libro
  agregarCapitulo(tituloCapitulo) {
    this.capitulos.push(tituloCapitulo);
  }
  // Método para eliminar el último capítulo del libro
  eliminarCapitulo() {
    this.capitulos.pop()
  }
}
// Creando una instancia de la clase Libro tipo objeto
const libro = new Libro('El principito', 'Antoine de Saint-Exupéry', 1943, 'Disponible');
// Mostrando el libro y sus propiedades
console.log(' Descripción del libro ----------');
libro.describirLibro()
// Agregando capítulos al libro
console.log('Agregando capítulos al libro ----------');
libro.agregarCapitulo('Capítulo 1: El encuentro con el aviador');
libro.agregarCapitulo('Capítulo 2: El encuentro con el rey');
libro.agregarCapitulo('Capítulo 3: El encuentro con el vanidoso');
libro.mostrarCapitulos();
// Eliminando el último capítulo del libro
console.log('Eliminando el último capítulo del libro ----------');
libro.eliminarCapitulo();
libro.mostrarCapitulos();