document.querySelector("#btnModificaHabitacion").addEventListener("click", validarHabitacion, false);

function modificarHabitacion() {
    //Modifica de las reservas

    // var oListaReserva = [];
    let nombreHabitacion = document.querySelector("#nombreModificaHabitacion").value;

    let precio = parseFloat(document.querySelector("#precioModificar").value).toFixed(2);

    let selectHabitacion = document.querySelector("#selectModificaHabitacion");
    let idHabitacionModificar= parseInt(selectHabitacion.options[selectHabitacion.selectedIndex].value);
    
    let selectTipoHabitacion = document.querySelector("#selectTipoHabitacionModificar");
    let idTipoHabitacion= parseInt(selectTipoHabitacion.options[selectTipoHabitacion.selectedIndex].value);

    let oHabitacion = {
        idHabitacionModificar:idHabitacionModificar,
        nombreHabitacion:nombreHabitacion,
        precio: precio,
        idTipoHabitacion: idTipoHabitacion
    }; 

        $.ajax({    
            url: "modificarHabitacion/updateHabitacion.php",
            data: "datos="+JSON.stringify(oHabitacion),
            dataType: 'json', // tipo de datos a recibir
            method: "POST",
            async: true, // por defecto es true - asíncrono
            success: procesoRespuestaModificaHabitacionBD,
        });//.done(procesoRespuestaModificaHabitacionBD);   
}

function procesoRespuestaModificaHabitacionBD( datos, statusText, jqXHR) {
  
    console.log(jqXHR.responseText);

    if (datos.error == 0) { //Si no hay error
        frmModificaHabitacion.reset();
        $('#frmModificaHabitacion').parent('fieldset').hide();
        localStorage.removeItem("habitaciones");

        let valido=document.querySelectorAll('#frmModificaHabitacion div.valid-feedback');        
            for (const cosa of valido) {
                cosa.style.display="none";
            }
    }

    alert(datos.mensaje);
}

//validar modificar reserva
function validarHabitacion(oEvento)
{
   
    let oE=oEvento || window.event;
    oE.preventDefault();
    let inputAll = document.querySelectorAll("#frmModificaHabitacion input[type='text']");
    let selects = document.querySelectorAll("#frmModificaHabitacion select");
    let todoCorrecto = true;
    let precioCorrecto = true;
    let todoCorrectoSelect = true;

    for (const select of selects) {
        if(select.selectedIndex==0){
            select.nextElementSibling.style.display = "none";
            select.nextElementSibling.nextElementSibling.style.display = "block";
            todoCorrectoSelect = false;
        }
        else{
            select.nextElementSibling.nextElementSibling.style.display = "none";
            select.nextElementSibling.style.display = "block";
        }
    }

    for(const input of inputAll){ 
        switch(input.id){
            case 'nombreModificaHabitacion':
                let regexNombre=/(([1-9]{1}(º{1})[A-Za-z]{1})|([a-zA-ZáéíóúÁÉÍÓÚñÑüÜçÇ\s]{4,20}))/;

                if(input.value != "" && input.value.match(regexNombre)){
                    input.nextElementSibling.style.display = "block";
                    input.nextElementSibling.nextElementSibling.style.display = "none";
                }
                else{
                    input.nextElementSibling.nextElementSibling.style.display = "block";
                    input.nextElementSibling.style.display = "none";
                    todoCorrecto = false;
                }
                break; 
            case 'precioModificar':
                //Numero como string
                    let regexPrecio=/(\d{2,6}).?(\d{2})/;
                    if(input.value != "" && input.value.match(regexPrecio)){
                        input.nextElementSibling.style.display = "block";
                        input.nextElementSibling.nextElementSibling.style.display = "none";
                    }
                    else{
                        input.nextElementSibling.nextElementSibling.style.display = "block";
                        input.nextElementSibling.style.display = "none";
                        precioCorrecto = false;
                    }
                break;
        }
    }
    
    if(!todoCorrecto || !precioCorrecto || !todoCorrectoSelect){
        oE.preventDefault();
        alert('ERROR: debe rellenar todos los campos');
    }
    else{
        
                //Modifica la habitacion
                modificarHabitacion();

                let valido=document.querySelectorAll('#frmModificaHabitacion div.valid-feedback');        
                for (const cosa3 of valido) {
                    cosa3.style.display="none";
                }
 
    }
}