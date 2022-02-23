<?php

// Configuración BASE DE DATOS MYSQL
$servidor  = "localhost";
$basedatos = "bloque3";
$usuario   = "root";
$password  = "";

// Creamos la conexión al servidor.
$conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
// mysqli_query($conexion,"utf8");

// Consulta SQL para obtener los datos de los centros.
$sql = "SELECT * FROM reservas";
$resultados = mysqli_query($conexion,$sql);

$XML ='<?xml version="1.0" encoding="UTF-8"?>';
$XML .='<reservas>';

while ($fila = mysqli_fetch_array($resultados)) {
    $XML .='<reserva>';
        $XML .='<id>'.$fila["id"].'</id>';
        $XML .='<fecha_inicio>'.$fila["fecha_inicio"].'</fecha_inicio>';
        $XML .='<fecha_fin>'.$fila["fecha_fin"].'</fecha_fin>';
        $XML .='<precio_total>'.$fila["precio_total"].'</precio_total>';
        $XML .='<habitacion_id>'.$fila["habitacion_id"].'</habitacion_id>';
        $XML .='<cliente_id>'.$fila["cliente_id"].'</cliente_id>';
    $XML .='</reserva>';
}

$XML .='</reservas>';

// Cabecera de respuesta indicando que el contenido de la respuesta es XML
header("Content-Type: text/xml");
// Para que el navegador no haga cache de los datos devueltos por la página PHP.
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');

echo $XML;

mysqli_close($conexion);
?>