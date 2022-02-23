'use strict';

function peticionGetListadoReservas() {  
    $.get(
        "php/getReservasXML.php", //URL
        null, // datos
        procesoRespuestaListadoReservas, //Callback
        "xml"
    );

}
  
// El parámetro datos contiene la respuesta del servidor
function procesoRespuestaListadoReservas(datos, textStatus, jqXHR) {
    let divListados = document.querySelector('#divListados');

    let tabla = '<table>';
    tabla+='<tr>';
    tabla+="<th>ID</th><th>Fecha inicio</th><th>Fecha fin</th><th>Precio total</th><th>ID habitacion</th><th>ID cliente</th>";
    tabla+='</tr>';
    
    let reservas = datos.querySelectorAll('reserva');

    for (const reserva of reservas) {
        tabla+='<tr>';
            tabla+=`<td>${reserva.querySelector('id').textContent}</td>`;
            tabla+=`<td>${reserva.querySelector('fecha_inicio').textContent}</td>`;
            tabla+=`<td>${reserva.querySelector('fecha_fin').textContent}</td>`;
            tabla+=`<td>${reserva.querySelector('precio_total').textContent}</td>`;
            tabla+=`<td>${reserva.querySelector('habitacion_id').textContent}</td>`;
            tabla+=`<td>${reserva.querySelector('cliente_id').textContent}</td>`;
        tabla+='</tr>';
    }

    tabla += '</table>';

    divListados.innerHTML = tabla;
}

peticionGetListadoReservas();