"use strict"
function validarAltaCliente(oEvento)
{
    let oE=oEvento || window.event;
    oE.preventDefault();

    let sNombre=frmAltaCliente.nombre.value;
    let sDNI=frmAltaCliente.dni.value.trim();
    let sDireccion=frmAltaCliente.direccion.value;
    let fechaNacimiento=frmAltaCliente.fechaNacimiento.value;
    let sEmail=frmAltaCliente.email.value.trim();
    let sTelefono=frmAltaCliente.telefono.value.trim();
    let sTarjetaCredito=frmAltaCliente.tarjetaCredito.value;
  
    let bValidoNombre=validarNombre(sNombre);
    let bValidoDNI=validarDNI(sDNI);
    let bValidoDireccion=validarDireccion(sDireccion);
    let bValidoFecha=validarFechaNacimiento(fechaNacimiento);
    let bValidoEmail=validarEmail(sEmail);
    let bValidoTelefono=validarTelefono(sTelefono);
    let bValidoTarjeta=validarTarjetaCredito(sTarjetaCredito);
    
    if(!bValidoNombre || !bValidoDNI || !bValidoDireccion || !bValidoFecha || !bValidoEmail || !bValidoTelefono || !bValidoTarjeta)
    {
        oE.preventDefault();
        
    }
    else
    {      
        
        //aqui dar de alta
        var oCliente = {
            Nombre: sNombre,
            DNI: sDNI,
            Direccion: sDireccion,
            FechaNacimiento: fechaNacimiento,
            Correo: sEmail,
            Telefono: sTelefono,
            TarjetaCredito: sTarjetaCredito

        };
        //  IMPORTANTE: EL NOMBRE DE LOS PARAMETROS ENVIADOS DIFIERE EN EL CASO DEL OBJETO LITERAL
    
        var sParametros = "datos=" + JSON.stringify(oCliente);
    
        $.post("altaCliente/insertCliente.php", sParametros, respuestaAltaCliente, 'json');
    
        let valido=document.querySelectorAll('#frmAltaCliente div.valid-feedback');        
        for (const cosa of valido) {
            cosa.style.display="none";
        }    
    }
}
function validarNombre(sNombre)
{
    let regexNombre=/^[A-Za-z\sáéíóúÁÉÍÓÚñÑüÜçÇ]{6,30}$/;
    let bValido=true;

    if(!regexNombre.test(sNombre))
    {
        document.querySelector("#NombreCorrecto").style = "display:none";
        document.querySelector("#NombreIncorrecto").style = "display:block";
        document.getElementById('nombre').focus();
        bValido=false;
    }
    else
    {
        document.querySelector("#NombreIncorrecto").style = "display:none";
        document.querySelector("#NombreCorrecto").style = "display:block";
        bValido=true;
    }
    return bValido;
}

function validarDNI(sDNI)
{
    let regexDNI=/(([x-z]|[X-Z]{1})([-]?)(\d{7})([-]?)([a-z]|[A-Z]{1}))|((\d{8})([-]?)([a-z]|[A-Z]{1}))/;
    let bValido=true;
    if(!regexDNI.test(sDNI))
    {
        document.querySelector("#DNICorrecto").style = "display:none";
        document.querySelector("#DNIIncorrecto").style = "display:block";
        document.getElementById('dni').focus();
        bValido=false;
    }
    else
    {
        document.querySelector("#DNIIncorrecto").style = "display:none";
        document.querySelector("#DNICorrecto").style = "display:block";
        bValido=true;
        
    }
    return bValido;
}

function validarDireccion(sDireccion)
{
    let regexDireccion=/[A-Z/?|.?|A-Za-z0-9\sáéíóúÁÉÍÓÚñÑüÜçÇ]{6,50}/;
    let bValido=true;
    if(!regexDireccion.test(sDireccion))
    {
        document.querySelector("#DireccionCorrecto").style = "display:none";
        document.querySelector("#DireccionIncorrecto").style = "display:block";
        document.getElementById('direccion').focus();
        bValido=false;
    }
    else
    {
        document.querySelector("#DireccionIncorrecto").style = "display:none";
        document.querySelector("#DireccionCorrecto").style = "display:block";
        bValido=true;
        
    }
    return bValido;
}

function validarFechaNacimiento(fechaNacimiento)
{
    let regexFechaNac=/(\d{4})-(\d{2})-(\d{2})/;
    let bValido=true;
    if(!regexFechaNac.test(fechaNacimiento))
    {
        document.querySelector("#FechaCorrecto").style = "display:none";
        document.querySelector("#FechaIncorrecto").style = "display:block";
        document.getElementById('fechaNacimiento').focus();
        bValido=false;
    }
    else
    {
        document.querySelector("#FechaIncorrecto").style = "display:none";
        document.querySelector("#FechaCorrecto").style = "display:block";
        bValido=true;
        
    }
    return bValido;
}

function validarEmail(sEmail)
{
    let regexEmail=/[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
    let bValido=true;
    if(!regexEmail.test(sEmail))
    {
        document.querySelector("#EmailCorrecto").style = "display:none";
        document.querySelector("#EmailIncorrecto").style = "display:block";
        document.getElementById('email').focus();
        bValido=false;
    }
    else
    {
        document.querySelector("#EmailIncorrecto").style = "display:none";
        document.querySelector("#EmailCorrecto").style = "display:block";
        bValido=true;
        
    }
    return bValido;
}

function validarTelefono(sTelefono)
{
    let regexTelefono=/^[\d]{9}$/;
    let bValido=true;
    if(!regexTelefono.test(sTelefono))
    {
        document.querySelector("#TelefonoCorrecto").style = "display:none";
        document.querySelector("#TelefonoIncorrecto").style = "display:block";
        document.getElementById('telefono').focus();
        bValido=false;
    }
    else
    {
        document.querySelector("#TelefonoIncorrecto").style = "display:none";
        document.querySelector("#TelefonoCorrecto").style = "display:block";
        bValido=true;
    }
    return bValido;
}
function validarTarjetaCredito(sTarjetaCredito)
{
    let regexTarjetaCredito=/^[0-9]{16}$/;
    let bValido=true;
    if(!regexTarjetaCredito.test(sTarjetaCredito))
    {
        document.querySelector("#TarjetaCorrecto").style = "display:none";
        document.querySelector("#TarjetaIncorrecto").style = "display:block";
        document.getElementById('tarjetaCredito').focus();
        bValido=false;
    }
    else
    {
        document.querySelector("#TarjetaIncorrecto").style = "display:none";
        document.querySelector("#TarjetaCorrecto").style = "display:block";
        bValido=true;
    }
    return bValido;
}


function respuestaAltaCliente(oDatos, sStatus, oXHR) {

    if (oDatos.error) {
        alert(oDatos.mensaje);
    } else {
        alert(oDatos.mensaje);
        frmAltaCliente.reset();
        localStorage.removeItem("clientes");
        $("#frmAltaCliente").parent("fieldset").hide("normal");
    }
}





document.querySelector('#btnAltaCliente').addEventListener('click', validarAltaCliente, false);
