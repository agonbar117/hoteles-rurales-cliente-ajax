'use strict';

function peticionGetCliente() {
    if(!localStorage.clientes){
        $.get(
            "php/getClientes.php", //URL
            null, // datos
            procesoRespuestaGetCliente, //Callback
            "json"
        );
    }
    else{
        cargarSelect(JSON.parse(localStorage.clientes));
    }

}
  
// El parámetro datos contiene la respuesta del servidor paarseada
// Al esperar JSON, JQuery parsea el texto de la respuesta
// y ofrece un objeto
function procesoRespuestaGetCliente(datos, textStatus, jqXHR) {
    localStorage.clientes = JSON.stringify(datos);
    cargarSelect(datos);
}

function cargarSelect(datos){
    let idSelects = ['#selectCliente',  '#selectClienteReserva'];

    for (const id of idSelects) {
        let select = document.querySelector(id);

        if(select){
            select.innerHTML='';
            select.innerHTML+='<option value="0">Seleccione un Cliente</option>';
                
            for (const dato of datos) {
                select.innerHTML+=`<option value="${dato.id}">${dato.nombre}</option>`;
            }
        }
    }
}

peticionGetCliente();
