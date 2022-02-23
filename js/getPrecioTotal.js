'use strict';

///////////////
//////  FUNCTION
////////
function getPrecioTotal(id_habitacion, fecha_inicio, fecha_fin){

    // Llamada ajax 
    // GET -- getActor.php?id_actor=numero

    // Parametros
    let sParametros = "habitacion_id=" + id_habitacion;

    // EN LAS PETICIONES GET ENVIAMOS LOS DATOS EN LA URL
    let resultado = fetch(encodeURI("php/getPrecioTotal.php?" + sParametros))
        .then(respuesta => respuesta.json())
        .then(oHabitacion => {
            let diferenciaEnDias = getDias(fecha_inicio, fecha_fin);
            let precioHabitacion = parseInt(oHabitacion.precio);
            
            return precioHabitacion * diferenciaEnDias;
        });

    return resultado;
}



function getDias(fecha1, fecha2) {
    const oFecha1 = new Date(fecha1);
    const oFecha2 = new Date(fecha2);

    const unDia = 1000 * 60 * 60 * 24;

    const diferencia = oFecha2.getTime() - oFecha1.getTime();
    const diferenciaEnDias = Math.round(diferencia / unDia);

    return diferenciaEnDias;
}

// console.log(getDias("2/1/2021", "3/1/2021"));




document.querySelector('#btnModificarReservasHabitacion');

