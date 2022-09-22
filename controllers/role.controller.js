const roleController = {};

const getRole = require('../modules/role');

roleController.getRole = (req, res) => {
    getRole.getRoles(res);
}

module.exports = roleController;