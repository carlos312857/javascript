// Contador inicial

let contador = 0;


// Buscar los elementos de la página

const valorPantalla = document.querySelector("#valor");

const btnIncrementar = document.querySelector("#btn-incrementar");

const btnRestar = document.querySelector("#btn-restar");

const btnReset = document.querySelector("#btn-reset");


// Función para cambiar el color del número

function actualizarColor() {

    if (contador > 0) {

        valorPantalla.style.color = "green";

    } else if (contador < 0) {

        valorPantalla.style.color = "red";

    } else {

        valorPantalla.style.color = "black";

    }
}


// Botón para sumar

btnIncrementar.addEventListener("click", function() {

    contador++;

    valorPantalla.textContent = contador;

    actualizarColor();

});


// Botón para restar

btnRestar.addEventListener("click", function() {

    contador--;

    valorPantalla.textContent = contador;

    actualizarColor();

});


// Botón para reiniciar

btnReset.addEventListener("click", function() {

    contador = 0;

    valorPantalla.textContent = contador;

    actualizarColor();

});