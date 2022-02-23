'use strict';

function peticionGetTiposHabitacion() {  
    $.get(
        "php/getTiposHabitacionHTML.php", //URL
        null, // datos
        procesoRespuestaTiposHabitacion, //Callback
        "html"
    );

}
  
// El parámetro datos contiene la respuesta del servidor
function procesoRespuestaTiposHabitacion(datos, textStatus, jqXHR) {
    let divListados = document.querySelector('#divListados');
    divListados.innerHTML = datos;
}

peticionGetTiposHabitacion();