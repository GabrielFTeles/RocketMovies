const knex = require('../database/knex');
const NotesCreateService = require('../services/NotesCreateService');
const NotesIndexService = require('../services/NotesIndexService');
const NotesShowService = require('../services/NotesShowService');
const NotesRepository = require('../repositories/NotesRepository');

class NotesController {
  async create(request, response) {
    const { title, description, rating, tags } = request.body;
    const user_id = request.user.id;

    const notesRepository = new NotesRepository();
    const notesCreateService = new NotesCreateService(notesRepository);

    notesCreateService.execute({ title, description, rating, tags }, user_id);

    return response.status(201).json();
  }

  async index(request, response) {
    const { title } = request.query;
    const user_id = request.user.id;

    const notesRepository = new NotesRepository();
    const notesIndexService = new NotesIndexService(notesRepository);

    const notesWithTags = await notesIndexService.execute(title, user_id);

    return response.json(notesWithTags);
  }

  async show(request, response) {
    const { id } = request.params;
    const user_id = request.user.id;

    const notesRepository = new NotesRepository();
    const notesShowService = new NotesShowService(notesRepository);

    const noteDetails = await notesShowService.execute(id, user_id);

    return response.json(noteDetails);
  }

  async delete(request, response) {
    const { note_id } = request.params;
    const user_id = request.user.id;

    const notesRepository = new NotesRepository();

    await notesRepository.delete(note_id, user_id)

    return response.json();
  }
}

module.exports = NotesController;