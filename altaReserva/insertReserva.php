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
$sql = "INSERT INTO reservas (fecha_inicio, fecha_fin, precio_total, habitacion_id, cliente_id) VALUES ('"; 
$sql.= $datos->fechaInicio."','".$datos->fechaFin."',".$datos->precioTotal.", ".$datos->habitacion.", ". $datos->cliente.");";
$resultado = mysqli_query($conexion,$sql);


if ($resultado){
    $respuesta["error"] = 0;
    $respuesta["mensaje"] = "Reserva realizada"; 
} else {
    $respuesta["error"] = 1;
    $respuesta["mensaje"] = "Error en el proceso de reserva: ".mysqli_error($conexion);
}

echo json_encode($respuesta);

mysqli_close($conexion);

?>