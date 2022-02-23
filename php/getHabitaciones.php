<?php
    header('Content-type: application/json; charset=utf-8');
    
    // Configuración BASE DE DATOS MYSQL
    $servidor  = "localhost";
    $basedatos = "bloque3";
    $usuario   = "root";
    $password  = "";

    // Creamos la conexión al servidor.
    $conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
    // mysqli_query($conexion,"utf8");

    // Consulta SQL para obtener los datos de los centros.
    $sql = "select * from habitaciones";
    $resultados = mysqli_query($conexion,$sql) or die(mysqli_error($conexion));
    
    $datos = [];
    
    while ($fila = mysqli_fetch_assoc($resultados)) {
        // Almacenamos en un array cada una de las filas que vamos leyendo del recordset.
        $datos[] = $fila;
    }
    
    // función de PHP que convierte a formato JSON el array.
    echo json_encode($datos); 
    
    
    mysqli_close($conexion);
?>