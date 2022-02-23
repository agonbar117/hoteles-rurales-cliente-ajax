"use strict";

document.querySelector("#btnAltaReserva").addEventListener("click", validarReserva);

function insertarReserva() {
    //Alta de las reservas
    // var oListaReserva = [];
    let selectHabitacion = document.querySelector("#selectHabitacion");
    let idHabitacion = parseInt(selectHabitacion.value);
    
    let selectCliente = document.querySelector("#selectCliente");
    let idCliente = parseInt(selectCliente.value);

    let fechaInicio = frmAltaReserva.fechaInicio.value;
    let fechaFin = frmAltaReserva.fechaFin.value;

    let precioTotal = getPrecioTotal(idHabitacion, fechaInicio, fechaFin);

    precioTotal.then(function(resultado){
        let oReserva = {
            fechaInicio: fechaInicio,
            fechaFin: fechaFin,
            precioTotal: resultado,
            habitacion: idHabitacion,
            cliente: idCliente
        }; 

        // oListaReserva.push(oReserva);
    
        $.ajax({    
            url: "altaReserva/insertReserva.php",
            data: "datos="+JSON.stringify(oReserva),
            dataType: 'json', // tipo de datos a recibir
            method: "POST",
            async: true, // por defecto es true - asíncrono
            success: procesoRespuestaInsertReservaBD,
        });//.done(procesoRespuestaInsertReservaBD);
    });   
}

function procesoRespuestaInsertReservaBD( datos, statusText, jqXHR) {
  
    console.log(jqXHR.responseText);

    if (datos.error == 0) { //Si no hay error
        localStorage.removeItem("reservas");
        frmAltaReserva.reset();
    }

    alert(datos.mensaje);
}


// Validar Reservas
function validarReserva(oEvento)
{ 
    let oE=oEvento || window.event;

    let todoCorrecto = true;
    let selectAll = document.querySelectorAll("#frmAltaReserva select");
    let dateAll= document.querySelectorAll("#frmAltaReserva input[type='date']");

    for(const select of selectAll){
        if(select.selectedIndex==0){
            select.nextElementSibling.style.display = "none";
            select.nextElementSibling.nextElementSibling.style.display = "block";
            todoCorrecto = false;
        }
        else{
            select.nextElementSibling.nextElementSibling.style.display = "none";
            select.nextElementSibling.style.display = "block";
        }
    }

    for(const date of dateAll){
        if(date.value == ""){
            date.nextElementSibling.style.display = "none";
            date.nextElementSibling.nextElementSibling.style.display = "block";
            todoCorrecto = false;
        }
        else{
            date.nextElementSibling.nextElementSibling.style.display = "none";
            date.nextElementSibling.style.display = "block";
        }
    }

    if(dateAll[0].value >= dateAll[1].value){
        dateAll[0].nextElementSibling.style.display = "none";
        dateAll[0].nextElementSibling.nextElementSibling.style.display = "block";
        dateAll[1].nextElementSibling.style.display = "none";
        dateAll[1].nextElementSibling.nextElementSibling.style.display = "block";
        todoCorrecto = false;
    }
    else{
        dateAll[0].nextElementSibling.style.display = "block";
        dateAll[0].nextElementSibling.nextElementSibling.style.display = "none";
        dateAll[1].nextElementSibling.style.display = "block";
        dateAll[1].nextElementSibling.nextElementSibling.style.display = "none";
    }

    if(!todoCorrecto){
        oE.preventDefault();
    }
    else{
        // alta reserva
        insertarReserva();

        let valido=document.querySelectorAll('#frmAltaReserva div.valid-feedback');        
        for (const cosa of valido) {
            cosa.style.display="none";
        }
        
    }
}