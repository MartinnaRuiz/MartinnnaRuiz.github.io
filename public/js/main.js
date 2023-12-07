
/* ALERTA */

alert("PROMOCIONES de Navidad, Aprovechalas!") //-> no tiene elemntos de salida


/*NOMBRE EN EL ENCABEZADO*/
var titulo = document.querySelector(".navbar-brand");
var indiceColor = 0;
var intervalTime = 1500;

// Establezco el intervalo para cambiar el color del título
var id = setInterval(cambiarColor, intervalTime);

function cambiarColor() {
    // Lista de colores para el titulo
    var colores = ["rgb(87, 86, 65)","rgb(143, 140, 98)","darkkhaki","rgb(143, 140, 98)","rgb(87, 86, 65)","black"];

    // Cambia el color del título
    titulo.style.color = colores[indiceColor];

    // Incrementa el índice de color (vuelve a 0 cuando alcanza el final de la lista)
    indiceColor = (indiceColor + 1) % colores.length;
}