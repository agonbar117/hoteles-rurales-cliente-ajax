document.querySelector("#btnAltaHabitacion").addEventListener("click", validarHabitacion);
function validarHabitacion(oEvento)
{
   
    let oE=oEvento || window.event;
    oE.preventDefault();
    let inputAll = document.querySelectorAll("#frmAltaHabitacion input[type='text']");
    let select = document.querySelector("#frmAltaHabitacion select");
    let todoCorrecto = true;
    let precioCorrecto = true;
    let todoCorrectoSelect = true;
    
    if(select.selectedIndex==0){
        select.nextElementSibling.style.display = "none";
        select.nextElementSibling.nextElementSibling.style.display = "block";
        todoCorrectoSelect = false;
    }
    else{
        select.nextElementSibling.nextElementSibling.style.display = "none";
        select.nextElementSibling.style.display = "block";
    }
    for(const input of inputAll){
        switch(input.id){
            case 'nombre':
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
            case 'precio':
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
        alert('ERROR: Debe rellenar todos los campos');
    }
    else{
        
        //llamada POST ajax sin JQuery
        let oAjax = instanciarXHR();
        let sParametros = "nombreHabitacion=" + frmAltaHabitacion.nombreHabitacion.value;
        sParametros+= "&precio=" + parseFloat(frmAltaHabitacion.precio.value);
        sParametros += "&tipoHabitacion=" + frmAltaHabitacion.selectTipoHabitacion.value;
        sParametros = encodeURI(sParametros);

        oAjax.open("POST", encodeURI("altaHabitacion/insertHabitacion.php"));

        oAjax.addEventListener("readystatechange", procesoRespuestaInsertHabitacion, false);

        oAjax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");//esto es obligatorio ponerlo siempre que se haga un post

        oAjax.send(sParametros);
        
    }
}
function procesoRespuestaInsertHabitacion()
{
    let oAjax=this;
    if (oAjax.readyState == 4 && oAjax.status == 200) {
        
        let oRespuesta = JSON.parse(oAjax.responseText);
        
        
        if (oRespuesta.error == 0) { 
            frmAltaHabitacion.reset();
            localStorage.removeItem("habitaciones");

            let valido=document.querySelectorAll('#frmAltaHabitacion div.valid-feedback');        
            for (const cosa of valido) {
                cosa.style.display="none";
            }
        }
        alert(oRespuesta.mensaje);
    }

}

function instanciarXHR() {
    var xhttp = null;

    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else // code for IE5 and IE6
    {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    return xhttp;
}