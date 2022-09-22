const connection = require('../database/connection')

connect = connection

function getAuths(res) {
    connect.query('SELECT * FROM auth', function(error, results, fields) {
        if (error)
            throw error;

        results.forEach(result => {
            res.send(result);
        });
    })
}

function getHello(res) {
    res.send("holaaaa");
}

module.exports = {
    "getAuths": getAuths,
    "getHello": getHello

};