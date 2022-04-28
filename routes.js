const express = require('express');
const userController = require('./controllers/userController');
const loginController = require('./controllers/loginController');
const categoriesController = require('./controllers/categoriesController');
const verifyAuth = require('./middlewares/verifyAuth');

const router = express.Router();

// User
router.post('/user', userController.create);
router.get('/user', verifyAuth, userController.getAll);
router.get('/user/:id', verifyAuth, userController.getById);

// Login
router.post('/login', loginController.login);

// Categories
router.post('/categories', verifyAuth, categoriesController.create);

module.exports = router;
