"use strict";
/*
##################
########  FUNCTION
#####
*/
/*
/////////
////  OCULTATION FORM
//////
*/

function abrirAltaCliente()
{
    document.querySelector('#divListados').innerHTML = '';
    $('div:not("#divAltaCliente")').parent('fieldset').hide();

    if(document.querySelector("#frmAltaCliente")== null)
    // if($('#frmAltaCliente').size() == 0)
    {
        $("<div>").appendTo('#formularios').load("altaCliente/altaCliente.html", function (){
            $.getScript("altaCliente/altaCliente.js");
        });
    }
    else
    {
        $('#divAltaCliente').parent().show();
    }
}

function abrirAltaReserva()
{
    document.querySelector('#divListados').innerHTML = '';
    $('div:not("#divAltaReserva")').parent('fieldset').hide();

    if(document.querySelector("#frmAltaReserva")== null)
    // if($('#frmAltaReserva').size() == 0)
    {
        $("<div>").appendTo('#formularios').load("altaReserva/altaReserva.html", function (){
            $.getScript("js/getPrecioTotal.js");
            $.getScript("altaReserva/altaReserva.js");
        });
    }
    else
    {
        $('#divAltaReserva').parent().show();
    }
    $.getScript("js/selectHabitacion.js");
    $.getScript("js/selectCliente.js");
}

function abrirAltaTipoHabitacion()
{
    document.querySelector('#divListados').innerHTML = '';
    $('div:not("#divAltaTipoHabitacion")').parent('fieldset').hide();

    if(document.querySelector("#frmAltaTipoHabitacion")== null)
    // if($('#frmAltaReserva').size() == 0)
    {
        $("<div>").appendTo('#formularios').load("altaTipoHabitacion/altaTipoHabitacion.html", function (){
            $.getScript("altaTipoHabitacion/altaTipoHabitacion.js");
        });
    }
    else
    {
        $('#divAltaTipoHabitacion').parent().show();
    }
}
function abrirAltaHabitacion()
{
    document.querySelector('#divListados').innerHTML = '';
    $('div:not("#divAltaHabitacion")').parent('fieldset').hide();

    if(document.querySelector("#frmAltaHabitacion")== null)
    // if($('#frmAltaReserva').size() == 0)
    {
        $("<div>").appendTo('#formularios').load("altaHabitacion/altaHabitacion.html", function (){
            $.getScript("altaHabitacion/altaHabitacion.js");
        });
    }
    else
    {
        $('#divAltaHabitacion').parent().show();
    }
    $.getScript("js/selectTipoHabitacion.js");
}
function abrirModificaReservas()
{
    document.querySelector('#divListados').innerHTML = '';
    $('div:not("#divModificarReservas")').parent('fieldset').hide();

    if(document.querySelector("#frmModificarReserva")== null)
    // if($('#frmAltaReserva').size() == 0)
    {
        $("<div>").appendTo('#formularios').load("modificarReserva/modificarReservas.html", function (){
            $.getScript("js/getPrecioTotal.js");
            $.getScript("modificarReserva/modificarReserva.js");
        });
    }
    else
    {
        $('#divModificarReservas').parent().show();
    }
    $.getScript("js/selectHabitacion.js");
    $.getScript("js/selectCliente.js");
    $.getScript("js/selectReserva.js");
}
function abrirListadoFecha()
{
    document.querySelector('#divListados').innerHTML = '';
    $('div:not("#divListarEntreDosFechas")').parent('fieldset').hide();

    if(document.querySelector("#frmListarEntreDosFechas")== null)
    // if($('#frmAltaReserva').size() == 0)
    {
        $("<div>").appendTo('#formularios').load("listadoFechas/listadoFecha.html", function (){
            $.getScript("listadoFechas/listadoFecha.js");
        });
    }
    else
    {
        $('#divListarEntreDosFechas').parent('fieldset').show();
    }
}
function abrirListadoPorHabitacion()
{
    document.querySelector('#divListados').innerHTML = '';  
    $('div:not("#divListarReservasHabitacion")').parent('fieldset').hide();

    if(document.querySelector("#divListarReservasHabitacion")== null)
    // if($('#frmAltaReserva').size() == 0)
    {
        $("<div>").appendTo('#formularios').load("listadoPorHabitacion/listadoPorHabitacion.html", function (){
            $.getScript("listadoPorHabitacion/listadoPorHabitacion.js");
        });
    }
    else
    {
        $('#divListarReservasHabitacion').parent('fieldset').show();
    }
    $.getScript("js/selectHabitacion.js");
}

function abrirModificarHabitacion()
{
    document.querySelector('#divListados').innerHTML = '';
    $('div:not("#divModificaHabitacion")').parent('fieldset').hide();

    if(document.querySelector("#frmModificaHabitacion")== null)
    // if($('#frmAltaReserva').size() == 0)
    {
        $("<div>").appendTo('#formularios').load("modificarHabitacion/modificarHabitacion.html", function (){
            $.getScript("modificarHabitacion/modificarHabitacion.js");
        });
    }
    else
    {
        $('#divModificaHabitacion').parent().show();
    }
    $.getScript("js/selectHabitacion.js");
    $.getScript("js/selectTipoHabitacion.js");
}

function generarListadoClientes(){
    $('div').parent('fieldset').hide();
    $.getScript("listadosBasicos/listadoClientes.js");
}
function generarListadoReservas(){
    $('div').parent('fieldset').hide();
    $.getScript("listadosBasicos/listadoReservas.js");
}
function generarListadoHabitaciones(){
    $('div').parent('fieldset').hide();
    $.getScript("listadosBasicos/listadoHabitaciones.js");
}
function generarListadoTiposHabitacion(){
    $('div').parent('fieldset').hide();
    $.getScript("listadosBasicos/listadoTiposHabitacion.js");
}


/*
##################
########  MAIN
#####
*/

//Menú
document.querySelector('#mnuAltaCliente').addEventListener('click', abrirAltaCliente);
document.querySelector('#mnuAltaReserva').addEventListener('click', abrirAltaReserva);
document.querySelector('#mnuAltaTipoHabitacion').addEventListener('click', abrirAltaTipoHabitacion);
document.querySelector('#mnuAltaHabitacion').addEventListener('click', abrirAltaHabitacion);
document.querySelector('#mnuModificarReservas').addEventListener('click', abrirModificaReservas);
document.querySelector('#mnuModificarHabitacion').addEventListener('click', abrirModificarHabitacion);

document.querySelector('#mnuListadoPorFecha').addEventListener('click', abrirListadoFecha);
document.querySelector('#mnuListadoPorHabitacion').addEventListener('click', abrirListadoPorHabitacion);

document.querySelector('#mnuListadoCliente').addEventListener('click', generarListadoClientes);
document.querySelector('#mnuListadoReservas').addEventListener('click', generarListadoReservas);
document.querySelector('#mnuListadoTipoHabitacion').addEventListener('click', generarListadoTiposHabitacion);
document.querySelector('#mnuListadoHabitaciones').addEventListener('click', generarListadoHabitaciones);

