// Ejemplo de condicionales

const edadUsuario = 16;

if (edadUsuario >= 18) {

    console.log("Puedes registrarte en la categoría de mayores.");

} else if (edadUsuario >= 13) {

    console.log("Bienvenido a la categoría juvenil.");

} else {

    console.log("Lo siento, necesitas ser mayor de 13 años.");

}

// Función para sumar puntos

function calcularPuntajeTotal(puntosNivel1, puntosNivel2) {

    let total = puntosNivel1 + puntosNivel2;

    return total;
}

let resultado = calcularPuntajeTotal(450, 320);

console.log("El puntaje final es: " + resultado);