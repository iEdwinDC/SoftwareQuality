const connection = require('../database/connection')

connect = connection;

function getRoles(res) {
    connect.query('SELECT * FROM role', function(error, results, fields) {
        if (error)
            throw error;

        results.forEach(result => {
            res.send(result);
        });

    })
}
/*
function postRoles(){
    
    const sql = "INSERT INTO role (roleId, name) VALUES ?"
    conexion.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
}*/

module.exports = {
    "getRoles": getRoles,
    //"postRoles": postRoles
};