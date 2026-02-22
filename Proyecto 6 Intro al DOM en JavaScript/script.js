// Variables para seleccionar elementos del DOM
let formulario = document.querySelector('.commentario-formulario');
let mensaje = document.querySelector('#mensaje');

// Agregar un evento de escucha al formulario para manejar el envío de comentarios
formulario.addEventListener('submit', function(event) {
    // Evitar que la pagina se recargue al enviar el formulario
    event.preventDefault();

        // Obtener el valor del área de texto del formulario
        let comentario = formulario.querySelector('textarea').value;
        // Crear un nuevo elemento div para mostrar el comentario
        let comentarioBox = document.createElement('div');
        // Asignar una clase al nuevo elemento div para aplicar estilos CSS
        comentarioBox.id = 'comentario-box';
        // Asignar el texto del comentario al nuevo elemento div
        comentarioBox.textContent = comentario;
        // Asiganr un Boton para eliminar el comentario
        let botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        // Agregar el botón de eliminar al comentarioBox
        comentarioBox.appendChild(botonEliminar);
        // Agregar una clase al botón de eliminar para aplicar estilos CSS
        botonEliminar.id = 'boton-eliminar';
        // Agregar el nuevo elemento div al contenedor de comentarios
        document.querySelector('.comentarios').appendChild(comentarioBox);
        // Mostrar un mensaje de agradecimiento al usuario después de enviar el comentario
        mensaje.textContent = 'Gracias por tu comentario';
        // Borrar el comentario del área de texto después de enviar el formulario
        formulario.reset();
    });

//Evento para borrar el comentario de la caja de comentarios al hacer clic en ella
let comentarios = document.querySelector('.comentarios');
// Agregar un evento de escucha al contenedor de comentarios para manejar el clic en el botón de eliminar
comentarios.addEventListener('click', function(event) {
    // Verificar si el elemento clickeado es el botón de eliminar
    if (event.target.id === 'boton-eliminar') {
        // Eliminar el comentario correspondiente al botón de eliminar clickeado
        event.target.parentElement.remove();
        // Mostrar un mensaje de confirmación después de eliminar el comentario
        mensaje.textContent = 'Comentario eliminado';
    }
});