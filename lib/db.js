const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'seguridad',
  password: '123456'
});
connection.connect();
module.exports = connection;