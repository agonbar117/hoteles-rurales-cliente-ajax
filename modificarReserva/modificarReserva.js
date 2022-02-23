document.querySelector("#btnModificarReservasHabitacion").addEventListener("click", validarModificarReserva, false);

function modificarReserva() {
    //Modifica de las reservas

    // var oListaReserva = [];
    let selectReserva = document.querySelector("#selectModificarReserva");
    let idReserva = parseInt(selectModificarReserva.value);

    let selectHabitacionReserva = document.querySelector("#selectHabitacionReserva");
    let idHabitacionReserva = parseInt(selectHabitacionReserva.value);
    
    let selectClienteReserva = document.querySelector("#selectClienteReserva");
    let idClienteReserva = parseInt(selectClienteReserva.value);

    let fechaInicioModificar = frmModificarReserva.fechaInicioModificar.value;
    let fechaFinModificar = frmModificarReserva.fechaFinModificar.value;

    let precioTotalModificar = getPrecioTotal(idHabitacionReserva, fechaInicioModificar, fechaFinModificar);

    precioTotalModificar.then(function(resultado){
        let oReserva = {
            idReserva:idReserva,
            fechaInicioModificar: fechaInicioModificar,
            fechaFinModificar: fechaFinModificar,
            precioTotalModificar: resultado,
            habitacionModificar: idHabitacionReserva,
            clienteModificar: idClienteReserva
        }; 
        //let confirmar = mensajeModal()
        console.log(oReserva);
        // oListaReserva.push(oReserva);
    
        $.ajax({    
            url: "modificarReserva/updateReserva.php",
            data: "datos="+JSON.stringify(oReserva),
            dataType: 'json', // tipo de datos a recibir
            method: "POST",
            async: true, // por defecto es true - asíncrono
            success: procesoRespuestaModificaReservaBD,
        });//.done(procesoRespuestaModificaReservaBD);
    });   
}

function procesoRespuestaModificaReservaBD( datos, statusText, jqXHR) {
  
    console.log(jqXHR.responseText);

    if (datos.error == 0) { //Si no hay error
        frmModificarReserva.reset();
        $('#frmModificaReserva').parent('fieldset').hide();
        
        localStorage.removeItem("reservas");

    }

    alert(datos.mensaje);
}

//validar modificar reserva
function validarModificarReserva(oEvento)
{
    let oE=oEvento || window.event;
    oE.preventDefault();
    let todoCorrecto=true;
    let fechasCorrectas=false;
    let selects=document.querySelectorAll('#frmModificarReserva select');
    let fechas=document.querySelectorAll("#frmModificarReserva input[type='date']");
    for (const cosa of selects) {
        switch(cosa.id)
        {
            case 'selectModificarReserva':
                {
                    if(cosa.selectedIndex ==0){
                        cosa.nextElementSibling.style.display = "none";
                        cosa.nextElementSibling.nextElementSibling.style.display = "block";
                        todoCorrecto = false;
                    }
                    else{
                        cosa.nextElementSibling.nextElementSibling.style.display = "none";
                        cosa.nextElementSibling.style.display = "block";
                        
                    }
                    break;
                }
            case 'selectHabitacionReserva':
                {
                    if(cosa.selectedIndex ==0){
                        cosa.nextElementSibling.style.display = "none";
                        cosa.nextElementSibling.nextElementSibling.style.display = "block";
                        todoCorrecto = false;
                    }
                    else{
                        cosa.nextElementSibling.nextElementSibling.style.display = "none";
                        cosa.nextElementSibling.style.display = "block";
                        
                    }
                    break;
                }
            case 'selectClienteReserva':
                {
                    if(cosa.selectedIndex ==0){
                        cosa.nextElementSibling.style.display = "none";
                        cosa.nextElementSibling.nextElementSibling.style.display = "block";
                        todoCorrecto = false;
                    }
                    else{
                        cosa.nextElementSibling.nextElementSibling.style.display = "none";
                        cosa.nextElementSibling.style.display = "block";
                        
                    }
                    break;
                }
            case 'selectServicioModificar':
                {
                    if(cosa.selectedIndex ==0){
                        cosa.nextElementSibling.style.display = "none";
                        cosa.nextElementSibling.nextElementSibling.style.display = "block";
                        todoCorrecto = false;
                    }
                    else{
                        cosa.nextElementSibling.nextElementSibling.style.display = "none";
                        cosa.nextElementSibling.style.display = "block";
                        
                    }
                    break;
                }
        }
    }
    for (const cosa2 of fechas) {
        switch(cosa2.id)
        {
            case 'fechaInicioModificar':
                {
                    if(cosa2.value==null || cosa2.value=="")
                    {
                        cosa2.nextElementSibling.style.display = "none";
                        cosa2.nextElementSibling.nextElementSibling.style.display = "block";
                        
                    }
                    else
                    {
                        cosa2.nextElementSibling.nextElementSibling.style.display = "none";
                        cosa2.nextElementSibling.style.display = "block";
                        fechasCorrectas = true;
                    }
                    break;
                }
            case 'fechaFinModificar':
                {
                    if(cosa2.value==null || cosa2.value=="")
                    {
                        cosa2.nextElementSibling.style.display = "none";
                        cosa2.nextElementSibling.nextElementSibling.style.display = "block";
                        
                    }
                    else
                    {
                        cosa2.nextElementSibling.nextElementSibling.style.display = "none";
                        cosa2.nextElementSibling.style.display = "block";
                        fechasCorrectas = true;
                    }

                    break;
                }
        }
    }

    if(!todoCorrecto || !fechasCorrectas)
    {
        oE.preventDefault();
        alert('ERROR: debe rellenar todos los campos');
    }
    else
    {
        //Modifica la reserva
        modificarReserva();

        let valido=document.querySelectorAll('#frmModificarReserva div.valid-feedback');        
        for (const cosa3 of valido) {
            cosa3.style.display="none";
        }
    }
}