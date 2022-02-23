'use strict';

function peticionGetReserva() {
    if(!localStorage.reservas)
    {
        $.get(
            "php/getReservas.php", //URL
            null, // datos
            procesoRespuestaReserva, //Callback
            "json"
        );
    }    
    else
    {
        cargarReserva(JSON.parse(localStorage.reservas));
    }
}
  
// El parámetro datos contiene la respuesta del servidor paarseada
// Al esperar JSON, JQuery parsea el texto de la respuesta
// y ofrece un objeto
function procesoRespuestaReserva(datos, textStatus, jqXHR)
{
    localStorage.reservas=JSON.stringify(datos);
    cargarReserva(datos);
}

function cargarReserva(datos){
    let idSelect = '#selectModificarReserva';

    let select = document.querySelector(idSelect);

    if(select){
        select.innerHTML='';
        select.innerHTML+='<option value="0">Seleccione una reserva</option>';

        for (const dato of datos) {
            select.innerHTML+=`<option value="${dato.id}">${dato.id}</option>`;
        }
      
    }
    
}

peticionGetReserva();
