const express = require('express');
const userController = require('./controllers/userController');
const loginController = require('./controllers/loginController');
const categoriesController = require('./controllers/categoriesController');
const postController = require('./controllers/postController');
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
router.get('/categories', verifyAuth, categoriesController.getAll);

// Post
router.post('/post', verifyAuth, postController.create);
router.get('/post', verifyAuth, postController.getAll);

module.exports = router;
