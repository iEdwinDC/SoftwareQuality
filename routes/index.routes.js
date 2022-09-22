//Auxiliar de libreria
const express = require('express');
const router = express.Router();

//Controllers
const controller = require('../controllers/index.controller')
const userController = require('../controllers/user.controller');
const rolController = require('../controllers/role.controller');
const accountController = require('../controllers/account.controller');
const authController = require('../controllers/auth.controller');

//Get
router.get('/', controller.index);
router.get('/usuarios', userController.getUser);
router.get('/roles', rolController.getRole);
router.get('/cuentas', accountController.getAccount);
router.get('/autenticaciones', authController.getAuth);


//router.get('/hola', authController.getHello);

//Post
//router.post('/darrol', controller.darRol);

module.exports = router;