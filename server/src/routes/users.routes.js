const express = require('express');
const usersController = require('../controllers/users.controller');
const userRoutes = express.Router();

userRoutes.get('/', usersController.getAllUsers);
userRoutes.get('/:id', usersController.getUserById);
userRoutes.patch('/:id', usersController.updateUser);
userRoutes.delete('/:id', usersController.deleteUserById);

module.exports = userRoutes;
