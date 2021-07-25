var mysql = require('mysql2');
//Conexion Base de Datos
var connection = mysql.createConnection({
	user: "root",
  host: "localhost",
  password: "pass",
  database: "develop",
});

module.exports = connection;


