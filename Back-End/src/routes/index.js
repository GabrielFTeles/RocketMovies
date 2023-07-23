const { Router } = require('express');

const routes = Router();

const usersRoutes = require('./users.routes');
const notesRoutes = require('./notes.routes');

routes.use('/users', usersRoutes);
routes.use('/notes', notesRoutes);

module.exports = routes;