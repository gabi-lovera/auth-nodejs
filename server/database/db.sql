-- Host: localhost    Database: develop
CREATE SCHEMA `develop` ;

--
-- Table structure for table `usuarios`
--

CREATE TABLE `develop`.`usuarios` (
`id` INT NOT NULL AUTO_INCREMENT,
`username` VARCHAR (20) NULL,
`password` LONGTEXT NULL,
PRIMARY KEY (`id`)
);

