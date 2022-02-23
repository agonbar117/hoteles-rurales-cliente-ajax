<?php
$servidor  = "localhost";
$basedatos = "bloque3";
$usuario   = "root";
$password  = "";

extract($_POST);

$conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
mysqli_query($conexion,"utf8");


$sql = "INSERT INTO habitaciones (nombre, precio, tipo_id) VALUES ('$nombreHabitacion',$precio,$tipoHabitacion);";
$resultado = mysqli_query($conexion,$sql);

if ($resultado){
    $respuesta["error"] = 0;
    $respuesta["mensaje"] = "Alta realizada"; 
} else {
    $respuesta["error"] = 1;
    $respuesta["mensaje"] = "Error en el proceso de alta: ".mysqli_error($conexion);
}
mysqli_close($conexion);


echo json_encode($respuesta);


?>