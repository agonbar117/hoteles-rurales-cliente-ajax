<?php

// Configuración BASE DE DATOS MYSQL
$servidor  = "localhost";
$basedatos = "bloque3";
$usuario   = "root";
$password  = "";

$id_habitacion = $_REQUEST["habitacion_id"];

// Creamos la conexión al servidor.
$conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
// mysqli_query($conexion,"utf8");

// Consulta SQL para obtener los datos de los centros.
$sql = "SELECT * FROM habitaciones WHERE id=".$id_habitacion;
$resultados = mysqli_query($conexion,$sql) or die(mysqli_error($conexion));




$fila = mysqli_fetch_assoc($resultados);
mysqli_close($conexion);
echo json_encode($fila);

?>