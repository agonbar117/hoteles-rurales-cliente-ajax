document.querySelector("#btnAltaTipoHabitacion").addEventListener("click", validarTipoHabitacion);

function validarTipoHabitacion(oEvento)
{
  let sErrores = ""; // Cadena de texto con los errores
  let bValido = true; // en principio el formulario es válido
  let oE = window.event;

// Validación nombreTipoHabitacion   
let sNombreTipoHabitacion = frmAltaTipoHabitacion.nombreTipoHabitacion.value.trim();
let oExpRegNombreTipoHabitacion=  /^[A-Za-z\sáéíóúÁÉÍÓÚñÑüÜçÇ]{6,30}$/;


if(!oExpRegNombreTipoHabitacion.test(sNombreTipoHabitacion)){

  // Si hasta el momento era correcto -> este el primer error
  

  frmAltaTipoHabitacion.nombreTipoHabitacion.focus();
      bValido = false;
  
  sErrores += "\nEl nombre del tipo de habitación no tiene el formato correcto (de 6 a 30 letras)";
  frmAltaTipoHabitacion.nombreTipoHabitacion.classList.add("error");
} 
else {
    frmAltaTipoHabitacion.nombreTipoHabitacion.classList.remove("error");
}

// Validación Descripcion habitacion 
let sDescripcion = frmAltaTipoHabitacion.descripcionTipoHabitacion.value.trim();


if(sDescripcion == ""){

  // Si hasta el momento era correcto -> este el primer error
  

  frmAltaTipoHabitacion.descripcionTipoHabitacion.focus();
      bValido = false;
  
  sErrores += "\nLa descripción no puede estar vacía";
  frmAltaTipoHabitacion.descripcionTipoHabitacion.classList.add("error");
} 
else {
    frmAltaTipoHabitacion.descripcionTipoHabitacion.classList.remove("error");
}

if(!bValido){ // si ---NO--- está todo OK
  oE.preventDefault();
  alert(sErrores);
  
 }
 else{
    //aqui dar de alta tipo habitacion--->con API Fetch

      // EN LAS PETICIONES POST ENVIAMOS LOS DATOS EN EL BODY
      let datos = {
          method: "POST",
          body: JSON.stringify({nombre: frmAltaTipoHabitacion.nombreTipoHabitacion.value, descripcion: frmAltaTipoHabitacion.descripcionTipoHabitacion.value}),
          headers: {
              'Content-Type': 'application/json'// AQUI indicamos el formato
          }
      };

      fetch("altaTipoHabitacion/altaTipoHabitacion.php", datos)
          .then(respuesta => respuesta.json())
          .then(texto => alert(texto.mensaje))
          .then(function(){
            frmAltaTipoHabitacion.reset();
            $('#frmAltaTipoHabitacion').parent('fieldset').hide();
            localStorage.removeItem("tiposHabitacion");
          });
  }

   
 }

