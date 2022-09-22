const connection = require('../database/connection')

connect = connection

function getAccounts(res) {
    connect.query('SELECT * FROM account', function(error, results, fields) {
        if (error)
            throw error;

        results.forEach(result => {
            res.send(result);
        });


    })
}

module.exports = {
    "getAccounts": getAccounts
};