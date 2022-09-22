//Auxiliar de libreria
const mysql = require('mysql');

//Create connection to mysql server
const connection = mysql.createConnection({
    host: 'localhost',
    database: 'softwarequality',
    user: 'root',
    password: '',

});

//Connect to mysql server
connection.connect(function(error) {
    if (error) {
        throw error;
    } else {
        //console.log("Conexion con la base de datos exitosa.")
    }

});



module.exports = connection;