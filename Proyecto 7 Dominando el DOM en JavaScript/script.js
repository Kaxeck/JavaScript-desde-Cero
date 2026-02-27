// Elementos del DOM que se van a usar para generar la contraseña
const generate_btn = document.getElementById("generate-btn")
const password_range = document.getElementById("character-length")
const lowercase_checkbox = document.getElementById("include-lowercase")
const uppercase_checkbox = document.getElementById("include-uppercase")
const numbers_checkbox = document.getElementById("include-numbers")
const symbols_checkbox = document.getElementById("include-symbols")
const generated_password = document.getElementById("password-display")
// Elemento para mostrar el largo de la contraseña al lado del slider
const characterlength = document.getElementById("character-length-display")
// Botón para copiar la contraseña al portapapeles
const copy_btn = document.getElementById("copy-btn")

// Evento para el botón de generar contraseña
generate_btn.addEventListener("click", () => {
    console.log("Presionaste el botón")
    // Actualizamos la fortaleza de la contraseña según las opciones seleccionadas
    fuerza_password(
        lowercase_checkbox.checked,
        uppercase_checkbox.checked,
        numbers_checkbox.checked,
        symbols_checkbox.checked
    )
    // Llamamos a la función para generar la contraseña y le pasamos las opciones seleccionadas
    const result = generate_password(
        password_range.value,
        lowercase_checkbox.checked,
        uppercase_checkbox.checked,
        numbers_checkbox.checked,
        symbols_checkbox.checked
    )
    generated_password.value = result
})

// Función para generar la contraseña según las opciones seleccionadas
const generate_password = (length, lowercase, uppercase, numbers, symbols) => {
    console.log("Generando contraseña con las siguientes opciones:")
    console.log("Largo:", length)
    console.log("Incluir Minusculas:", lowercase)
    console.log("Incluir Mayusculas:", uppercase)
    console.log("Incluir Numeros:", numbers)
    console.log("Incluir Simbolos:", symbols)

    // 1) Definimos strings con los caracteres disponibles para cada tipo
    const lowercase_chars = "abcdefghijklmnopqrstuvwxyz"
    const uppercase_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const number_chars = "0123456789"
    const symbol_chars = "!@#$%^&*()_+[]{}|;:,.<>?"
    // 2) Empezamos vacío y agregamos solo lo que el usuario seleccione
    let available_chars = ""
    if (lowercase) {
        available_chars += lowercase_chars
    }
    // 3) Según los checkboxes, agregamos más caracteres a la base
    if (uppercase) {
        available_chars += uppercase_chars
    }
    if (numbers) {
        available_chars += number_chars
    }
    if (symbols) {
        available_chars += symbol_chars
    }
    if (!available_chars) {
        return "!Marca una opción¡"
    }
    // 5) Creamos una variable vacía donde iremos guardando la contraseña
    let password = ""
    // 6) Repetimos "length" veces para ir agregando un carácter por vuelta
    for (let i = 0; i < length; i++) {
        // Número aleatorio entre 0 y el último índice de available_chars
        const random_index = Math.floor(Math.random() * available_chars.length)
        // Tomamos el carácter en ese índice
        const random_char = available_chars[random_index]
        // Lo añadimos al texto final
        password += random_char
    }
    // 7) Regresamos la contraseña completa
    return password
}
// Seleccionamos los íconos que representan la fortaleza de la contraseña
const iconos = document.querySelectorAll(".medidor-bar i")
// Asignamos un número a cada ícono para poder identificarlos después
iconos.forEach((icono, index) => {
        icono.dataset.numero = index + 1
})
// Función para actualizar el color de los íconos según la fortaleza de la contraseña
const fuerza_password = (lowercase, uppercase, numbers, symbols) => {
    let fuerza = 0
    if (lowercase) fuerza++
    if (uppercase) fuerza++
    if (numbers) fuerza++
    if (symbols) fuerza++
    // Recorremos los íconos y segun su fuerza cambia de color y el icono a solido
    for (let i = 0; i < iconos.length; i++) {
        if (i < fuerza) {
            // Cambiamos el icono a solido y el color a amarillo
            iconos[i].className = "bxf bx-rectangle-vertical"
            iconos[i].style.color = "#F5CD6D"
        } else {
            // Cambiamos el icono a regular y el color a gris
            iconos[i].className = "bx bx-rectangle-vertical"
            iconos[i].style.color = "lightgray"
        }
    }
    // Cambio de texto según la fuerza de la contraseña
    const strength_text = document.querySelector(".strength-text")
    if (fuerza === 1) {
        strength_text.textContent = "DEBIL"
    } 
    else if (fuerza === 2) {
        strength_text.textContent = "MEDIA"
    } 
    else if (fuerza === 3) {
        strength_text.textContent = "FUERTE"
    } 
    else if (fuerza === 4) {
        strength_text.textContent = "MUY FUERTE"
    }
}

// Evento para actualizar el número al lado del slider cuando se mueve
password_range.addEventListener("input", () => {
    const value = password_range.value
    characterlength.textContent = value
})

// Evento para copiar la contraseña al portapapeles al hacer click en el botón de copiar
copy_btn.addEventListener("click", () => {
    const password = generated_password.value
    if (password) {
        navigator.clipboard.writeText(password)
        alert("Contraseña copiada al portapapeles")
    }
})
