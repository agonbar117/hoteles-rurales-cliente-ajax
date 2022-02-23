<?php

// Configuración BASE DE DATOS MYSQL
$servidor  = "localhost";
$basedatos = "bloque3";
$usuario   = "root";
$password  = "";

// Recojo los datos de entrada
$datosJSON = $_POST["datos"];

//Decodifico el objeto cliente
$cliente = json_decode($datosJSON);

/*        var oCliente = {
            Nombre: sNombre,
            DNI: sDNI,
            Direccion: sDireccion,
            FechaNacimiento: fechaNacimiento,
            Correo: sEmail,
            Telefono: sTelefono,
            TarjetaCredito: sTarjetaCredito

        }; */

// Creamos la conexión al servidor.
$conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
mysqli_query($conexion,"utf8");

$sql = "INSERT INTO clientes (nombre, dni, direccion, fecha_nacimiento, email, telefono, tarjeta_credito) 
VALUES ('$cliente->Nombre', '$cliente->DNI', '$cliente->Direccion', '$cliente->FechaNacimiento', '$cliente->Correo', '$cliente->Telefono', '$cliente->TarjetaCredito');";
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


/*// Configuración BASE DE DATOS MYSQL
$servidor  = "localhost";
$basedatos = "ruralia";
$usuario   = "root";
$password  = "";

// Recojo los datos de entrada
$datosJSON = $_POST["datos"];
//Decodifico el objeto cliente
$cliente = json_decode($datosJSON);

// Creamos la conexión al servidor.
$conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
mysqli_set_charset($conexion,"utf8");
mysqli_query($conexion,"utf8");

$sql = "INSERT INTO clientes (CodCliente, Nombre, Apellidos, Telefono) VALUES ('$cliente->CodCliente','$cliente->Nombre','$cliente->Apellidos','$cliente->Telefono');";
$resultado = mysqli_query($conexion,$sql);

if ($resultado){
    $respuesta["error"] = 0;
    $respuesta["mensaje"] = "Alta realizada"; 
} else {
    $respuesta["error"] = 1;
    $respuesta["mensaje"] = "Error en el proceso de alta: ".mysqli_error($conexion);
}

echo json_encode($respuesta);

mysqli_close($conexion);
?> */


?>