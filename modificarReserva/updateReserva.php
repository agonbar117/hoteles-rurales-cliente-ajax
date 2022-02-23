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
$sql = "UPDATE reservas SET "; 
$sql.= "fecha_inicio='".$datos->fechaInicioModificar."',fecha_fin='".$datos->fechaFinModificar."',precio_total=".$datos->precioTotalModificar.", habitacion_id=".$datos->habitacionModificar.",cliente_id=". $datos->clienteModificar;
$sql.= " WHERE id=".$datos->idReserva;
$resultado = mysqli_query($conexion,$sql);


if ($resultado){
    $respuesta["error"] = 0;
    $respuesta["mensaje"] = "Modificación realizada"; 
} else {
    $respuesta["error"] = 1;
    $respuesta["mensaje"] = "Error en el proceso de modificar la reserva: ".mysqli_error($conexion);
}

echo json_encode($respuesta);

mysqli_close($conexion);

?>