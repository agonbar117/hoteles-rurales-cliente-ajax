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
$sql = "SELECT * FROM clientes";
$resultados = mysqli_query($conexion,$sql);

$XML ='<?xml version="1.0" encoding="UTF-8"?>';
$XML .='<datos>';

while ($fila = mysqli_fetch_array($resultados)) {
    $XML .='<persona>';
        $XML .='<id>'.$fila["id"].'</id>';
        $XML .='<nombre>'.$fila["nombre"].'</nombre>';
        $XML .='<dni>'.$fila["dni"].'</dni>';
        $XML .='<direccion>'.$fila["direccion"].'</direccion>';
        $XML .='<fecha_nacimiento>'.$fila["fecha_nacimiento"].'</fecha_nacimiento>';
        $XML .='<email>'.$fila["email"].'</email>';
        $XML .='<telefono>'.$fila["telefono"].'</telefono>';
        $XML .='<tarjeta_credito>'.$fila["tarjeta_credito"].'</tarjeta_credito>';   
    $XML .='</persona>';
}

$XML .='</datos>';

// Cabecera de respuesta indicando que el contenido de la respuesta es XML
header("Content-Type: text/xml");
// Para que el navegador no haga cache de los datos devueltos por la página PHP.
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');

echo $XML;

mysqli_close($conexion);
?>