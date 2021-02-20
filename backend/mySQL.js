var mysql = require('mysql')
var connection = mysql.createConnection({
  host:'localhost',
  user:`${process.env.MYSQL_USERNAME}`,
  password:`${process.env.MYSQL_PASSWORD}`,

}) 


connection.connect()


