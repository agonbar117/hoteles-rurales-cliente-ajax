'use strict';

function peticionGetHabitacion() {    
    if(!localStorage.habitaciones)
    {
        $.get(
            "php/getHabitaciones.php", //URL
            null, // datos
            procesoRespuestaGetHabitacion, //Callback
            "json"
        );
    }
    else{
        cargarHabitaciones(JSON.parse(localStorage.habitaciones));
    }

    // $.get("php/getHabitaciones.php", procesoRespuesta);
}
  
// El parámetro datos contiene la respuesta del servidor paarseada
// Al esperar JSON, JQuery parsea el texto de la respuesta
// y ofrece un objeto
function procesoRespuestaGetHabitacion(datos, textStatus, jqXHR)
{
    localStorage.habitaciones= JSON.stringify(datos);
    cargarHabitaciones(datos);
} 
function cargarHabitaciones(datos){
    let idSelects = ['#selectHabitacion', '#selectHabitacionReserva', '#selectListarReservasHabitacion', '#selectModificaHabitacion'];

    for (const id of idSelects) {
        let select = document.querySelector(id);

        if(select){
            select.innerHTML='';
            select.innerHTML+='<option value="0">Seleccione una habitación</option>';
            
            for (const dato of datos) {
                select.innerHTML+=`<option value="${dato.id}">${dato.nombre}</option>`;
            }
        }
    }
}

peticionGetHabitacion();
