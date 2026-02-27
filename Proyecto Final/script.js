// Variables para seleccionar elementos del DOM
let formulario = document.querySelector('.commentario-formulario');
let mensaje = document.querySelector('#mensaje');

// Agregar un evento de escucha al formulario para manejar el envío de comentarios
formulario.addEventListener('submit', function(event) {
    // Evitar que la pagina se recargue al enviar el formulario
    event.preventDefault();
        // Obtener el valor del área de texto del formulario
        let comentario = formulario.querySelector('textarea').value;

        // Crear un nuevo contenedor div para el comentario
        let comentarioBox = document.createElement('div');
        comentarioBox.id = 'comentario-box'; // Asignar una clase
        // Agregamos un div con los datos y el cometario
        let comentarioDatos = document.createElement('div');
        comentarioDatos.id = 'comentario-datos'; // Asignamos una clase

        // Agregar un div para el usuario y el icono del usuario
        let Usuario = document.createElement('div');
        Usuario.className = 'usuario';
        // Agregar un icono de usuario al comentario
        let iconoUsuario = document.createElement('i');
        iconoUsuario.id = 'icono-usuario'; // Asignar un id para estilo del icono de usuario
        iconoUsuario.className = 'bx bx-user-circle';
        // Agregar un nombre de usuario al comentario
        let nombreUsuario = document.createElement('span');
        nombreUsuario.className = 'nombre-usuario';
        nombreUsuario.textContent = 'Anónimo';
        // Agregar el icono de usuario y el nombre de usuario al div del usuario
        Usuario.appendChild(iconoUsuario);
        Usuario.appendChild(nombreUsuario);

        // Agregar el texto del comentario al nuevo elemento p
        let textoComentario = document.createElement('p');
        textoComentario.textContent = comentario; // Asignar el texto del comentario al nuevo elemento
        comentarioDatos.appendChild(Usuario); // Agregar usuario con icono y nombre
        comentarioDatos.appendChild(textoComentario); // Agregar el texto del comentario
        comentarioBox.appendChild(comentarioDatos); // Agregar el div con los datos y el comentario al contenedor div del comentario

        // Agregar en un span la fecha y hora del comentario
        let fecha = document.createElement('span');
        fecha.textContent = new Date().toLocaleString();
        comentarioDatos.appendChild(fecha); // Agregar la fecha al div de datos del comentario
        
        // Asiganr un Boton para eliminar el comentario
        let botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar'; // Texto del botón de eliminar
        comentarioBox.appendChild(botonEliminar); // Agregar el botón de eliminar al nuevo elemento div del comentario
        botonEliminar.id = 'boton-eliminar'; // Asignar un id para estilo y eliminar el comentario

        // Agregar el nuevo elemento div al contenedor de comentarios
        document.querySelector('.comentarios').appendChild(comentarioBox);
        mensaje.textContent = 'Gracias por tu comentario'; // Mostrar un mensaje al usuario después de enviar el comentario
        formulario.reset(); // Borrar el comentario del área de texto después de enviar el formulario
    });

//Evento para borrar el comentario de la caja de comentarios al hacer clic en ella
let comentarios = document.querySelector('.comentarios');
// Agregar un evento de escucha al contenedor de comentarios para manejar el clic en el botón de eliminar
comentarios.addEventListener('click', function(event) {
    // Verificar si el elemento clickeado es el botón de eliminar
    if (event.target.id === 'boton-eliminar') {
        event.target.parentElement.remove(); // Eliminar el comentario correspondiente al botón de eliminar clickeado
        mensaje.textContent = 'Comentario eliminado'; // Mostrar un mensaje de confirmación después de eliminar el comentario
    }
});