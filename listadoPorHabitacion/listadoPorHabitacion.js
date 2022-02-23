'use strict';
document.querySelector("#btnListarReservasHabitacion").addEventListener("click", peticionGetJsonHabitacion, false);

function peticionGetJsonHabitacion() {
    let id_habitacion = document.querySelector("#selectListarReservasHabitacion").value;
    
    $.getJSON("listadoPorHabitacion/listadoPorHabitacion.php",  //URL
        { idHabitacion: id_habitacion},   // datos
        procesoRespuestaJsonHabitacion                      //Callback
    );
}


// El parámetro datos contiene la respuesta del servidor paarseada
// Al esperar JSON, JQuery parsea el texto de la respuesta
// y ofrece un objeto
function procesoRespuestaJsonHabitacion(datos, textStatus, jqXHR) {
    let divListados = document.querySelector('#divListados');
    
    let tabla = '<table>';
    tabla+='<tr>';
    tabla+="<th>ID</th><th>Fecha Inicio</th><th>Fecha Fin</th><th>Precio Total</th><th>ID habitación</th><th>ID cliente</th>";
    tabla+='</tr>';
    

    for (const reservas of datos) {
        tabla+='<tr>';
            tabla+=`<td>${reservas.id}</td>`;
            tabla+=`<td>${reservas.fecha_inicio}</td>`;
            tabla+=`<td>${reservas.fecha_fin}</td>`;
            tabla+=`<td>${reservas.precio_total}</td>`;
            tabla+=`<td>${reservas.habitacion_id}</td>`;
            tabla+=`<td>${reservas.cliente_id}</td>`;
        tabla+='</tr>';
    }

    tabla += '</table>';

    divListados.innerHTML = tabla;
    
    $("#divListarReservasHabitacion").parent('fieldset').hide();
}

