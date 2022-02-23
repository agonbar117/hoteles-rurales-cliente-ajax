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
$sql = "SELECT * FROM habitaciones";
$resultados = mysqli_query($conexion,$sql);

$html ='<table>';

$html .= '<tr>';
$html .= '<th>ID</th><th>Nombre</th><th>Precio</th><th>ID tipo habitación</th>';
$html .= '</tr>';

while ($fila = mysqli_fetch_array($resultados)) {
    $html .='<tr>';
        $html .='<td>'.$fila["id"].'</td>';
        $html .='<td>'.$fila["nombre"].'</td>';
        $html .='<td>'.$fila["precio"].'</td>';
        $html .='<td>'.$fila["tipo_id"].'</td>';
    $html .='</tr>';
}

$html .='</table>';

// Cabecera de respuesta indicando que el contenido de la respuesta es html
header("Content-Type: text/html");

// Para que el navegador no haga cache de los datos devueltos por la página PHP.
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');

echo $html;

mysqli_close($conexion);
?>