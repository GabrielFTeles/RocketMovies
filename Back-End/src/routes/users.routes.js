const { Router } = require('express');

const uploadConfig = require('../configs/upload');

const multer = require('multer');
const upload = multer(uploadConfig.MULTER);

const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

const userRoutes = Router();

const UsersController = require('../controllers/UsersController');
const UserAvatarController = require('../controllers/UserAvatarController');

const usersController = new UsersController();
const userAvatarController = new UserAvatarController();

userRoutes.post('/', usersController.create);
userRoutes.put('/', ensureAuthenticated, usersController.update);
userRoutes.patch('/avatar', ensureAuthenticated, upload.single('avatar'), userAvatarController.update);

module.exports = userRoutes;