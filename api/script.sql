CREATE DATABASE seguridad

CREATE TABLE users (
id VARCHAR(255) COLLATE latin1_swedish_ci,
PRIMARY KEY (id),
username VARCHAR(255) COLLATE latin1_swedish_ci,
password VARCHAR(255) COLLATE latin1_swedish_ci,
registered DATETIME,
last_login DATETIME
);
CREATE TABLE clientes (
id int NOT NULL AUTO_INCREMENT,
PRIMARY KEY (id),
nombre VARCHAR(30) not null,
celular VARCHAR(10) not null,
email VARCHAR(40) not null,
edad int not null,
activos TINYINT(4) not null
);
CREATE TABLE productos (
id int NOT NULL AUTO_INCREMENT,
PRIMARY KEY (id),
nombre VARCHAR(30) not null,
cantidad int not null,
clientes INt not null,
FOREIGN KEY (id_clientes) REFERENCES
clientes(id)
);
CREATE TABLE facturas (
cliente varchar(255),
PRIMARY KEY (cliente),
vendedor varchar(255),
fecha DATETIME,
Total int
)
CREATE TABLE masfacturas (
id_factura int NOT NULL AUTO_INCREMENT,
PRIMARY KEY (id_factura),
id_producto int,
cantidad int,
costo int,
FOREIGN KEY (id_producto) REFERENCES
productos(id)
);