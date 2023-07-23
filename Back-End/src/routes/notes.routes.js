const { Router } = require('express');

const notesRoutes = Router();

const NotesController = require('../controllers/NotesController');

const notesController = new NotesController();

notesRoutes.post('/:user_id', notesController.create);
notesRoutes.get('/:note_id', notesController.show);
notesRoutes.delete('/:note_id', notesController.delete);

module.exports = notesRoutes;