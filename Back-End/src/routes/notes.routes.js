const { Router } = require('express');

const notesRoutes = Router();

const NotesController = require('../controllers/NotesController');

const notesController = new NotesController();

notesRoutes.post('/:user_id', notesController.create)

module.exports = notesRoutes;