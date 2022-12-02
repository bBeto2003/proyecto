const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'seguridad',
  password: '123156'
});
connection.connect();
module.exports = connection;
