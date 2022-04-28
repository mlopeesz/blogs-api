const express = require('express');
const userController = require('./controllers/userController');
const loginController = require('./controllers/loginController');

const router = express.Router();

router.post('/user', userController.create);

router.post('/login', loginController.login);

module.exports = router;
