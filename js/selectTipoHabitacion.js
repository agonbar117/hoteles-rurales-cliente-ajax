'use strict';

function peticionGetTipoHabitacion() {
    if(!localStorage.tiposHabitacion)
    {
        $.get(
            "php/getTipoHabitaciones.php", //URL
            null, // datos
            procesoRespuestaTipoHabitacion, //Callback
            "json"
        );
    }
    else
    {
        cargarTipoHabitacion(JSON.parse(localStorage.tiposHabitacion));
    }    
}
  
// El parámetro datos contiene la respuesta del servidor paarseada
// Al esperar JSON, JQuery parsea el texto de la respuesta
// y ofrece un objeto
function procesoRespuestaTipoHabitacion(datos, textStatus, jqXHR)
{
    localStorage.tiposHabitacion=JSON.stringify(datos);
    cargarTipoHabitacion(datos);
}

function cargarTipoHabitacion(datos){
    // let idSelect = '#selectTipoHabitacion';
    let idSelects = ['#selectTipoHabitacion', '#selectTipoHabitacionModificar'];

    for (const id of idSelects) {
        let select = document.querySelector(id);
    
        if(select){
            select.innerHTML='';
            select.innerHTML+='<option value="0">Seleccione un tipo de habitación</option>';
                
            for (const dato of datos) {
                select.innerHTML+=`<option value="${dato.id}">${dato.nombre}</option>`;
            }
        }
    }
}

peticionGetTipoHabitacion();
