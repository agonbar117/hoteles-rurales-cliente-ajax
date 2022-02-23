'use strict';

function peticionGetListadoClientes() {  
    $.get(
        "php/getClientesXML.php", //URL
        null, // datos
        procesoRespuestaListadoClientes, //Callback
        "xml"
    );

}
  
// El parámetro datos contiene la respuesta del servidor
function procesoRespuestaListadoClientes(datos, textStatus, jqXHR) {
    let divListados = document.querySelector('#divListados');
    
    let tabla = '<table>';
    tabla+='<tr>';
    tabla+="<th>ID</th><th>Nombre</th><th>DNI</th><th>Dirección</th><th>Fecha de nacimiento</th><th>Email</th><th>Teléfono</th><th>Tarjeta de credito</th>";
    tabla+='</tr>';
    
    let personas = datos.querySelectorAll('persona');

    for (const persona of personas) {
        tabla+='<tr>';
            tabla+=`<td>${persona.querySelector('id').textContent}</td>`;
            tabla+=`<td>${persona.querySelector('nombre').textContent}</td>`;
            tabla+=`<td>${persona.querySelector('dni').textContent}</td>`;
            tabla+=`<td>${persona.querySelector('direccion').textContent}</td>`;
            tabla+=`<td>${persona.querySelector('fecha_nacimiento').textContent}</td>`;
            tabla+=`<td>${persona.querySelector('email').textContent}</td>`;
            tabla+=`<td>${persona.querySelector('telefono').textContent}</td>`;
            tabla+=`<td>${persona.querySelector('tarjeta_credito').textContent}</td>`;
        tabla+='</tr>';
    }

    tabla += '</table>';

    divListados.innerHTML = tabla;
}

peticionGetListadoClientes();