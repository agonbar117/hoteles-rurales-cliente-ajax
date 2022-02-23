-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-02-2022 a las 21:00:05
-- Versión del servidor: 10.4.20-MariaDB
-- Versión de PHP: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bloque3`
--
CREATE DATABASE IF NOT EXISTS `bloque3` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `bloque3`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id` int(3) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `dni` varchar(9) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `email` varchar(100) NOT NULL,
  `telefono` varchar(9) NOT NULL,
  `tarjeta_credito` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `nombre`, `dni`, `direccion`, `fecha_nacimiento`, `email`, `telefono`, `tarjeta_credito`) VALUES
(1, 'Pablo González', '54633123G', 'Julio carrasco, 22', '1992-04-30', 'pablogonzalez@gmail.com', '586734234', '4583238172634583'),
(2, 'Isabel Carrasco', '58745623G', 'Avenida europa, 10', '1990-05-28', 'isabelcarrasco@gmail.com', '687459234', '5342485268755874'),
(3, 'Frodo Bolsón', '43822746G', 'Avenida de andalucia, 3', '1990-09-18', 'frodobolson@gmail.com', '587126843', '4527035720457045'),
(4, 'Julio Gordon', '58723657A', 'Avenida españa, 5', '1980-02-16', 'juliogordon@gmail.com', '598734562', '8543275328457879'),
(5, 'Raúl Pérez', '12122122T', 'Pérez Met, 42', '2001-06-10', 'raulperez@gmail.com', '143928574', '1954736275847261'),
(6, 'Gustavo Rueda', '24534587M', 'Flaminia, 32', '1942-02-11', 'gustavorueda@gmail.com', '598347162', '9283726123745943'),
(7, 'Mercedes Troya', '12121212T', 'Bécquer, 12', '2018-07-22', 'mercedestroya@gmail.com', '692354678', '4321342134213421');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `habitaciones`
--

CREATE TABLE `habitaciones` (
  `id` int(3) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `precio` decimal(7,2) NOT NULL,
  `tipo_id` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `habitaciones`
--

INSERT INTO `habitaciones` (`id`, `nombre`, `precio`, `tipo_id`) VALUES
(1, '1º A', '48.00', 1),
(2, '1º B', '74.00', 1),
(3, '2º A', '30.00', 2),
(4, '2º B', '80.00', 3),
(5, '3º A', '300.00', 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservas`
--

CREATE TABLE `reservas` (
  `id` int(3) NOT NULL,
  `fecha_inicio` date NOT NULL,
  `fecha_fin` date NOT NULL,
  `precio_total` decimal(7,2) NOT NULL,
  `habitacion_id` int(3) NOT NULL,
  `cliente_id` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `reservas`
--

INSERT INTO `reservas` (`id`, `fecha_inicio`, `fecha_fin`, `precio_total`, `habitacion_id`, `cliente_id`) VALUES
(1, '2022-06-09', '2022-07-07', '100.00', 4, 3),
(2, '2020-02-13', '2020-02-18', '48.00', 1, 4),
(3, '2020-04-13', '2020-04-18', '40.00', 3, 1),
(4, '2020-04-17', '2020-04-19', '80.00', 2, 3),
(5, '2018-07-22', '2018-07-27', '12.00', 1, 6),
(6, '2018-07-22', '2018-07-27', '12.00', 1, 4),
(7, '2016-07-22', '2016-07-27', '1500.00', 5, 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipos_habitacion`
--

CREATE TABLE `tipos_habitacion` (
  `id` int(3) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `descripcion` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tipos_habitacion`
--

INSERT INTO `tipos_habitacion` (`id`, `nombre`, `descripcion`) VALUES
(1, 'Individual', 'Habitación para una sola persona'),
(2, 'Matrimonio', 'Habitación para dos personas, cama de matrimonio'),
(3, 'Presidencial', 'Habitación para ocasiones especiales'),
(4, 'Grupal', 'Pensada para grandes grupos de personas');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `habitaciones`
--
ALTER TABLE `habitaciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `habitaciones_ibfk_1` (`tipo_id`);

--
-- Indices de la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cliente_id` (`cliente_id`),
  ADD KEY `habitacion_id` (`habitacion_id`);

--
-- Indices de la tabla `tipos_habitacion`
--
ALTER TABLE `tipos_habitacion`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `habitaciones`
--
ALTER TABLE `habitaciones`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `reservas`
--
ALTER TABLE `reservas`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `tipos_habitacion`
--
ALTER TABLE `tipos_habitacion`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `habitaciones`
--
ALTER TABLE `habitaciones`
  ADD CONSTRAINT `habitaciones_ibfk_1` FOREIGN KEY (`tipo_id`) REFERENCES `tipos_habitacion` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD CONSTRAINT `reservas_ibfk_1` FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `reservas_ibfk_2` FOREIGN KEY (`habitacion_id`) REFERENCES `habitaciones` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
