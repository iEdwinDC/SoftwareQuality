const userController = {};

const getUser = require('../modules/user');

userController.getUser = (req, res) => {
    getUser.getUsers(res);
}

module.exports = userController;