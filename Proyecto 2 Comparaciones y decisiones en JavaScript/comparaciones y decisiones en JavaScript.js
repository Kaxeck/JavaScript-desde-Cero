// Variable de la nota
let nota = 78;

// Estructura de decisiones para evaluar la nota

// Si la nota es mayor o igual a 90 -> "Excelente"
if (nota >= 90) {
    console.log("Excelente");
}
// Si la nota es entre 75 y 89 -> "Bien"
else if (nota >= 75 && nota <= 89) {
    console.log("Bien");
}
// Si la nota es entre 60 y 74 -> "Suficiente"
else if (nota >= 60 && nota <= 74) {
    console.log("Suficiente");
}
// Si la nota es menor a 60 -> "No aprobado"
else {
    console.log("No aprobado");
}