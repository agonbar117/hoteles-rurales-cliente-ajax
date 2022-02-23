'use strict';
document.querySelector("#btnListarEntreDosFechas").addEventListener("click", peticionGetJsonFechas, false);

function peticionGetJsonFechas() {
    let fechaInicio = document.querySelector("#fechaInicioLista").value;
    let fechaFin = document.querySelector("#fechaFinLista").value;

    
    $.getJSON("listadoFechas/listadoFecha.php",  //URL
        { fechaInicio: fechaInicio, fechaFin: fechaFin},   // datos
        procesoRespuestaFechas2                      //Callback
    );
}


// El parámetro datos contiene la respuesta del servidor paarseada
// Al esperar JSON, JQuery parsea el texto de la respuesta
// y ofrece un objeto
function procesoRespuestaFechas2(datos, textStatus, jqXHR) {
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

    $("#divListarEntreDosFechas").parent('fieldset').hide();
}

