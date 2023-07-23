const { Router } = require('express');

const userRoutes = Router();

const UsersController = require('../controllers/UsersController');

const usersController = new UsersController();

userRoutes.post('/', usersController.create)
userRoutes.put('/:user_id', usersController.update)

module.exports = userRoutes;