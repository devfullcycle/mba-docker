const mysql = require('mysql');
const http = require('http');

const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'mysql'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    throw err;
  }
  console.log('Conectado ao banco de dados MySQL');
});

http.createServer(function (req, res) {
  res.write('Hello World!');
  res.end();
}).listen(3000);