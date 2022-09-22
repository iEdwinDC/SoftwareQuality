const authController = {};

const getAuth = require('../modules/auth');

authController.getAuth = (req, res) => {
    getAuth.getAuths(res);
}

authController.getHello = (req, res) => {
    getAuth.getHello(res);
}


module.exports = authController;