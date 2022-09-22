const accountController = {};

const getAccount = require('../modules/account');

accountController.getAccount = (req, res) => {
    getAccount.getAccounts(res);
}

module.exports = accountController;