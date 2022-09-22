const connection = require('../database/connection')

connect = connection;

function getUsers(res) {
    connect.query('SELECT * FROM user', function(error, results, fields) {
        if (error)
            throw error;

        results.forEach(result => {
            res.send(result);
        });
    })
}

module.exports = {
    "getUsers": getUsers
};