<?php

// Configuración BASE DE DATOS MYSQL
$servidor  = "localhost";
$basedatos = "bloque3";
$usuario   = "root";
$password  = "";

$datosJSON = $_POST["datos"];

$datos = json_decode($datosJSON);

// Creamos la conexión al servidor.
$conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
mysqli_query($conexion,"utf8");


//$datos->precioTotal
$sql = "UPDATE habitaciones SET "; 
$sql.= "nombre='".$datos->nombreHabitacion."',precio=".$datos->precio.",tipo_id=".$datos->idTipoHabitacion;
$sql.= " WHERE id=".$datos->idHabitacionModificar;
$resultado = mysqli_query($conexion,$sql);


if ($resultado){
    $respuesta["error"] = 0;
    $respuesta["mensaje"] = "Modificación realizada"; 
} else {
    $respuesta["error"] = 1;
    $respuesta["mensaje"] = "Error en el proceso de modificar la habitacion: ".mysqli_error($conexion);
}

echo json_encode($respuesta);

mysqli_close($conexion);

?>