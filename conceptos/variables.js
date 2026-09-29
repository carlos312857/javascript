// Variables de mi información

const nombre = "Carlos";
const añoNacimiento = 2008;

// Obtener el año actual
const añoActual = new Date().getFullYear();

// Calcular la edad
const edad = añoActual - añoNacimiento;

// Otros tipos de datos
let puntaje = 0;
const estaConectado = true;

// Mostrar información en la consola
console.log("Hola, mi nombre es " + nombre);
console.log("Nací en el año " + añoNacimiento);
console.log("Mi edad actual es " + edad + " años");

console.log("Mi puntaje es: " + puntaje);
console.log("¿Estoy conectado?: " + estaConectado);


// Operaciones matemáticas

let suma = 10 + 5;
let resta = 20 - 8;
let multiplicacion = 4 * 5;
let division = 50 / 2;
let residuo = 10 % 3;

console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicación: " + multiplicacion);
console.log("División: " + division);
console.log("Residuo: " + residuo);


// Comparadores

console.log(10 > 5);
console.log(10 === 10);
console.log(10 !== 5);
console.log(15 <= 10);