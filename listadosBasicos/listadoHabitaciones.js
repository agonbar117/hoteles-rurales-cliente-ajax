'use strict';

function peticionGetListadoHabitaciones() {  
    $.get(
        "php/getHabitacionesHTML.php", //URL
        null, // datos
        procesoRespuestaListadoHabitaciones, //Callback
        "html"
    );

}
  
// El parámetro datos contiene la respuesta del servidor
function procesoRespuestaListadoHabitaciones(datos, textStatus, jqXHR) {
    let divListados = document.querySelector('#divListados');
    divListados.innerHTML = datos;
}

peticionGetListadoHabitaciones();